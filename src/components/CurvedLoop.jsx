import { useId } from 'react'

const CurvedLoop = ({
  marqueeText,
  speed = 1,
  curveAmount = 220,
  direction = 'left',
  interactive = false,
  className = '',
}) => {
  const id = useId()
  const size = curveAmount * 2 + 40
  const radius = curveAmount
  const duration = Math.max(10, 28 / speed)
  const text = Array.from({ length: 3 }, () => marqueeText).join(' ')

  return (
    <div
      className={`curved-loop${interactive ? ' curved-loop--interactive' : ''}${
        className ? ` ${className}` : ''
      }`}
      style={{
        '--curve-size': `${size}px`,
        '--curve-radius': `${radius}px`,
        '--curve-duration': `${duration}s`,
        '--curve-direction': direction === 'right' ? 'reverse' : 'normal',
      }}
      aria-label={marqueeText}
    >
      <svg viewBox={`0 0 ${size} ${size}`} role="img" aria-hidden="true">
        <defs>
          <path
            id={id}
            d={`
              M ${size / 2},${size / 2}
              m -${radius},0
              a ${radius},${radius} 0 1,1 ${radius * 2},0
              a ${radius},${radius} 0 1,1 -${radius * 2},0
            `}
          />
        </defs>
        <text className="curved-loop__text">
          <textPath href={`#${id}`} startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  )
}

export default CurvedLoop
