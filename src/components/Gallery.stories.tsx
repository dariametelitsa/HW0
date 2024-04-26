import type { Meta, StoryObj } from '@storybook/react';
import { Gallery } from "./Gallery";

const meta: Meta<typeof Gallery> = {
    component: Gallery,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

};

type Story = StoryObj<typeof Gallery>;

// export const GalleryDefault: Story = {
//     render: () => <Gallery />
// };

export const GalleryControls: Story = {
    args: {
        columns: 4,
    }
}


export default meta;