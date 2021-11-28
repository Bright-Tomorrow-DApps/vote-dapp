import { Flex } from 'components'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVoteYea, faUser, faMoneyCheck, faGem } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Link = ({ className, children, href }) => (
  <a className={className} href={href}>
    {children}
  </a>
)

const StyledLink = styled(Link)`
  padding: 20px;
  text-decoration: none;
  color: ${({ isActiveLink }) => (isActiveLink ? 'rgb(5, 230, 196)' : '#fff')};

  &:hover {
    color: rgb(5, 230, 196);
  }
`

const SidebarContainer = styled(Flex)`
  width: 20%;
  min-height: 500px;
  flex-direction: column;
  color: 'rgb(159, 130, 215)';
  font-size: 20px;
  font-weight: 700;
  padding: 20px;
`

const Sidebar = () => {
  const currentPage = 'Vote'
  const sidebarItems = [
    { icon: faVoteYea, text: 'Vote', url: '/vote' },
    { icon: faUser, text: 'Account', url: '/account' },
    { icon: faMoneyCheck, text: 'Claim', url: '/claim' },
    { icon: faGem, text: 'Reward', url: '/reward' },
    { icon: faGithub, text: 'Github', url: 'https://github.com/Bright-Tomorrow-DApps/vote-dapp' },
  ]

  return (
    <SidebarContainer>
      {sidebarItems.map(({ icon, text, url }) => {
        return (
          <StyledLink key={text} href={url} isActiveLink={text === currentPage}>
            <FontAwesomeIcon icon={icon} /> {text}
          </StyledLink>
        )
      })}
    </SidebarContainer>
  )
}

export default Sidebar
