import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import styles from "../css/getMail.module.css"

export const ContactUs = () => {
    const [isloading,setLoading]=useState(false)
    const[ check,setCheck]=useState("Send")
    const [text,setText]=useState("")
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();
setLoading(true)
    emailjs.sendForm('service_ba5zhl6', 'template_xd6m0g1', form.current, 'js2fK9X_JoJlkOj3A')
      .then((result) => {
           setCheck("Checking...")
         setText(`I will get back to you soon ✔`)

          setLoading(false)
          setTimeout(()=>{
            setCheck("Send")
          },500)
          setTimeout(() => {
            setText("")
          }, 3000);
          setCheck("Checking...")



        
          

      })
      .catch((err)=>{
        setCheck("Checking...")
        setText(`Something went Wrong ✖`)

         setLoading(false)
         setTimeout(()=>{
           setCheck("Send")
         },500)
         setTimeout(() => {
           setText("")
         }, 3000);
         setCheck("Checking...")

      })
  };

  return (
  <div className={styles.main}>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" placeholder='Name' name="user_name" required/>
      <label>Email</label>
      <input type="email" placeholder='Email' name="user_email" required />
      <label>Message</label>
      <textarea name="message" placeholder='Message' required/>
      <div className={styles.msg} style={{color:"teal"}}>
        {text}
    </div>
      <input disabled={isloading} type="submit" value={isloading?"Send":check} />
    </form>
 
  </div>
  );
};