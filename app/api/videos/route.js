import { NextResponse } from "next/server";
import { getAllVideos } from "@/lib/videos";

export async function GET() {
    try {
        const data = await getAllVideos();
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 })
    }
}