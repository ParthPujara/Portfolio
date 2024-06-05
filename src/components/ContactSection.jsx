import React, { useState } from "react";
import i1 from "../assets/Contact 1.png";
import i from "../assets/Contact.png";

const ContactSection = () => {
  // Token: a0c75133-4c6d-4ffa-8bbd-e012257bf502
  // Username: parthtpujara@gmail.com
  // pass: 956821E5B8B36873ADCA4F0DA43CB0B08C93
  // server: smtp.elasticemail.com
  // port: 2525

  const [formState, setFormState] = useState({});
  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const config = {
      SecureToken: "a0c75133-4c6d-4ffa-8bbd-e012257bf502",
      To: "parthtpujara@gmail.com",
      From: formState.email,
      Subject: `${formState.name} to ${formState.email}`,
      Body: formState.message,
    };
    if (window.Email) {
      window.Email.send(config).then(()=> alert("Email Send"))
    }
  };
  return (
    <div id="contact" className="pt-20">
      <div className="text-center text-[42px] lg:text-6xl mb-8">Contact</div>
      <div className="contact_background md:pr-12 p-6" data-aos="fade-right">
        <div className="absolute top-[-130px] right-0 hidden md:block">
          <img
            src={i}
            alt=""
            className="h-[200px] w-[200px]:"
            data-aos="fade-down"
            data-aos-delay="300"
          />
        </div>
        <div className="flex items-center w-full gap-10">
          <img
            src={i1}
            alt=""
            className="hidden md:block h-[250px] lg:h-[400px]"
            data-aos="fade-up"
            data-aos-delay="350"
          />
          <form className="w-full flex flex-col gap-4" onSubmit={submitHandler}>
            <div className="flex flex-col gap-1">
              <label htmlFor="">User name</label>
              <input
                type="text"
                className="bg-white mb-3 rounded-md ps-5  lg:px-3 py-2 text-blue font-bold"
                name="name"
                value={formState.name || ''}
                onChange={(e) => changeHandler(e)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">Email</label>
              <input
                type="email"
                className="bg-white mb-3 rounded-md ps-5 lg:px-3 py-2 text-blue font-bold"
                name="email"
                value={formState.email || ''}
                onChange={(e) => changeHandler(e)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">Message</label>
              <textarea
                name="message"
                id=""
                cols="40"
                rows="5"
                value={formState.message || ''}
                className="bg-white mb-3 rounded-lg ps-5 lg:px-3 py-2 text-blue font-bold"
                onChange={(e) => changeHandler(e)}
              ></textarea>
            </div>
            <div className="flex">
              <input
                className="bg-white px-10 py-2 text-yellow rounded-md cursor-pointer hover:shadow-2xl hover:shadow-[#ffffff] font-bold"
                type="submit"
                value="Send"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
