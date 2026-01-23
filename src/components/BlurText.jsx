import { motion } from 'framer-motion'

const getOffset = (direction) => {
  switch (direction) {
    case 'left':
      return { x: -14, y: 0 }
    case 'right':
      return { x: 14, y: 0 }
    case 'bottom':
      return { x: 0, y: 14 }
    case 'top':
    default:
      return { x: 0, y: -14 }
  }
}

const BlurText = ({
  text,
  delay = 0,
  animateBy = 'words',
  direction = 'top',
  onAnimationComplete,
  className,
}) => {
  const items =
    animateBy === 'letters' ? Array.from(text) : text.split(' ')
  const offset = getOffset(direction)

  const parent = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: animateBy === 'letters' ? 0.03 : 0.08,
        delayChildren: delay / 1000,
      },
    },
  }

  const child = {
    hidden: {
      opacity: 0,
      filter: 'blur(8px)',
      x: offset.x,
      y: offset.y,
    },
    show: {
      opacity: 1,
      filter: 'blur(0px)',
      x: 0,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <motion.span
      className={className}
      variants={parent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      onAnimationComplete={onAnimationComplete}
      style={{ display: 'inline-block' }}
    >
      {items.map((item, index) => (
        <motion.span
          key={`${item}-${index}`}
          variants={child}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
        >
          {animateBy === 'letters'
            ? item
            : `${item}${index < items.length - 1 ? ' ' : ''}`}
        </motion.span>
      ))}
    </motion.span>
  )
}

export default BlurText
