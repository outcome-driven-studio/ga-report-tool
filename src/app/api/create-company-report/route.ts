// /app/api/create-company-page/route.ts
import { NextRequest, NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { saveAudiencePageData } from "@/lib/db";
import { fetchCompanyData } from "@/lib/dataServive";
import { fetchCompanyLogo, fetchCompanyName } from "@/lib/fetchCompanyData";


export async function POST(req: NextRequest) {
    const { url } = await req.json();

    if (!url) return NextResponse.json({ error: "Missing domain" }, { status: 400 });

    console.log("req.headers", req.headers);
    console.log("process.env.API_TOKEN", process.env.API_TOKEN);
    // Check for API token in headers
    const apiToken = req.headers.get("Authorization");
    const expectedToken = process.env.API_TOKEN; // Access the environment variable
    if (!apiToken || apiToken !== expectedToken) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await fetchCompanyData({ url });
    const slug = nanoid(10);
    const logo = await fetchCompanyLogo(url) || '/images/default-logo.png';
    const companyName = await fetchCompanyName(url) || url;

    await saveAudiencePageData(slug, logo, data, companyName);

    return NextResponse.json({ url: `${req.nextUrl.origin}/audiences/${slug}` });
}
