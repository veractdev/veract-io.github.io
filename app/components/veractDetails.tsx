import '../styles/styles.css';
import '../styles/mediaQuery.css';


export default function veractDetails(){
    return(
        
        <div className=" flex flex-col contactSection contactsMain fontFamily " id="section6">
            
            {/* <div className="flex items-center justify-center pt-4">
                <hr className="separator"></hr>
                <div className='section-title'>
                <label className=" section-title-highlight">Contact<span className="servicesHeading  p-3">Us</span></label>
                </div>
                <hr className="separator"></hr>
            </div> */}
            <div className='contactDetails'>
            {/* <div className="flex flex-row flex-wrap items-center justify-center  md:gap-10">
            <div className="contactCard">
                <div className="contactCardText">REGISTERED ADDRESS</div>
                <div className="boxBetween"></div>
                <div className="whitespace-nowrap contactCardDetails">Veract Consultancy Pvt. Ltd., Chennai</div>
            </div>
            <div className="contactCard">
                <div className="contactCardText">PHONE</div>
                <div className="boxBetween"></div>
                <div className="contactCardDetails">+91-9789991565</div>
            </div>
            <div className="contactCard">
                <div className="contactCardText">EMAIL</div>
                <div className="boxBetween"></div>
                <div className="mailText"><a href="#">info@veractconsultancy.in</a></div>
            </div>
        </div> */}
            {/* <div className='flex flex-col items-center justify-center pt-2'>
                <div className='contactText'>Veract Consultancy Pvt. Ltd</div>
                <div className='flex flex-row md:gap-2'>
                    <div className='contactText'>CIN: U74999TN2016PTC112991</div>
                    <div className='contactText'>GSTIN: 33AAFCV7102E1ZQ</div>
                </div>
                <div className='contactText'>17, First Street, Tansi Nagar, Velachery, Chennai - 600 042</div>
                <div className="flex flex-row contactText md:gap-2">
                    <div className='flex font-bold'>Email:</div>
                    <div> info@veractconsultancy.in</div>
                </div>
                <div className="flex contactText flex-row md:gap-2">
                    <div className='flex font-bold'>Phone:</div>
                    <div> +91 97899 91565, +91 99628 37650</div>
                </div>
            </div> */}
            <div className='flex flex-row justify-between pl-10 pt-10 pr-52'>
                <div className='contactHeader pr-10'>Veract Consultancy Pvt. Ltd</div>
                <a href='mailto:info@veract.io' className='contactText'><span className='contactHeader pl -10'>Email:</span>info@veract.io</a>
            </div>  
            <div className='flex flex-row justify-between pt-0 pl-10 pr-10 md:gap-3'>
                {/* <div className='flex flex-col'> */}
                    
                    <div className='contactText pt-6'><span className='contactHeader'>Regd.office:</span>  17, First Street, Tansi Nagar, Velachery, Chennai - 600 042</div>
                    <div className="flex flex-row whitespace-nowrap md:gap-4 ">
                    {/* <div className='contactText'><span className='contactHeader'>CIN:</span> U74999TN2016PTC112991</div>
                    <div className='contactText'><span className='contactHeader'>GSTIN:</span> 33AAFCV7102E1ZQ</div> */}
                </div>
                {/* </div> */}
                
                <div className="flex flex-col pt-6">
                    <div className="flex flex-row md:gap-2">
                        {/* <div className='contactHeader'>Email:</div>
                        <div className='contactText'>info@veract.io</div> */}
                    </div>
                    <div className="flex flex-row md:gap-1">
                        <div className='contactHeader'>Phone:</div>
                        <div className='contactText'><a href='tel:+91 97899 91565'>+91 97899 91565,</a> <a href='tel:+91 99628 37650'> +91 99628 37650</a></div>
                    </div>
                </div>
            </div>
        </div>

        <div className='mobileContact'>
            <div className='mobileCardContact flex flex-col pt-16 pl-2 pr-2 gap-6'>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <div className='flex flex-row gap-1'>
                        <div><img /></div>
                        <div className="mobileContactText">ORGANIZATION</div>
                    </div>
                    <div className="contactText">Veract Consultancy Pvt. Ltd., Chennai</div>
                </div>
                <div className='flex flex-col items-center justify-centermd:gap-2'>
                    <div className='flex flex-row md:gap-1'>
                        <div><img/></div>
                        <div className="mobileContactText">PHONE</div>
                    </div>
                    <div className="contactText">+91-9789991565</div>
                </div>
                <div className='flex flex-col items-center justify-center md:gap-1'>
                    <div className='flex flex-row md:gap-1'>
                        <div><img/></div>
                        <div className="mobileContactText">EMAIL</div>
                    </div>
                    <div className="contactText">info@veract.io</div>
                </div>
            </div>

        </div>
        
      </div>
    )
}