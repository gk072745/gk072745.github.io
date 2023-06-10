import styles from "../css/Skills.module.css"
import React from 'react'
import { AiFillHtml5, AiOutlineCodeSandbox } from "react-icons/ai"
import { IoLogoCss3 } from "react-icons/io"
import { SiJavascript, SiPostman, SiVisualstudiocode } from "react-icons/si"
import { FaReact } from "react-icons/fa"
import { SiRedux } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"
import { SiExpress } from "react-icons/si"
import { SiTypescript } from "react-icons/si"
import { SiMongodb } from "react-icons/si"
import { SiChakraui} from "react-icons/si"
import { TbGitMerge} from "react-icons/tb"
import { AiFillGithub} from "react-icons/ai"

export const Skills = () => {
  return (

    <div id='Skills' className={styles.main}>
      <h1>Skills</h1>
      <div className={styles.tech}>

        <div className={styles.flip}>
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noreferrer"  style={{color:"#dd4b25"}}> 
          <AiFillHtml5  />
          </a>
        </div>

        <div className={styles.flip}>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer" style={{color:"#254bdd"}}>
          <IoLogoCss3  />
          </a>
        </div>

        <div className={styles.flip}>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer" style={{color:"#edd718"}}> 
          <SiJavascript  /></a>
        </div>

        <div className={styles.flip}>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer"  style={{color:"#5ed3f3"}}> 
          <FaReact  /></a>
        </div>

        <div className={styles.flip}>
          <a href="https://redux.js.org" target="_blank" rel="noreferrer"  style={{color:"#7248b6"}}> 
          <SiRedux  /></a>
        </div>

        <div className={styles.flip}>
          <a href="https://chakra-ui.com/" target="_blank" rel="noreferrer" style={{color:"#3bc8be"}}> 
          <SiChakraui  /></a>
        </div>

        <div className={styles.flip}>
          <a href="https://nodejs.org" target="_blank" rel="noreferrer" style={{color:"#40843d"}}> 
          <FaNodeJs  /></a>
        </div>

        <div className={styles.flip}>
          <a href="https://expressjs.com" target="_blank" rel="noreferrer" style={{color:"#7e7e7e"}}> 
          <SiExpress  /></a>
        </div>

        <div className={styles.flip}>
          <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer" style={{color:"#07ac4f"}}> 
          <SiMongodb  /></a>
        </div>
        
        <div className={styles.flip}>
          <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer" style={{color:"#2f74c0"}}> 
          <SiTypescript  /></a>
        </div>

      </div>



      <h1>Tools</h1>
      <div className={styles.tool}>

        <div className={styles.flip}>
          <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer" style={{color:"#2c7bb3"}}> 
          <SiVisualstudiocode  />
          </a>
        </div>

        <div className={styles.flip}>
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer" style={{color:"#e84d31"}}>
          <TbGitMerge  />
          </a>
        </div>

        <div className={styles.flip}>
          <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer" style={{color:"#000"}}> 
          <AiFillGithub  /></a>
        </div>

        <div className={styles.flip}>
          <a href="https://www.postman.com/" target="_blank" rel="noreferrer" style={{color:"#a63229"}}> 
          <SiPostman  /></a>
        </div>

        <div className={styles.flip}>
          <a href="https://codesandbox.io/https://redux.js.org" target="_blank" rel="noreferrer" style={{color:"#000"}}> 
          <AiOutlineCodeSandbox  /></a>
        </div>


      </div>


  



    </div>
  )
}

export default Skills