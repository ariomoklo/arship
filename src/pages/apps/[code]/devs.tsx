import type { NextPage } from "next";
import { AppLayout } from "../../../components/apps/layout";

const AppDevs: NextPage = () => {
  return (
    <AppLayout pageTitle="Devs">
      <div className="flex gap-4">
        <div className="grow prose dark:prose-invert max-w-none w-full p-4">
          <h3>Information</h3>
          <p>Here show project information like git repo, task management site, current production version, servers link, and etc.</p>
          
          <h3>Team</h3>
          <p>Here showing list of team member and roles</p>
          
          <h3>Timeline</h3>
          <p>Here showing list of cr sort by target date.</p>

          <h3>Features Notes</h3>
          <p>Devs team can add notes abount app features logic and etc. And can be tagged to spesific version update or change request. this feature to help developer add notes that easy to search when in need.</p>
        </div>
        <div className="flex-none w-56">

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