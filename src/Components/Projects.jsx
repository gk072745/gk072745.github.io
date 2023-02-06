import React from 'react'
import styles from "../css/Projects.module.css"

export const Projects = () => {
  return (
    <div id='Projects' className={styles.main}>
 <div className={styles.level1}>
 <h1>Projects</h1>
<div className={styles.Projects}>
  
<div>
         <div>
          <img src={process.env.PUBLIC_URL + "/Bewkoof.png"} alt="" />
           <h2>Bewkoof.com</h2>
           <p>Online Shopping Site for Men, Women & Accessories. Choose from the best in Men Clothing and Women Fashion Wear. Trendiest designs and styles available with various brands </p>
           <div>
            <h3>Tech Stack</h3>
            <div className={styles.tech}>
             <img src="https://img.shields.io/badge/-React-05122A?style=flat&logo=react" alt="" />&nbsp;
             <img src="https://img.shields.io/badge/redux-%23593d88.svg?style=flat&for-the-badge&logo=redux&logoColor=white" alt="" />&nbsp;
             <img src="https://img.shields.io/badge/React_Router-CA4245?style=flat&for-the-badge&logo=react-router&logoColor=white" alt="" />&nbsp;
            </div>
           </div>
           <div>
           
           </div>

           <div className={styles.show}>
           <a href="https://fashion-store-3234.netlify.app/" target="_blank">Preview</a>
            <a href="https://github.com/ankitatra/-upset-summer-4401" target="_blank">Github</a>
           </div>
         </div>
</div>

 <div>
         <div>
          <img src={process.env.PUBLIC_URL + "/tripAdvisor.png"} alt="" />
           <h2>Trip Advisor</h2>
           <p>TripAdvisor is an online travel information and booking website that has reviews, photographs, and informative forums about various hotels and resorts all over the world.</p>
           <div>
            <h3>Tech Stack</h3>
            <div className={styles.tech}>
             <img src="https://img.shields.io/badge/-HTML-05122A?style=flat&logo=HTML5" alt="" />&nbsp;
             <img src="https://img.shields.io/badge/-CSS-05122A?style=flat&logo=CSS3&logoColor=1572B6" alt="" />&nbsp;
             <img src="https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript" alt="" />&nbsp;
            </div>
           </div>
           <div>
           
           </div>

           <div className={styles.show}>
           <a href="https://candid-zabaione-3fa313.netlify.app/" target="_blank">Preview</a>
            <a href="https://github.com/gk072745/rabid-flower-3002" target="_blank">Github</a>
           </div>
         </div>
</div>

<div>
  <div>
  <img src={process.env.PUBLIC_URL + "/Booking.com.png"} alt="" />
  <h2>Booking.com</h2>
 <p>Booking.com is a Dutch online travel agency for lodging
reservations & other travel products. Guests can also search for car rentals, airport taxis, and even flights on Booking.com.</p>
<div className={styles.techDiv}>
            <h3>Tech Stack</h3>
            <div className={styles.tech}>
             <img src="https://img.shields.io/badge/-HTML-05122A?style=flat&logo=HTML5" alt="" />&nbsp;
             <img src="https://img.shields.io/badge/-CSS-05122A?style=flat&logo=CSS3&logoColor=1572B6" alt="" />&nbsp;
             <img src="https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript" alt="" />&nbsp;
            </div>
      
           </div>

           <div className={styles.show}>
           <a href="https://magical-toffee-cdb307.netlify.app/" target="_blank">Preview</a>
            <a href="https://github.com/shivshankar0965/dusty-jewel-3645" target="_blank">Github</a>
           </div>
  </div>
</div>

<div>
  <div>
  <img src={process.env.PUBLIC_URL + "/semrush.png"} alt="" />
  <h2>Semrush.com</h2>
 <p>Semrush.com is an American public company that offers a SaaS platform known as Semrush. The platform is used for keyword research and online ranking data, including metrics such as search volume.</p>
<div className={styles.techDiv}>
            <h3>Tech Stack</h3>
            <div className={styles.tech}>
             <img src="https://img.shields.io/badge/-HTML-05122A?style=flat&logo=HTML5" alt="" />&nbsp;
             <img src="https://img.shields.io/badge/-CSS-05122A?style=flat&logo=CSS3&logoColor=1572B6" alt="" />&nbsp;
             <img src="https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript" alt="" />&nbsp;
            </div>
      
           </div>

           <div className={styles.show}>
           <a href="https://relaxed-vacherin-74ac83.netlify.app/" target="_blank">Preview</a>
            <a href="https://github.com/gk072745/spiteful-toothbrush-9776" target="_blank">Github</a>
           </div>
  </div>
</div>

</div>
 </div>

    </div>  
  )
}
