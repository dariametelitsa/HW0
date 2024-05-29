// @flow
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import styled from "styled-components";

export type SelectOptions = {
    label: string
    value: string | number
};

type MultipleSelectProps = {
    onChange: (value: SelectOptions[]) => void //checked options function
    value: SelectOptions[] //current value
    multiple: true
};

type SingleSelectProps = {
    onChange: (value: SelectOptions | undefined) => void //checked options function
    value?: SelectOptions | undefined //current value
    multiple?: false
};

type SelectYouProps = {
    options: SelectOptions[] //all values
} & (SingleSelectProps | MultipleSelectProps);

export const SelectYou = ({options, onChange, value, multiple}: SelectYouProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) setHighlightedIndex(0);
    }, [isOpen]);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.target !== containerRef.current) return;
            switch (e.code) {
                case 'Enter':
                case 'Space':
                    setIsOpen(prev => !prev);
                    if (isOpen) selectOption(options[highlightedIndex])
                    break;
                case 'ArrowUp':
                case 'ArrowDown': {
                    if (!isOpen) {
                        setIsOpen(true);
                        break;
                    }
                    const newValue = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1);
                    if (newValue >= 0 && newValue < options.length) {
                        setHighlightedIndex(newValue);
                    }
                    break;
                }
                case 'Escape':
                    setIsOpen(false);
                    break;
            }
        }
        containerRef.current?.addEventListener('keydown', handler);

        return () => {
            containerRef.current?.removeEventListener('keydown', handler);
        }
    }, [isOpen, highlightedIndex, options]);

    function clearOptions() {
        multiple ? onChange([]) : onChange(undefined);
    };

    function selectOption(option: SelectOptions) {
        if (multiple) {
            if (value.includes(option)) {
                onChange(value.filter(o => o !== option))
            } else {
                onChange([...value, option]);
            }
        } else {
            if (option.value !== value?.value) {
                onChange(option);
            }
        }
    };

    //to highlight option with css
    function isOptionSelected(option: SelectOptions) {
        return multiple ? value.includes(option) : (option.value === value?.value);
    }

    return (
        <>
            <Container onClick={() => setIsOpen(prev => !prev)}
                       onBlur={() => setIsOpen(false)}
                       ref={containerRef}
                       tabIndex={0}>
                <Value>{multiple ? value.map(v => (
                    <OptionBadge key={v.value}
                                 onClick={e => {
                                     e.stopPropagation();
                                     selectOption(v);
                                 }}>
                        {v.label}
                        <ClearBtn>&times;</ClearBtn>
                    </OptionBadge>
                )) : value?.label}</Value>
                <ClearBtn
                    onClick={(e) => {
                        e.stopPropagation();
                        clearOptions();
                    }}>&times;</ClearBtn>
                {/*<button className={styles['clear-btn']}>&times;</button>*/}
                <Divider></Divider>
                <Caret></Caret>
                <Options isOpen={isOpen}>
                    {options.map((option, index) => (
                        <OptionItem
                            key={option.value}
                            onClick={(e) => {
                                e.stopPropagation();
                                selectOption(option);
                                setIsOpen(false);
                            }}
                            onMouseEnter={() => {
                                setHighlightedIndex(index)
                            }}
                            isSelected={isOptionSelected(option)}
                            isHighlighted={highlightedIndex === index}
                        >{option.label}</OptionItem>
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
    user-select: none;

    &:focus {
        border-color: #00acc1;
    }
`

const Value = styled.span`
    flex-grow: 1;
    display: flex;
    gap: 0.5em;
    flex-wrap: wrap;
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

const OptionBadge = styled.button`
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

const Options = styled.ul<{ isOpen: boolean }>`
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
`

const OptionItem = styled.li<{ isSelected: boolean, isHighlighted: boolean }>`
    padding: 0.25em 0.5em;
    cursor: pointer;
    background-color: ${props => props.isSelected ? '#00bcd4' : props.isHighlighted ? '#b2ebf2' : 'transparent'};

`