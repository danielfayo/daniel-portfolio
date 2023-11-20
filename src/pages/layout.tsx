import Nav from "@/components/Nav";
import localFont from 'next/font/local'

const myFont = localFont({ src: '../fonts/ClashDisplay-Variable.ttf' })


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className={`${myFont.className}`}>
        <Nav />
        {children}
      </main>
    </>
  );
}
