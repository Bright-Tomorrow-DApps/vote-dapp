import './App.css'

import { Flex, Sidebar, Card } from 'components'
import Logo from './logo.svg'

function App() {
  const cardItems = [
    { topic: 'Kevin週一上午請假?', isFinished: false, isYesWin: null },
    { topic: '下週會不會有人訂可不可?', isFinished: false, isYesWin: null },
    { topic: '週五下雨?', isFinished: true, isYesWin: true },
  ]

  return (
    <Flex minHeight="100vh" flexDirection="column" bg="rgb(45, 11, 90)">
      <Flex
        as="header"
        color="white"
        justifyContent="space-between"
        alignItems="center"
        height="100px"
      >
        <Flex p="20px">
          <img alt="logo" src={Logo} width="250"></img>
        </Flex>
        <Flex>Connect wallet</Flex>
      </Flex>

      <Flex>
        <Sidebar />
        <Flex width="80%" flexDirection="column">
          {cardItems.map(({ topic, isFinished, isYesWin }) => (
            <Card key={topic} topic={topic} isFinished={isFinished} isYesWin={isYesWin} />
          ))}
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
