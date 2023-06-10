import styles from "../css/AboutMe.module.css"
import Typewriter from 'typewriter-effect';


export const AboutMe=()=>{
    
   return (

        <div id="About" className={styles.AboutMe}>
                 <div className={styles.profile}>
                         <div>
                         <img src={process.env.PUBLIC_URL + "/Govind-Kumawat-Profile.png"} alt="" />
                         {/* <img src={process.env.PUBLIC_URL + "/1.png"} alt="" /> */}
                         
                         </div>
                 </div>
                 <div>
                    <div>
                        <h1>Hi 👋,</h1>
                        <h2 className={styles.Typewriter}>
                        <Typewriter
  options={{
    strings: ["Full Stack Developer","PS", 'Problem Solver',"C", "Coder" ,"L","Learner"],
    autoStart:  true,
    loop: true,
  }}
                       />
                        </h2>
                        <p>
I am Govind Kumawat from Rajasthan. I enjoy coding in javacript, React. Dedicated 1200+ hours of learning HTML, CSS, JavaScript, React, React-Redux, and Chakra-UI. Looking to start work in a fast-paced environment and playing a vital role in the company's growth.
                        </p>

                    </div>
                    <div className={styles.resumeDiv}>
                    <a style={{cursor:"pointer"}} href={"https://drive.google.com/uc?export=download&id=1H2MuS3Z2SmTh1Ag1K2E8Y4QWp_pjTUNn"}className={styles.resume}  download={true} 
                          onClick={()=>window.open("https://drive.google.com/file/d/1H2MuS3Z2SmTh1Ag1K2E8Y4QWp_pjTUNn/view?usp=sharing") }>Resume <i className="fa fa-download" aria-hidden="true"></i></a>

                    </div>
                 </div>
             
        </div>



   )

}