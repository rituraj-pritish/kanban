import React from 'react'
import styled, { css } from 'styled-components/macro'
import theme from 'theme'
import ReactModal from 'react-modal'

function ReactModalAdapter ({ className, modalClassName, ...props }) {
	return (
		<ReactModal
			className={modalClassName}
			portalClassName={className}
			ariaHideApp={false}
			{...props}
		/>
	)
}

export const StyledModal = styled(ReactModalAdapter).attrs({
	overlayClassName: 'Overlay',
	modalClassName: 'Modal'
})`
  & .Overlay {
    position: fixed;
    z-index: 999;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(0, 0, 0, 0.6);
  }
  & .Modal {
    left: ${theme.spacing()};
    top: ${theme.spacing()};
    right: ${theme.spacing()};
    bottom: ${theme.spacing()};
    position: absolute;
    background: white;
    border-radius: ${theme.borderRadius};
    outline: none;
    padding: ${theme.spacing()};
    overflow: ${({ hasFixedHeader }) => hasFixedHeader ? 'hidden' : 'auto'};
    ${({ modalStyles }) =>
		modalStyles &&
    css`
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        ${modalStyles};
      `}
  }
`