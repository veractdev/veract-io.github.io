'use client';
import { Black_And_White_Picture } from 'next/font/google';
import Link from 'next/link';
import React, { useState } from 'react'



const Navbar = () => {
  // let buttonColor = document.getElementsByClassName("button");
  const [buttonColor, setButtonColor] = useState("#000000");
  // setButtonColor = "#000000";

  return (

    <div className="horizontal-scrollable-container pb-5">
      <div className="buttons">
        {/* <div className="button" onClick={()=> setButtonColor(buttonColor)} style={{backgroundColor: `${'#ff0234'}`}}>BODYWEIGHT</div> */}
        <div className="button"><Link href="/health">Wellness</Link></div>
        <div className="button"><Link href="/sales">Sales</Link></div>
        <div className="button"><Link href="/machinevision">Machine Vision</Link></div>
        <div className="button"><Link href="/manufacturing">Manufacturing</Link></div>
        <div className="button"><Link href="/agritech">Agri Tech</Link></div>
        <div className="button"><Link href="/fintech">Fin Tech</Link></div>
      </div>
    </div>

    // <div className="MobileTab">
    //     <div className="temp ">
    //         <div className="flex flex-row flex-wrap justify-around">
    //         <Link href="/health">
    //         <div className="TabFont">
    //             Health
    //         </div>            
    //       </Link>
    //       <Link href="/sales">
    //         <div className="pl-5 TabFont">
    //             Sales
    //         </div>            
    //       </Link>
    //       <Link href="/machinevision">
    //         <div className="TabFont">
    //             Machine Vision
    //         </div>            
    //       </Link>
          
    //         </div>
    //       <div className="flex flex-row flex-wrap justify-around pr-10">
    //       <Link href="/manufacturing">
    //         <div className="pt-5 TabFont">
    //             Manufacturing
    //         </div>            
    //       </Link>
    //       <Link href="/agritech">
    //         <div className="pt-5 pr-12 TabFont">
    //             Agri Tech
    //         </div>            
    //       </Link>
    //       <Link href="/fintech">
    //         <div className="pt-5 TabFont">
    //             Fin Tech
    //         </div>            
    //       </Link>
    //       </div>
          
    //   {/* <ul>
    //     <div className="flex flex-row">
    //     <li>
    //       <Link href="/health">
    //         <div className="TabFont">
    //             Health
    //         </div>            
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href="/sales">
    //         <div className="TabFont">
    //             Sales
    //         </div>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href="/machinevision">
    //       <div className="TabFont">
    //             Machine Vision
    //         </div>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href="/manufacturing">
    //       <div className="TabFont">
    //             Manufacturing
    //         </div>
    //       </Link>
    //     </li>
    //     </div>
    //     <div className="flex flex-row">
    //         <li>
    //         <Link href="/agritech">
    //         <div className="TabFont">
    //                 Agri Tech
    //             </div>
    //         </Link>
    //         </li>
    //         <li>
    //         <Link href="/fintech">
    //         <div className="TabFont">
    //                 Fin Tech
    //             </div>
    //         </Link>
    //         </li>
    //     </div>
        
        
    //   </ul> */}
    // </div>
    //  {/* <div className="scroll-container">
    //   <div className="scroll-content">
    //     <div className="scroll-item">Item 1</div>
    //     <div className="scroll-item">Item 2</div>
    //     <div className="scroll-item">Item 3</div>
    //   </div>
    // </div> */}
    // </div>
    
  );
};

export default Navbar;
