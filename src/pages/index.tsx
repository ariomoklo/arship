import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Nav } from "./../components/ui/nav"
import { signIn, signOut, useSession } from "next-auth/react";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Arship: Feeds</title>
        <meta name="description" content="Your arship activity feeds" />
      </Head>

      <div className="flex flex-col justify-between min-h-screen">
        <Nav />
        <main className="content flex grow flex-col items-center justify-center p-4">
          <h1 className="text-5xl font-extrabold leading-normal md:text-[5rem]">
            Create <span className="text-primary-500 text-brand">Arship</span> App
          </h1>
          <div className="flex w-full items-center justify-center py-6 text-2xl text-primary-500">
            {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
          </div>
          <AuthShowcase />
        </main>
      </div>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();
  const isLoggedIn = () => sessionData?.user !== undefined;
  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
    undefined, { enabled: isLoggedIn() },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {sessionData && (
        <p className="text-2xl text-blue-500">
          Logged in as {sessionData?.user?.name}
        </p>
      )}
      {secretMessage && (
        <p className="text-2xl text-blue-500">{secretMessage}</p>
      )}
      <button
        className="rounded-md border border-black px-4 py-2 text-xl shadow-lg hover:bg-primary-500 hover:text-black"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {isLoggedIn() ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};

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
