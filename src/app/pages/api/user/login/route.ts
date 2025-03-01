import { NextRequest, NextResponse } from "next/server";
import { DBConnection } from "@/lib/db_connection";
import { userChemaStr } from "@/utils/schemas/schema";
export async function POST(request: NextRequest) {
    try {
        await DBConnection()
        const { emailOrPhone, password } = await request.json()
        const response = await new userChemaStr({
            emailOrPhone,
            password
        })
        await response.save()
        return NextResponse.json({
            message: "Login successfully",
            success: true
        })
    } catch (error: any) {
        return NextResponse.json({
            message: error.message,
            success: true
        })

    }
}