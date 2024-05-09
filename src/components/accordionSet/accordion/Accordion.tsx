import React, { useReducer } from 'react';
import { reducer, TOGGLE_COLLAPSED } from "./Reducer";

export const Accordion = ({title}: {title: string}) => {
    let [state, dispatch] = useReducer(reducer, { collapsed: false });

    return (
        <div>
            <AccordionTitle title={title} onClick={() => {dispatch({type: TOGGLE_COLLAPSED})}}/>
            { !state.collapsed && <AccordionBody />}
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