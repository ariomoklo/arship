
import type { NextPage } from "next";
import { PrivateLayout } from "../../components/ui/layout";


const Card = (props: { name: string, code: string }) => {
  return (
    <div className="flex gap-4 items-center w-full p-4 bg-base-500/10 border border-bg-base-500 rounded-md hover:bg-primary-500/50 hover:scale-105 transition-all cursor-pointer">
      <div className="flex-none prose prose-2xl">
        <span>#</span>
      </div>
      <div className="grow">
        <h2 className="m-0 leading-tight text-2xl">{props.code}</h2>
        <p className="m-0 text-xs">{props.name}</p>
      </div>
    </div>
  )
}

const APPS: NextPage = () => {
  return (
    <PrivateLayout
      pageTitle="Apps"
      pageDesc="Registered application">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 my-8">

          {[1, 2, 3, 4, 5].map(i => <Card key={i} name="Project Implementation Application" code="PIA" />)}

        </div>
    </PrivateLayout>
  )
}

export default APPS;