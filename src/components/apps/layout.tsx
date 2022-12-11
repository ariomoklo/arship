import Link from "next/link"
import { useRouter } from "next/router"
import type { apps } from "../../server/db/mock"
import { trpc } from "../../utils/trpc"
import { Img } from "../ui/images"
import { PrivateLayout } from "../ui/layout"

type app = typeof apps[0]

export const AppHeader = ({ app }: { app?: app }) => {

  if (!app) return <></>
  return (
    <div className="flex gap-4 p-4">
      <ul className="grow flex gap-2 items-center list-none">
        <li className="block">
          <Img src={app.icon} size="normal" alt={app.name} width={1080} height={1080} />
        </li>
        <li className="block text-xl text-primary-500 hover:text-primary-500/50">
          <Link href={`/groups/${app.group.name}`}>{app.group.name}</Link>
        </li>
        <li className="block text-xs text-base-500">/</li>
        <li className="block text-xl text-primary-500 hover:text-primary-500/50 font-medium">
          <Link href={`/apps/${app.code}`}>{app.code}</Link>
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
  const app = trpc.apps.get.useQuery(code as string)
  if (app.isError) {
    router.push('/apps')
  }

  return (
    <PrivateLayout
      pageTitle={`${code}: ${pageTitle}`}
      pageDesc={`${code} application ${pageTitle.toLowerCase()}`}
    >
      
      { app.isFetched && <AppHeader app={app.data as app} /> }
      {children}

      <span className="block mb-48"></span>
    </PrivateLayout>
  )
}