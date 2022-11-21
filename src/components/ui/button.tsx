import { cva, type VariantProps } from 'class-variance-authority'
import Link from 'next/link'

export const btn = cva(
  "transition-all active:scale-110 whitespace-nowrap cursor-pointer", {
    variants: {
      intent: {
        custom: "",
        base: "bg-transparent hover:text-white dark:hover:text-base-900 hover:bg-base-900 dark:hover:bg-white",
        primary: "bg-base-900 dark:bg-white text-white dark:text-base-900 hover:bg-primary-500 hover:text-white",
        secondary: "bg-base-500/50 text-base-900 dark:text-white hover:bg-base-500",
        success: "bg-emerald-500/50 text-base-900 dark:text-white hover:bg-emerald-500"
      },
      uppercase: {
        true: "uppercase",
        false: ""
      },
      size: {
        small: "text-xs p-2",
        normal: "text-sm px-4 py-2",
        custom: ""
      },
      link: {
        true: "block text-center",
        false: ""
      }
    },
    defaultVariants: {
      intent: "base",
      uppercase: true,
      size: "normal",
      link: false
    }
  }
)

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof btn> {
  href?: string
}
export const Button: React.FC<ButtonProps> = ({ href, intent, uppercase, size, className, children, ...props }) => {

  if (href) {
    return <Link href={href} className={btn({ intent, uppercase, size, class: className, link: true })}> {children} </Link>
  }

  return <button className={btn({ intent, uppercase, size, class: className })} {...props}> {children} </button>
}