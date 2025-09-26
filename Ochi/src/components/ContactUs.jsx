import React from 'react';

const ContactUs = () => {
  return (
    <div className="lg:mt-40 mt-20 px-4 py-16 bg-[#e8e8e8] rounded-3xl relative mx-30 mb-25">
      <h2 className=" font-[Founders Grotesk] text-[7vw] font-semibold text-center mb-15 absolute -top-30 -left-14">Feel free to Contact Us</h2>
      {/* <h2 className=" font-[Founders Grotesk] text-[7vw] font-semibold text-center mb-15 absolute -top-30 -left-14">Contact Us</h2> */}

      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-6xl mx-auto">
        {/* Left Half: Form */}
        <div className="lg:w-1/2 w-full">
          <form className="grid grid-cols-1 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-xl border-2 border-gray-300 focus:border-black focus:outline-none w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-xl border-2 border-gray-300 focus:border-black focus:outline-none w-full"
            />
            <textarea
              placeholder="Your Message"
              className="p-4 rounded-xl border-2 border-gray-300 focus:border-black focus:outline-none w-full h-40 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white p-4 rounded-xl hover:bg-gray-900 transition w-full"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Half: Image */}
        <div className="lg:w-1/2 w-full h-[25vw] flex justify-center">
          <img
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            src="https://www.searchenginejournal.com/wp-content/uploads/2022/08/contact-us-2-62fa2cc2edbaf-sej.png"
            alt="Contact Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
