import styled from 'styled-components'
import theme from 'theme'

export const EditorWrapper = styled.div`
  & > div {
    display: flex;
    flex-direction: column;

    & > div:first-child {
      background: #e9e9e9;
      margin: 0;
      padding: ${theme.spacing(0.6)} ${theme.spacing(0.8)};
      padding-bottom: ${theme.spacing(0.4)};
    }

    & > div:nth-child(2) {
      background: ${theme.colors.inputBg};
      flex-grow: 1;

      .DraftEditor-root {
        font-family: 'Montserrat'
      }

      .public-DraftEditor-content {
        min-height: ${theme.spacing(18)};
      }
    }
  }
`
