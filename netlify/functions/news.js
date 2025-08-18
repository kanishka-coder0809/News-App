import fetch from "node-fetch"; // if Node <18, otherwise remove this line

export async function handler(event) {
  try {
    const query = event.queryStringParameters.q || "India";

    const res = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.NEWS_API_KEY}`
    );

    const data = await res.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
