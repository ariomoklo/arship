import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { Button } from "./button"
import { ISearchLine } from "./icons"
import ProfileMenu from "../profile-menu"

function NavTabItem ({ text, href }: { text: string, href: string}) {
  const router = useRouter()

  return <a
    href={href}
    className={`leading-none
    px-4 pb-4 pt-2 text-sm
    ${router.asPath === href ? 'border-b-primary-500':'border-b-transparent'}
    ${router.asPath === href ? 'hover:border-b-primary-700':'hover:border-b-base-500'}
    border-b`}>{text}</a>
} 

export function Nav () {
  const { data: session } = useSession()
  const isLoggedIn = () => session?.user !== undefined

  return (
    <nav className="my-4 border-b border-b-base-200 dark:border-b-base-800">
      <section className="flex justify-between content mb-4">
        <div className="grow font-bukit-bulan w-full">
          <h1 className="text-3xl text-brand">Arship</h1>
        </div>
        <div className="flex">
          { isLoggedIn() ? <ProfileMenu/> : <Button onClick={() => signIn()}>Sign-In</Button> }
        </div>
      </section>

      { isLoggedIn() && (
        <section className="flex justify-between content">
        <div className="flex -mb-px">
          <NavTabItem text="Feeds" href="/" />
          <NavTabItem text="Apps" href="/apps" />
          <NavTabItem text="Settings" href="/settings" />
        </div>
        <div className="flex justify-between items-center z-0">
          <ISearchLine className="flex-none w-4 h-4 inline-block -m-6 z-10" />
          <input type="text" className="transition-all ease-in-out duration-400 grow dark:bg-base-800 bg-base-100 text-xs border-none text-right z-0 w-32 focus:w-64" placeholder="search" />
        </div>
      </section>
      ) }
    </nav>
  )
}