import './App.css'

import { Footer, Sidebar, Card, Flex, Box } from 'components'

function App() {
  return (
    <Box height="100%" bg="rgb(45, 11, 90)">
      <Flex
        as="header"
        color="white"
        justifyContent="space-between"
        alignItems="center"
        height="100px"
        bg="rgb(255, 255, 255, 0.1)"
      >
        <Flex>Logo</Flex>
        <Flex>Connect wallet</Flex>
      </Flex>

      <Flex>
        <Flex width="25%" minHeight="500px" bg="pink">
          Sidebar
        </Flex>
        <Flex width="75%" flexDirection="column" justifyContent="space-between">
          <Flex bg="green">Card</Flex>
          <Flex bg="blue">Card</Flex>
          <Flex bg="yellow">Card</Flex>
          <Flex bg="red">Card</Flex>
        </Flex>
      </Flex>

      <Flex
        as="footer"
        color="white"
        justifyContent="center"
        alignItems="center"
        height="100px"
        bg="rgb(255, 255, 255, 0.2)"
      >
        Footer
      </Flex>
    </Box>
  )
}

export default App
