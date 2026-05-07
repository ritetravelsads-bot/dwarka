import { cookies } from "next/headers"

const ADMIN_SESSION_COOKIE = "admin_session"

export async function requireAdmin() {
  const cookieStore = await cookies()
  const session = cookieStore.get(ADMIN_SESSION_COOKIE)
  
  if (!session || !session.value) {
    throw new Error("Unauthorized")
  }
  
  // Validate session
  try {
    const sessionData = JSON.parse(session.value)
    if (!sessionData.isAdmin || !sessionData.timestamp) {
      throw new Error("Unauthorized")
    }
    
    // Check if session is expired (24 hours)
    const sessionAge = Date.now() - sessionData.timestamp
    const maxAge = 24 * 60 * 60 * 1000 // 24 hours
    
    if (sessionAge > maxAge) {
      throw new Error("Unauthorized")
    }
    
    return sessionData
  } catch {
    throw new Error("Unauthorized")
  }
}

export async function isAuthenticated(): Promise<boolean> {
  try {
    await requireAdmin()
    return true
  } catch {
    return false
  }
}
