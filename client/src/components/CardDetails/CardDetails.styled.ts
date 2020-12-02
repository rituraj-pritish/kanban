import styled from 'styled-components'
import theme from 'theme'

export const DetailsWrapper = styled.div`
  display: flex;
  height: 100%;
`

export const Divider = styled.div`
  width: 1px;
  background: ${theme.colors.greyLight};
  margin: 0 ${theme.spacing()};
`

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 65%;
`

export const RightSection = styled.div`
  margin-top: ${theme.spacing()};
  width: 30%;
  height: 100%;

  & > div {
    width: 100%;
    height: 2.5rem;
    background: ${theme.colors.greyLight};
  }
`

export const BottomSectionWrapper = styled.div`
  margin-right: ${theme.spacing(-0.5)};
  height: 50%;
`