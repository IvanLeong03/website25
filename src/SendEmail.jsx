import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import { useEffect } from "react";

const SendEmail = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [detail, setDetail] = useState("");
  const [ isSending, setIsSending ] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    const serviceID = ""; // Replace with your EmailJS Service ID
    const templateID = ""; // Replace with your EmailJS Template ID
    const publicKey = ""; // Replace with your EmailJS Public Key

    const templateParams = {
      name,
      email,
      topic,
      detail,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        alert("Email sent successfully!");
        setName("");
        setEmail("");
        setTopic("");
        setDetail("");
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        alert("Failed to send email.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on page load
  }, []);

  return (
    <div className="min-h-screen w-full flex items-start py-24 mt-12 justify-center bg-darkWhite dark:bg-darkBlack text-darkBlack dark:text-darkWhite">
      <div className="w-[70%]">
        <h1 className="text-xl font-bold tracking-wide font-sans">Contact Us</h1>

        <h1 className="text-xl font-bold tracking-wide font-sans mt-10">For any enquiries, feel free to reach out through email:</h1>
        <form className="w-full flex flex-col gap-7 pt-10" onSubmit={sendEmail}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Smith" required className="w-full p-2 rounded-md text-darkBlack" />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="johnsmith123@gmail.com" required className="w-full p-2 rounded-md text-darkBlack" />
          <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="Topic" required className="w-full p-2 rounded-md text-darkBlack" />
          <textarea value={detail} onChange={(e) => setDetail(e.target.value)} placeholder="Enter your message here" required className="w-full p-2 rounded-md pb-8 text-darkBlack"/>
          <button
           type="submit" 
           className="bg-cyan40 hover:bg-[#2db3ae] transition-all text-darkBlack rounded-full py-1.5 w-20"
          >
            { isSending? "Sending ..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendEmail;
