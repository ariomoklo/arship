
import type { NextPage } from "next";
import Link from "next/link";
import { Img } from "../../components/ui/images";
import { PrivateLayout } from "../../components/ui/layout";
import { trpc } from "../../utils/trpc";
import dayjs from "../../utils/dayjs";
import type { apps } from "../../server/db/mock";


declare type AppCardProps = typeof apps[0]

const Card = (props: AppCardProps) => {
  return (
    <Link href={`/apps/${props.code}`} className="flex gap-4 items-center w-full bg-base-500/10 hover:bg-primary-500/50 cursor-pointer overflow-hidden">
      <div className="flex-none prose prose-2xl">
        <Img size="custom" className="w-24 h-24 m-2" alt={props.name} src={props.icon} width={1080} height={1080} />
      </div>
      <div className="grow py-4 pl-2 pr-4">
        <div className="flex gap-2 items-center mb-2">
          <span className="py-1 px-2 text-xs bg-primary-500/50">{ props.group.name ?? 'global' }</span>
          <h2 className="m-0 leading-tight text-2xl">{props.code}</h2>
        </div>
        <p className="m-0 text-xs text-base-600 dark:text-base-400">{props.name}</p>
      </div>
      <div className="flex-none flex flex-col p-4 gap-1">
        <p className="text-xs text-base-500 text-right">{props.collabs.length } colaborator(s)</p>
        <p className="text-xs text-base-500 text-right">created at {dayjs(props.created).format('DD MMM YYYY')}</p>
        <p className="text-xs text-base-500 text-right">by {props.createdBy.name}</p>
      </div>
    </Link>
  )
}

const APPS: NextPage = () => {
  const apps = trpc.apps.all.useQuery()
  return (
    <PrivateLayout
      pageTitle="Apps"
      pageDesc="Registered application">
        <div className="flex flex-col gap-4 my-8">

          {apps.data?.map((app, i) => <Card key={i} {...app} />)}

        </div>
    </PrivateLayout>
  )
}

export default APPS;