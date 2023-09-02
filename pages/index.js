import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="aqua" p={3} align="center">
        Hi, I&apos;m a full-stack software developer & this is my website!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Parker Williams
          </Heading>
          <p>Digital Builder - developer / designer / tinkerer</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
