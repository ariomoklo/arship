import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Nav } from "./../components/ui/nav"
import patterns from "./../components/patterns.module.css"

// import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  // const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Arship: Feeds</title>
        <meta name="description" content="Your arship activity feeds" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Nav />
        <div className="flex relative justify-center items-center bg-gradient-to-b from-primary-700 dark:from-primary-800 via-primary-300 dark:via-primary-900 h-[25vh] overflow-hidden">
          <div className={[`absolute w-full h-[35vh] z-0`, patterns.circuitDark].join(' ')}></div>
          <main className="content prose p-4 z-10">
            <p className="text-3xl text-base-900 dark:text-white font-bold mt-0 mb-8">Headless CMS for documenting<br />your corporate application development</p>
          </main>
        </div>
        <section className="content flex flex-col items-center w-full my-4">
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
        </section>
      </div>
    </>
  );
};

export default Home;

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();
//   const isLoggedIn = () => sessionData?.user !== undefined;
//   const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
//     undefined, { enabled: isLoggedIn() },
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-2">
//       {sessionData && (
//         <p className="text-2xl text-blue-500">
//           Logged in as {sessionData?.user?.name}
//         </p>
//       )}
//       {secretMessage && (
//         <p className="text-2xl text-blue-500">{secretMessage}</p>
//       )}
//       <Button intent="primary"
//         onClick={sessionData ? () => signOut() : () => signIn()}
//       >
//         {isLoggedIn() ? "Sign out" : "Sign in"}
//       </Button>
//     </div>
//   );
// };

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const TechnologyCard = ({
  name,
  description,
  documentation,
}: TechnologyCardProps) => {
  return (
    <section className="flex flex-col justify-center rounded border-2 border-gray-500 p-6 shadow-xl duration-500 motion-safe:hover:scale-105">
      <h2 className="text-lg text-gray-700">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <Link
        className="m-auto mt-3 w-fit text-sm text-violet-500 underline decoration-dotted underline-offset-2"
        href={documentation}
        target="_blank"
        rel="noreferrer"
      >
        Documentation
      </Link>
    </section>
  );
};
