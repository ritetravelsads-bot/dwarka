import { cookies } from "next/headers";

/**
 * Check if the current user is authenticated as admin
 * Uses cookie-based authentication
 */
export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get("admin_auth");
  return authCookie?.value === "authenticated";
}

/**
 * Require admin authentication - throws if not authenticated
 * Use in API routes that need admin access
 */
export async function requireAdmin(): Promise<void> {
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    throw new Error("Unauthorized");
  }
}

/**
 * Get admin session info
 */
export async function getAdminSession(): Promise<{ isAdmin: boolean }> {
  const authenticated = await isAuthenticated();
  return { isAdmin: authenticated };
}
