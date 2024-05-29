import styled from "styled-components";

const Container = styled.div`
    position: relative;
    width: 20em;
    min-height: 1.5em;
    display: flex;
    align-items: center;
    gap: 0.5em;
    padding: 0.5em;
    border-radius: 0.25em;
    border: 0.1em solid rgba(40, 44, 51);
    background-color: white;
    user-select: none;

    &:focus {
        border-color: #00acc1;
    }
`;

const Value = styled.span `
    flex-grow: 1;
    display: flex;
    gap: 0.5em;
    flex-wrap: wrap;
`;

const ClearBtn = styled.button `
    background: none;
    color: #8c8c8c;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    font-size: 1.25em;

    &:focus,
    &:hover {
        color: #393939;
    }
`;

const OptionBadge = styled.button `
    display: flex;
    gap: 0.25em;
    align-items: center;
    padding: 0.15em 0.25em;
    border: 0.05em solid #777;
    border-radius: 0.25em;
    background: none;
    cursor: pointer;
    outline: none;

    &:focus,
    &:hover {
        background-color: hsl(0, 100%, 90%);
        border-color: hsl(0, 100%, 50%);
    }

    & > ${ClearBtn} {
        color: #777;
        font-size: 1.25em;
    }

    &:focus > ${ClearBtn},
    &:hover > ${ClearBtn} {
        color: hsl(0, 100%, 50%);
    }
`;

const Divider = styled.span `
    width: 0.05em;
    align-self: stretch;
    background-color: #8c8c8c;
`;

const Caret = styled.div `
    border: 0.25em solid transparent;
    border-top-color: #8c8c8c;
    translate: 0 25%;
`;

const Options = styled.ul<{ isOpen: boolean }> `
    position: absolute;
    margin: 0;
    padding: 0;
    list-style: none;
    max-height: 15em;
    overflow-y: auto;
    border-radius: 0.25em;
    border: 0.1em solid rgba(40, 44, 51);
    width: 100%;
    left: -0.05em; //because of border
    top: calc(100% + 0.25em);
    background-color: white;
    z-index: 100;
    display: ${props => props.isOpen ? 'block' : 'none'};
`;

const OptionItem = styled.li<{ isSelected: boolean, isHighlighted: boolean }>`
    padding: 0.25em 0.5em;
    cursor: pointer;
    background-color: ${props => props.isHighlighted ? '#b2ebf2' : props.isSelected ? '#00bcd4' : 'transparent'};
`;

export const Style = {
    Container,
    Value,
    ClearBtn,
    OptionBadge,
    Divider,
    Caret,
    Options,
    OptionItem,
};