import type { NextPage } from "next";
import { useRouter } from "next/router";
import { AppLayout } from "../../../components/apps/layout";
import { Button } from "../../../components/ui/button";
import { FileDownload, Links } from "../../../components/ui/icons";

const AppDetail: NextPage = () => {
  const router = useRouter()
  const { code } = router.query
  return (
    <AppLayout pageTitle="Main">
      <div className="flex gap-4">
        <div className="grow prose dark:prose-invert max-w-none w-full p-4">
          <h1 className="mb-0">{code} Application</h1>
          <a href="http://pia.telkomsigma.co.id" className="inline-flex items-center gap-1 text-link/75 hover:text-link/50 no-underline">
            <Links className="inline-block h-5 w-5"/>
            <span>[VPN] pia.telkomsigma.co.id</span>
          </a>
          <p><span className="text-primary-500">Ini Deskripsi. Bisa di isi macem-macem. edit pake wysiwyg</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nulla pariatur, minima magnam magni ipsum molestias aliquid consequatur cum, quam placeat suscipit illum fugiat recusandae, temporibus excepturi nesciunt amet! Tenetur magnam, atque amet ut id perspiciatis fugit voluptatibus? Cupiditate labore repellat, non dolor expedita illo. Amet eveniet mollitia suscipit ipsam?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nulla pariatur, minima magnam magni ipsum molestias aliquid consequatur cum, quam placeat suscipit illum fugiat recusandae, temporibus excepturi nesciunt amet! Tenetur magnam, atque amet ut id perspiciatis fugit voluptatibus? Cupiditate labore repellat, non dolor expedita illo. Amet eveniet mollitia suscipit ipsam?</p>
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
          </ul>

          <span className="block w-full py-2"></span>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quod minus labore aliquam iste provident? Ad sequi eveniet illum repellendus nulla iusto aut! Facilis, commodi corporis quae illo mollitia unde.</p>
        </div>
      </div>
    </AppLayout>
  )
}

export default AppDetail