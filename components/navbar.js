import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { BsGithub } from 'react-icons/bs'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')

  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? 'glassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))
MenuLink.displayName = 'MenuLink'

const Navbar = props => {
  const { path } = props
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={2}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          p={2}
        >
          <NextLink href="/career" path={path}>
            Career
          </NextLink>
          <NextLink href="/projects" path={path}>
            Projects
          </NextLink>
          <NextLink href="/blog" path={path}>
            Blog
          </NextLink>
          <Link
            as={NextLink}
            href="https://github.com/prwilliams5/promo-site"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            ml={300}
          >
            <BsGithub />
            Repo
          </Link>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Box display={{ base: 'inline-block', md: 'none' }}>
              <Menu isLazy id="navbar-menu">
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant="outline"
                  aria-label="Options"
                />
                <MenuList>
                  <MenuItem as={MenuLink} href="/">
                    Me
                  </MenuItem>
                  <MenuItem as={MenuLink} href="/career">
                    Career
                  </MenuItem>
                  <MenuItem as={MenuLink} href="/projects">
                    Projects
                  </MenuItem>
                  <MenuItem as={MenuLink} href="/blog">
                    Blog
                  </MenuItem>
                  <MenuItem
                    as={Link}
                    href="https://github.com/prwilliams5/promo-site"
                  >
                    Website Repo
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
