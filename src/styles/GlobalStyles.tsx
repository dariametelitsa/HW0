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
    
    html {
        min-height: 100%;
        position:relative;
    }

    body {
        font-family: Intel, sans-serif;
        font-weight: 500;
        font-size: ${cardTheme.fontSize.main};
        line-height: 20px;
        color: ${cardTheme.colors.grey.light};
        --grid-column-count: 8;

        @media only screen and (max-width: 759px) {
            --grid-column-count: 8;
        }

        @media only screen and (min-width: 760px) {
            --grid-column-count: 10;
        }

        @media only screen and (min-width: 1480px) {
            --grid-column-count: 16;
            //--grid-column-width: calc(var(--grid-column-width-base) * 1px)
        }

        --max-width-base: 1480;
        --max-width: calc(var(--max-width-base) * 1px);
        //--scrollbar-width: 15px;
        //--window-width: calc(100vw - var(--scrollbar-width));
        --window-width: 100vw;
        --grid-column-width-base: 90;
        --grid-gutter-width: 20px;
        --grid-column-width: calc((var(--window-width) - calc(var(--grid-gutter-width) * 2)) / var(--grid-column-count));
        --line-color: rgba(0, 0, 0, .15);
    }
`
