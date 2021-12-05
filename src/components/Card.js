import styled from 'styled-components'
import Flex from './Flex'
import Text from './Text'
import Box from './Box'

const CardContainer = styled(Flex)`
  min-height: 120px;
  background: rgb(52, 23, 98);
  border-radius: 12px;

  padding: 20px;
  margin: 10px;
`

const YesNoButton = styled.button`
  width: 45%;
  border-radius: 24px;
  background: rgb(62, 243, 212);
  color: rgb(76, 36, 159);
  font-size: 24px;
  font-weight: 700;
  border: 0;
  cursor: pointer;
`

const Card = ({ id, topic, isFinished, isYesWin, yesOnClick, noOnClick }) => {
  return (
    <CardContainer>
      <Flex width="50%" borderRight="1px solid gray" alignItems="center">
        <Text color="white" fontSize="30px">
          {topic}
        </Text>
      </Flex>
      <Flex width="50%" flex-start="center" justifyContent="space-around" position="relative">
        {isFinished ? (
          isYesWin ? (
            <>
              <YesNoButton disabled>Yes</YesNoButton>
            </>
          ) : (
            'No'
          )
        ) : (
          <>
            <YesNoButton onClick={yesOnClick}>Yes</YesNoButton>
            <YesNoButton onClick={noOnClick}>No</YesNoButton>
          </>
        )}
        <Box position="absolute" bottom="0" right="0" p="10px" color="gray">
          {isFinished && 'Closed'}
        </Box>
      </Flex>
    </CardContainer>
  )
}

export default Card
