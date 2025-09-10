export async function handler(event) {
  try {
    // Default query if none is provided
    const query = event.queryStringParameters?.q || "India";

    // Example: You could also use multiple queries
    const queries = ["India", "Technology", "Sports", "Business", "Health"];

    const results = {};

    // Loop over all queries to fetch news
    for (const q of queries) {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?q=${encodeURIComponent(
          q
        )}&language=en&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}`
      );
      const data = await res.json();

      // Store the articles for each query
      results[q] = data.articles || [];
    }

    return {
      statusCode: 200,
      headers: { "Cache-Control": "no-cache", "Content-Type": "application/json" },
      body: JSON.stringify(results),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
