import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Check if the request is for the root path
  if (request.nextUrl.pathname === "/") {
    // Redirect to '/home/Landing' path
    return NextResponse.redirect(new URL("/home/Landing", request.url));
  }

  // Continue to the requested route if it's not the root path
  return NextResponse.next();
}

// Specify which paths to apply the middleware to
export const config = {
  matcher: "/",
};
