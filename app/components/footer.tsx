import React from'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/mediaQuery.css';
import '../styles/styles.css';
import '../styles/mediaQuery.css';
export default function Footer(){
    return(
        <div>
            <div className="copyrights">
                <div className='flex items-center justify-center pb-12'>
                    <label className="copyrightsText pt-12">Copyright © 2023 Veract Consultancy | All Rights Reserved</label>
                </div>
            </div>

            <div className="copyrights_mobile">
                <div className='flex items-center justify-center pb-12'>
                    <label className="copyrightsText_mobile pt-12">Copyright © 2023 Veract Consultancy | All Rights Reserved</label>
                </div>
            </div>
        </div>
        
    )
}