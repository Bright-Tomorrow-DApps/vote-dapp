import './App.css'

import { Flex, Sidebar } from 'components'

function App() {
  return (
    <Flex minHeight="100vh" flexDirection="column" bg="rgb(45, 11, 90)">
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
        <Sidebar />
        <Flex width="75%" flexDirection="column" justifyContent="space-between">
          <Flex bg="green">Card</Flex>
          <Flex bg="blue">Card</Flex>
          <Flex bg="yellow">Card</Flex>
          <Flex bg="red">Card</Flex>
        </Flex>
      </Flex>

      <Flex
        as="footer"
        position="fixed"
        left="0"
        bottom="0"
        width="100%"
        color="white"
        justifyContent="center"
        alignItems="center"
        height="100px"
        bg="rgb(255, 255, 255, 0.2)"
      >
        Footer
      </Flex>
    </Flex>
  )
}

export default App
