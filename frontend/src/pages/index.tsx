import LeftBg from '@/components/LeftBg';
import RightBg from '@/components/RightBg';
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect } from "react";
import ContactPortal from "../components/ContactPortal";
import LogoutBtn from "../components/LogoutBtn";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = true; 
    if (!isLoggedIn) {
      router.replace('/login');
    }
  }, []);
  
  return (
    <>
    <RightBg />
      <ContactPortal />
      <div style={{paddingLeft: '100px', paddingTop: '5%'}}>
        <h1 className='header'>Welcome,</h1>
        <h2 className='header2'>This is where your contacts will live. Click the button below <br></br> to add a new contact.</h2>
        <Link href="/new"><button style={{ left: '200px', top: '65%'}}>add new contact</button></Link>
      </div>
      <LogoutBtn />
      <LeftBg />
    </>
  )
}
