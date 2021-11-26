import { Flex } from 'components'

const Link = ({ children, href }) => {
  return (
    <a style={{ padding: '10px', textDecoration: 'none' }} href={href}>
      {children}
    </a>
  )
}

const Sidebar = () => {
  const sidebarList = ['vote', 'account', 'claim', 'reward', 'github']

  return (
    <Flex width="25%" minHeight="500px" bg="pink" flexDirection="column">
      {sidebarList.map((item) => {
        return <Link href={`/${item}`}>{item}</Link>
      })}
    </Flex>
  )
}

export default Sidebar
