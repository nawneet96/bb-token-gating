import { useState } from 'react'

import { ModalBody, ModalContent, ModalContainer, CloseContainer, DarkCloseContainer } from './style'
import closeIcon from '../../assets/images/light-close-icon.svg'

interface IModalProps {
  show?: boolean
  toggleModal?: any
  borderRadius?: string
  heading?: string
  styles?: any
  headerFSize?: string
  children: any
  headerFWeight?: string
  contentMT?: string
  titlePadding?: string
  contentTop?: string
  custMaxWidth?: string
  hideHead?: boolean
  isPersistent?: boolean
  custPad?: string
  subHeading?: string
  modalColor?: string
  minHeight?: string
}
export const DarkModal = (props: IModalProps) => {
  const {
    children,
    custPad,
    contentTop,
    show = false,
    hideHead,
    isPersistent,
    toggleModal,
    custMaxWidth,
    minHeight,
    borderRadius,
    styles,
    contentMT,
    modalColor,
  } = props

  const handleClickOutside = (e: any) => {
    if (e.target === e.currentTarget && !isPersistent) {
      handleToggle(false)
    }
  }

  const [closingModal, setClosingModal] = useState('')
  const handleToggle = (show: boolean) => {
    setClosingModal('closingModal')
    toggleModal(show)
    setTimeout(() => {
      setClosingModal('')
    }, 300)
  }
  return (
    <ModalContainer className={closingModal} onMouseDown={handleClickOutside} show={show}>
      <ModalBody
        align="start"
        pad="25px"
        modalColor={modalColor}
        custMaxWidth={custMaxWidth}
        custPad={custPad}
        style={{ ...styles }}
        minHeight={minHeight}
      >
        {!isPersistent && (
          <DarkCloseContainer>
            <img src={closeIcon} alt="close-button" onClick={() => handleToggle(!show)} />
          </DarkCloseContainer>
        )}
        <ModalContent hideHead={hideHead} contentTop={contentTop} contentMT={contentMT} borderRadius={borderRadius}>
          {children}
        </ModalContent>
      </ModalBody>
    </ModalContainer>
  )
}
