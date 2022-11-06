import type { NextPage } from "next";

const Nav: NextPage = () => {
  return (
    <nav className="py-4">
      <div className="flex justify-between max-w-[125ch] w-full mx-auto">
        <div className="grow font-bukit-bulan w-full">
          <h1 className="text-3xl text-brand">Arship</h1>
        </div>
        <div className="flex flex-none gap-4 justify-end items-center">
          <button className="px-4 py-2 border-b-transparent hover:border-b-black dark:hover:border-b-white border-b-2">Ario Widiatmoko</button>
        </div>
      </div>
    </nav>
  )
}

export default Nav