import { NextRequest } from 'next/server';
import { financialStatements } from '@/lib/reports/financialStatements';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");
  const year = searchParams.get("year");
  const quarter = searchParams.get("quarter");

  let filtered = financialStatements;

  if (year) {
    filtered = filtered.filter(r => r.year_period.startsWith(year));
  }
  if (quarter) {
    filtered = filtered.filter(r => r.year_period.endsWith(quarter.toUpperCase()));
  }

  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / limit);
  const paginated = filtered.slice((page - 1) * limit, page * limit);

  return Response.json({
    currentPage: page,
    totalPages,
    totalItems,
    perPage: limit,
    data: paginated
  });
}
