import {
  ModalBody,
  ModalContent,
  ModelHead,
  ModalContainer,
  CloseContainer,
  TopContentCntr,
  CloseContainerTop,
} from './style'
import closeIcon from '../../assets/images/close-icon-s.svg'
import { useState } from 'react'
import { MarkingText, SmallText } from '../Typography'

interface IModalProps {
  show?: boolean
  toggleModal?: any
  borderRadius?: string
  heading?: string
  styles?: any
  isTerms?: boolean
  children: any
  headerFWeight?: string
  contentMT?: string
  titlePadding?: string
  contentTop?: any
  custMinHeight?: string
  custMaxWidth?: string
  hideHead?: boolean
  isPersistent?: boolean
  custPad?: string
  subHeading?: string
}
const CustomModal = (props: IModalProps) => {
  const {
    children,
    subHeading,
    custPad,
    contentTop,
    show = false,
    hideHead,
    isPersistent,
    toggleModal,
    custMaxWidth,
    custMinHeight,
    borderRadius,
    heading,
    styles,
    isTerms,
    headerFWeight,
    contentMT,
    titlePadding,
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
      {contentTop && (
        <TopContentCntr>
          <CloseContainerTop>
            <img src={closeIcon} alt="close-button" onClick={() => handleToggle(!show)} />
          </CloseContainerTop>
          <ModalContent hideHead={hideHead} contentMT={contentMT} borderRadius={borderRadius}>
            {contentTop}
          </ModalContent>
        </TopContentCntr>
      )}
      <ModalBody
        isContentTop={!!contentTop}
        custMaxWidth={custMaxWidth}
        custPad={custPad}
        style={{ ...styles }}
        custMinHeight={custMinHeight}
        isTerms={isTerms}
      >
        {!contentTop && (
          <CloseContainer>
            <img src={closeIcon} alt="close-button" onClick={() => handleToggle(!show)} />
          </CloseContainer>
        )}
        {!hideHead ? (
          <ModelHead titlePadding={titlePadding}>
            <MarkingText fSize="26px" fColor="#fff">
              {heading}
            </MarkingText>
            <SmallText fWeight="700" fColor="#fff">
              {subHeading}
            </SmallText>
          </ModelHead>
        ) : (
          ''
        )}
        <ModalContent hideHead={hideHead} contentMT={contentMT} borderRadius={borderRadius}>
          {children}
        </ModalContent>
      </ModalBody>
    </ModalContainer>
  )
}
export default CustomModal
