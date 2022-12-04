import styles from "../css/AboutMe.module.css"
import Typewriter from 'typewriter-effect';



export const AboutMe=()=>{
    
   return (

        <div id="About" className={styles.AboutMe}>
                 <div className={styles.profile}>
                         <div>
                         <img src={process.env.PUBLIC_URL + "/Govind-Kumawat-Profile.png"} alt="" />
                         </div>
                 </div>
                 <div>
                    <div>
                        <h1>Hi 👋,</h1>
                        <h2 className={styles.Typewriter}>I'm Govind Kumawat ,
                        
                        <Typewriter
  options={{
    strings: ["Full Stack Developer","PS", 'Problem Solver',"C", "Coder" ,"L","Learner"],
    autoStart: true,
    loop: true,
  }}
                       />
                        </h2>

                        <p>
An Indian Developer who loves to solve real world problems with awesome people. I take a collaborative, creative & strategic approach to solving problems. I have completed Full Stack Developent <b>Full Time</b>  course in Masai School. 
                        </p>
                    </div>
                 </div>
             
        </div>



   )

}