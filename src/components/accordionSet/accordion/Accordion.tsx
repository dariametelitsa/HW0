import React from 'react';

export const Accordion = ({title}: {title: string}) => {
    let [collapsed, setCollapsed] = React.useState(false);

    function isCollapsedHandler () {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle title={title} onClick={isCollapsedHandler}/>
            { !collapsed && <AccordionBody />}
        </div>
    );
};

type AccordionTitleProps = {
    title: string,
    onClick: () => void
}

function AccordionTitle ({title, onClick}: AccordionTitleProps) {
    return (
        <h3 onClick={() => onClick()}>{title}</h3>
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