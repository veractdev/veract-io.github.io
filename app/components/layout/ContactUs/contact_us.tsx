"use client";
import { use, useEffect, useState } from "react";
import PhoneInput, { CountryData } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact_Us() {
  // Form input control fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("91");
  const [message, setMessage] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [loaded, setLoaded] = useState(false);
  // Submission handler

  // for mail purpose use it if needed by dev-shiva :)
  // public key : qwdRlJDtP3rT8oyie
  // service key : service_pvsdbjm
  // template id : template_qm07hdm
  const handleSubmitContact = () => {
    if (!formValid) return;
    setSubmitted(true);
  };

  const resetFormFields = () => {
    setFirstName("");
    setLastName("");
    setCompanyName("");
    setEmail("");
    setMobileNumber("91");
    setMessage("");
    setCountryCode("+91");
  };

  // Check if the mobile number is only the country code
  const isOnlyCountryCode = (mobile: string, code: string) => {
    return mobile === code.replace("+", "");
  };

  // Validate email format
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  //form validation
  const formValid =
    firstName.trim() !== "" &&
    isValidEmail(email) &&
    mobileNumber.trim() !== "" &&
    !isOnlyCountryCode(mobileNumber, countryCode);

    useEffect(() => {
      setLoaded(true);
    }, [])

    useEffect(() => {
      function wheelHandler(e:Event) {
        if (e.target instanceof HTMLElement && e.target.closest('.custom-phone-dropdown')) {
          e.stopPropagation();
        }
      }
      document.addEventListener('wheel', wheelHandler, { passive: false, capture: true });
      return () => document.removeEventListener('wheel', wheelHandler, { capture: true });
    }, []);
    
  return (
    loaded && (
    <div className="text-white flex flex-col items-center justify-center w-full h-max bg-[#0d0d0d] pb-[40px]">
      <div className="dmSansFont mt-[160px] text-center text-[#4285F4] text-[36px] tracking-[-3.8px] leading-[90px] font-medium">
        Got an idea?
      </div>
      <div className="w-full p-[0_1.875rem] md:p-[0_3.125rem] lg:p-[0_230px] syneFont text-center text-white text-[36px] md:text-[54px] lg:text-[86px] tracking-[-3.4px] md:tracking-[-3.8px] leading-[55px] md:leading-[54px] lg:leading-[90px] font-semibold">
        Let's build something great together
      </div>
      <div className="w-full p-[0_1.875rem] md:p-[0_3.125rem] lg:p-[0_120px] flex flex-col lg:flex-row items-start justify-center gap-[1.25rem] mt-[90px]">
        {/* form info */}
        <div className="w-full max-w-[888px] rounded-[30px] p-[11px] border border-white/8 z-10">
          <div className="dmSansFont flex flex-col border border-white/8 rounded-[20px] p-[1.875rem] md:p-[40px]">
            {/* name row */}
            <div className="flex flex-col md:flex-row  w-full items-center gap-[24px]">
              <div className="w-full md:w-1/2">
                <div className="text-[14px] font-bold">First name*</div>
                <input
                  required
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                  className="mt-[14px] w-full h-[52px] text-[14px] font-medium rounded-[5px] px-[20px] text-white placeholder-white/60 bg-white/10 backdrop-blur-md border border-white/15 shadow-[0_4px_30px_rgba(0,0,0,0.1)] outline-none focus:ring-2 focus:ring-[#4287F5] transition-all duration-300 ease-in-out"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="text-[14px] font-bold">Last name</div>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                  className="mt-[14px] w-full h-[52px] text-[14px] font-medium rounded-[5px] px-[20px] text-white placeholder-white/60 bg-white/10 backdrop-blur-md border border-white/15 shadow-[0_4px_30px_rgba(0,0,0,0.1)] outline-none focus:ring-2 focus:ring-[#4287F5] transition-all duration-300 ease-in-out"
                />
              </div>
            </div>

            {/* company row */}
            <div className="mt-[30px]">
              <div className="text-[14px] font-bold">Company name</div>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Company name"
                className="mt-[14px] w-full h-[52px] text-[14px] font-medium rounded-[5px] px-[20px] text-white placeholder-white/60 bg-white/10 backdrop-blur-md border border-white/15 shadow-[0_4px_30px_rgba(0,0,0,0.1)] outline-none focus:ring-2 focus:ring-[#4287F5] transition-all duration-300 ease-in-out"
              />
            </div>

            {/* mail and phone */}
            <div className="flex flex-col md:flex-row w-full items-center gap-[24px] mt-[30px]">
              <div className="w-full md:w-1/2">
                <div className="text-[14px] font-bold">Email*</div>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="mt-[14px] w-full h-[52px] text-[14px] font-medium rounded-[5px] px-[20px] text-white placeholder-white/60 bg-white/10 backdrop-blur-md border border-white/15 shadow-[0_4px_30px_rgba(0,0,0,0.1)] outline-none focus:ring-2 focus:ring-[#4287F5] transition-all duration-300 ease-in-out"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="text-[14px] font-bold">Mobile number*</div>
                <div className="mt-[14px]">
                  <PhoneInput
                    country={"in"}
                    value={mobileNumber}
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
                      maxHeight: "200px",
                      gap: "10px",
                    }}
                    containerStyle={{
                      width: "100%",
                    }}
                    dropdownClass="custom-phone-dropdown"
                  />
                </div>
              </div>
            </div>

            {/* message row */}
            <div className="mt-[30px]">
              <div className="text-[14px] font-bold">Message</div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us a little about your enquiry..."
                className="mt-[14px] w-full h-[100px] text-[14px] font-medium rounded-[5px] p-[18px] text-white placeholder-white/60 bg-white/10 backdrop-blur-md border border-white/15 shadow-[0_4px_30px_rgba(0,0,0,0.1)] outline-none focus:ring-2 focus:ring-[#4287F5] transition-all duration-300 ease-in-out"
              ></textarea>
            </div>

            {/* submit */}
            <div
              className={`mt-[30px] w-full px-[77px] py-[12px] flex items-center justify-center rounded-[5px] ${
                formValid && !submitted
                  ? "bg-[#4285F4] cursor-pointer text-white"
                  : submitted
                  ? "bg-[#4285F4] cursor-pointer text-white"
                  : "bg-[#4285F4]/50 cursor-not-allowed text-white/15"
              }`}
              onClick={() => {
                if (formValid && !submitted) handleSubmitContact();
              }}
            >
              {submitted ? "Thank You" : "Submit"}
            </div>
          </div>
        </div>

        {/* right side info */}
        <div className="w-full flex flex-col md:flex-row lg:flex-col flex-wrap gap-[1.5rem] items-start justify-between max-w-full lg:max-w-[292px]">
          {/* email */}
          <div className="w-full md:w-[calc(50%-1.5rem)] lg:w-full dmSansFont rounded-[30px] p-[11px] border border-white/8">
            <div className="flex flex-col border border-white/8 rounded-[20px] p-[36px] md:p-[40px] gap-[14px]">
              <div className="flex items-center gap-[10px]">
                <img src="/Icons/contact-us/mail.svg" />
                <div className="text-[16px] font-bold">Email</div>
                <div className="bg-[#0055FE] rounded-[8px] px-[10px] py-[4px] text-[12px] font-bold">
                  24/7
                </div>
              </div>
              <img src="/Images/horizantal_design.png" />
              <div className="text-[16px] font-medium text-white/50 cursor-pointer">
                <a href="mailto:info@veract.io">
                  info@veract.io
                </a>
              </div>
            </div>
          </div>
          {/* phone */}
          <div className="w-full md:w-[calc(50%-1.5rem)] lg:w-full rounded-[30px] p-[11px] border border-white/8">
            <div className="flex flex-col border border-white/8 rounded-[20px] p-[36px] md:p-[40px] gap-[14px]">
              <div className="flex items-center gap-[10px]">
                <img src="/Icons/contact-us/contact.svg" />
                <div className="text-[16px] font-bold">Phone</div>
              </div>
              <img src="/Images/horizantal_design.png" />
              <div className="text-[16px] font-medium text-white/50 cursor-pointer">
                <a href="tel:+919789991565">
                  +91 97899 91565
                </a>
              </div>
              <div className="text-[16px] font-medium text-white/50 cursor-pointer">
                <a href="tel:+919962837650">
                  +91 99628 37650
                </a>
              </div>
            </div>
          </div>
          {/* address */}
          <div className="w-full md:w-[calc(50%-1.5rem)] lg:w-full rounded-[30px] p-[11px] border border-white/8">
            <div className="flex flex-col border border-white/8 rounded-[20px] p-[36px] md:p-[40px] gap-[14px]">
              <div className="flex items-center gap-[10px]">
                <img src="/Icons/contact-us/location.svg" />
                <div className="text-[16px] font-bold">Address</div>
              </div>
              <img src="/Images/horizantal_design.png" />
              <div className="text-[16px] font-medium text-white/50">
                17, First street, Tansi Nagar, Velachery, Chennai - 600042
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  );
}
