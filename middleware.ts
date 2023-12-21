import { type NextRequest } from "next/server";
import createNextIntlMiddleware from "next-intl/middleware";
import * as i18n from "app/_i18n";

export async function middleware(request: NextRequest) {
  const nextIntlMiddleware = await createNextIntlMiddleware(i18n.settings);
  return nextIntlMiddleware(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - .* (manifest file, favicon file, robots text, 3rd party licenses text, etc)
     */
    "/((?!api|_next|_vercel|blog|sitemaps|seatpicksearch|monitoring|favicons|.*\\..*).*)",
  ],
};
