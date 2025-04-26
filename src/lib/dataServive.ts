export async function fetchCompanyData(payload: { url?: string; description?: string }) {
    console.log("fetchCompanyData called with payload:", payload);

    if (!payload.url && !payload.description) {
        console.error("Validation error: Either 'url' or 'description' must be provided.");
        throw new Error("Either 'url' or 'description' must be provided.");
    }

    console.log("Making API request...", payload);
    const response = await fetch('https://api.rebatus.com/audience-recommender/recommend', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        console.error(`Error fetching data: ${response.statusText}`);
        throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Data fetched successfully:", data);
    return data;
}
