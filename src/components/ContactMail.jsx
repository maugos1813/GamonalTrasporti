import React from "react";
import { Contact } from "./Contact";
import Swal from 'sweetalert2'

export const ContactMail = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    // Referencia al formulario
    const form = event.target;

    // Crear los datos del formulario
    const formData = new FormData(form);
    formData.append("access_key", "70ee5bc8-6f38-4822-8b3d-28bc500dd9e7");

    // Convertir a JSON
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    // Enviar la solicitud
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
        Swal.fire({
            title: "Success",
            text: "Message sent fully",
            icon: "success"
          });
        form.reset()  
    } else {
      console.error("Error", res);
    }
  };

  return (
    <>
      <section className='relative bg-[#252d5c] pt-[10%] bg-center bg-cover bg-[url("/camioni.jpg")]'>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-1 text-white flex flex-col items-center">
          <h1 className="text-[5vh]">Contact Us</h1>
          <h2 className="text-[3vh]">Write your message</h2>
          <form
            className="mt-6 w-full max-w-md p-6 rounded-lg shadow-lg text-black"
            onSubmit={onSubmit}
          >
            <div className="mb-4">
              <label htmlFor="first-name" className="block"></label>
              <input
                id="first-name"
                type="text"
                placeholder="First Name"
                className="w-full h-[5vh] rounded-xl p-3 border border-gray-300"
                required
                name="firs-name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="last-name" className="block"></label>
              <input
                id="last-name"
                type="text"
                placeholder="Last Name"
                className="w-full h-[5vh] rounded-xl p-3 border border-gray-300"
                name="last-name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block"></label>
              <input
                id="phone"
                type="tel"
                placeholder="Phone"
                className="w-full h-[5vh] rounded-xl p-3 border border-gray-300"
                name="phone"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block"></label>
              <input
                id="email"
                type="email"
                placeholder="Email address"
                className="w-full h-[5vh] rounded-xl p-3 border border-gray-300"
                name="email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block"></label>
              <textarea
                id="message"
                placeholder="Message"
                className="w-full h-[15vh] rounded-xl p-3 border border-gray-300"
                name="message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 h-[5vh] rounded-lg cursor-pointer hover:bg-green-400 text-white mb-20"
            >
              Send
            </button>
          </form>
        </div>
      </section>
      <Contact />
    </>
  );
};
