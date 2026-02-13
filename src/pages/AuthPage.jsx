import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const scorePassword = value => {
  let score = 0
  if (value.length >= 8) score += 1
  if (/[A-Z]/.test(value)) score += 1
  if (/[0-9]/.test(value)) score += 1
  if (/[^A-Za-z0-9]/.test(value)) score += 1
  return score
}

const AuthPage = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { login, register, user, isAuthenticated } = useAuth()
  const [mode, setMode] = useState('login')
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const passwordScore = useMemo(() => scorePassword(form.password), [form.password])
  const strengthLabels = t('auth.strength', { returnObjects: true })
  const strengthLabel = strengthLabels[Math.min(passwordScore, strengthLabels.length - 1)]

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    setError('')

    if (mode === 'register') {
      if (form.password !== form.confirm) {
        setError(t('auth.passwordMismatch'))
        return
      }
      const result = register({
        name: form.name,
        email: form.email,
        password: form.password,
      })
      if (!result.ok) {
        setError(result.error)
        return
      }
      navigate('/')
      return
    }

    const result = login({ email: form.email, password: form.password })
    if (!result.ok) {
      setError(result.error)
      return
    }
    navigate('/')
  }

  return (
    <div className="auth-page">
      <div className="auth-hero">
        <div className="auth-hero-shell">
          <motion.div
            className="auth-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="auth-header">
              <p className="auth-kicker">{t('auth.kicker')}</p>
              <h1>{mode === 'login' ? t('auth.titleLogin') : t('auth.titleRegister')}</h1>
              <p className="auth-sub">{t('auth.sub')}</p>
            </div>

            <div className="auth-tabs">
              <button
                type="button"
                className={`auth-tab${mode === 'login' ? ' is-active' : ''}`}
                onClick={() => setMode('login')}
              >
                {t('auth.login')}
              </button>
              <button
                type="button"
                className={`auth-tab${mode === 'register' ? ' is-active' : ''}`}
                onClick={() => setMode('register')}
              >
                {t('auth.register')}
              </button>
            </div>

            <form className="auth-form" onSubmit={handleSubmit}>
              {mode === 'register' && (
                <label className="auth-field">
                  <span>{t('auth.name')}</span>
                  <input
                    type="text"
                    placeholder={t('auth.namePlaceholder')}
                    value={form.name}
                    onChange={event => handleChange('name', event.target.value)}
                    required
                  />
                </label>
              )}

              <label className="auth-field">
                <span>{t('auth.email')}</span>
                <input
                  type="email"
                  placeholder="name@email.com"
                  value={form.email}
                  onChange={event => handleChange('email', event.target.value)}
                  required
                />
              </label>

              <label className="auth-field">
                <span>{t('auth.password')}</span>
                <div className="auth-password">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="********"
                    value={form.password}
                    onChange={event => handleChange('password', event.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="auth-password-toggle"
                    onClick={() => setShowPassword(prev => !prev)}
                  >
                    {showPassword ? t('auth.hide') : t('auth.show')}
                  </button>
                </div>
              </label>

              {mode === 'register' && (
                <label className="auth-field">
                  <span>{t('auth.passwordConfirm')}</span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="********"
                    value={form.confirm}
                    onChange={event => handleChange('confirm', event.target.value)}
                    required
                  />
                </label>
              )}

              {mode === 'register' && (
                <div className="auth-strength">
                  <div>
                    <p>{t('auth.passwordStrength')}</p>
                    <span>{strengthLabel}</span>
                  </div>
                  <div className="auth-strength-bars">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <span
                        key={`bar-${index}`}
                        className={index < passwordScore ? 'is-active' : ''}
                      />
                    ))}
                  </div>
                </div>
              )}

              {error && <p className="auth-error">{error}</p>}

              <button className="auth-submit" type="submit">
                {mode === 'login' ? t('auth.login') : t('auth.register')}
              </button>
            </form>

            <div className="auth-footer">
              {isAuthenticated && user ? (
                <p>
                  {t('auth.authenticatedAs')} <strong>{user.name}</strong>
                </p>
              ) : (
                <p>{t('auth.localOnly')}</p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
