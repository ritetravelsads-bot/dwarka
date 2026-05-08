import { cookies } from "next/headers"

const ADMIN_AUTH_COOKIE = "admin_auth"

export async function requireAdmin() {
  const cookieStore = await cookies()
  const authCookie = cookieStore.get(ADMIN_AUTH_COOKIE)
  
  if (!authCookie || authCookie.value !== "authenticated") {
    throw new Error("Unauthorized")
  }
  
  return { isAdmin: true }
}

export async function isAuthenticated(): Promise<boolean> {
  try {
    await requireAdmin()
    return true
  } catch {
    return false
  }
}
