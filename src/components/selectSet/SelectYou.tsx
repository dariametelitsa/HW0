// @flow
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Style } from "./SelectYou.style";

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
    }

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
    }

    //to highlight option with css
    function isOptionSelected(option: SelectOptions) {
        return multiple ? value.includes(option) : (option.value === value?.value);
    }

    return (
        <>
            <Style.Container onClick={() => setIsOpen(prev => !prev)}
                       onBlur={() => setIsOpen(false)}
                       ref={containerRef}
                       tabIndex={0}>
                <Style.Value>{multiple ? value.map(v => (
                    <Style.OptionBadge key={v.value}
                                 onClick={e => {
                                     e.stopPropagation();
                                     selectOption(v);
                                 }}>
                        {v.label}
                        <Style.ClearBtn>&times;</Style.ClearBtn>
                    </Style.OptionBadge>
                )) : value?.label}</Style.Value>
                <Style.ClearBtn
                    onClick={(e) => {
                        e.stopPropagation();
                        clearOptions();
                    }}>&times;</Style.ClearBtn>
                {/*<button className={styles['clear-btn']}>&times;</button>*/}
                <Style.Divider></Style.Divider>
                <Style.Caret></Style.Caret>
                <Style.Options isOpen={isOpen}>
                    {options.map((option, index) => (
                        <Style.OptionItem
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
                        >{option.label}</Style.OptionItem>
                    ))}
                </Style.Options>
            </Style.Container>
        </>
    );
};

