import React, { useEffect, useRef, useState } from "react"
import { NavLink } from "react-router-dom"
import { Link as A } from "react-scroll"
import styles from "../css/Navbar.module.css"
export const Navbar=()=>{
   
    const [hamState,setHamState]=useState(false)
   
const setActiveBtn=(e)=>{
//     const btns=document.getElementsByClassName(styles.active)
//    for(let i=0;i<btns.length;i++){
//     btns[i].classList.remove(styles.active)
//    }
//    e.target.className=styles.active
 
}

    return(
        <>
           <nav className={styles.nav}>
              <A  activeClass="active" smooth spy to="Home" >GK</A>
               

               <div>
                <ul className={styles.ul} id={hamState?styles.ul:undefined} >
                    <li>
                        <A className="setActive" onClick={(e)=>{setHamState(false);setActiveBtn(e)}}  activeClass="active" smooth spy to="Home" >Home</A>
                    </li>
                    <li>
                        <A className="setActive"  onClick={(e)=>{setHamState(false);setActiveBtn(e)}}  activeClass="active" smooth spy to="About">  About Me</A>
                    </li>
                    <li>
                        <A className="setActive"  onClick={(e)=>{setHamState(false);setActiveBtn(e)}}  activeClass="active" smooth spy to="Skills">Skills</A>
                    </li>
                    <li>
                        <A className="setActive"  onClick={(e)=>{setHamState(false);setActiveBtn(e)}}  activeClass="active" smooth spy to="Projects">Project</A>
                    </li>
                    <li>
                        <A className="setActive" onClick={(e)=>{setHamState(false);setActiveBtn(e)}}  activeClass="active" smooth spy to="Contact">Contact</A>  
                    </li>
                    <li>
                         <a href={"https://drive.google.com/uc?export=download&id=1G9bFkhbWTWgC5PLtcTzIg_ThDiY8JPWM"}className={styles.resume}  download={true} 
                          onClick={()=>window.open("https://drive.google.com/file/d/1G9bFkhbWTWgC5PLtcTzIg_ThDiY8JPWM/view?usp=sharing") }
                         >Resume <i className="fa fa-download" aria-hidden="true" ></i></a>
                    </li>
                 
                </ul>
                
               </div>
               <div className={styles.ham}>
                        <i onClick={()=>setHamState((prev)=> !prev)} id={styles.bar} className={hamState?"fas fa-times":"fas fa-bars"}></i>
                    </div>

           </nav>

        </>
    )

}