import React from "react";
import { useState } from "react";
import { send } from "emailjs-com";
import { useRouter } from "next/router";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });
  const route = useRouter();

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_g0cucze", "template_jfb1v6e", toSend, "HYY8JDeeZmiQZ-f79")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Thank you for your email! We will get back to you soon!");
        route.push("/");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        alert(err);
      });
  };

  return (
    <>
      <Head>
        <title>Yoga Barn - Contact</title>
        <meta
          name="description"
          content="Yoga Barn - Get in Contact with the Yoga Barn"
          key="desc"
        />
      </Head>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}
      />
      <Script id="ga-script" strategy="lazyOnload">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}', {
      page_path: window.location.pathname,
    });
        `}
      </Script>
      <div className="flex justify-center">
        <div className="w-full  mb-32 text-gray-800 pt-24 ">
          <div className="text-2xl font-thin mb-5 flex items-center  justify-center text-gray-600 tracking-wider">
            CONTACT THE YOGA BARN
          </div>
          <div className="flex w-full h-500   ">
            <div className="flex w-full justify-center ">
              <div className=" block w-5/8  items-center justify-center align-middle mb-10 py-2 px-4">
                <iframe
                  src="https://maps.google.com/maps?q=501%20N%20union%20st,%20Whitesboro%20Tx&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="h-48 w-full rounded-xl mt-2 "
                  frameborder="0"
                  allowfullscreen
                ></iframe>

                <div className="flex items-center justify-center text-xs sm:text-sm font-semibold mt-2 text-center text-gray-600">
                  Address: 501 N. Union St, Whitesboro, TX 76273
                </div>
                <div className="flex justify-center mt-3">
                  <form onSubmit={onSubmit} className="w-full ">
                    <div className="flex justify-center mt-4 mb-4 text-sm sm:text-lg font-bold text-gray-600">
                      Send us a message!
                    </div>
                    <div class="form-group mb-6">
                      <input
                        type="text"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Name"
                        name="from_name"
                        //value={toSend.from_name}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="form-group mb-6">
                      <input
                        type="reply_to"
                        //value={toSend.reply_to}
                        name="reply_to"
                        onChange={handleChange}
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Email address"
                      />
                    </div>
                    <div class="form-group mb-6">
                      <textarea
                        class="
              form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        rows="3"
                        name="message"
                        placeholder="Message"
                        //value={toSend.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      class=" w-full px-6 py-2.5 bg-teal-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  transform hover:scale-105  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out mb-10"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
