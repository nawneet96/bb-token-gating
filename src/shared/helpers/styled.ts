import styled, { ThemeProps, css } from 'styled-components'
import { screenSizes } from '../../styles/theme'

interface IFlexProps {
  gap?: string
  maxwidth?: string
  width?: string
  widthM?: string
  height?: string
  heightM?: string
  align?: string
  padding?: string
  maxwidthM?: string
  margin?: string
  borderRadius?: string
  maxWidth?: string
}
export const FlexRow = styled.div<IFlexProps>`
  display: flex;
  gap: ${(props: any) => props.gap};
`
export const TextList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const FlexCol = styled.div<IFlexProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props: any) => props.gap};
  max-width: ${(props: any) => props.maxwidth};
  align-items: ${(props: any) => props.align};
  padding: ${(props: any) => props.padding};
  @media (max-width: ${screenSizes.M}px) {
    max-width: ${(props: any) => props.maxwidthM};
  }
`
export const FlexLink = styled.a<IFlexProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props: any) => props.gap};
  max-width: ${(props: any) => props.maxwidth};
  align-items: ${(props: any) => props.align};
  padding: ${(props: any) => props.padding};
  @media (max-width: ${screenSizes.M}px) {
    max-width: ${(props: any) => props.maxwidthM};
  }
`

export const SVGIcon = styled.img<IFlexProps>`
  width: ${(props: any) => props.width || '65px'};
  height: ${(props: any) => props.height || '65px'};
  @media (max-width: ${screenSizes.M}px) {
    width: ${(props: any) => props.widthM};
    height: ${(props: any) => props.heightM};
  }
  max-width: ${(props: any) => props.maxWidth};
  border-radius: ${(props: any) => props.borderRadius};
`
export const RoundSVGIcon = styled.img<IFlexProps>`
  width: ${(props: any) => props.width || '65px'};
  height: ${(props: any) => props.height || '65px'};
  border-radius: 48px;
  @media (max-width: ${screenSizes.M}px) {
    width: ${(props: any) => props.widthM};
    height: ${(props: any) => props.heightM};
  }
  margin: ${(props: any) => props.margin};
`
export const CircleCntr = styled.div`
  height: 80px;
  z-index: 1;
  background: ${(props: ThemeProps<any>) => props.theme.primary};
  padding: 15px 0;
`
interface ICircleBarProps {
  isActive?: boolean
}
export const Circle = styled.div<ICircleBarProps>`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 3px solid ${(props: any) => (props.isActive ? props.theme.black : props.theme.blackFaded)};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LTRAnimationOnHover = css`
  position: relative;
  ::before {
    transform: scaleX(0);
    transform-origin: bottom right;
  }

  :hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  ::before {
    content: ' ';
    border-radius: 10px;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    inset: 0 0 0 0;
    background: black;
    transition: transform 0.4s ease;
    opacity: 0.35;
  }
`
export const LTRAnimationOnHover2 = css`
  position: relative;
  ::before {
    transform: scaleX(0);
    transform-origin: bottom right;
  }

  :hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  ::before {
    content: ' ';
    border-radius: 10px;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    inset: 0 0 0 0;
    background: ${(props: any) => props.theme.primary};
    transition: transform 0.4s ease;
    opacity: 0.5;
  }
`
export const TopToBottomAnimation = css`
  position: relative;
  ::before {
    transform: scaleX(0);
    transform-origin: bottom;
  }

  :hover::before {
    transform: scaleX(1);
    transform-origin: top;
  }

  ::before {
    content: ' ';
    border-radius: 10px;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    inset: 0 0 0 0;
    background: black;
    transition: transform 0.4s ease;
    opacity: 0.35;
    height: 100%;
  }
`
interface ITooltipProps {
  customWidth?: string
  customPad?: string
  left?: string
  fullWidth?: boolean
  isDisabled?: boolean
}
export const Tooltip = styled.div<ITooltipProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', sans-serif;
  font-style: italic;
  padding: ${(props: any) => props.customPad};
  &:hover {
    cursor: pointer;
  }
  position: relative;
  ::before,
  ::after {
    --scale: 0;
    --arrow-size: 5px;
    --tooltip-color: ${(props: any) => props.theme.gray2};
    z-index: 999;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) translateX(10px) scale(var(--scale));

    transition: 300ms transform;
    transform-origin: left center;
  }

  ::before {
    left: ${(props: any) => props.left || '20px'};
    content: attr(data-tooltip);
    color: ${(props: any) => props.theme.white};
    padding: 0.5rem;
    border-radius: 0.3rem;
    text-align: center;
    width: ${(props: any) => props.customWidth || 'max-content'};
    background: var(--tooltip-color);
    font-size: 14px;
    font-weight: 500;
    backdrop-filter: blur(30px);
    @media (max-width: ${screenSizes.L}px) {
      width: 10em;
    }
  }

  :hover::before {
    --scale: 1;
  }
  :hover::after {
    transform: rotate(90deg);
    transition: 300ms transform;
  }

  ::after {
    content: '';
    border: var(--arrow-size) solid transparent;
    border-top-color: var(--tooltip-color);
    transform-origin: top center;
    left: ${(props: any) => (props.left ? `calc(${props.left} + 5px)` : '25px')};
  }
  ::before,
  ::after {
    display: ${(props: any) => (props.isDisabled ? 'none' : 'block')};
  }
`

export const SpinnerImg = styled.img<any>`
  animation: ${(props: any) => (props.isSpinning ? 'spinner-animation 1.5s infinite linear' : '')};
  @-webkit-keyframes spinner-animation {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }
  @keyframes spinner-animation {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }
  padding: 15px;
  @media (max-width: ${screenSizes.M}px) {
    padding: 5px;
  }
  height: 100px;
  width: 100px;
`
