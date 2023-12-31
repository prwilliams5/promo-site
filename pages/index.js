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
import { ExpSection, ExpDate } from '../components/bio'

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
        Hi, I&apos;m a software developer and this is my website! It is
        currently under construction, please excuse any broken links or missing
        content!
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
        <Heading size="xl" variant="section-title">
          Career
        </Heading>
        <Paragraph>
          I&apos;m an IT professional with a knack for software development! In
          my latest projects for Fall of 2023, I have been using TypeScript,
          Next.js, SQL, and TailwindCSS, I have also tinkered with Python, Lua,
          and Bash. Please check out my <Link href="/projects">projects</Link>{' '}
          page for both personal and professional work! My experience working in
          the NOC of a data center has enabled me to explore the operations side
          of development as well. I have worked with Linux, Docker, Ansible,
          VMware, and many other technologies. I&apos;m currently looking for
          software development and dev-ops opportunities in the Dallas-Fort
          Worth area. If you think we might be a good fit I&apos;d love to chat,
          my contact info is below, please email me at
          <Link href="/contact"> parker@parkerw.dev</Link>!
        </Paragraph>
        <Section delay={0.2}>
          <Heading size="lg" fontSize="25px" variant="section-title">
            Experience
          </Heading>
          <ExpSection>
            <ExpDate as={ExpDate} color="color">
              2021 - Present | CloudKey / GIP Networks
            </ExpDate>
          </ExpSection>
          <Paragraph>
            Develop web applications, embedded systems, and automation software
            for physical and virtual data centers. Document procedures and
            training materials for engineering, troubleshooting, and
            administration of systems. Diagnose and repair operating systems
            including Linux, ESXi, and Windows Server machines. Monitor network
            and security tools, system logs, and dashboards for any issues and
            take appropriate action.
          </Paragraph>
          <ExpSection mt={6}>
            <ExpDate>2014 - 2021 | Darden Restaurant Group</ExpDate>
          </ExpSection>
          <Paragraph>
            Designed marketing and event plans for private events and business
            to business sales. Performed management functions including
            facilitating new team member training. Awarded Employee of the
            Quarter.
          </Paragraph>
        </Section>
      </Section>
    </Container>
  )
}

export default Page
