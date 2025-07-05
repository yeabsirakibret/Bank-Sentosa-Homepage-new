import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextResponse, type NextRequest } from 'next/server';

// 1. Define your locales type based on your actual locales
type Locale = 'en' | 'id'; // Adjust based on your actual locales
const locales = routing.locales as readonly Locale[];
const defaultLocale = routing.defaultLocale as Locale;

// 2. Define your redirect configuration
interface RedirectRule {
  from: string;
  to: string;
}

const REDIRECT_CONFIG: RedirectRule[] = [
  { from: '/products', to: '/products/deposit' },
  { from: '/products/deposit', to: '/products/deposit/savings' },
  { from: '/products/loan', to: '/products/loan/working-capital' },
  { from: '/report', to: '/report/financial-report' }
];

// 3. Create the next-intl middleware instance
const intlMiddleware = createMiddleware({
  ...routing,
  localePrefix: 'always',
  localeDetection: true
});

// 4. Helper function to check if a string is a valid locale
function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Skip middleware for special paths
  if (shouldSkipMiddleware(pathname)) {
    return intlMiddleware(request);
  }

  // Extract locale with proper type safety
  const pathParts = pathname.split('/');
  const potentialLocale = pathParts[1];
  const locale = isValidLocale(potentialLocale) ? potentialLocale : defaultLocale;
  const isLocalized = isValidLocale(locale);

  // Get path without locale
  const cleanPath = isLocalized 
    ? '/' + pathParts.slice(2).join('/') 
    : pathname;

  // Find matching redirect rule
  const redirectRule = REDIRECT_CONFIG.find(rule => rule.from === cleanPath);
  if (redirectRule) {
    const finalPath = isLocalized 
      ? `/${locale}${redirectRule.to}`
      : redirectRule.to;
    return NextResponse.redirect(new URL(finalPath, request.url));
  }

  return intlMiddleware(request);
}

function shouldSkipMiddleware(pathname: string): boolean {
  return (
    pathname.startsWith('/api') ||
    pathname.startsWith('/trpc') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/_vercel') ||
    pathname.includes('.')
  );
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};