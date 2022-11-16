import { type NextPage } from "next";
import Hero from "./../components/landing/hero"
import { useSession } from "next-auth/react";
import FeedItem from "../components/feed/feed-item";
import type { User } from "next-auth";
import { Layout, Loader } from "../components/ui/layout";

// import { trpc } from "../utils/trpc";

const Landing: React.FC = () => {
  return (
    <Layout pageTitle="Arship" pageDesc="Headless CMS for documenting your corporate application development">
      <Hero />
      <div className="flex flex-col items-center my-4">
        <div className="my-12">
          <p className="text-3xl font-bold">co-work made easy</p>
          <p>From design, development, to support.</p>
        </div>

        <div className="grid grid-cols-3 gap-4 w-full my-8">
          <div className="prose text-center flex flex-col items-center w-full min-h-[150px] p-4">
            <h5 className="capitalize font-medium text-lg">Link Dictionary</h5>
            <p className="m-0">Save your link related resource in one place.</p>
          </div>
          <div className="prose text-center flex flex-col items-center w-full min-h-[150px] p-4">
            <h5 className="capitalize font-medium text-lg">App Media Group</h5>
            <p className="m-0">Manage media easily grouped by application</p>
          </div>
          <div className="prose text-center flex flex-col items-center w-full min-h-[150px] p-4">
            <h5 className="capitalize font-medium text-lg">Controlled Access</h5>
            <p className="m-0">Easily give access all or partial access to user</p>
          </div>
          <div className="prose text-center flex flex-col items-center w-full min-h-[150px] p-4">
            <h5 className="capitalize font-medium text-lg">Opiniated Role</h5>
            <p className="m-0">Focus being creative and not managing team</p>
          </div>
          <div className="prose text-center flex flex-col items-center w-full min-h-[150px] p-4">
            <h5 className="capitalize font-medium text-lg">Easy Documenting</h5>
            <p className="m-0">Think only write your document, publish anywhere using our api</p>
          </div>
          <div className="prose text-center flex flex-col items-center w-full min-h-[150px] p-4">
            <h5 className="capitalize font-medium text-lg">Auto API Docs</h5>
            <p className="m-0">Only design your api scheme, <br />let we write your docs. </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const Home: NextPage = () => {
  // const hello = trpc.example.hello.useQuery({ text: "from tRPC" });
  
  const { data: session, status } = useSession()
  const title = "Arship: Feeds"
  const desc = "Arship activity feeds"

  if (status === "unauthenticated") {
    return <Landing />
  }

  if (status === "authenticated") {
    return (
      <Layout pageTitle={title} pageDesc={desc} className="content w-full my-8">
        {[0, 1, 2, 3, 4, 5].map(item => <FeedItem user={session.user as User} key={item}/>)}
      </Layout>
    )
  }

  return  <Loader />
};

export default Home;
