import { motion } from 'framer-motion'

const WomenSection = () => (
  <section className="women-section">
    <motion.p
      className="women-text"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      Fur Frauen, die nur <span>das Beste</span> akzeptieren.
    </motion.p>
  </section>
)

export default WomenSection
