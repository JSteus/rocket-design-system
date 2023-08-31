import { Avatar, AvatarProps } from '@jsrocket-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/jsteus.png',
    alt: 'Mateus Carvalho',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    alt: '',
  },
}
