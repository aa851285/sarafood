"use client"

import React, { useState } from 'react';
import { TiSocialFacebook } from 'react-icons/ti';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, subject, message });
  };

  return (
    <div className="bg-red-950">
      <div className="container flex flex-col items-center justify-center py-16 mx-auto space-y-8">
        <div className="text-center text-white">
          <h2 className="mb-4 text-4xl font-extrabold">Contact Us</h2>
          <p className="font-light text-gray-300 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-8 bg-orange-400 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="bg-gray-50 rounded-lg border border-gray-300 text-gray-900 text-sm p-2.5 w-full focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-5 py-3 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-black dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
        <div className="text-white">
          <h1 className="mb-2 text-lg font-bold">Get In Touch</h1>
          <ul className="flex items-center space-x-2">
            <p className="text-lg">Follow Us:</p>
            <li>
              <TiSocialFacebook size={30} className="text-white" />
            </li>
            <li>
              <AiFillInstagram size={30} className="text-white" />
            </li>
            <li>
              <AiFillYoutube size={30} className="text-white" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
