import styled from 'styled-components'
import { IoCloseOutline } from 'react-icons/io5'

import { screenSizes } from '../../styles/theme'
import starBG from '../../assets/images/star-bg.svg'

interface ModalBodyProps {
  show: boolean
}
interface ModalHeadProps {
  titlePadding?: string
}

export const ModelHead = styled.div<ModalHeadProps>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  padding: ${(props: any) => (props.titlePadding ? props.titlePadding : '0 0 36px 0')};
  width: 100%;
  margin: 0 auto;
  align-items: center;
  img {
    cursor: pointer;
  }
  @media (max-width: ${screenSizes.M}px) {
    padding: 0.5em 0;
  }
`

export const ModalContainer = styled.div<ModalBodyProps>`
  display: ${(props: any) => (props.show ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 9999;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(4px);
`

interface IBodyProps {
  minHeight?: string
  custPad?: string
  custMaxWidth?: string
  modalColor?: string
  align?: string
  pad?: string
}

export const CloseContainer = styled.div`
  display: flex;
  justify-content: end;
  cursor: pointer;
  img {
    position: absolute;
    top: 0px;
    right: 0px;
  }
`
export const DarkCloseContainer = styled.div`
  display: flex;
  justify-content: end;
  cursor: pointer;
  img {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`
export const Wrapper = styled.div<IBodyProps>`
  width: 100px;
`
export const ModalBody = styled.div<IBodyProps>`
  display: flex;
  align-items: ${(props: any) => props.align || 'center'};
  justify-content: center;
  padding: ${(props: any) => props.pad || '2em'};
  min-width: 350px;
  min-height: ${(props: any) => props.minHeight || '255px'};
  border-radius: 12px;
  box-sizing: border-box;
  z-index: 110;
  text-align: center;
  background: ${(props: any) => props.modalColor || props.theme.fadedWhite};
  .modaltextleftaligned {
    font-family: TTNormsProRegular;
    text-align: left;
    font-weight: 700;
    color: ${(props: any) => props.theme.lightGrey};
  }
  .modalPrimaryText {
    font-weight: 700;
    color: ${(props: any) => props.theme.warning};
  }

  .modalMediumText {
    font-family: TTNormsProMedium;
  }
  .modalNote {
    color: ${(props: any) => props.theme.white};
    font-size: 14px;
    margin-bottom: 2em;
    text-align: start;
    font-family: Roboto;
  }
  .modalActionBtnContainer {
    display: flex;
    padding-top: 1em;
    justify-content: space-around;
    align-items: center;
    gap: 2em;
  }
  .anchorText {
    color: ${(props: any) => props.theme.primary};
    font-family: TTNormsProBold;
  }
  .anchorText:hover {
    cursor: pointer;
  }
  .walletconnectcontainer {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    gap: 12px;
    padding: 2px;
    .metamask {
      border-radius: 10px;
      height: 60px;
      width: 100%;
      display: flex;
      color: ${(props: any) => props.theme.white};
      justify-content: flex-around;
      align-items: center;
      cursor: pointer;
      background: ${(props: any) => props.theme.darkestGray};
      :hover {
        outline: 1px solid ${(props: any) => props.theme.primaryButton};
      }
      gap: 4px;
    }
    img {
      height: 24px;
      padding: 0 12px;
    }

    .walletConnect {
      gap: 4px;
      border-radius: 10px;
      height: 60px;
      width: 100%;
      display: flex;
      justify-content: flex-around;
      align-items: center;
      cursor: pointer;
      color: ${(props: any) => props.theme.white};
      background: ${(props: any) => props.theme.darkestGray};
      :hover {
        outline: 1px solid ${(props: any) => props.theme.primaryButton};
      }
    }
  }

  animation: slide-up 1000ms forwards, fade-in 500ms forwards;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes slide-up {
    0% {
      transform: translateY(20%);
    }
    100% {
      transform: translateY(0%);
    }
  }
  @media (max-width: ${screenSizes.M}px) {
    min-width: unset;
    padding: ${(props: any) => props.custPad || '.5em 1.5em'};
    max-width: ${(props: any) => props.custMaxWidth};
  }
  @media (max-width: ${screenSizes.S}px) {
    min-width: unset;
    max-width: 340px;
  }
`

export const ModalContent = styled.div<IContentProps>`
  margin-top: ${(props: any) => (props.contentMT ? props.contentMT : '')};
  padding-bottom: 10px;
  display: inline-block;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0 !important;
  }
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  .transationHash {
    text-decoration: none;
    color: ${(props: any) => props.theme.white};
    :hover {
      text-decoration: underline;
      color: ${(props: any) => props.theme.primaryButton};
    }
  }
`

export const ModalContainerHeading = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0;
  @media screen and (max-width: ${screenSizes.M}px) {
    font-size: 16px;
  }
`
export const ModalContainerText = styled.p`
  font-size: 16px;
  margin: 0;
`
export const Close = styled(IoCloseOutline)`
  cursor: pointer;
  font-size: 1.5rem;
  color: ${(props: any) => props.theme.navyHigh};
`

export const ToastClose = styled.img`
  cursor: pointer;
`

interface IContentProps {
  contentMT?: string
  borderRadius?: string
  contentTop?: string
  hideHead?: boolean
}
