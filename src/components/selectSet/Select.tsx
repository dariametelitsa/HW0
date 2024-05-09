// @flow
import * as React from 'react';
import styled from "styled-components";

export type ItemType = {
    title: string;
    value: any;
}

type SelectProps = {
    value: any;
    onChange: (value: any) => void;
    items: ItemType[];
};

export const accordionSet: ItemType[] = [
    {title: 'Hey', value: '1'},
    {title: 'how', value: '2'},
    {title: 'are', value: '3'},
    {title: 'you', value: '4'},
    {title: 'dude', value: '5'},
];

export const Select = (props: SelectProps) => {

    const [isOpen, setIsOpen] = React.useState(false);
    const onClickItemHandler = (value: any) => {
        setIsOpen(false);
        props.onChange(value);
    }
    return (
        <StyledSelect>
            <Title onClick={()=> {setIsOpen(!isOpen)}}>{props.value}
                {/*<FaChevronDown style={{width: '14px'}} />*/}
            </Title>
            {isOpen &&
                <List onBlur={()=>{setIsOpen(false)}}>
                    {props.items.map((item: ItemType, index) =>
                        <Item autoFocus={index === 0} tabIndex={1} key={index} onClick={()=>onClickItemHandler(item.title)}>
                    {item.title}</Item>)}
                </List>}

        </StyledSelect>
    );
};

const StyledSelect = styled.div`
    position: relative
`

const Title = styled.h3`
    min-width: 60px;
    position: relative;
    padding: 10px 15px 10px 0;
    border-bottom: 2px solid seagreen;
    
    &::after {
        content: '';
        right: 0;
        top: 50%;
        position: absolute;
        border: 5px solid transparent;
        border-top: 5px solid seagreen;
    }
`


const List = styled.ul`
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
    border: 1px solid lightgray;
    box-shadow: 1px 1px 2px rgba(204, 204, 204, 0.5);
    list-style-type: none;
`

const Item = styled.li`
    min-width: 60px;
    padding: 6px 6px;
    list-style-type: none;
    background-color: white;
    
    &:hover {
        background-color: beige;
    }
`