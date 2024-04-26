import type { Meta, StoryObj } from '@storybook/react';
import { Rating } from "./rating/Rating";


const meta: Meta<typeof Rating> = {
    component: Rating,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

};

type Story = StoryObj<typeof Rating>;

export const Primary: Story = {
    render: () => <Rating/>,
};

export default meta;