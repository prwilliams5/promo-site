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
import { BioSection, BioYear } from '../components/bio'

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
        Hi, I&apos;m a software developer & this is my website! Currently under
        construction, please excuse any broken links or missing content!
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
          I&apos;m an IT professional with a knack for software development! In
          my latest projects for Fall of 2023, I have been using TypeScript,
          Next.js, SQL, and TailwindCSS, I have also tinkered with Python, Lua,
          and Bash. Please check out my <Link href="/projects">projects</Link>{' '}
          page for both personal and professional work! My experience working in
          the NOC of a data center has enabled me to flesh out the operations
          side of development as well. I have worked with Linux, Docker, VMware,
          a bit of Kubernetes, and many other technologies used in modern data
          centers. I&apos;m currently looking for software development & dev-ops
          opportunities in the Dallas-Fort Worth area. If you think we might be
          a good fit I&apos;d love to talk, please reach out! Resume available
          upon request.
        </Paragraph>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1988</BioYear>
          Born in Dallas, TX
        </BioSection>
      </Section>
    </Container>
  )
}

export default Page
