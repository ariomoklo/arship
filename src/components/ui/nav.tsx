import { useRouter } from "next/router"

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
  return (
    <nav className="my-4 border-b border-b-base-800">
      <section className="flex justify-between content mb-4">
        <div className="grow font-bukit-bulan w-full">
          <h1 className="text-3xl text-brand">Arship</h1>
        </div>
      </section>
      <section className="flex justify-between content">
        <div className="flex -mb-px">
          <NavTabItem text="Feeds" href="/" />
          <NavTabItem text="Apps" href="/apps" />
          <NavTabItem text="Settings" href="/settings" />
        </div>
        <div className="flex justify-between items-center">
          <svg width="32" height="32" viewBox="0 0 24 24" className="flex-none w-4 h-4 inline-block -m-6 z-10">
            <path fill="currentColor" d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7c-3.868 0-7 3.132-7 7c0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/>
          </svg>
          <input type="text" className="transition-all ease-out duration-200 grow dark:bg-base-800 bg-base-50 focus:bg-transparent text-xs border-none text-right z-0 w-32 focus:w-64" placeholder="search" />
        </div>
      </section>
    </nav>
  )
}