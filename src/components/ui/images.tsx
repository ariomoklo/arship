
import { cva, type VariantProps } from 'class-variance-authority'
import defaultAvatar from './../../../public/img/default-avatar.png'
import Image, { ImageProps } from 'next/image'

export const avatar = cva(
  "inline-block", {
    variants: {
      size: {
        small: "h-8 w-8",
        normal: "h-10 w-10",
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
  seed?: string
}
export const Avatar: React.FC<AvatarProps> = ({ seed, size, ring, className }) => {
  if (!seed) {
    return <Image
      src={defaultAvatar}
      className={avatar({
        size,
        ring,
        class:
        className
      })}
      alt="User Avatar" />
  }

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

export interface ImgProps extends ImageProps, VariantProps<typeof avatar> {}
export const Img = ({ src, size, ring, className, alt, ...props }: ImgProps) => {
  return <Image
    src={src}
    className={avatar({
      size: size,
      ring: ring,
      class: className
    })}
    alt={alt ?? 'App Icon'}
    {...props} />
}