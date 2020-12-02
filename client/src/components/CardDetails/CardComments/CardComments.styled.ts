import styled from 'styled-components'
import theme from 'theme'

export const RootWrapper = styled.div`
  height: 94%;
  overflow-y: auto;
`

export const ActionButtons = styled.div`
  display: flex;

  div {
    text-decoration: underline;
    font-size: ${theme.spacing(0.85)};
    margin-right: ${theme.spacing(1.3)};
    cursor: pointer;
  }
`

export const CommentWrapper = styled.div`
  padding: ${theme.spacing()} ${theme.spacing(0.5)};
  flex-grow: 1;
`

export const AddCommentWrapper = styled.div`
  display: flex;

  // avatar
  & > div:first-child {
    margin-top: ${theme.spacing(0.7)};
    margin-right: ${theme.spacing(0.7)};
  }

  // input and button
  & > div:last-child {
    flex-grow: 1;
  }
`

export const Wrapper = styled.div`
  display: flex;

  // avatar
   & > div:first-child {
    margin-top: ${theme.spacing()};
    margin-right: ${theme.spacing(0.2)};
  }
`

export const TopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: ${theme.spacing(0.9)};
`

export const Text = styled.div`
  padding: ${theme.spacing()} 0;
`