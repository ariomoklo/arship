
import type { NextPage } from "next";
import Link from "next/link";
import Avatar from "../../components/ui/avatar";
import { PrivateLayout } from "../../components/ui/layout";


const Card = (props: { name: string, code: string, group?: string }) => {
  return (
    <Link href={`/apps/${props.code}`} className="flex gap-4 items-center w-full bg-base-500/10 hover:bg-primary-500/50 cursor-pointer overflow-hidden">
      <div className="flex-none prose prose-2xl">
        <Avatar size="custom" className="w-28 h-28" />
      </div>
      <div className="grow py-4 pl-2 pr-4">
        <div className="flex gap-2 items-center mb-2">
          <span className="py-1 px-2 text-xs bg-primary-500/50">{ props.group ?? 'global' }</span>
          <h2 className="m-0 leading-tight text-2xl">{props.code}</h2>
        </div>
        <p className="m-0 text-xs text-base-600 dark:text-base-400">{props.name}</p>
      </div>
      <div className="flex-none flex flex-col p-4 gap-1">
        <p className="text-xs text-base-500 text-right">3 colaborator(s)</p>
        <p className="text-xs text-base-500 text-right">created at 20 Oct 2022</p>
        <p className="text-xs text-base-500 text-right">by ario widiatmoko</p>
      </div>
    </Link>
  )
}

const APPS: NextPage = () => {
  return (
    <PrivateLayout
      pageTitle="Apps"
      pageDesc="Registered application">
        <div className="flex flex-col gap-4 my-8">

          {[1, 2, 3, 4, 5].map(i => <Card key={i} name="Project Implementation Application" code="PIA" group={i===2 ? "pia-dev":undefined} />)}

        </div>
    </PrivateLayout>
  )
}

export default APPS;