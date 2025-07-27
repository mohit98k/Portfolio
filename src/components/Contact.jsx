import React from 'react';

export const Contact = () => {
  return (
    
      <div id='Contact' className="w-1/2 mx-auto text-center mt-20">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#8245ec]">Contact Me</h2>
        <p className="mb-12 text-gray-400">Let's connect! Feel free to send me a message.</p>

        <form 
          action="https://formsubmit.co/mohx98k@gmail.com"
          method="POST"
          className="flex flex-col gap-6"
        >

          <div className="flex flex-col sm:flex-row gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8245ec] transition-all duration-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8245ec] transition-all duration-300"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full p-3 rounded-md bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8245ec] transition-all duration-300"
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            className="w-full p-3 rounded-md bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8245ec] transition-all duration-300 resize-none"
          ></textarea>

          <button
            type="submit"
            className="bg-[#8245ec] hover:bg-[#6c39c6] text-white font-semibold py-3 rounded-md transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
  
  );
};
