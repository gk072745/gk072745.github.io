import React from 'react'
import styles from "../css/Contact.module.css"
import { ContactUs } from './getMail'
export const Contact = () => {
  return (
    <div id='Contact' className={styles.main}>
         <h1>Contact me</h1>
           <div className={styles.sections}>
       
    <div> 
      <h2>Get in Touch</h2>
       <div className={styles.touch}>
          <div>
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <a href="https://mail.google.com/mail/u/0/?tf=cm&to=kumawatgovind222@gmail.com" target="_blank">kumawatgovind222@gmail.com</a>

          </div>
          <div>
          <i className="fa fa-phone" aria-hidden="true"></i>
          <a href="tel:+919461686381">+91 9461686381</a>
          </div>
          <div>

          <i className='fab fa-linkedin-square'></i>
          <a href="https://www.linkedin.com/in/gk072745/">linkedin</a>
          </div>
          <div>
            <i className="fa-brands fa-github"></i>
            <a href="https://github.com/gk072745">Github</a>
          </div>
          
            <a href={process.env.PUBLIC_URL+"/Govind-Kumawat-Resume.pdf"} className={styles.resume}  download={true}>Resume <i className="fa fa-download" aria-hidden="true"></i></a>
          
      </div>
    </div>







      <div className={styles.Contact}>
        <h2>Message me</h2>
      
  <div>
    <ContactUs/>
  </div>    
  
      </div>
            </div>
    </div>
  )
}
