import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { BsLamp } from 'react-icons/bs'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: 0 }}
        animate={{
          y: [5, 0, 2, 0, 1, 0], // Start slightly up (5), bounce a few times
          transition: {
            type: 'spring',
            damping: 5, // Adjust for less damping (more bounciness)
            stiffness: 100 // Adjust stiffness as per desired effect
          }
        }}
      >
        <IconButton
          aria-label="Toggle theme"
          colorScheme={useColorModeValue('purple', 'orange')}
          icon={useColorModeValue(<BsLamp />, <BsLamp />)}
          onClick={toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
