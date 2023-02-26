import {Flex, HStack, Link, Square} from "@chakra-ui/react"

const Nav = () => {
  return (
    <Flex position="fixed" top="0" width="100%" justifyContent="space-between" p="1rem" bg="gray.100">
      <Link href="/">
        <Square size="40px" bg="black" />
      </Link>
      <HStack spacing="1rem">
        <Link href="#about">About</Link>
        <Link href="#work">Work</Link>
        <Link href="#portfolio">Portfolio</Link>
        <Link href="#contact">Contact</Link>
        <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</Link>
      </HStack>
    </Flex>
  )
}

export default Nav;