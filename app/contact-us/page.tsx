'use client'
import LenisProvider from '@/app/LenisProvider';
import Navbar from '../components/layout/Navbar';
import Contact_Us from '../components/layout/ContactUs/contact_us';

export default function Page() {
    return(
        <LenisProvider>
            <div className='w-screen flex items-center justify-center flex-col bg-[#0d0d0d]'>
                <Navbar/>
                <Contact_Us />
            </div>
        </LenisProvider>
    )
}