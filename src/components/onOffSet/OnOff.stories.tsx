import type { Meta, StoryObj } from '@storybook/react';
import { action } from "@storybook/addon-actions";
import { OnOff } from "./onOff/OnOff";


const meta: Meta<typeof OnOff> = {
    component: OnOff,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

};

type Story = StoryObj<typeof OnOff>;

export const Primary: Story = {
    render: () => <OnOff callBack={action('onOff')}/>,
};

export default meta;