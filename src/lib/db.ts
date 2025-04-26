// Example using Supabase
import { createClient } from "@supabase/supabase-js";

const supabase = createClient('https://htmfsavirtlywafporaj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0bWZzYXZpcnRseXdhZnBvcmFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1ODE4MDEsImV4cCI6MjA2MTE1NzgwMX0.ROwZu9DJp6BRMvpqLU5f_b4Q3dxIDNoS31OTbcUDyQ0');

export async function saveAudiencePageData(slug: string, logo: string, data: any, companyName: string) {
    console.log(process.env.SUPABASE_URL)
    console.log(process.env.SUPABASE_ANON_KEY)
    console.log("Saving audience page data:", { slug, logo, data, companyName });
    const { data: insertData, error } = await supabase.from("company-data").insert({ slug: slug, logo: logo, data: data, company_name: companyName });
    console.log("Data saved successfully.", insertData, error);
}

export async function getAudienceData(slug: string) {
    console.log("Fetching audience data for slug:", slug);
    const { data } = await supabase
        .from("company-data")
        .select("data, logo, company_name")
        .eq("slug", slug)
        .single();
    console.log("Fetched data:", data);

    // Destructure the fetched data
    if (!data) {
        throw new Error("No data found for the given slug.");
    }
    const { logo, company_name, data: segments } = data;
    return { logo, company_name, segments };
}
