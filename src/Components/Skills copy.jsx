import styles from "../css/Skills.module.css"
import React from 'react'

export const Skills = () => {
  return (

    <div id='Skills' className={styles.main}>
                <h1>Skill & Tools</h1>

   
               <div className={styles.tech}>
                   <div className={styles.flip}><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg" alt="html5"/> </a> </div>
                   <div className={styles.flip}><a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://chiranjeev-thapliyal.vercel.app/svg/css3.svg" alt="css3"/> </a></div>
                   <div className={styles.flip}><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg" alt="javascript"/> </a></div>
                   <div className={styles.flip}><a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg" alt="react"/> </a> </div>
                   <div className={styles.flip}><a href="https://redux.js.org" target="_blank" rel="noreferrer"> <img src="https://chiranjeev-thapliyal.vercel.app/svg/redux.svg" alt="redux"/> </a></div>
                   <div className={styles.flip}><a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg" alt="nodejs"/> </a></div>
                   <div className={styles.flip}><a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src={process.env.PUBLIC_URL + "/express.png"} alt="express"/>  </a></div>
                   <div className={styles.flip}><a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://chiranjeev-thapliyal.vercel.app/svg/mongodb.svg" alt="mongodb"/> </a></div>
                   <div className={styles.flip}><a href="https://chakra-ui.com/" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/color/512/chakra-ui.png" alt="Chakra" /></a></div>
                   <div className={styles.flip}><a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src={process.env.PUBLIC_URL + "/typescript.png"}  alt="TypeScript"/> </a></div>
               </div>
          
       

    </div>
    )
}

export default Skills