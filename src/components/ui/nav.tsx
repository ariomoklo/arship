import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { Button } from "./button"
import { ISearchLine } from "./icons"
import ProfileMenu from "../profile-menu"
import { useKeyPress } from "../../utils/keypress"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"

function NavTabItem ({ text, href }: { text: string, href: string}) {
  const router = useRouter()

  return <Link
    href={href}
    className={`leading-none
    px-4 pb-4 pt-2 text-sm
    ${router.asPath === href ? 'border-b-primary-500':'border-b-transparent'}
    ${router.asPath === href ? 'hover:border-b-primary-700':'hover:border-b-base-500'}
    border-b`}>{text}</Link>
} 

export function Nav () {
  const { data: session } = useSession()
  const isLoggedIn = () => session?.user !== undefined
  const searchInput = useRef<HTMLInputElement>(null)

  useKeyPress({ char: 'k', ctrl: true, alt: true }, () => {
    searchInput.current?.focus()
  })

  useKeyPress({ char: 'Escape' }, () => {
    searchInput.current?.blur()
  }, searchInput.current ?? null)

  const router = useRouter()
  const [isPageLoad, setPageLoad] = useState(false)
  
  useEffect(() => {
    const handleStart = () => setPageLoad(true)
    const handleStop = () => setPageLoad(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <nav className="mt-4 border-b border-b-base-200 dark:border-b-base-800">
      <section className="flex justify-between content mb-2">
        <div className="grow flex items-center gap-3 font-bukit-bulan w-full">
          <h1 className="text-3xl text-brand">Arship</h1>
          <AnimatePresence>
            {isPageLoad && (
              <motion.svg
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                width="32" height="32" viewBox="0 0 24 24" className="animate-spin w-7 h-7 inline-block text-base-500"
              >
                <path fill="currentColor" d="M5.463 4.433A9.961 9.961 0 0 1 12 2c5.523 0 10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 0 0 6.46 6.228l-.997-1.795zm13.074 15.134A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0 0 13.54 5.772l.997 1.795z"/>
              </motion.svg>
            )}
          </AnimatePresence>
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
          <NavTabItem text="Groups" href="/groups" />
        </div>
        <div className="flex justify-between items-center z-0">
          <ISearchLine className="flex-none w-4 h-4 inline-block -m-6 z-10" />
          <input ref={searchInput} type="text" className="transition-all ease-in-out duration-400 grow dark:bg-base-800 bg-base-100 text-xs border-none text-right z-0 w-44 focus:w-64" placeholder="search (ctrl+alt+k)" />
        </div>
      </section>
      ) }
    </nav>
  )
}