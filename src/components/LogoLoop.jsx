const LogoLoop = ({
  logos = [],
  speed = 100,
  direction = 'left',
  logoHeight = 40,
  gap = 40,
  hoverSpeed = 0,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = '#000000',
  ariaLabel,
  className,
  ...rest
}) => {
  const itemWidth = 160
  const duration = Math.max(10, (logos.length * (itemWidth + gap)) / speed)
  const hoverDuration =
    hoverSpeed && hoverSpeed > 0
      ? Math.max(10, (logos.length * (itemWidth + gap)) / hoverSpeed)
      : duration

  return (
    <div
      className={`logo-loop ${fadeOut ? 'logo-loop--fade' : ''} ${className || ''}`}
      aria-label={ariaLabel}
      {...rest}
      style={{
        '--logo-gap': `${gap}px`,
        '--logo-height': `${logoHeight}px`,
        '--logo-duration': `${duration}s`,
        '--logo-hover-duration': `${hoverDuration}s`,
        '--logo-fade': fadeOutColor,
      }}
    >
      <div
        className={`logo-loop-track ${
          direction === 'right' ? 'logo-loop-track--right' : ''
        }`}
      >
        {logos.map((logo, index) => (
          <span
            key={`${logo.text || logo.alt || 'logo'}-${index}`}
            className={`logo-loop-item ${scaleOnHover ? 'logo-loop-item--scale' : ''}`}
            style={{ height: `var(--logo-height)` }}
          >
            {logo.node}
            {logo.src ? (
              <img src={logo.src} alt={logo.alt || ''} />
            ) : null}
            {!logo.node && !logo.src ? (
              <span className={logo.className}>{logo.text}</span>
            ) : null}
          </span>
        ))}
        {logos.map((logo, index) => (
          <span
            key={`${logo.text || logo.alt || 'logo'}-clone-${index}`}
            className={`logo-loop-item ${scaleOnHover ? 'logo-loop-item--scale' : ''}`}
            style={{ height: `var(--logo-height)` }}
            aria-hidden="true"
          >
            {logo.node}
            {logo.src ? (
              <img src={logo.src} alt="" />
            ) : null}
            {!logo.node && !logo.src ? (
              <span className={logo.className}>{logo.text}</span>
            ) : null}
          </span>
        ))}
      </div>
    </div>
  )
}

export default LogoLoop
