import React from 'react'

export default function PrivacyPolicy() {
  return (
    <>
        <div className="features text-center social" id="features">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						{/* <h1 className="arrow">Intellikast CRM - Privacy Policy</h1> */}
						<h1 className='mt-[3%] pb-[3%] font-bold text-[2rem] mobileHeader'>Intellikast CRM - Privacy Policy</h1>
					</div>
				</div>
			</div>
		</div>
		<section>
			<div className="features-wrapper ml-[15%] mr-[15%]">
				<div className="col-md-10 wp2">
					 <h4 className="text-black pb-4">Learn more about Privacy in Intellikast CRM, we have outlined how we use the data that we collect from you.</h4>
					<ul className='space-y-4'>
						<li>In order for Intellikast CRM to provide you the most accurate and best experience, Intellikast CRM will collect and use your location information in the following ways.</li>
						<ul>
							<li>We collect your GPS location for providing various functionality in the application</li>
							<li>To provide you accurate and timely information about your daily trips to customer locations.</li>
							<li>To calculate information about the route, distance and time taken for travel to customer locations to calculate fuel allowances.</li>
						</ul>
						<li>For analytics purposes we use Google Analytics, which may collect information to provide usage statistics about Intellikast CRM, real time usage details and location information about the users. Google might use this data to improve your experience on other google products.</li>
						<br/>
						The Android Advertising ID that we collect is only for analytics, we never use this information to show advertisements or promote our other products. Feel free to reach us at <span className='text-[#4285f4]'>info@veractconsultancy.in</span> for any further information that you might require regarding the data collection and usage. 
					</ul>
				</div>
				<div className="clearfix"></div>
			</div>
		</section>
    </>
  )
}
