import { Inter } from 'next/font/google'
import Link from 'next/link'
import React from "react";
import ContactPortal from "../components/ContactPortal";
import LogoutBtn from "../components/LogoutBtn";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <ContactPortal />
      <h1 className='header'>Welcome,</h1>
      <h2 className='header2'>This is where your contacts will live. Click the button below <br></br> to add a new contact.</h2>
      <Link href="/contacts">add your first contact</Link>
      <LogoutBtn />
    </>
  )
}
