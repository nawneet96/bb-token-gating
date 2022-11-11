import { NavLink, useNavigate } from 'react-router-dom'

import { FlexBox } from '../../../shared/flexBox'
import {
  BtnContainer,
  Close,
  Cntr,
  Col,
  ColCntr,
  HeaderContainer,
  LeftCol,
  LinkButton,
  LogoContainer,
  MobileWalletCntr,
  NavbarCntr,
  NavContainer,
  Navigations,
  NavMenu,
  NavMenuContainer,
  NavMenuDropDown,
  Row,
  WalletCard,
  WalletCardWrapper,
} from './style'
import { useWeb3React } from '@web3-react/core'
import { useCallback, useEffect, useRef, useState } from 'react'
import CustomModal from '../../../shared/customModal'
import { useDispatch, useSelector } from 'react-redux'
import { setConnectWallet } from '../../../logic/redux/actions'
import { Button } from '../../../shared/button'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'
import logo from '../../../assets/images/logo.svg'
import metamask from '../../../assets/images/metamask-icon-flat.svg'
import coinbaseSvg from '../../../assets/images/coinbase-icon.svg'
import downIcon from '../../../assets/images/down-icon.svg'
import ghostSvg from '../../../assets/images/big-logo-black.svg'

import downIconBlack from '../../../assets/images/down-icon-black.svg'
import upIcon from '../../../assets/images/up-icon-white.svg'
import upIconBlack from '../../../assets/images/up-icon.svg'
import disconnectIcon from '../../../assets/images/disconnect-icon.svg'
import howIcon from '../../../assets/images/how-icon.svg'
import whyIcon from '../../../assets/images/why-icon.svg'
import burgerIcon from '../../../assets/images/burger-icon.svg'
import burgerIconBlack from '../../../assets/images/burger-icon-black.svg'
import walletIconBlack from '../../../assets/images/wallet-icon-black.svg'
import walletIconGreen from '../../../assets/images/wallet-icon-green.svg'

import { WalletTypes } from '../../../wallet_helpers/constant'
import { SVGIcon } from '../../../shared/helpers/styled'
import { clearLocalStorage, formatAddress, goToElement } from '../../../shared/helpers/util'
import { MarkingText, WalletText } from '../../../shared/Typography'
import { nftsPath, homePath } from '../../../logic/paths'
import useAuth from '../../../wallet_helpers/useAuth'
import {
  CONNECT_WALLET_DESCRIPTION,
  CONNECT_WALLET_MODAL_DESC,
  CONNECT_WALLET_MODAL_TEXT,
  HOW_DETAILS,
  HOW_TEXT,
  HOW_WALLET_DESC,
  HOW_WALLET_TEXT,
  META_MASK_URL,
  ROUTE_FAQ,
  ROUTE_HOME,
  ROUTE_MY_NFTS,
  ROUTE_ROAD_MAP,
  ROUTE_TEAM,
  SELECT_WALLET,
  WHAT_IS_WALLET,
  WHAT_IS_WALLET_TEXT,
  WHY_DETAILS,
  WHY_TEXT,
} from '../../../shared/helpers/text'
import { useIsMobileScreen } from '../../../shared/hooks/useIsMobileScreen'
import { useIsLargeScreen } from '../../../shared/hooks/useIsLargeScreen'

declare global {
  interface Window {
    ethereum?: any
  }
}

export const Navbar = (props: any) => {
  const { path } = props
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isLargeScreen = useIsLargeScreen()
  const isMobile = useIsMobileScreen()
  const globalSelector = useSelector((state: any) => state)
  const { connectWallet, isMintingOver } = globalSelector.navbar
  const { login, logout } = useAuth()
  const { account, deactivate }: any = useWeb3React()


  const [disconnectWallet, setDisconnectWallet] = useState(false)
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const [noMetamask, setNoMetamask] = useState(false)
  useEffect(() => {
    if (typeof window?.ethereum !== 'undefined') {
      setNoMetamask(false)
    } else {
      setNoMetamask(true)
    }
  }, [window?.ethereum])

  useEffect(() => {
    if (account) {
      // setProfileImageSrc(richardAvatar)
    }
  }, [account])
  const handleHandBurgerAction = (id: string) => {
    setIsNavExpanded((prev) => !prev)
    goToElement(id)
  }
  const handleGetAWallet = (p: boolean) => {
    navigate(META_MASK_URL)
  }
  const handleConnectwallet = (p: boolean) => {
    dispatch(setConnectWallet(p))

    document.body.style.overflow = 'hidden'
  }
  const handleDisConnectwallet = (e: any) => {
    e.stopPropagation()
    setDisconnectWallet((p) => !p)
    // document.body.style.overflow = 'hidden'
  }
  const disconnect = useCallback(() => {
    clearLocalStorage()
    deactivate()
    sessionStorage.clear()
    setDisconnectWallet(false)
    document.body.style.overflow = 'unset'
  }, [deactivate])

  const connect = async (type: any) => {
    if (account) {
      clearLocalStorage()
      logout()
      sessionStorage.clear()
      sessionStorage.clear()
      setDisconnectWallet(false)
    } else {
      try {
        login(type)
        localStorage.setItem('connectorId', JSON.stringify(type))
      } catch (error) {
        console.error(error)
      }
    }
  }

  const isBlack = path === homePath && (!isMintingOver || !account)

  return (
    <NavbarCntr>
      <HeaderContainer isHome={isBlack}>
        <FlexBox>
          <LogoContainer
            onClick={() => {
              navigate(homePath)
              setIsNavExpanded(false)
              goToElement('#about')
            }}
          >
            <img src={isBlack ? ghostSvg : logo} alt="logo" />
          </LogoContainer>
          <NavContainer>
            <Navigations isHome={isBlack}>
              <button className="hamburger" onClick={() => handleHandBurgerAction('')}>
                {isNavExpanded ? (
                  <Close color={isBlack ? '#000' : '#fff'} />
                ) : (
                  <SVGIcon height="12px" width="40px" src={isBlack ? burgerIconBlack : burgerIcon} />
                )}
              </button>
              {!isNavExpanded && isMobile && (
                <NavMenuContainer>
                  {account ? (
                    <MobileWalletCntr
                      onClick={() => (account ? setDisconnectWallet((p) => !p) : handleConnectwallet(true))}
                    >
                      {/* <RoundSVGIcon
                        className={'disconnect-btn'}
                        height="34px"
                        width="34px"
                        src={richardAvatar}
                        alt="user-avatar"
                      /> */}
                      <Jazzicon
                        // svgStyles={{ 'animation-duration': '0s' }}
                        diameter={34}
                        seed={jsNumberForAddress(account)}
                      />
                      {disconnectWallet ? (
                        <SVGIcon
                          className={'disconnect-btn'}
                          width="10px"
                          height="10px"
                          src={isBlack ? upIconBlack : upIcon}
                          alt="up-icon"
                        />
                      ) : (
                        <SVGIcon
                          className={'disconnect-btn'}
                          width="10px"
                          height="6px"
                          src={isBlack ? downIconBlack : downIcon}
                          alt="down-icon"
                        />
                      )}
                    </MobileWalletCntr>
                  ) : (
                    <button
                      className="hamburger"
                      onClick={() => (account ? setDisconnectWallet((p) => !p) : handleConnectwallet(true))}
                    >
                      <SVGIcon height="44px" width="44px" src={isBlack ? walletIconGreen : walletIconBlack} />
                    </button>
                  )}
                  {disconnectWallet && (
                    <OutsideAlerter updateState={setDisconnectWallet}>
                      <NavMenuDropDown right="10px">
                        <Button btnType={'dropdownButton'} onClick={disconnect}>
                          <SVGIcon width="15px" height="15px" src={disconnectIcon} alt="disconnect-icon" />
                          <span>Disconnect</span>
                        </Button>
                      </NavMenuDropDown>
                    </OutsideAlerter>
                  )}
                </NavMenuContainer>
              )}
              <NavMenu className={isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'}>
                {isMobile ? (
                  ''
                ) : account ? (
                  <NavMenuContainer>
                    <Button
                      btnType={isBlack ? 'walletButton' : 'walletButton2'}
                      className={'walletNavButton disconnect-btn'}
                      onClick={handleDisConnectwallet}
                      excludeSpan
                      bRadius={isBlack ? '98px' : '10px'}
                      customHeight="55px"
                    >
                      <BtnContainer className={'disconnect-btn'}>
                        {/* <RoundSVGIcon
                          className={'disconnect-btn'}
                          height="34px"
                          width="34px"
                          src={richardAvatar}
                          alt="user-avatar"
                        /> */}
                        <Jazzicon diameter={34} seed={jsNumberForAddress(account)} />

                        <span className={'disconnect-btn'}>{formatAddress(account)}</span>
                        {disconnectWallet ? (
                          <SVGIcon className={'disconnect-btn'} width="10px" height="10px" src={upIcon} alt="up-icon" />
                        ) : (
                          <SVGIcon
                            className={'disconnect-btn'}
                            width="10px"
                            height="6px"
                            src={downIcon}
                            alt="down-icon"
                          />
                        )}
                      </BtnContainer>
                    </Button>
                    {disconnectWallet && (
                      <OutsideAlerter updateState={setDisconnectWallet}>
                        <NavMenuDropDown>
                          <Button btnType={'dropdownButton'} onClick={disconnect}>
                            <SVGIcon width="15px" height="15px" src={disconnectIcon} alt="disconnect-icon" />
                            <span>Disconnect</span>
                          </Button>
                        </NavMenuDropDown>
                      </OutsideAlerter>
                    )}
                  </NavMenuContainer>
                ) : (
                  <Button
                    btnType={'ConnectWalletButton'}
                    className={'walletNavButton'}
                    onClick={() => handleConnectwallet(true)}
                    bRadius={'10px'}
                  >
                    Connect Wallet
                  </Button>
                )}
              </NavMenu>
            </Navigations>
          </NavContainer>
        </FlexBox>
      </HeaderContainer>
    
      {/* Connect Modal */}
      <CustomModal
        show={connectWallet}
        toggleModal={(p: boolean) => {
          handleConnectwallet(p)
          document.body.style.overflow = 'unset'
        }}
        contentTop={
          isLargeScreen ? (
            <Col>
              <WalletText fontSizeM="22px" fWeight="500">
                {CONNECT_WALLET_MODAL_TEXT}
              </WalletText>
              <WalletText fOpacity=".6" fontSizeM="14px" fWeight="700" fLineHeight="28px">
                {CONNECT_WALLET_MODAL_DESC}
              </WalletText>
              <LeftCol>
                <WalletCardWrapper>
                  <WalletCard
                    className="metamask"
                    onClick={() => {
                      handleConnectwallet(false)
                      connect(WalletTypes.metamask)
                      document.body.style.overflow = 'unset'
                    }}
                  >
                    <img src={metamask} alt="metamask" />
                  </WalletCard>
                  <WalletText>Metamask</WalletText>
                </WalletCardWrapper>
                <WalletCardWrapper>
                  <WalletCard
                    className="walletConnect"
                    onClick={() => {
                      handleConnectwallet(false)
                      connect(WalletTypes.coinbase)
                      document.body.style.overflow = 'unset'
                    }}
                  >
                    <img src={coinbaseSvg} alt="walletconnect" />
                  </WalletCard>
                  <WalletText>Coinbase</WalletText>
                </WalletCardWrapper>
              </LeftCol>
            </Col>
          ) : (
            ''
          )
        }
        heading={!isLargeScreen ? SELECT_WALLET : ''}
        subHeading={!isLargeScreen ? CONNECT_WALLET_DESCRIPTION : ''}
      >
        {!isLargeScreen ? (
          <Cntr>
            <LeftCol>
              <WalletCard
                className="metamask"
                onClick={() => {
                  handleConnectwallet(false)
                  connect(WalletTypes.metamask)
                  document.body.style.overflow = 'unset'
                }}
              >
                <img src={metamask} alt="metamask" />
                <WalletText fSize="16px">Metamask</WalletText>
              </WalletCard>
              <WalletCard
                className="walletConnect"
                onClick={() => {
                  handleConnectwallet(false)
                  connect(WalletTypes.coinbase)
                  document.body.style.overflow = 'unset'
                }}
              >
                <img src={coinbaseSvg} alt="walletconnect" />
                <WalletText fSize="16px">Coinbase</WalletText>
              </WalletCard>
            </LeftCol>
            <Col align="start" gap="36px">
              <MarkingText fWeight="700" fSize="28px" fColor="#fff">
                {WHAT_IS_WALLET}
              </MarkingText>
              <Col>
                <Row>
                  <SVGIcon src={howIcon} height="55px" width="55px" />
                  <ColCntr align="start" gap="12px">
                    <MarkingText tAlign="start" fLineHeight="20px" fWeight="700" fSize="18px" fColor="#fff">
                      {HOW_TEXT}
                    </MarkingText>
                    <MarkingText tAlign="start" fLineHeight="26px" fWeight="500" fSize="14px" fColor="#fff">
                      {HOW_DETAILS}
                    </MarkingText>
                  </ColCntr>
                </Row>
                <Row>
                  <SVGIcon src={whyIcon} height="55px" width="55px" />
                  <ColCntr align="start" gap="12px">
                    <MarkingText tAlign="start" fLineHeight="20px" fWeight="700" fSize="18px" fColor="#fff">
                      {WHY_TEXT}
                    </MarkingText>
                    <MarkingText tAlign="start" fLineHeight="26px" fWeight="500" fSize="14px" fColor="#fff">
                      {WHY_DETAILS}
                    </MarkingText>
                  </ColCntr>
                </Row>
              </Col>
              {noMetamask && (
                <LinkButton href={META_MASK_URL} target="_blank" rel="noopener noreferrer">
                  GET A WALLET
                </LinkButton>
              )}
            </Col>
          </Cntr>
        ) : (
          <Cntr>
            <Col maxWidth="360px" align={isLargeScreen ? 'center' : 'start'} gap="24px">
              <MarkingText
                tAlign={isLargeScreen ? 'center' : 'start'}
                fLineHeight="32px"
                fWeight="700"
                fSize="28px"
                fColor="#fff"
              >
                {WHAT_IS_WALLET_TEXT}
              </MarkingText>
              <MarkingText
                tAlign={isLargeScreen ? 'center' : 'start'}
                fLineHeight="20px"
                fWeight="700"
                fSize="18px"
                fColor="#fff"
              >
                {HOW_WALLET_TEXT}
              </MarkingText>
              <MarkingText
                tAlign={isLargeScreen ? 'center' : 'start'}
                fLineHeight="21px"
                fWeight="500"
                fSize="12px"
                fColor="#fff"
              >
                {HOW_WALLET_DESC}
              </MarkingText>
              {noMetamask && (
                <LinkButton href={META_MASK_URL} target="_blank" rel="noopener noreferrer">
                  GET A WALLET
                </LinkButton>
              )}
            </Col>
          </Cntr>
        )}
      </CustomModal>
    </NavbarCntr>
  )
}

function useOutsideAlerter(ref: any, setIsNavExpanded: any) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (event?.target) {
        if (
          ref.current &&
          !ref.current.contains(event.target) &&
          !event?.target?.classList?.contains('disconnect-btn')
        ) {
          setIsNavExpanded(false)
        }
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}
function OutsideAlerter(props: any) {
  const { updateState, children } = props
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef, updateState)
  return <div ref={wrapperRef}>{children}</div>
}
