import styled, { ThemeProps } from 'styled-components'
import { HiOutlineMenu } from 'react-icons/hi'
import { IoCloseOutline } from 'react-icons/io5'
import { screenSizes } from '../../../styles/theme'
import starBG from '../../../assets/images/star-bg.svg'
import { Link } from 'react-router-dom'

interface IHeaderContainerProps {
  isHome?: boolean
}
export const HeaderContainer = styled.header<IHeaderContainerProps>`
  padding: 20px 30px;
  position: sticky;
  top: 0;
  backdrop-filter: blur(8px);
  background: ${(props: any) => (props.isHome ? props.theme.primary : `#000 url(${starBG})`)};
  .active-route {
    color: ${(props: any) => (props.isHome ? props.theme.black2 : props.theme.primary)} !important;
    // border-bottom: 1px solid ${(props: any) => (props.isHome ? props.theme.black2 : props.theme.primary)};
    transition: border-bottom 2s linear;
    :hover {
      border: none;
    }
  }
  z-index: 999;
  a {
    font-size: 18px;
    color: ${(props: any) => (props.isHome ? props.theme.black : props.theme.white)};
    position: relative;
    display: inline-block;
    text-decoration: none;
    :hover {
      text-decoration: none;
    }
    :hover::before {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
    ::before {
      position: absolute;
      content: attr(data-content);
      color: ${(props: any) => (props.isHome ? props.theme.black : props.theme.primary)};
      text-decoration: underline;
      clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
      transition: clip-path 700ms ease;
    }
  }
  @media (min-width: ${screenSizes.XXL}px) {
    align-items: center;
    display: flex;
    flex-wrap: inherit;
    justify-content: center;
  }
`
export const NavbarCntr = styled.div`
  // .Toastify__toast-theme--colored.Toastify__toast--success {
  //   background: ${(props: any) => props.theme.primary};
  // }
`
export const LogoContainer = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
  }
  :hover {
    cursor: pointer;
  }
`
export const HandBurger = styled(HiOutlineMenu)<any>`
  cursor: pointer;
  font-size: xxx-large;
  color: ${(props: any) => props.theme.white};
`

export const Close = styled(IoCloseOutline)`
  cursor: pointer;
  font-size: xxx-large;
`

export const NavContainer = styled.div`
  display: flex;
`
export const NavMenu = styled.div`
  display: flex;
  gap: 36px;
  align-items: center;
`
export const Navigations = styled.nav<IHeaderContainerProps>`
  display: flex;
  align-items: center;
  line-height: 22px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  font-style: italic;

  .hamburger {
    display: none;
    background: ${(props: any) => (!props.isHome ? props.theme.black + ` url(${starBG})` : props.theme.primary)};
    border: 0;
    padding: 0;
  }
  @media screen and (max-width: 811px) {
    .hamburger {
      display: block;
    }
    .navigation-menu {
      display: none;
    }
    .navigation-menu.expanded {
      display: flex;
      height: 100vh;
      width: 100vw;
      background: ${(props: any) => (!props.isHome ? props.theme.black + ` url(${starBG})` : props.theme.primary)};
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translate(-50%, 0%);
      align-items: center;
    }
    a {
      padding: 0px;
    }
  }
  @media screen and (max-width: ${screenSizes.M}px) {
    gap: 10px;
  }
`
export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  span {
    font-size: 14px;
    font-style: italic;
    line-height: 17px;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    padding-top: 1px;
  }

  .paper svg {
    animation: none;
    -webkit-animation: none;
  }
`

export const WalletCard = styled.div`
  display: flex;
  gap: 8px;
  width: 385px;
  height: 80px;
  padding: 0 22px;
  background: ${(props: ThemeProps<any>) => props.theme.fadedWhite};
  justify-content: start;
  align-items: center;
  img {
    height: 33px;
    width: 33px;
    @media (max-width: ${screenSizes.M}px) {
      height: 40px;
    }
  }
  border-radius: 10px;
  :hover {
    cursor: pointer;
  }

  @media screen and (max-width: ${screenSizes.L}px) {
    width: 70px;
  }
`
export const NavMenuContainer = styled.div`
  position: relative;
`
interface INavMenuDropDownProps {
  right?: string
}
export const NavMenuDropDown = styled.div<INavMenuDropDownProps>`
  position: absolute;
  top: 4em;
  right: ${(props: any) => props.right};
  animation: slide-down 700ms forwards, fade-in-slow 500ms forwards;

  @keyframes fade-in-slow {
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

  @keyframes slide-down {
    0% {
      transform: translateY(-50%);
    }
    100% {
      transform: translateY(0%);
    }
  }
`
interface IFlexProps {
  gap?: string
  align?: string
  maxWidth?: string
}
export const Col = styled.div<IFlexProps>`
  display: flex;
  gap: ${(props: any) => props.gap || '24px'};
  flex-direction: column;
  align-items: ${(props: any) => props.align};
  max-width: ${(props: any) => props.maxWidth};
`
export const ColCntr = styled.div<IFlexProps>`
  display: flex;
  gap: ${(props: any) => props.gap || '24px'};
  flex-direction: column;
  align-items: ${(props: any) => props.align};
  max-width: 360px;
  @media screen and (max-width: ${screenSizes.M}px) {
    max-width: 260px;
  }
`
export const WalletNotCOnnectedWardingMessage = styled.div`
  width: 70%;
  margin: auto;
  margin-top: auto;
  text-align: center;
  color: white;
  margin-top: 10rem;
`
export const Cntr = styled.div<IFlexProps>`
  display: flex;
  gap: ${(props: any) => props.gap || '70px'};
  @media screen and (max-width: ${screenSizes.ML}px) {
    flex-direction: column;
    align-items: center;
  }
`
export const Row = styled.div<IFlexProps>`
  display: flex;
  gap: ${(props: any) => props.gap || '24px'};

  @media screen and (max-width: ${screenSizes.ML}px) {
    justify-content: center;
    margin-top: 1rem;
  }
`
export const LeftCol = styled.div<IFlexProps>`
  display: flex;
  gap: ${(props: any) => props.gap || '24px'};
  flex-direction: column;
  padding-right: 70px;
  border-right: 1px solid ${(props: any) => props.theme.fadedWhite};
  @media screen and (max-width: ${screenSizes.L}px) {
    flex-direction: row;
    justify-content: center;
    border: none;
    padding: 0;
  }
`
export const LinkButton = styled.a`
  background: ${(props: any) => props.theme.primary};
  border-radius: 10px;
  color: ${(props: any) => props.theme.black};
  transition: all linear 0.3s;

  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 800;
  font-style: italic;

  height: 60px;
  width: 155px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover,
  :focus {
    box-shadow: 0px 0px 5px ${(props: any) => props.theme.primary};
  }

  :disabled {
    color: ${(props: any) => props.theme.disabledText};
    pointer-events: none;
    cursor: not-allowed;
    background: ${(props: any) => props.theme.disabled};
  }
`
export const WalletCardWrapper = styled.div<IFlexProps>`
  display: flex;
  flex-direction: column;
`
export const ContainerAbout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 550px;
  @media (max-width: ${screenSizes.M}px) {
    align-items: center;
    max-width: 350px;
  }
`
export const MobileWalletCntr = styled.div`
  display: flex;
  gap: 12px;
  border-radius: 10px;
  border: 1px solid #646161;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding: 5px 12px 5px 6px;
`
