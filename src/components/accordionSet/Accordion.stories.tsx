import type { Meta } from '@storybook/react';
import { Accordion } from "./accordion/Accordion";


const meta: Meta<typeof Accordion> = {
    component: Accordion,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

};

export default meta;

export const Uncontrolled = () => {
    return <Accordion title={'uncontrolled'}/>
};