import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Link,
  Image,
  useColorModeValue
} from '@chakra-ui/react'

import Section from '../components/section'
import Paragraph from '../components/paragraph'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        my={4}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hi, I&apos;m a software developer & this is my website!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Parker Williams
          </Heading>
          <p>Digital Builder - design | develop | tinker</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100"
            display="inline-block"
            borderRadius="full"
            src="/images/daisy.png"
            alt="Profile image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Career
        </Heading>
        <Paragraph>
          I&apos;m an IT professional with a knack for software development. For
          my latest projects, in Fall of 2023, I have been working with
          TypeScript, Next.js, SQL, TailwindCSS, and Chakra UI. I have also
          tinkered with Python, Lua, and Bash quite a bit. Please check out my{' '}
          <Link href="/projects">projects</Link> page for both personal and
          professional work! My experience working in the NOC of a data center
          has enabled me to flesh out the ops side of development as well. I
          have worked with Linux, Docker, VMware, a bit of Kubernetes, and many
          other technologies used in modern data centers. I am currently looking
          for software development & dev-ops opportunities in the Dallas-Fort
          Worth area. If you think we might be a good fit please reach out!
          Resume available <Link href="/career">here</Link>.
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page
