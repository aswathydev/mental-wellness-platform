const adminEmail = 'admin@healtogether.local'
const adminPassword = 'admin123'
const memberEmail = 'member@healtogether.local'
const memberPassword = 'member123'

export function authenticate(email, password) {
  const e = email.trim().toLowerCase()
  const p = password
  if (e === adminEmail.trim().toLowerCase() && p === adminPassword) {
    return { email: email.trim(), role: 'admin' }
  }
  if (e === memberEmail.trim().toLowerCase() && p === memberPassword) {
    return { email: email.trim(), role: 'member' }
  }
  return null
}
