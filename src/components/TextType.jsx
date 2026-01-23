import { useEffect, useMemo, useState } from 'react'

const TextType = ({
  text,
  texts,
  typingSpeed = 75,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = '|',
  deletingSpeed = 50,
  variableSpeedEnabled = false,
  variableSpeedMin = 60,
  variableSpeedMax = 120,
  cursorBlinkDuration = 0.5,
}) => {
  const list = useMemo(() => {
    if (Array.isArray(texts) && texts.length > 0) return texts
    if (Array.isArray(text) && text.length > 0) return text
    if (typeof text === 'string') return [text]
    return []
  }, [text, texts])

  const [index, setIndex] = useState(0)
  const [slice, setSlice] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (list.length === 0) return undefined
    const current = list[index % list.length]
    const doneTyping = slice >= current.length
    const doneDeleting = slice <= 0

    let delay = typingSpeed
    if (variableSpeedEnabled) {
      delay =
        Math.floor(Math.random() * (variableSpeedMax - variableSpeedMin + 1)) +
        variableSpeedMin
    }

    if (doneTyping && !deleting) {
      const timer = setTimeout(() => setDeleting(true), pauseDuration)
      return () => clearTimeout(timer)
    }

    if (deleting) {
      const timer = setTimeout(() => setSlice((s) => s - 1), deletingSpeed)
      if (doneDeleting) {
        setDeleting(false)
        setIndex((i) => (i + 1) % list.length)
      }
      return () => clearTimeout(timer)
    }

    const timer = setTimeout(() => setSlice((s) => s + 1), delay)
    return () => clearTimeout(timer)
  }, [
    deleting,
    deletingSpeed,
    index,
    list,
    pauseDuration,
    slice,
    typingSpeed,
    variableSpeedEnabled,
    variableSpeedMax,
    variableSpeedMin,
  ])

  const current = list[index % list.length] || ''
  const output = current.slice(0, slice)

  return (
    <span className="texttype">
      <span className="texttype-text">{output}</span>
      {showCursor ? (
        <span
          className="texttype-cursor"
          style={{ animationDuration: `${cursorBlinkDuration}s` }}
        >
          {cursorCharacter}
        </span>
      ) : null}
    </span>
  )
}

export default TextType
