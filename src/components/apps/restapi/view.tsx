import * as Dropdown from '../../ui/dropdown'
import { useState } from 'react'
import { ArrowDropDownLine, CircleFill, ExchangeLine, FolderLine, PlayMiniFill } from '../../ui/icons'
import { Button } from '../../ui/button'

const EnvSelector = ({ state, options, onSelect }: { state: RestApiEnv | undefined, options: Array<RestApiEnv>, onSelect: (v: RestApiEnv) => void }) => {
  return (
    <Dropdown.Root
      align='start'
      trigger={(
        <p className='text-sm m-0 inline-flex items-center gap-4 bg-base-500/50 hover:bg-base-500'>
          <span className='uppercase px-4 py-2 bg-primary-500'>env</span>
          <span>{state?.id}</span>
          <ArrowDropDownLine className='w-5 h-5 mr-2' />
        </p>
      )}
    >
      {options.map((item, idx) => <Dropdown.Item key={`env-select-${idx}`} onClick={() => onSelect(item)}>
        <span className='text-sm px-1 mr-2 rounded-md bg-primary-500'>{ item.id }</span>
        <span>{ item.baseurl }</span>
      </Dropdown.Item>)}
    </Dropdown.Root>
  )
}

const RestApiView = () => {

  const env: Array<RestApiEnv> = [
    { id: 'prod', baseurl: "apigw.telkomsigma.co.id/pia/apiPrd"},
    { id: 'dev', baseurl: "apigwsand.telkomsigma.co.id/pia/apiDev"}
  ]
  const [state, setState] = useState(env.at(0))

  return <article className="not-prose flex flex-col w-full">

    <nav className="flex justify-between items-center w-full mb-4">
      <div className="grow">
        <EnvSelector state={state} options={env} onSelect={(v) => setState(v)} />
      </div>

      <div className='flex'>
        <Button intent="success" className='flex items-start gap-2 pr-4 pl-2 py-2 text-sm' size="custom">
          <PlayMiniFill className='inline w-5 h-5'/>
          <span>Test</span>
        </Button>
        <Dropdown.Root
          align='end'
          trigger={(
            <p className='px-2 py-2 bg-emerald-500/40 text-base-900 dark:text-white hover:bg-emerald-500'>
              <ArrowDropDownLine className='w-5 h-5' />
            </p>
          )}
        >
          <Dropdown.Item>Edit Test Script</Dropdown.Item>
          <Dropdown.Item>See Test History</Dropdown.Item>
        </Dropdown.Root>
      </div>
    </nav>

    <main className="text-xs border border-base-500/50">
      <header className="flex items-center justify-between px-4 py-2 bg-base-500/50">
        <span>{state?.baseurl}/</span>
        <span>9 days ago</span>
      </header>

      <div className="flex items-center gap-2 px-2 py-2 border-b group border-b-base-500/50 hover:bg-base-500/25 cursor-pointer">
        <p className='grow group-hover:text-primary-500'>{'< ...'}</p>
      </div>

      <div className="flex items-center gap-2 px-2 py-2 border-b border-b-base-500/50 hover:bg-base-500/25 cursor-pointer">
        <CircleFill className='w-2 h-2 text-emerald-500' />
        <FolderLine className='w-4 h-4' />
        <p className='grow'>projects/</p>
        <div className="flex flex-none gap-1">
          <span className="px-1 text-xs bg-base-500">10 Endpoints</span>
        </div>
      </div>
      
      <div className="flex items-center gap-2 px-2 py-2 border-b border-b-base-500/50 hover:bg-base-500/25 cursor-pointer">
        <CircleFill className='w-2 h-2 text-rose-500' />
        <FolderLine className='w-4 h-4' />
        <p className='grow'>workplan/</p>
        <div className="flex flex-none gap-1">
          <span className="px-1 text-xs bg-base-500">5 Endpoints</span>
        </div>
      </div>

      <div className="flex items-center gap-2 px-2 py-2 border-b border-b-base-500/50 hover:bg-base-500/25 cursor-pointer">
        <CircleFill className='w-2 h-2 text-base-500' />
        <ExchangeLine className='w-4 h-4'/>
        <p className='grow'>login/</p>
        <div className="flex flex-none gap-1">
          <span className="px-1 text-xs bg-green-700">POST</span>
        </div>
      </div>

      <div className="flex items-center gap-2 px-2 py-2 hover:bg-base-500/25 cursor-pointer">
        <CircleFill className='w-2 h-2 text-yellow-500' />
        <ExchangeLine className='w-4 h-4'/>
        <p className='grow'>me/</p>
        <div className="flex flex-none gap-1">
          <span className="px-1 text-xs bg-blue-600">GET</span>
        </div>
      </div>
    </main>

  </article>
}

export default RestApiView