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
reservations & other travel products.</p>
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

</div>
 </div>


    </div>  
  )
}
