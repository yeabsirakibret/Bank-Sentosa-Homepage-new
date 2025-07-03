import { NextRequest } from 'next/server';
import { annualReports } from '@/lib/reports/annualReports';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");

  const totalItems = annualReports.length;
  const totalPages = Math.ceil(totalItems / limit);
  const paginated = annualReports.slice((page - 1) * limit, page * limit);

  return Response.json({
    currentPage: page,
    totalPages,
    totalItems,
    perPage: limit,
    data: paginated
  });
}
