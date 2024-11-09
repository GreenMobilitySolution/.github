import React from 'react';

const ContactUsPage = () => {
  return (
    <div className="min-h-screen h-auto w-full flex flex-col items-center justify-center py-10 px-4 bg-gray-100">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-lg p-8">
        <h1 className="text-5xl font-bold mb-8 text-center text-green-700">Contact Us</h1>

        <p className="text-lg text-gray-700 mb-4">
          We’d love to hear from you! Whether you have a question, feedback, or partnership inquiry, the MobyLife Ltd team is here to assist. Reach out to us through any of the following channels, and we’ll respond as soon as possible.
        </p>

        <div className="flex justify-center items-center">
        <div className="">
        <h2 className="text-3xl font-semibold mt-6 mb-4 text-green-700">Get in Touch</h2>
        <p className="text-lg text-gray-700 mb-4">
          <strong>Email:</strong> support@mobylife.rw<br />
          <strong>Phone:</strong> +250 789 123 456<br />
          <strong>Address:</strong> Kigali City, Rwanda
        </p>

        {/* Contact Form */}
        <h2 className="text-3xl font-semibold mt-6 mb-4 text-green-700">Send Us a Message</h2>
        <form className="w-full max-w-lg">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-green-500"
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-green-500"
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-green-500"
              id="message"
              name="message"
              rows={5}
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Submit
          </button>
        </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
