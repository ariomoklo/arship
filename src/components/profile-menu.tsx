import * as Dropdown from '@radix-ui/react-dropdown-menu'
import { cva } from 'class-variance-authority'
import { useSession } from 'next-auth/react'
import React from 'react'
import { btn } from './ui/button'

const item = cva(
  'w-full uppercase text-base-900 dark:text-white px-4 first:pt-2', {
    variants: {
      type: {
        label: 'text-xs font-medium uppercase py-2 border-b border-b-base-200 dark:border-b-base-700',
        item: 'text-sm px-4 py-2 hover:bg-base-900 hover:text-white dark:hover:bg-base-700'
      }
    }
  }
)

const ProfileMenu: React.FC = () => {
  const { data: session } = useSession()
  if (!session?.user) return <div className={btn()}>Loading</div>

  return (
    <Dropdown.Root>
      <Dropdown.Trigger asChild>
        <div className={btn({ uppercase: false, class: 'border border-transparent data-[state=open]:border-primary-500' })}>{session?.user.name}</div>
      </Dropdown.Trigger>

      <Dropdown.Portal className='z-30'>
        <Dropdown.Content align='end' className='flex flex-col text-base-900 bg-white dark:bg-base-800 shadow-lg min-w-[220px] p-1'>
          <Dropdown.Label className={item({ type: 'label' })} asChild>
            <label>Label</label>
          </Dropdown.Label>
          <Dropdown.Item asChild className={item({ type: 'item' })}>
            <a href="#">Item</a>
          </Dropdown.Item>

        </Dropdown.Content>
      </Dropdown.Portal>
    </Dropdown.Root>
  )
}

export default ProfileMenu