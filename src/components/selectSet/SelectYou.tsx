// @flow
import * as React from 'react';
import styled from "styled-components";

export type SelectOptions = {
    label: string
    value: any
}

type SelectYouProps = {
    value?: SelectOptions | undefined
    onChange?: (value: SelectOptions | undefined) => void
    options: SelectOptions[]
    multiple?: boolean
};
export const SelectYou = ({options, onChange, value, multiple}: SelectYouProps) => {
    return (
        <>
            <Container tabIndex={0}>
                <Value>{value?.label}</Value>
                <ClearBtn>&times;</ClearBtn>
                {/*<button className={styles['clear-btn']}>&times;</button>*/}
                <Divider></Divider>
                <Caret></Caret>
                <Options>
                    {options.map(option => (
                        <OptionItem key={option.label}>{option.label}</OptionItem>
                    ))}
                </Options>
            </Container>
        </>
    );
};

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

    &:focus {
        border-color: darkcyan;
    }
`

const Value = styled.span`
    flex-grow: 1;
`

const ClearBtn = styled.button`
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
`

const Divider = styled.span`
    width: 0.05em;
    align-self: stretch;
    background-color: #8c8c8c;
`

const Caret = styled.div`
    border: 0.25em solid transparent;
    border-top-color: #8c8c8c;
    translate: 0 25%;
`

const Options = styled.ul`
    position: absolute;
    margin: 0;
    padding: 0;
    list-style: none;
    max-height: 15em;
    overflow-y: auto;
    border-radius: 0.25em;
    border: 0.1em solid rgba(40, 44, 51);
    width: 100%;
    left: 0;
    top: calc(100% + 0.25em);
    background-color: white;
    z-index: 100;
    //display: none;
`

const OptionItem = styled.li`
    padding: 0.25em 0.5em;
    cursor: pointer;


    //highlighted
    //background-color: #23a6a6;
    //color:white

    //selected
    //background-color: #baeeee;

`