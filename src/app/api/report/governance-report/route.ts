import { NextRequest } from 'next/server';
import { governanceReports } from '@/lib/reports/governanceReports';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "5");

  const totalItems = governanceReports.length;
  const totalPages = Math.ceil(totalItems / limit);
  const paginated = governanceReports.slice((page - 1) * limit, page * limit);

  return Response.json({
    currentPage: page,
    totalPages,
    totalItems,
    perPage: limit,
    data: paginated
  });
}
