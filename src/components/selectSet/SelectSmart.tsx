// @flow
import * as React from 'react';
import { useEffect, useState } from 'react';
import { ItemType } from "./Select";
import styled from "styled-components";

type SelectSmartProps = {
    value: string | null
    onChange: (value: any) => void
    items: ItemType[]
};
export const SelectSmart = (props: SelectSmartProps) => {
    console.log('draw me more!');

    const selectedItem = props.items.find(i => i.value === props.value);

    const [active, setActive] = useState(false);
    const [checkedItem, setCheckedItem] = useState(props.value);

    useEffect(() => {
        setCheckedItem(props.value)
    }, [props.value]);

    const toggleItems = () => setActive(!active);

    const inItemClick = (value: string) => {
        props.onChange(value);
        setCheckedItem(value);
        toggleItems();
    }
    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if(e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            if(!checkedItem) setCheckedItem(props.items[0].value);
            for(let i = 0; i < props.items.length; i++ ) {
                if(props.items[i].value === checkedItem) {
                    const nextPretendent = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if(nextPretendent) {
                        props.onChange(nextPretendent.value);
                    }
                }
            }
        }
        if(e.key === 'Enter' || e.key === 'Escape') {
            setActive(false);
        }

    }

    return (
        <div style={{position: "relative"}} onKeyUp={onKeyDownHandler} tabIndex={0}>
            <Select onClick={toggleItems}>{selectedItem && selectedItem.title}</Select>
            {active && <SelectMenu isOpen={active}>
                {props.items.map((item: ItemType, index) => (<ItemMenu
                    selected={item.value === checkedItem}
                    key={index}
                    onClick={() => inItemClick(item.value)}
                    >{item.title}
                </ItemMenu>))}
            </SelectMenu>}
        </div>
    );
};

const Select = styled.span`
    display: inline-block;
    min-width: 40px;
    border: 1px solid darkslategray;
    padding: 12px 24px 12px 12px;
    cursor: pointer;
    user-select: none
`

const SelectMenu = styled.div<{ isOpen: boolean }>`
        //display: ${props => props.isOpen ? 'block' : 'none'};
    padding: 8px;
    bottom: 0;
    left: 0;
    transform: translateY(100%);
    position: absolute;
    border: 1px solid tomato;
    background-color: white;
`

const ItemMenu = styled.div<{ selected?: boolean }>`
    padding: 4px 8px;
    background-color: ${props => props.selected && 'aquamarine'};

    &:hover {
        background-color: lightcyan;
    }
`
