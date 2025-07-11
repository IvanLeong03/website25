import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SendEmail = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [detail, setDetail] = useState("");
  const [ isSending, setIsSending ] = useState(false);
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    const serviceID = "service_z45cczl"; // Replace with your EmailJS Service ID
    const templateID = "template_0brhuuj"; // Replace with your EmailJS Template ID
    const publicKey = "R6nRGun7jLYyaFOW5"; // Replace with your EmailJS Public Key

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
    <div className="min-h-screen w-full flex items-start py-24 mt-12 justify-center ">
      <div className="w-3/4 relative">
        <button
        onClick={() => navigate('/')}
        className="absolute top-0 right-8 text-2xl font-bold text-gray-600 hover:text-red-500"
        aria-label="Close"
        >
          &times;
        </button>

        <h1 className="text-xl font-bold tracking-wide">Contact Us</h1>

        <h1 className="text-xl font-bold tracking-wide mt-10">For any enquiries, feel free to reach out through email:</h1>
        <form className="w-full flex flex-col gap-7 pt-10" onSubmit={sendEmail}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required className="w-full p-2 rounded-xl border border-grey40" />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" required className="w-full p-2 rounded-xl border border-grey60" />
          <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="Topic" required className="w-full p-2 rounded-xl border border-grey60" />
          <textarea value={detail} onChange={(e) => setDetail(e.target.value)} placeholder="Enter your message here" required className="w-full px-2 pt-2 rounded-xl pb-20 border border-grey80"/>
          <button
           type="submit" 
           className="bg-cyan40 hover:bg-blue40 hover:text-yellowHighlight transition-all rounded-full py-1.5 w-20"
          >
            { isSending? "Sending ..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendEmail;
