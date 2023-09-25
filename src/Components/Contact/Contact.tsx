import { enqueueSnackbar, SnackbarProvider  } from 'notistack';
import React, { useEffect, useRef, useState } from 'react';
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [message, setMessage] = React.useState<string>('');
  const [disabled, setDisabled] = useState(true);
  const [bgColor, setBgColor] = useState("#24252D");



  useEffect(() => {
    if(name.length > 2 && email.includes('@') && message.length > 2 ){
      setDisabled(false);
      setBgColor("#00CCBB");
    }
  }, [name, email, message]);

const serviceId ='service_hri49eq'
const templateId ='template_40w5hjo'
const publicKey='smqYZrfsXfFCsp4MP'

  const templateParams = {
    from_name: name,
    from_email: email,
   to_name:'Karan',
    message: message,
  };

  const sendEmail = (e:any) => {
    e.preventDefault();
   

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response)=> {
        enqueueSnackbar('Message Sent Successfully', { variant: 'success' });
        setName('');
        setEmail('');
        setMessage('');
    })
    .catch((error) => {
      enqueueSnackbar('Message Sent Failed', { variant: 'error' });
    });
  };

  return (
    <div>
      <SnackbarProvider maxSnack={3}>
      <section className="h-screen w-full pb-6 pt-24" id="contact">
        <div className="flex items-center gap-x-4">
          <h2 className="flex items-center gap-x-2 text-2xl font-bold text-neutral-900 dark:text-white">
            <span className="rounded bg-white/20 text-pink-400 backdrop-blur dark:bg-neutral-900/20">02.</span>Contact me
          </h2>
          <div className="relative top-[2px] h-[1px] flex-grow animate-bounce bg-neutral-950/10 dark:bg-white/20"></div>
        </div>
        <div className="grid gap-6 text-white pt-12 text-center">
          <h3 className="text-3xl sm:text-4xl">Get in touch with me</h3>
          <p className="text-center">
            Want to talk about your project ?<br />Just fill out the form below and I’ll get back to you as soon as I can.
          </p>
        </div>
        <form  ref={form} onSubmit={sendEmail}  className="mx-auto mt-12 flex rounded-lg text-white flex-col gap-x-6 gap-y-4  bg-white/30 p-6 outline outline-1 outline-neutral-500/30 backdrop-blur  dark:bg-neutral-900/70 dark:outline-neutral-200/10 md:w-full">
          <div className="grid w-full gap-6 md:grid-cols-2">
            <div className="flex w-full flex-col gap-y-2">
              <label className="indent-1 font-medium" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                className="w-full rounded-md border-0 bg-transparent p-2.5 ring-1 ring-neutral-500/40 transition-all focus:bg-white/60 focus:ring-pink-400 focus:outline-none focus:dark:bg-neutral-900/70"
                placeholder=""
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex w-full flex-col gap-y-2">
              <label className="indent-1 font-medium" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                className="w-full rounded-md border-0 bg-transparent p-2.5 ring-1 ring-neutral-500/40 transition-all focus:bg-white/60 focus:ring-pink-400 focus:outline-none focus:dark:bg-neutral-900/70"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
               
              />
            </div>
            
           
          </div>
          <div className="flex h-full w-full flex-col gap-y-2">
            <label className="indent-1 font-medium" htmlFor="messsage">
              Messsage
            </label>
            <textarea
              id="messsage"
              className="f peer rounded-md h-[13.3rem] border-0 bg-transparent p-2.5 leading-7 tracking-wider ring-1 ring-neutral-500/40 focus:bg-white/60 focus:ring-pink-400 focus:outline-none focus:dark:bg-neutral-900/70"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="flex items-center gap-x-4 self-end">
            <button type='submit' className="flex h-[2.6rem] w-[8.2rem] items-center justify-center gap-x-2 rounded text-primary  ring-1 ring-pink-400 backdrop-blur transition hover:bg-pink-600/90 hover:text-white hover:ring-pink-400 focus:ring-pink-400 false">
              Submit
            </button>
          </div>
        </form>
        <div className='flex justify-center items-center my-10'>

        <p className='text-white font-medium'>© 2023 - Karan Kumar</p>
        </div>
      </section>
      </SnackbarProvider>
    </div>
  );
};

export default Contact;
