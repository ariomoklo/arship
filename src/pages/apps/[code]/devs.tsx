import type { NextPage } from "next";
import { AppLayout } from "../../../components/apps/layout";
import { Button } from "../../../components/ui/button";

const AppDevs: NextPage = () => {
  return (
    <AppLayout pageTitle="Devs">
      <div className="flex gap-4">
        <div className="grow prose dark:prose-invert max-w-none w-full p-4">

          <h3>Onboarding</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, aliquam, commodi nihil, explicabo molestiae aperiam neque minus et consequatur laborum vero quaerat? Sunt odit tenetur fugit placeat, assumenda odio quas.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus iste dolores vero maxime earum. Optio repellat illum amet doloribus sed et. Nulla eligendi consectetur ex pariatur? Cumque non fugiat quasi rerum temporibus blanditiis voluptatum minus perspiciatis velit a, dolor reiciendis aut assumenda consequuntur harum culpa dicta totam voluptates doloremque quam.</p>

          <h3>REST API</h3>
          <p>Table with pages of documentation about rest api</p>

          <h3>DevLog</h3>
          <p>[Table] Devs team can add notes abount app features logic and etc. And can be tagged to spesific version update or change request. this feature to help developer add notes that easy to search when in need.</p>
        </div>
        <div className="flex-none w-56">

          <Button intent="success" className="w-full">Add Changelog</Button>

          <hr className="my-4 border-t-base-500/50" />

          <h3 className="underline underline-offset-4 decoration-2 decoration-primary-500 mb-2">Changelogs</h3>
          <ul className="list-none">
            <li className="text-xs hover:bg-base-500">
              <a href="#" className="m-1 inline-flex items-center gap-2 w-full">
                <span>v2.3.5: 18 Oct 2022</span>
              </a>
            </li>
            <li className="text-xs hover:bg-base-500">
              <a href="#" className="m-1 inline-flex items-center gap-2 w-full">
                <span>v2.3.4: 1 Aug 2022</span>
              </a>
            </li>
            <li className="text-xs hover:bg-base-500">
              <a href="#" className="m-1 inline-flex items-center gap-2 w-full">
                <span>v2.3.3: 23 Jun 2022</span>
              </a>
            </li>
          </ul>
          
        </div>
      </div>
    </AppLayout>
  )
}

export default AppDevs