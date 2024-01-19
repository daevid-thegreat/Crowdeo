// pages/api/store.js
import { json } from '@helia/json';
import { createHelia } from 'helia';
import { NextResponse} from "next/server";

const helia = createHelia();
const j = json(helia);

export async function POST(req, res) {
    const body = await req.json();
    try {
      const cid = await j.put(body); // Assuming JSON data is sent in the request body
     return NextResponse.json({ success: true, cid })
    } catch (error) {
      console.error(error);
        return NextResponse.json({ success: false, error: 'Internal Server Error' })
    }
}


export async function GET() {
    const body = await req.json();
    try {
      const { cid } = body;
      const obj = await j.get(cid);
        return NextResponse.json({ success: true, obj })
    } catch (error) {
      console.error(error);
        return NextResponse.json({ success: false, error: 'Internal Server Error' })
    }
}
