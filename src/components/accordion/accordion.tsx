import React from 'react';

export const Accordion = ({title}: {title: string}) => {
    let [collapsed, setCollapsed] = React.useState(false);

    function isCollapsedHandler () {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle title={title} callBack={isCollapsedHandler}/>
            { !collapsed && <AccordionBody />}
        </div>
    );
};

type AccordionTitleProps = {
    title: string,
    callBack: () => void
}

function AccordionTitle ({title, callBack}: AccordionTitleProps) {
    return (
        <h3 onClick={() => callBack()}>{title}</h3>
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