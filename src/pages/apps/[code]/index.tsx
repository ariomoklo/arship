import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { AppLayout } from "../../../components/apps/layout";
import Avatar from "../../../components/ui/avatar";
import { Button } from "../../../components/ui/button";
import { FileDownload, Links, Pencil } from "../../../components/ui/icons";

const AppDetail: NextPage = () => {
  const router = useRouter()
  const { code } = router.query

  return (
    <AppLayout pageTitle="Main">
      
      <div className="flex gap-4">
      
      <div className="grow prose dark:prose-invert max-w-none w-full p-4">
        
        <div className="flex justify-between">
          <div className="grow">
            <h1 className="mb-0">{code} Application</h1>
            <a href="http://pia.telkomsigma.co.id" className="inline-flex items-center gap-1 text-link/75 hover:text-link/50 no-underline">
              <Links className="inline-block h-5 w-5"/>
              <span>[VPN] pia.telkomsigma.co.id</span>
            </a>
          </div>
          <div className="flex-none">
            <Pencil className="block w-10 h-10 p-2 rounded-md cursor-pointer hover:bg-base-500/50" />
          </div>
        </div>

        <p><span className="text-primary-500">Ini Deskripsi. Bisa di isi macem-macem. edit pake wysiwyg</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nulla pariatur, minima magnam magni ipsum molestias aliquid consequatur cum, quam placeat suscipit illum fugiat recusandae, temporibus excepturi nesciunt amet! Tenetur magnam, atque amet ut id perspiciatis fugit voluptatibus? Cupiditate labore repellat, non dolor expedita illo. Amet eveniet mollitia suscipit ipsam?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nulla pariatur, minima magnam magni ipsum molestias aliquid consequatur cum, quam placeat suscipit illum fugiat recusandae, temporibus excepturi nesciunt amet! Tenetur magnam, atque amet ut id perspiciatis fugit voluptatibus? Cupiditate labore repellat, non dolor expedita illo. Amet eveniet mollitia suscipit ipsam?</p>

        <h2>Change Request</h2>

        <div className="grid grid-cols-3 gap-2 not-prose">

          <div className="w-full bg-base-500/10 p-4">
            <h3 className="m-0 -mb-2 text-lg text-primary-500 hover:text-primary-500/50">
              <Link href={`/apps/${code}/cr/00110201201`}>CR 002 2022</Link>
            </h3>
            <p className="text-base-500">Project Issue</p>
            <p className="text-xs">Owner: Mas Burhan</p>
            <p className="text-xs">Engineer: Ario Widiatmoko</p>
          </div>
          <div className="w-full bg-base-500/10 p-4">
            <h3 className="m-0 -mb-2 text-lg text-primary-500 hover:text-primary-500/50">
              <Link href={`/apps/${code}/cr/00110201201`}>CR 002 2022</Link>
            </h3>
            <p className="text-base-500">Project Issue</p>
            <p className="text-xs">Owner: Mas Burhan</p>
            <p className="text-xs">Engineer: Ario Widiatmoko</p>
          </div>
          <div className="w-full bg-base-500/10 p-4">
            <h3 className="m-0 -mb-2 text-lg text-primary-500 hover:text-primary-500/50">
              <Link href={`/apps/${code}/cr/00110201201`}>CR 002 2022</Link>
            </h3>
            <p className="text-base-500">Project Issue</p>
            <p className="text-xs">Owner: Mas Burhan</p>
            <p className="text-xs">Engineer: Ario Widiatmoko</p>
          </div>
          <div className="w-full bg-base-500/10 p-4">
            <h3 className="m-0 -mb-2 text-lg text-primary-500 hover:text-primary-500/50">
              <Link href={`/apps/${code}/cr/00110201201`}>CR 002 2022</Link>
            </h3>
            <p className="text-base-500">Project Issue</p>
            <p className="text-xs">Owner: Mas Burhan</p>
            <p className="text-xs">Engineer: Ario Widiatmoko</p>
          </div>
          <div className="w-full bg-base-500/10 p-4">
            <h3 className="m-0 -mb-2 text-lg text-primary-500 hover:text-primary-500/50">
              <Link href={`/apps/${code}/cr/00110201201`}>CR 002 2022</Link>
            </h3>
            <p className="text-base-500">Project Issue</p>
            <p className="text-xs">Owner: Mas Burhan</p>
            <p className="text-xs">Engineer: Ario Widiatmoko</p>
          </div>
          <div className="w-full bg-base-500/10 p-4">
            <h3 className="m-0 -mb-2 text-lg text-primary-500 hover:text-primary-500/50">
              <Link href={`/apps/${code}/cr/00110201201`}>CR 002 2022</Link>
            </h3>
            <p className="text-base-500">Project Issue</p>
            <p className="text-xs">Owner: Mas Burhan</p>
            <p className="text-xs">Engineer: Ario Widiatmoko</p>
          </div>

        </div>
      </div>

      <div className="flex-none w-56">

        <Button intent="success" className="w-full">Add Change Request</Button>

        <hr className="my-4 border-t-base-500/50" />

        <h3 className="underline underline-offset-4 decoration-2 decoration-primary-500 mb-2">Documents</h3>
        <ul className="list-none">
          <li className="text-xs hover:bg-base-500">
            <a href="#" className="m-1 inline-flex items-center gap-2 w-full">
              <Links className="w-5 h-5 inline-block" />
              <span>Figma: CR 002 2022</span>
            </a>
          </li>
          <li className="text-xs hover:bg-base-500">
            <a href="#" className="m-1 inline-flex items-center gap-2 w-full">
              <FileDownload className="w-5 h-5 inline-block" />
              <span>CR 002 2022</span>
            </a>
          </li>
          <li>
            <Button href={`/apps/${code}/docs`} intent="secondary" size="small" className="w-full mt-2">See All</Button>
          </li>
        </ul>

        <span className="block w-full py-2"></span>

        <h3 className="underline underline-offset-4 decoration-2 decoration-primary-500 mb-4">Colaborators</h3>
        <ul className="list-none">
          <li className="flex gap-2 items-center m-2">
            <Avatar seed="ario" className="rounded-xl" size="small" />
            <div className="grow text-xs">
              <p className="m-0 leading-tight">Ario Widiatmoko</p>
              <p className="text-base-500/75">Front-end Engineer</p>
            </div>
          </li>
          <li className="flex gap-2 items-center m-2">
            <Avatar seed="rigen" className="rounded-xl" size="small" />
            <div className="grow text-xs">
              <p className="m-0 leading-tight">Rigen Wildanu Hadadi</p>
              <p className="text-base-500/75">Back-end Engineer</p>
            </div>
          </li>
          <li className="flex gap-2 items-center m-2">
            <Avatar seed="zaid" className="rounded-xl" size="small" />
            <div className="grow text-xs">
              <p className="m-0 leading-tight">Muhammad Zaid Billah</p>
              <p className="text-base-500/75">Support</p>
            </div>
          </li>
          <li className="flex gap-2 items-center m-2">
            <Avatar seed="yusran" className="rounded-xl" size="small" />
            <div className="grow text-xs">
              <p className="m-0 leading-tight">Mas Yusran</p>
              <p className="text-base-500/75">QA Engineer</p>
            </div>
          </li>
          <li className="flex gap-2 items-center m-2">
            <Avatar seed="burhan" className="rounded-xl" size="small" />
            <div className="grow text-xs">
              <p className="m-0 leading-tight">Mas Burhan</p>
              <p className="text-base-500/75">Business Analyst</p>
            </div>
          </li>
          <li>
            <Button intent="secondary" size="small" className="w-full mt-2">Send Invite</Button>
          </li>
        </ul>
      </div>
    </div>

    </AppLayout>
  )
}

export default AppDetail