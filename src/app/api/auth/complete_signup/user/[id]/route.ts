import type { NextRequest } from 'next/server';
import { prisma as db } from '@/lib/auth'
import { encrypt } from '@/lib/security/encrypt'
import { hashSync } from 'bcrypt'

interface IUpdateUserRequest {
    cpf?: string
    phone?: string;
}

export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
): Promise<Response> {
    try {
        const body: IUpdateUserRequest = await request.json();
        const userId = params.id;

        if (!userId) {
            return Response.json({
                message: "User Id is required.",
                status: 400
            })
        }

        if (!body || Object.keys(body).length === 0) {
            return Response.json({
                message: "No fields to update",
                status: 400
            })
        }

        if (!body.cpf || !body.phone) {
            return Response.json({
                message: 'CPF and phone are required',
                status: 400
            });
        }

        const new_cpf = encrypt(process.env.PUBLIC_KEY!, body.cpf);
        const new_phone_number = encrypt(process.env.PUBLIC_KEY!, body.phone);

        const new_hash_cpf = hashSync(body.cpf, 10);
        const new_hash_phone_number = hashSync(body.phone, 10);

        await db.user.update({
            where: { id: userId },
            data: {
                cpfShowable: new_cpf,
                telefoneShowable: new_phone_number,
                cpf: new_hash_cpf,
                telefone: new_hash_phone_number
            }
        });

        return Response.json({
            message: 'User updated successfully',
            status: 200
        });
    } catch (error) {
        console.error('Update user error:', error);
        return Response.json({
            message: 'Failed to update user',
            status: 500
        });
    }
}