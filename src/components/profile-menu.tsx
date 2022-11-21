import * as Dropdown from '@radix-ui/react-dropdown-menu'
import { cva } from 'class-variance-authority'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { btn } from './ui/button'
import { ArrowDropDownLine } from './ui/icons'

const item = cva(
  'w-full text-base-900 dark:text-white', {
    variants: {
      type: {
        label: 'uppercase text-[10px] font-medium px-4 pt-2 pb-1',
        item: 'cursor-pointer text-sm px-4 py-1 hover:bg-base-800 hover:text-white dark:hover:bg-base-700'
      }
    }
  }
)

const content = cva(
  'flex flex-col text-base-900 bg-white dark:bg-base-800 border border-base-200 dark:border-base-800 shadow-md min-w-[220px] p-1'
)

const ProfileMenu: React.FC = () => {
  const { data: session } = useSession()
  if (!session?.user) return <div className={btn()}>Loading</div>

  return (
    <Dropdown.Root>
      <Dropdown.Trigger asChild>
        <div className={btn({ uppercase: false, size: 'custom', class: 'pl-4 pr-2 py-2 text-sm border border-transparent data-[state=open]:border-primary-500' })}>
          <span>{session?.user.name}</span>
          <ArrowDropDownLine className='w-5 h-5 inline-block ml-1'/>
        </div>
      </Dropdown.Trigger>

      <Dropdown.Portal className='z-30'>
        <Dropdown.Content align='end' className={content()}>

          <Dropdown.Item asChild className={item({ type: 'item' })}>
            <Link href="/apps">Apps</Link>
          </Dropdown.Item>

          <Dropdown.Item asChild className={item({ type: 'item' })}>
            <Link href="/groups">Groups</Link>
          </Dropdown.Item>

          <Dropdown.Item asChild className={item({ type: 'item' })}>
            <Link href="/account">Account Setting</Link>
          </Dropdown.Item>

          <Dropdown.Separator className='my-1 border-b border-b-base-200 dark:border-b-base-700' />

          <Dropdown.Label className={item({ type: 'label' })} asChild>
            <label>Administrator</label>
          </Dropdown.Label>
          <Dropdown.Item asChild className={item({ type: 'item' })}>
            <a href="#">Create new app</a>
          </Dropdown.Item>
          <Dropdown.Item asChild className={item({ type: 'item' })}>
            <a href="#">Create new group</a>
          </Dropdown.Item>
          <Dropdown.Item asChild className={item({ type: 'item' })}>
            <a href="#">Manage user</a>
          </Dropdown.Item>
          <Dropdown.Item asChild className={item({ type: 'item' })}>
            <a href="#">Manage groups</a>
          </Dropdown.Item>
          <Dropdown.Item asChild className={item({ type: 'item' })}>
            <a href="#">Manage apps</a>
          </Dropdown.Item>

          <Dropdown.Separator className='my-1 border-b border-b-base-200 dark:border-b-base-700' />

          <Dropdown.Item asChild className={item({ type: 'item', class: 'bg-rose-500/25 hover:!bg-rose-500/75' })}>
            <button onClick={() => signOut()} className="text-left">Sign Out</button>
          </Dropdown.Item>

        </Dropdown.Content>
      </Dropdown.Portal>
    </Dropdown.Root>
  )
}

export default ProfileMenu