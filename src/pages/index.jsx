import SideBar from "@/components/SideBar";
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
        className={`flex min-h-screen flex-col items-center justify-between 
        bg-neutral-900 p-24`}
      >
        <h1>Hello</h1>
        <SideBar />
      </main>
    </>
  )
}
