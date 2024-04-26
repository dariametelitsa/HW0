import type { Meta, StoryObj } from '@storybook/react';
import { RatingControlled } from "./ratingControlled/RatingControlled";
import { action } from "@storybook/addon-actions";


const meta: Meta<typeof RatingControlled> = {
    component: RatingControlled,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

type Story = StoryObj<typeof RatingControlled>;

// export const Primary: Story = {
//     render: () => <RatingControlled value={3} onClick={action('changeText')} />,
// };

export const Primary: Story = {
    args: {
        value:3,
        onClick: action('changeText'),
    }
}

export default meta;