import { lighten } from 'polished'
import styled, { css } from 'styled-components'
import theme from 'theme'

type LabelWrapperProps = {
  bgColor: string,
  disabled: boolean
}

export const LabelWrapper = styled.div<LabelWrapperProps>`
  display: flex;
  align-items: center;
  color: ${({ bgColor }) => bgColor}; 
  margin: ${theme.spacing(0.4)} 0;
  border-radius: ${theme.borderRadius};

  & > div {
    cursor: pointer;
  }

  // label name
  & > div:first-child {
    pointer-events: ${({ disabled }) => disabled && 'none'};
    cursor: ${({ disabled }) => disabled && 'default'};
    border-radius: ${theme.borderRadius};
    padding: ${theme.spacing(0.2)} ${theme.spacing(0.6)};
    background: ${({ bgColor, disabled }) => disabled ? lighten(0.45, bgColor) : lighten(0.4, bgColor)}; 
    flex-grow: 1;
    margin-right: ${theme.spacing(0.5)};

    &:hover {
      background: ${({ bgColor, disabled }) => !disabled && lighten(0.37, bgColor)}; 
    }
  }

`

type LabelProps = {
  bgColor: string,
  forCard: boolean
}

export const Label = styled.div<LabelProps>`
  background: ${({ bgColor }) => lighten(0.4, bgColor)}; 
  color: ${({ bgColor }) => bgColor}; 
  padding: ${theme.spacing(0.2)} ${theme.spacing(0.6)};
  border-radius: ${theme.borderRadius};
  cursor: pointer;
  width: auto;
  margin-right: ${theme.spacing(0.6)};
  position: relative;

  ${({ forCard }) => forCard && css`
    font-size: ${theme.spacing(0.8)};
    height: fit-content;
  `};

  ${({ forCard, bgColor }) => !forCard && css`
    // remove icon
    & > div:last-child {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      justify-content: center;
      align-items: center;
      display: none;
    }

    &:hover {
      background: ${lighten(0.37, bgColor)}; 
      width: initial;

      & > div:first-child {
        opacity: 0
      } 

      & > div:last-child {
        display: flex;
      } 
    }
  `};
`

export const LabelsWrapper = styled.div`
  display: flex;
`

export const AddLabelsWrapper = styled.div`
  button {
    width: 100%;
    margin-top: ${theme.spacing(0.5)};
  }
`

export const ColorsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 ${theme.spacing(-0.25)};
`

export const ColorBox = styled.div`
  height: ${theme.spacing(2.5)};
  width: ${theme.spacing(4.5)};
  border-radius: ${theme.borderRadius};
  cursor: pointer;
  margin: ${theme.spacing(0.25)};
  ${theme.styles.centerElement}

  &:hover {
    opacity: 0.8;
  }
`