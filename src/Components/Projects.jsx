import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { IoLogoNodejs } from 'react-icons/io'
import { SiChakraui, SiExpress, SiMongodb, SiRedux } from 'react-icons/si'
import { TbBrandJavascript } from 'react-icons/tb'
import styles from "../css/Projects.module.css"

export const Projects = () => {
  return (
    <div id='Projects' className={styles.main}>
 <div className={styles.level1}>
 <h1>Projects</h1>
<div className={styles.Projects}>
<div>
  <div>
  <img src={process.env.PUBLIC_URL + "/myntra.png"} alt="" />
  <h2>Myntra.com</h2>
 <p>Myntra.com is an E-commerce website for Men, Women & kids. Focusing on hassle free and enjoyable shopping experience to shoppers across the country with the widest range of brands and products on its portal.</p>
<div className={styles.techDiv}>
            <h3>Tech Stack</h3>
            <div className={styles.tech}>
           <AiFillHtml5 />
           <DiCss3 />
           <TbBrandJavascript />
           <FaReact />
           <SiRedux/>
           <SiChakraui/>
                        </div>
      
           </div>

           <div className={styles.show}>
           <a href="https://vastra-com.netlify.app/" target="_blank">Preview</a>
            <a href="https://github.com/gk072745/vastra.com" target="_blank">Github</a>
           </div>
  </div>
</div> 

<div>
         <div>
          <img src={process.env.PUBLIC_URL + "/nykaa.png"} alt="" />
           <h2>Nykaa.com</h2>
           <p>Nykaa.com is an indian Lifestyle Brand and E-commerce platform. It offers a well-curated selection of products across makeup, skincare, haircare, bath and body, fragrance, luxury and premium brands.</p>
           <div>
            <h3>Tech Stack</h3>
            <div className={styles.tech}>
           <AiFillHtml5 />
           <FaReact />
           <SiRedux/>
           <SiChakraui/>
           <IoLogoNodejs />
           <SiMongodb/>
           </div>
           </div>
           <div>
           
           </div>

           <div className={styles.show}>
           <a href="https://glowup-com.netlify.app/" target="_blank">Preview</a>
            <a href="https://github.com/gk072745/glowup.com" target="_blank">Github</a>
           </div>
         </div>
</div>

<div>
         <div>
          <img src={process.env.PUBLIC_URL + "/Bewkoof.png"} alt="" />
           <h2>Bewkoof.com</h2>
           <p>Online Shopping Site for Men, Women & Accessories. Choose from the best in Men Clothing and Women Fashion Wear. Trendiest designs and styles available with various brands </p>
           <div>
            <h3>Tech Stack</h3>
            <div className={styles.tech}>
           <AiFillHtml5 />
           <DiCss3 />
           <TbBrandJavascript />
           <FaReact />
           <SiRedux/>
           <SiChakraui/>

                        </div>
           </div>
           <div>
           
           </div>

           <div className={styles.show}>
           <a href="https://fashion-store-3234.netlify.app/" target="_blank">Preview</a>
            <a href="https://github.com/gk072745/Bewakoof.com-Clone" target="_blank">Github</a>
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
           <AiFillHtml5 />
           <DiCss3 />
           <TbBrandJavascript />

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
