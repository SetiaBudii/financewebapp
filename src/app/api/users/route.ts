import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse  } from "next/server";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const  GET = async (req: Request) => {
    const users = await prisma.users.findMany();
    return NextResponse.json(users);
}

export const  POST = async (req: Request) => {
    const {username,password} = await req.json();
    const user = await prisma.users.create({
        data: {
            username,password
        }
    });
    return NextResponse.json(user);
}