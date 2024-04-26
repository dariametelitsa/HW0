import type { Meta, StoryObj } from '@storybook/react';
import { action } from "@storybook/addon-actions";
import { OnOffControlled } from "./onOffControlled/OnOffControlled";


const meta: Meta<typeof OnOffControlled> = {
    component: OnOffControlled,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

};

type Story = StoryObj<typeof OnOffControlled>;

export const Primary: Story = {
    args: {
        onChange: action("onChange"),
        isOn: true
    }
}

export default meta;