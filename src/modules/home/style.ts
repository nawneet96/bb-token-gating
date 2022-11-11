import styled from "styled-components";
import { maxWidth } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: #000;
  gap: 2em;
`

export const Main = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  padding: 10em 0;
  max-width: ${maxWidth};
  *::-webkit-scrollbar {
    width: 4px;
    background-color: transparent;
    border-radius: 4px;
  }
  *::-webkit-scrollbar-thumb {
    border: 2px solid transparent;
    background-color: ${(props: any) => props.theme.primary};
    border-radius: 20px;
    background-clip: content-box;
  }
`