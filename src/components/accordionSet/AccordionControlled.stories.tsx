import type { Meta } from '@storybook/react';
import { AccordionControlled } from "./accordionControlled/AccordionControlled";
import { action } from "@storybook/addon-actions";
import { useState } from "react";
import { accordionSet } from "../gallery/GalleryContainer";


const meta: Meta<typeof AccordionControlled> = {
    component: AccordionControlled,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

};

export default meta;

const callback = action('Accordion mode change event fired')
const callbackItem = action('Click on item')

export const MenuCollapsedMode = () => {
    return <AccordionControlled items={[]} title={'controlled closed'} collapsed={true} onClickTitle={callback} onItemClick={callbackItem}/>
};

export const MenuUncollapsedMode = () => {
    return <AccordionControlled items={accordionSet} title={'controlled open'} collapsed={false} onClickTitle={callback} onItemClick={callbackItem}/>
};

export const ChangingMode = () => {
    const [value, setValue] = useState(true);
    return <AccordionControlled items={accordionSet} title={'controlled clickable'} collapsed={value} onClickTitle={()=> setValue(!value)} onItemClick={(value) => alert(`Click on item with id ${value}`)}/>
};