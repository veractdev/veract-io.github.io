"use client";
import React, { useEffect, useRef, useState } from "react";
import PhoneInput, { CountryData } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useLenis } from "lenis/react";
import { baseUrl } from "@/lib/custom_data";
import Footer from "../Landing_Page/Footer";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { useFooterScrollState } from "@/lib/globalState";

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
  const [isLoading, setIsLoading] = useState(false);
  const [submissionFailed, setSubmissionFailed] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  // Touched fields for onBlur tracking
  const [touchedFields, setTouchedFields] = useState({
    firstName: false,
    email: false,
    mobileNumber: false,
  });
  const [loaded, setLoaded] = useState(false);
  const lenis = useLenis();
  // Error messages
  const [errors, setErrors] = useState({
    firstName: "",
    email: "",
    mobileNumber: "",
  });
  const { getScrollPosition, clearScrollPosition } = useFooterScrollState();

  const handleBlur = (field: keyof typeof touchedFields) => {
    setTouchedFields((prev) => ({ ...prev, [field]: true }));
    // this line is commented out for future purpose and error red are for placeholder purpose in future changes with respect to design
    switch (field) {
      case "firstName":
        setErrors((prev) => ({
          ...prev,
          firstName:
            firstName.trim() === ""
              ? "*Required"
              : !isValidName(firstName)
                ? "Please enter a valid name"
                : "",
        }));
        break;
      case "email":
        setErrors((prev) => ({
          ...prev,
          email:
            email.trim() === ""
              ? "*Required"
              : !isValidEmail(email)
                ? "Please enter a valid mail ID"
                : "",
        }));
        break;
      case "mobileNumber":
        setErrors((prev) => ({
          ...prev,
          mobileNumber:
            isOnlyCountryCode(mobileNumber, countryCode) ||
              mobileNumber.trim() === ""
              ? "*Required"
              : !isValidMobileNumber(mobileNumber)
                ? "Please enter a valid mobile number"
                : "",
        }));
        break;
    }
  };

  //check if the mobile number is only the country code
  const isOnlyCountryCode = (mobile: string, code: string) => {
    return mobile === code.replace("+", "");
  };

  // Validate email format
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Validate name format (only letters and spaces)
  const isValidName = (name: string) => {
    return /^[a-zA-Z\s]+$/.test(name);
  };

  // Validate mobile number (not empty)
  const isValidMobileNumber = (mobile: string) => {
    try {
      const phoneNumber = parsePhoneNumberFromString("+" + mobile);
      if (!phoneNumber) return false;
      return phoneNumber.isValid();
    } catch (e) {
      console.error("Error validating mobile number:", e);
      return false;
    }
  };

  // Check if the form is valid
  // This function checks if all required fields are filled correctly
  const formValid =
    firstName.trim() !== "" &&
    isValidEmail(email) &&
    mobileNumber.trim() !== "" &&
    !isOnlyCountryCode(mobileNumber, countryCode) &&
    isValidMobileNumber(mobileNumber);

  // This function handles the form submission
  const handleSubmitContact = async () => {
    if (!formValid || isLoading) return;
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`.trim(),
          email,
          phone: `+${mobileNumber}`,
          message,
          company: companyName,
        }),
      });
      const data = await response.json();
      if (data.success) {
        resetFormFields();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        setSubmissionFailed(true);
        resetFormFields();
        setTimeout(() => setSubmissionFailed(false), 3000);
      }
    } catch (error) {
      console.log(error);
      setSubmissionFailed(true);
      resetFormFields();
      setTimeout(() => setSubmissionFailed(false), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  // Reset form fields to initial state
  const resetFormFields = () => {
    setFirstName("");
    setLastName("");
    setCompanyName("");
    setEmail("");
    setMobileNumber("91");
    setMessage("");
    setCountryCode("+91");
    setTouchedFields({ firstName: false, email: false, mobileNumber: false });
    setErrors({ firstName: "", email: "", mobileNumber: "" });
  };

  //loading component
  useEffect(() => {
    setLoaded(true);
  }, []);

  // Prevent scroll on wheel event when dropdown is open
  useEffect(() => {
    function wheelHandler(e: Event) {
      if (
        e.target instanceof HTMLElement &&
        e.target.closest(".custom-phone-dropdown")
      ) {
        e.stopPropagation();
      }
    }
    document.addEventListener("wheel", wheelHandler, {
      passive: false,
      capture: true,
    });
    return () =>
      document.removeEventListener("wheel", wheelHandler, { capture: true });
  }, []);

  // Scroll to top on component load
  useEffect(() => {
    if (loaded && lenis) {
      lenis.scrollTo(0, { duration: 1, easing: (t: number) => t }); // linear scroll to top
    }
  }, [loaded, lenis]);

  // Restore scroll position from global state
  useEffect(() => {
    const savedScrollPosition = getScrollPosition("footer-contact-us");
    if (savedScrollPosition) {
      setTimeout(() => {
        // Restore the saved scroll position
        window.scrollTo(0, savedScrollPosition);
        clearScrollPosition("footer-contact-us");
      }, 100);
    }
  }, [getScrollPosition, clearScrollPosition]);

  // Handle tab close to clear scroll position
  useEffect(() => {
    const handleBeforeUnload = () => {
      clearScrollPosition("footer-contact-us");
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [clearScrollPosition]);

  return (
    loaded && (
      <div className="text-white flex flex-col items-center justify-center w-full h-max bg-[#0d0d0d] pb-[40px]">
        <div className="dmSansFont mt-[160px] text-center text-[#4285F4] text-[36px] tracking-[-3.8px] leading-[90px] font-medium">
          Got an idea?
        </div>
        <div className="w-full p-[0_1.875rem] md:p-[0_3.125rem] lg:p-[0_230px] syneFont text-center text-white text-[36px] md:text-[54px] lg:text-[86px] tracking-[-3.4px] md:tracking-[-3.8px] leading-[55px] md:leading-[54px] lg:leading-[90px] font-semibold">
          Let&apos;s build something great together
        </div>
        <div className="w-full p-[0_1.875rem] md:p-[0_3.125rem] lg:p-[0_120px] flex flex-col lg:flex-row items-start justify-center gap-[1.25rem] mt-[90px]">
          <div className="w-full max-w-[888px] rounded-[30px] p-[11px] border border-white/8 z-10">
            <div className="dmSansFont flex flex-col border border-white/8 rounded-[20px] p-[1.875rem] md:p-[40px]">
              {/* First & Last Name */}
              <div className="flex flex-col md:flex-row  w-full items-center gap-[24px]">
                <div className="relative w-full md:w-1/2">
                  <div className="text-[14px] font-bold">First name*</div>
                  <input
                    required
                    type="text"
                    value={firstName}
                    onChange={(e) => {
                      const value = e.target.value;
                      setFirstName(value);

                      if (touchedFields.firstName) {
                        if (value.trim() === "") {
                          setErrors((prev) => ({
                            ...prev,
                            firstName: "*Required",
                          }));
                        } else if (!isValidName(value)) {
                          setErrors((prev) => ({
                            ...prev,
                            firstName: "Please enter a valid name",
                          }));
                        } else {
                          setErrors((prev) => ({ ...prev, firstName: "" }));
                        }
                      }
                    }}
                    onBlur={() => handleBlur("firstName")}
                    placeholder="First name"
                    className={`mt-[14px] w-full h-[52px] text-[14px] font-medium rounded-[5px] px-[20px] text-white placeholder-white/60 bg-white/10 backdrop-blur-md border ${errors.firstName && touchedFields.firstName
                        ? "border-[#FF4040]"
                        : "border-white/15"
                      } shadow-[0_4px_30px_rgba(0,0,0,0.1)] outline-none focus:ring-[1px] ${errors.firstName && touchedFields.firstName
                        ? "focus:ring-[#FF4040]"
                        : "focus:ring-[#4287F5]"
                      } transition-all duration-300 ease-in-out`}
                  />
                  {errors.firstName && touchedFields.firstName && (
                    <p className="text-[#FF4040] text-[12px] mt-[4px] absolute top-full left-0">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div className="w-full md:w-1/2">
                  <div className="text-[14px] font-bold">Last name</div>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last name"
                    className="mt-[14px] w-full h-[52px] text-[14px] font-medium rounded-[5px] px-[20px] text-white placeholder-white/60 bg-white/10 backdrop-blur-md border border-white/15 shadow-[0_4px_30px_rgba(0,0,0,0.1)] outline-none focus:ring-[1px] focus:ring-[#4287F5] transition-all duration-300 ease-in-out"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div className="mt-[30px]">
                <div className="text-[14px] font-bold">Company name</div>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Company name"
                  className="mt-[14px] w-full h-[52px] text-[14px] font-medium rounded-[5px] px-[20px] text-white placeholder-white/60 bg-white/10 backdrop-blur-md border border-white/15 shadow-[0_4px_30px_rgba(0,0,0,0.1)] outline-none focus:ring-[1px] focus:ring-[#4287F5] transition-all duration-300 ease-in-out"
                />
              </div>

              {/* Email & Phone */}
              <div className="flex flex-col md:flex-row w-full items-center gap-[24px] mt-[30px]">
                <div className="relative w-full md:w-1/2">
                  <div className="text-[14px] font-bold">Email*</div>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => {
                      const value = e.target.value;
                      setEmail(value);
                      if (touchedFields.email) {
                        setErrors((prev) => ({
                          ...prev,
                          email:
                            value.trim() === ""
                              ? "*Required"
                              : !isValidEmail(value)
                                ? "Please enter a valid mail ID"
                                : "",
                        }));
                      }
                    }}
                    onBlur={() => handleBlur("email")}
                    placeholder="you@company.com"
                    className={`mt-[14px] w-full h-[52px] text-[14px] font-medium rounded-[5px] px-[20px] text-white placeholder-white/60 bg-white/10 backdrop-blur-md border-[0.5px] ${errors.email && touchedFields.email
                        ? "border-[#FF4040]"
                        : "border-white/15"
                      } shadow-[0_4px_30px_rgba(0,0,0,0.1)] outline-none focus:ring-[1px] ${errors.email && touchedFields.email
                        ? "focus:ring-[#FF4040]"
                        : "focus:ring-[#4287F5]"
                      } transition-all duration-300 ease-in-out`}
                  />
                  {errors.email && touchedFields.email && (
                    <p className="text-[#FF4040] text-[12px] mt-[4px] absolute top-full left-0">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="relative w-full md:w-1/2">
                  <div className="text-[14px] font-bold">Mobile number*</div>
                  <div
                    className={`mt-[14px] relative rounded-[5px] transition-all duration-300 ease-in-out border-solid focus:ring-[1px] border border-white/20 ${errors.mobileNumber && touchedFields.mobileNumber
                        ? "border-0 focus-within:ring-[#FF4040]"
                        : " focus-within:ring-[#4287F5]"
                      } focus-within:ring-[1px]`}
                    onBlur={() => {
                      setTimeout(() => {
                        if (
                          !document.activeElement?.closest(".react-tel-input")
                        ) {
                          handleBlur("mobileNumber");
                        }
                      }, 100);
                    }}
                  >
                    <PhoneInput
                      country={"in"}
                      value={mobileNumber}
                      onChange={(phone: string, countryData: CountryData) => {
                        setMobileNumber(phone);
                        setCountryCode(`+${countryData.dialCode}`);

                        if (touchedFields.mobileNumber) {
                          setErrors((prev) => ({
                            ...prev,
                            mobileNumber:
                              phone.trim() === ""
                                ? "*Required"
                                : !isValidMobileNumber(
                                  phone,

                                )
                                  ? "Please enter a valid mobile number"
                                  : "",
                          }));
                        }
                      }}
                      inputStyle={{
                        width: "100%",
                        height: "52px",
                        borderRadius: "5px",
                        background: "rgba(255, 255, 255, 0.1)",
                        border:
                          errors.mobileNumber && touchedFields.mobileNumber
                            ? "1px solid red"
                            : "0px solid rgba(255, 255, 255, 0.1)",
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
                        height: "52px",
                      }}
                      dropdownClass="custom-phone-dropdown"
                    />
                    {errors.mobileNumber && touchedFields.mobileNumber && (
                      <p className="text-[#FF4040] text-[12px] mt-[4px] absolute top-full left-0">
                        {errors.mobileNumber}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="mt-[30px]">
                <div className="text-[14px] font-bold">Message</div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us a little about your enquiry..."
                  className="mt-[14px] w-full h-[100px] text-[14px] font-medium rounded-[5px] p-[18px] text-white placeholder-white/60 bg-white/10 backdrop-blur-md border border-white/15 shadow-[0_4px_30px_rgba(0,0,0,0.1)] outline-none focus:ring-[1px] focus:ring-[#4287F5] transition-all duration-300 ease-in-out"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div
                className={`text-nowrap mt-[30px] w-full px-[77px] py-[12px] flex items-center justify-center rounded-[5px] transition-all duration-300 ease-in-out ${formValid && !isLoading && !submitted && !submissionFailed
                    ? "bg-[#4285F4] cursor-pointer text-white border-[3px] border-white/15 contact_us_shadow"
                    : isLoading
                      ? "bg-[#4285F4]/80 text-white border-[3px] border-white/15 contact_us_shadow opacity-50"
                      : submitted
                        ? "bg-[#4285F4] pointer-events-none text-white cursor-default border-[3px] border-white/15 contact_us_shadow"
                        : submissionFailed
                          ? "bg-[#FF4040]/15 pointer-events-none text-[#FF4040] border-[3px] border-white/15 error_contact_us_shadow"
                          : "bg-[#4285F4] pointer-events-none text-white border-[3px] border-white/15 contact_us_shadow opacity-50"
                  }`}
                onClick={() => {
                  if (formValid && !submitted && !isLoading)
                    handleSubmitContact();
                }}
              >
                {isLoading ? (
                  <img
                    src="/Icons/contact-us/loader.png"
                    alt="loader"
                    className="w-[22px] h-[22px] animate-spin"
                  />
                ) : submitted ? (
                  "Thank You"
                ) : submissionFailed ? (
                  "Something went wrong"
                ) : (
                  "Submit Now"
                )}
              </div>
            </div>
          </div>
          {/* Right Side Info (same as before, not repeated here for brevity) */}
          <div className="w-full flex flex-col md:flex-row lg:flex-col flex-wrap gap-[1.5rem] items-start justify-between max-w-full lg:max-w-[292px]">
            {/* email */}
            <div className="w-full md:w-[calc(50%-1.5rem)] lg:w-full dmSansFont rounded-[30px] p-[11px] border border-white/8">
              <div className="flex flex-col border border-white/8 rounded-[20px] p-[36px] md:p-[40px] gap-[14px]">
                <div className="flex items-center gap-[10px]">
                  <img src="/Icons/contact-us/mail.svg" alt="mail-icon" />
                  <div className="text-[16px] font-bold">Email</div>
                  <div className="bg-[#0055FE] rounded-[8px] px-[10px] py-[4px] text-[12px] font-bold">
                    24/7
                  </div>
                </div>
                <img
                  src={`${baseUrl}/Images/horizantal_design.png`}
                  alt="design-icon"
                />
                <a
                  href="mailto:info@veract.io"
                  className="text-[16px] font-medium text-white/50 hover:text-white cursor-pointer"
                >
                  info@veract.io
                </a>
              </div>
            </div>
            {/* phone */}
            <div className="w-full md:w-[calc(50%-1.5rem)] lg:w-full rounded-[30px] p-[11px] border border-white/8">
              <div className="flex flex-col border border-white/8 rounded-[20px] p-[36px] md:p-[40px] gap-[14px]">
                <div className="flex items-center gap-[10px]">
                  <img
                    src="/Icons/contact-us/contact.svg"
                    alt="contact-us-icon"
                  />
                  <div className="text-[16px] font-bold">Phone</div>
                </div>
                <img
                  src={`${baseUrl}/Images/horizantal_design.png`}
                  alt="design-icon"
                />
                <a
                  href="tel:+919789991565"
                  className="text-[16px] font-medium text-white/50 hover:text-white cursor-pointer"
                >
                  +91 97899 91565
                </a>
                <a
                  href="tel:+919962837650"
                  className="text-[16px] font-medium text-white/50 hover:text-white cursor-pointer"
                >
                  +91 99628 37650
                </a>
                <a
                  href="tel:+17377101523"
                  className="text-[16px] font-medium text-white/50 hover:text-white cursor-pointer"
                >
                  +1 7377101523
                </a>
              </div>
            </div>
            {/* address */}
            <div className="w-full md:w-[calc(50%-1.5rem)] lg:w-full rounded-[30px] p-[11px] border border-white/8">
              <div className="flex flex-col border border-white/8 rounded-[20px] p-[36px] md:p-[40px] gap-[14px]">
                <div className="flex items-center gap-[10px]">
                  <img
                    src="/Icons/contact-us/location.svg"
                    alt="loaction-icon"
                  />
                  <div className="text-[16px] font-bold">Address</div>
                </div>
                <img
                  src={`${baseUrl}/Images/horizantal_design.png`}
                  alt="design-icon"
                />
                <a
                  href="https://maps.app.goo.gl/raqAmwGuLW77jdLf8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[16px] font-medium text-white/50 hover:text-white"
                >
                  37, Aspace, Brindavan Street, Srinivasa Nagar, Madipakkam,
                  Chennai - 600 091
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer ref={footerRef} sessionId={"footer-contact-us"} />
      </div>
    )
  );
}
