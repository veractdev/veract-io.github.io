"use client";
import { useState } from "react";
import PhoneInput, { CountryData } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Contact_Us() {
  const [countrycodeDropdown, setCountrycodeDropdown] = useState(false);

  //form input control fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [successFullSubmisiion, setSuccessFullSubmission] = useState(false);

  //submission handler
  const handleSubmitContact = () => {
    setSuccessFullSubmission(true);
    //the form data to your server or API
    console.log({
      firstName,
      lastName,
      companyName,
      email,
      mobileNumber,
      message,
    });

    // Reset form fields after submission
    resetFormFields();
    setSuccessFullSubmission(false);
  };

  const resetFormFields = () => {
    setFirstName("");
    setLastName("");
    setCompanyName("");
    setEmail("");
    setMobileNumber("");
    setMessage("");
  };

  const formValid =
    firstName.trim() &&
    lastName.trim() &&
    companyName.trim() &&
    email.trim() &&
    mobileNumber.trim() &&
    message.trim();

  return (
    <div className="text-white flex flex-col items-center justify-center w-full h-max bg-[#0d0d0d] pb-[160px]">
      <div className="dmSansFont mt-[160px] text-center text-[#4285F4] text-[36px] tracking-[-3px] leading-[90px] font-medium">
        Got an idea?
      </div>
      <div className="syneFont mt-[10px] text-center text-white text-[86px] tracking-[-3px] leading-[90px] font-semibold w-[70%]">
        Let's build something great together
      </div>
      <div className="w-full p-[0_120px] flex flex-row items-start justify-center gap-[1.25rem] mt-[90px]">
        {/* form info */}
        <div className="w-[75%] rounded-[30px] p-[11px] border border-white/8 z-10">
          <div className="dmSansFont flex flex-col border border-white/8 rounded-[20px] p-[40px]">
            {/* name row */}
            <div className="flex w-[100%] items-center gap-[24px]">
              {/* first name */}
              <div className="w-full">
                <div className="text-[14px] dmSansFont font-bold">
                  First name*
                </div>
                <div className="mt-[14px]">
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name"
                    className="w-full h-[52px] 
                        text-[14px] font-medium
                        rounded-[5px] 
                        px-[20px] 
                        text-white placeholder-white/60 
                        bg-white/10 
                        backdrop-blur-md 
                        border border-white/15 
                        shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
                        outline-none focus:ring-2 focus:ring-[#4287F5]
                        transition-all duration-300 ease-in-out"
                  />
                </div>
              </div>
              {/* last name */}
              <div className="w-full">
                <div className="text-[14px] dmSansFont font-bold">
                  Last name*
                </div>
                <div className="mt-[14px]">
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last name"
                    className="w-full h-[52px] 
                        text-[14px] font-medium
                        rounded-[5px] 
                        px-[20px] 
                        text-white placeholder-white/60 
                        bg-white/10 
                        backdrop-blur-md 
                        border border-white/15 
                        shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
                        outline-none focus:ring-2 focus:ring-[#4287F5]
                        transition-all duration-300 ease-in-out"
                  />
                </div>
              </div>
            </div>
            {/* company row */}
            <div className="flex w-[100%] items-center gap-[24px] mt-[30px]">
              {/* company name */}
              <div className="w-[100%]">
                <div className="text-[14px] dmSansFont font-bold">
                  Enter your company name*
                </div>
                <div className="mt-[14px]">
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Company name"
                    className="w-full h-[52px] 
                        text-[14px] font-medium
                        rounded-[5px] 
                        px-[20px] 
                        text-white placeholder-white/60 
                        bg-white/10 
                        backdrop-blur-md 
                        border border-white/15 
                        shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
                        outline-none focus:ring-2 focus:ring-[#4287F5]
                        transition-all duration-300 ease-in-out"
                  />
                </div>
              </div>
            </div>
            {/* mail and mobile row */}
            <div className="flex w-[100%] items-center gap-[24px] mt-[30px]">
              {/* mail id row */}
              <div className="w-full">
                <div className="text-[14px] dmSansFont font-bold">
                  Enter your mail id*
                </div>
                <div className="mt-[14px]">
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full h-[52px] 
                        text-[14px] font-medium
                        rounded-[5px] 
                        px-[20px] 
                        text-white placeholder-white/60 
                        bg-white/10 
                        backdrop-blur-md 
                        border border-white/15 
                        shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
                        outline-none focus:ring-2 focus:ring-[#4287F5]
                        transition-all duration-300 ease-in-out"
                  />
                </div>
              </div>
              {/* mobile number row */}
              <div className="w-full">
                <div className="text-[14px] dmSansFont font-bold z-[1000]">
                  Enter your mobile number*
                </div>
                <div
                  className="w-full h-[52px] mt-[14px] 
                        text-[14px] font-medium
                        rounded-[5px] 
                        text-white placeholder-white/60 
                        backdrop-blur-md 
                        border border-white/15 
                        shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
                        outline-none focus:ring-2 focus:ring-[#4287F5]
                        transition-all duration-300 ease-in-out flex items-center"
                >
                  <PhoneInput
                    country={"in"} // Sets default country to India
                    value={mobileNumber || "91"} // Starts with 91 if mobileNumber is empty
                    onChange={(phone: string, countryData: CountryData) => {
                      setMobileNumber(phone);
                      setCountryCode(`+${countryData.dialCode}`);
                    }}
                    inputStyle={{
                      width: "100%",
                      height: "52px",
                      borderRadius: "5px",
                      background: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      paddingLeft: "50px",
                      color: "white",
                    }}
                    buttonStyle={{
                      background: "transparent",
                      border: "none",
                    }}
                    dropdownStyle={{
                      backgroundColor: "#1a1a1a",
                      color: "#fff",
                      display: "flex",
                      flexDirection: "column",
                      overflowY: "auto",
                      height: "200px",
                      gap: "10px",
                    }}
                    containerStyle={{
                      width: "100%",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex w-[100%] items-center gap-[24px] mt-[30px]">
              {/* add message row */}
              <div className="flex flex-col w-[100%] z-[-1]">
                <div className="text-[14px] dmSansFont font-bold">
                  Add a message*
                </div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full h-[100px] mt-[14px] 
                        text-[14px] font-medium
                        rounded-[5px] 
                        p-[18px] 
                        text-white placeholder-white/60 
                        bg-white/10 
                        backdrop-blur-md 
                        border border-white/15 
                        shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
                        outline-none focus:ring-2 focus:ring-[#4287F5]
                        transition-all duration-300 ease-in-out"
                  placeholder="Tell us a little about your enquiry..."
                ></textarea>
              </div>
            </div>
            <div
              className={`w-[100%] px-[77px] py-[12px] flex items-center justify-center mt-[30px] rounded-[5px] 
                ${
                  formValid
                    ? "bg-[#4285F4] cursor-pointer text-white"
                    : "bg-[#4285F4]/50 cursor-not-allowed text-white/15"
                }`}
              onClick={() => {
                if (formValid) handleSubmitContact();
              }}
            >
              Submit
            </div>
          </div>
        </div>
        {/* other info */}
        <div className="w-[25%]">
          {/* email */}
          <div className="dmSansFont w-[100%] rounded-[30px] p-[11px] border border-white/8">
            <div className="flex flex-col border border-white/8 rounded-[20px] p-[40px]">
              <div className="flex flex-col gap-[14px]">
                <div className="flex items-center gap-[10px]">
                  <img src="/Icons/contact-us/mail.svg" />
                  <div className="text-[16px] font-bold">Email</div>
                  <div className="bg-[#0055FE] shadow-[0px_0px_0px_2px_#FFFFFF26_inset] rounded-[8px] pl-[10px] pr-[10px] pt-[4px] py-[4px] text-[12px] font-bold flex items-center justify-center">
                    24/7
                  </div>
                </div>
                <img src="/Images/horizantal_design.png" />
                <div className="text-[16px] font-medium text-white/50">
                  info@veract.io
                </div>
              </div>
            </div>
          </div>
          {/* phone */}
          <div className="w-[100%] rounded-[30px] p-[11px] border border-white/8 mt-[24px]">
            <div className="flex flex-col border border-white/8 rounded-[20px] p-[40px]">
              <div className="flex flex-col gap-[14px]">
                <div className="flex items-center gap-[10px]">
                  <img src="/Icons/contact-us/contact.svg" />
                  <div className="text-[16px] font-bold">Phone</div>
                </div>
                <img src="/Images/horizantal_design.png" />
                <div>
                  <div className="text-[16px] font-medium text-white/50">
                    +91 97899 91565
                  </div>
                  <div className="text-[16px] font-medium text-white/50">
                    +91 99628 37650
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* address */}
          <div className="w-[100%] rounded-[30px] p-[11px] border border-white/8 mt-[24px]">
            <div className="flex flex-col border border-white/8 rounded-[20px] p-[40px]">
              <div className="flex flex-col gap-[14px]">
                <div className="flex items-center gap-[10px]">
                  <img src="/Icons/contact-us/location.svg" />
                  <div className="text-[16px] font-bold">Address</div>
                </div>
                <img src="/Images/horizantal_design.png" />
                <div className="text-[16px] font-medium text-white/50">
                  17, First street, Tansi nagar, Velachery, Chennai - 600 042
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
