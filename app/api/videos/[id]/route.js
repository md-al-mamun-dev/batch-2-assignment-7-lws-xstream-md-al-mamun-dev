import { NextResponse } from "next/server";
import { getVideoById, editVideo, deleteVideo } from "@/lib/videos";

export async function GET(request, { params }) {
    const videoId = params?.id;
    try {
        const data = await getVideoById(videoId);
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 404 })
    }
}

export async function PATCH(request, { params }) {
    const videoId = params?.id;
    try {
        const payload = await request.json()

        const payload_keys = Object.keys(payload)
        if (payload_keys.length === 0 || !(payload_keys.every((key) => ['title', 'description'].includes(key)))) {
            return NextResponse.json({ error: 'Not Acceptable' }, { status: 406 })
          }

        try {
            const result = await editVideo(videoId, payload);
            return NextResponse.json(result)
        } catch (error) {
            return NextResponse.json({ error: error.message }, { status: 403 })
        }
    } catch (error) {
        return NextResponse.json({ error: "Something Error" }, { status: 400 })
    }
    
}

export async function DELETE(request, { params }) {
    const videoId = params?.id;
    try {
        await deleteVideo(videoId);
        return NextResponse.json(
                    { message: "Video deleted successfully" },
                    { status: 200 }
                )
    } catch (error) {
        return NextResponse.json({ error: "Failed..." }, { status: 404 })
    }
    
}