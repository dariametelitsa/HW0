import React from 'react';

export type ItemType ={
    title: string;
    value: any;
}

type AccordionControlledProps = {
    title: string;
    collapsed: boolean;
    onClickTitle: () => void;
    items: ItemType[];
    onItemClick: (value: any) => void;
}

export const AccordionControlled = ({title, collapsed, onClickTitle, items, onItemClick}: AccordionControlledProps) => {

    return (
        <div>
            <AccordionTitle title={title} onClick={onClickTitle}/>
            { !collapsed && <AccordionBody onClick={onItemClick} items={items} />}
        </div>
    );
};

type AccordionTitleProps = {
    title: string;
    onClick: () => void;
}

function AccordionTitle ({title, onClick}: AccordionTitleProps) {
    return (
        <h3 onClick={onClick}>{title}</h3>
    );
}

const AccordionBody = ({items, onClick}: {items: ItemType[], onClick: (value: any) => void}) => {
    return (
        <ul>
            {items.map((item, index) => <li key={index} onClick={()=>{onClick(item.value)}}>{item.title}</li>)}
        </ul>
    );
}