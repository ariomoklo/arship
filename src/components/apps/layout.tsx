import Link from "next/link"
import { useRouter } from "next/router"
import Avatar from "../ui/avatar"
import { PrivateLayout } from "../ui/layout"

export const AppHeader = () => {
  return (
    <div className="flex gap-4 p-4">
      <ul className="grow flex gap-2 items-center list-none">
        <li className="block">
          <Avatar />
        </li>
        <li className="block text-xl text-primary-500 hover:text-primary-500/50">
          <Link href="/groups/pia-dev">pia-dev</Link>
        </li>
        <li className="block text-xs text-base-500">/</li>
        <li className="block text-xl text-primary-500 hover:text-primary-500/50 font-medium">
          <Link href="/apps/PIA">PIA</Link>
        </li>
      </ul>
    </div>
  )
}


export interface AppLayoutProps extends React.HTMLAttributes<HTMLButtonElement> {
  pageTitle: string
}
export const AppLayout: React.FC<AppLayoutProps> = ({ children, pageTitle }) => {
  const router = useRouter()
  const { code } = router.query
  return (
    <PrivateLayout
      pageTitle={`${code}: ${pageTitle}`}
      pageDesc={`${code} application ${pageTitle.toLowerCase()}`}
    >
      <AppHeader />
      
      {children}

      <span className="block mb-48"></span>
    </PrivateLayout>
  )
}