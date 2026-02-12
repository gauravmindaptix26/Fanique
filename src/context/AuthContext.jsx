import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AuthContext = createContext(null)

const USER_KEY = 'fanique_auth_user'
const USERS_KEY = 'fanique_auth_users'

const readJson = (key, fallback) => {
  if (typeof window === 'undefined') return fallback
  try {
    const raw = window.localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

const writeJson = (key, value) => {
  if (typeof window === 'undefined') return
  if (value === null) {
    window.localStorage.removeItem(key)
    return
  }
  window.localStorage.setItem(key, JSON.stringify(value))
}

const validatePassword = password => {
  if (password.length < 8) return 'Mindestens 8 Zeichen.'
  if (!/[A-Z]/.test(password)) return 'Mindestens 1 GroÃŸbuchstabe.'
  if (!/[0-9]/.test(password)) return 'Mindestens 1 Zahl.'
  return ''
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => readJson(USER_KEY, null))
  const [users, setUsers] = useState(() => readJson(USERS_KEY, []))

  useEffect(() => {
    writeJson(USER_KEY, user)
  }, [user])

  useEffect(() => {
    writeJson(USERS_KEY, users)
  }, [users])

  const register = ({ name, email, password }) => {
    const normalizedEmail = email.trim().toLowerCase()
    if (!name.trim()) return { ok: false, error: 'Name ist erforderlich.' }
    if (!normalizedEmail) return { ok: false, error: 'E-Mail ist erforderlich.' }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(normalizedEmail)) {
      return { ok: false, error: 'Bitte eine gÃ¼ltige E-Mail eingeben.' }
    }
    const passError = validatePassword(password)
    if (passError) return { ok: false, error: passError }
    if (users.some(entry => entry.email === normalizedEmail)) {
      return { ok: false, error: 'Diese E-Mail ist bereits registriert.' }
    }

    const newUser = {
      id: `${Date.now()}`,
      name: name.trim(),
      email: normalizedEmail,
      password,
      createdAt: new Date().toISOString(),
    }
    setUsers(prev => [...prev, newUser])
    setUser({ id: newUser.id, name: newUser.name, email: newUser.email })
    return { ok: true }
  }

  const login = ({ email, password }) => {
    const normalizedEmail = email.trim().toLowerCase()
    const match = users.find(
      entry => entry.email === normalizedEmail && entry.password === password,
    )
    if (!match) return { ok: false, error: 'E-Mail oder Passwort ist falsch.' }
    setUser({ id: match.id, name: match.name, email: match.email })
    return { ok: true }
  }

  const logout = () => setUser(null)

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: !!user,
      register,
      login,
      logout,
    }),
    [user, users],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth must be used inside AuthProvider')
  }
  return ctx
}
