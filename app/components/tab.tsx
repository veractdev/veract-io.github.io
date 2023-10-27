import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="MobileTab">
        <div className="temp ">
            <div className="flex flex-row flex-wrap justify-around">
            <Link href="/health">
            <div className="TabFont">
                Health
            </div>            
          </Link>
          <Link href="/sales">
            <div className="pl-5 TabFont">
                Sales
            </div>            
          </Link>
          <Link href="/machinevision">
            <div className="TabFont">
                Machine Vision
            </div>            
          </Link>
          
            </div>
          {/* <div className="pt-11"></div> */}
          <div className="flex flex-row flex-wrap justify-around pr-10">
          <Link href="/manufacturing">
            <div className="pt-5 TabFont">
                Manufacturing
            </div>            
          </Link>
          <Link href="/agritech">
            <div className="pt-5 pr-12 TabFont">
                Agri Tech
            </div>            
          </Link>
          <Link href="/fintech">
            <div className="pt-5 TabFont">
                Fin Tech
            </div>            
          </Link>
          </div>
          
      {/* <ul>
        <div className="flex flex-row">
        <li>
          <Link href="/health">
            <div className="TabFont">
                Health
            </div>            
          </Link>
        </li>
        <li>
          <Link href="/sales">
            <div className="TabFont">
                Sales
            </div>
          </Link>
        </li>
        <li>
          <Link href="/machinevision">
          <div className="TabFont">
                Machine Vision
            </div>
          </Link>
        </li>
        <li>
          <Link href="/manufacturing">
          <div className="TabFont">
                Manufacturing
            </div>
          </Link>
        </li>
        </div>
        <div className="flex flex-row">
            <li>
            <Link href="/agritech">
            <div className="TabFont">
                    Agri Tech
                </div>
            </Link>
            </li>
            <li>
            <Link href="/fintech">
            <div className="TabFont">
                    Fin Tech
                </div>
            </Link>
            </li>
        </div>
        
        
      </ul> */}
    </div>
     {/* <div className="scroll-container">
      <div className="scroll-content">
        <div className="scroll-item">Item 1</div>
        <div className="scroll-item">Item 2</div>
        <div className="scroll-item">Item 3</div>
      </div>
    </div> */}
    </div>
    
  );
};

export default Navbar;
