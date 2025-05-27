import React, { useRef, useState } from 'react'
import Titleheader from '../components/Titleheader'
import emailjs from '@emailjs/browser';
import Contactexperience from '../components/Models/Contact/Contactexperience';

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
      e.prevenDefault();
      setLoading(true);

      try {
          await emailjs.sendForm(
              import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
              import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
              formRef.current,
              import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
          );

          setForm({ name: "", email: "", message: "" });
      } catch (error) {
          console.log("EmailJS Error:", error)
      } finally {
        setLoading(false);
      }
  }

  return (
    <section id="contact" className="flex-center flex justify-center items-center section-padding px-5 mt-20 md:px-10 md:mt-40">
        <div className="w-full h-full md:px-10 px-5">
            <Titleheader 
                title="Let's Contact"
                sub="Have questions or ideas? Let's talk"
            />

            <div className="grid-12-cols grid grid-cols-1 gap-10 xl:grid-cols-12 mt-16">
                <div className="xl:col-span-5">
                    <div className="flex-center flex justify-center items-center card-border border border-black-50 bg-black-100 rounded-xl p-10">
                        <form 
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="w-full flex flex-col gap-7"
                        >
                          <div>
                              <label htmlFor="name" className="block text-white-50 mb-2">Your Name</label>
                              <input 
                                  type="text" 
                                  id="name"
                                  name="name"
                                  value={form.name}
                                  onChange={handleChange}
                                  placeholder="Enter your name"
                                  className="w-full px-4 py-4 bg-blue-100 rounded-md text-sm placeholder:text-blue-50 md:text-base"
                                  required

                              />
                          </div>

                          <div>
                              <label htmlFor="email" className="block text-white-50 mb-2">Your Email</label>
                              <input 
                                  type="email" 
                                  id="email"
                                  name="email"
                                  value={form.email}
                                  onChange={handleChange}
                                  placeholder="What’s your email address?"
                                  className="w-full px-4 py-4 bg-blue-100 rounded-md text-sm placeholder:text-blue-50 md:text-base"
                                  required

                              />
                          </div>

                          <div>
                              <label htmlFor="name" className="block text-white-50 mb-2">Your Message</label>
                              <input 
                                  type="message" 
                                  id="message"
                                  name="message"
                                  value={form.message}
                                  onChange={handleChange}
                                  placeholder="How can I help you?"
                                  className="w-full px-4 py-4 bg-blue-100 rounded-md text-sm placeholder:text-blue-50 md:text-base"
                                  rows="5"
                                  required

                              />
                          </div>

                          <button type="submit" disabled={loading}>
                              <div className="cta-button px-4 py-4 rounded-lg bg-black-200 flex justify-center items-center relative cursor-pointer overflow-hidden group">
                                  <div className="bg-circle absolute -right-10 origin-center top-1/2 -translate-y-1/2 w-[120%] h-[120%] group-hover:size-10 group-hover:right-10 rounded-full bg-white-50 transition-all duration-500" />
                                      <p className="text text-black transition-all duration-500 group-hover:text-white-50 text-base font-bold group-hover:-translate-x-5 -translate-x-5 xl:translate-x-0 md:text-lg">
                                          {loading ? "Sending..." : "Send Message"}
                                      </p>

                                      <div className="arrow-wrapper size-10 rounded-full absolute right-10 top-1/2 -translate-y-1/2 flex justify-center items-center overflow-hidden group-hover:bg-white-50">
                                          <img src="/images/arrow-down.svg" alt="arrow" className="size-5 translate-y-0 animate-bounce transition-all duration-500 xl:-translate-y-32 group-hover:translate-y-0" />
                                      </div>
                                </div>
                         
                          </button>

                        </form>
                    </div>
                </div>

                <div className="min-h-96 xl:col-span-7">
                    <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
                        <Contactexperience />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
