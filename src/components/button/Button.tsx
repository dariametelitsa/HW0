import styled from "styled-components";
import { cardTheme } from "../../styles/Theme.styles";
import { css } from "styled-components";


type ButtonPropsType = {
  // types?: 'outline',
  outline?:boolean,
}
export const Button = styled.button<ButtonPropsType>`
  display: inline-block;
  padding: 4px 20px;
  font-family: inherit;
  font-size: ${cardTheme.fontSize.button};
  line-height: 20px;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  border: 2px solid ${cardTheme.colors.primary};
  background-color: ${cardTheme.colors.primary};
  cursor: pointer;

  ${props => props.outline && css<ButtonPropsType>`
  color: ${cardTheme.colors.primary};
  background-color: #fff;
  `}

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: 2px solid ${cardTheme.colors.grey.light}
  }

  &:active {
    opacity: 0.5;
  }
`

// export const ButtonBut = styled(ButtonA).button`
//   color: ${cardTheme.colors.primary};
//   background-color: #fff;
//   border: 2px solid ${cardTheme.colors.primary};
// `

// const Button2 = ({type}) => {
//   return <button></button>
// }