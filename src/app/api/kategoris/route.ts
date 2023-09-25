import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse  } from "next/server";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const  GET = async (req: Request) => {
    const kategori = await prisma.kategori.findMany();
    return NextResponse.json(kategori);
}

export const  POST = async (req: Request) => {
    const {nama_kategori,id_kategori,budget,username} = await req.json();
    const kategoris = await prisma.kategori.create({
        data: {
            nama_kategori: nama_kategori,id_kategori:id_kategori,budget:budget,username:username
        }
    });
    return NextResponse.json(kategoris);
    // console.log('oke post');
}