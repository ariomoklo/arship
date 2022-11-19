import { cva, type VariantProps } from 'class-variance-authority'

export const btn = cva(
  "transition-all active:scale-110 px-4 py-2 whitespace-nowrap text-sm cursor-pointer", {
    variants: {
      intent: {
        base: "bg-transparent hover:text-white dark:hover:text-base-900 hover:bg-base-900 dark:hover:bg-white",
        primary: "bg-base-900 dark:bg-white text-white dark:text-base-900 hover:bg-primary-500 hover:text-white",
        success: "bg-emerald-500/50 text-white hover:bg-emerald-500"
      },
      uppercase: {
        true: "uppercase",
        false: ""
      }
    },
    defaultVariants: {
      intent: "base",
      uppercase: true
    }
  }
)

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof btn> {}
export const Button: React.FC<ButtonProps> = ({ intent, uppercase, className, children, ...props }) => {
  return <button className={btn({ intent, uppercase, class: className })} {...props}> {children} </button>
}