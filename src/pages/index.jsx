import SideBar from "@/components/SideBar";
import TitlePanel from "@/components/TitlePanel";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Focum</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`flex  min-h-screen bg-neutral-900`}
      >
        <SideBar />

        {/*Main part*/}
        <div
          className={`flex flex-col items-center justify-between w-full h-full
            p-4
          `}
        >
          <TitlePanel
            title={"Look at that!"}
            description={"Help! I can't stop looking!"}
          />

        </div>
      </main>
    </>
  )
}
