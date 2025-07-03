// app/api/news/route.ts

export async function GET() {
  const news = [
    { id: 1, title: "Underground Gateway Launch!", date: "2025-06-12" },
    { id: 2, title: "Crypto Black Markets Rise Again", date: "2025-06-10" },
  ];

  return Response.json(news);
}
