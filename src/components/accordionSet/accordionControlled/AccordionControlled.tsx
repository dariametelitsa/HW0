import React from 'react';

type AccordionControlledProps = {
    title: string;
    collapsed: boolean;
    onClickTitle: (collapsed: boolean) => void;
}

export const AccordionControlled = ({title, collapsed, onClickTitle}: AccordionControlledProps) => {

    return (
        <div>
            <AccordionTitle title={title} onClick={() => {onClickTitle(!collapsed)}}/>
            { !collapsed && <AccordionBody />}
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

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}