
import { cva, type VariantProps } from 'class-variance-authority'
import Image from 'next/image'

export const avatar = cva(
  "inline-block", {
    variants: {
      size: {
        small: "h-4 w-4",
        normal: "h-8 w-8",
        large: "h-12 w-12",
        custom: ""
      },
      ring: {
        true: "ring-2 ring-base-100 dark:ring-base-700",
        false: ""
      }
    },
    defaultVariants: {
      size: "normal",
      ring: false
    }
  }
)

const DiceLoader = ({ src, width }: { src: string, width: number }) => {
  return `https://avatars.dicebear.com/api/adventurer-neutral/${src}.svg?size=${width}`
}

export interface AvatarProps extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof avatar> {
  seed: string
}
const Avatar: React.FC<AvatarProps> = ({ seed, size, ring, className }) => {
  return <Image
    loader={DiceLoader}
    src={seed}
    width={500}
    height={500}
    className={avatar({
      size,
      ring,
      class:
      className
    })}
    alt="User Avatar" />
}

export default Avatar