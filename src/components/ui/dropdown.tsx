import type { FC } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority'
import Link from 'next/link'
import React from 'react'
import { btn } from './button';

const item = cva(
  'w-full text-base-900 dark:text-white', {
    variants: {
      intent: {
        label: 'uppercase text-[10px] font-medium px-4 pt-2 pb-1',
        item: 'cursor-pointer text-sm px-4 py-1 hover:bg-base-800 hover:text-white dark:hover:bg-base-700'
      }
    },
    defaultVariants: {
      intent: "item"
    }
  }
)

const content = cva(
  'flex flex-col text-base-900 bg-white dark:bg-base-800 border border-base-200 dark:border-base-800 shadow-md min-w-[220px] p-1'
)

export interface DropdownProps extends React.HTMLAttributes<HTMLButtonElement> {
  trigger: React.ReactNode
  align?: "start" | "center" | "end",
}

export const Root: FC<DropdownProps> = ({ trigger, children, align, className }) => {
    return (
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          {trigger}
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal className='z-30'>
          <DropdownMenu.Content align={align ?? 'start'} className={content({ class: className })}>
            {children}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    );
}

export interface DropdownItemProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof item> {
  href?: string
}

export const Item: FC<DropdownItemProps> = ({ intent, href, children, onClick }) => {

  if (intent === "label") {
    return (
      <DropdownMenu.Label className={item({ intent: 'label' })} onClick={onClick}  asChild>
        <label>Administrator</label>
      </DropdownMenu.Label>
    )
  }

  return (
    <DropdownMenu.Item className={item({ intent: 'item' })} onClick={onClick}>
      { href ? <Link href={href}>{children}</Link> : children}
    </DropdownMenu.Item>
  )
}

export const Separator = () => {
  return <DropdownMenu.Separator className='my-1 border-b border-b-base-200 dark:border-b-base-700' />
}