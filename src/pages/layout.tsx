import Nav from "@/components/Nav";
import localFont from 'next/font/local'
import Head from "next/head";

const myFont = localFont({ src: '../fonts/ClashDisplay-Variable.ttf' })


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className={`${myFont.className}`}>
      <Head>
        <title>Daniel Olufayokunmi</title>
      </Head>
        <Nav />
        {children}
      </main>
    </>
  );
}
