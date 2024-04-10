import styled from "styled-components";


const BackgroundGrid = styled.div`
    //width: 100%;
    //height: calc(100% + var(--grid-column-width));
    position: absolute;
    top: calc(var(--grid-gutter-width) - var(--grid-column-width));
    //top: calc(var(--grid-column-width) * -0.5);
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    z-index: -1;
`

const Columns = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(calc(var(--grid-column-count)),var(--grid-column-width));
    padding: 0 var(--grid-gutter-width);
`

const Rows = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    gap: calc(var(--grid-column-width) - 1px);
    flex-direction: column;
`

const LineColumns = styled.div`
    position: relative;
    height: 100%;
    width: 1px;
    background: linear-gradient(180deg, var(--line-color), var(--line-color) 60%,transparent 0,transparent);
    background-size: 1px 5px;
    
    &:last-child {
        position: absolute;
        right: var(--grid-gutter-width);
        top: 0;
    }
`

const LineRows = styled.div`
    flex-shrink: 0;
    position: relative;
    height: 1px;
    width: 100%;
    background: linear-gradient(90deg,var(--line-color),var(--line-color) 60%,transparent 0,transparent);
    background-size: 5px 1px;
    
    &:last-child {
        position: absolute;
        right: var(--grid-gutter-width);
        top: 0;
    }
`

export const S = {
    BackgroundGrid,
    Columns,
    Rows,
    LineColumns,
    LineRows,
}