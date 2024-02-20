import { createGlobalStyle } from "styled-components";
import './fonts.css';
import { cardTheme } from "./Theme.styles";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Intel, sans-serif;
    font-weight: 500;
    font-size: ${cardTheme.fontSize.main};
    line-height: 20px;
    color: ${cardTheme.colors.grey.light};
}
`
