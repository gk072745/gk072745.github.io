import Typewriter from "typewriter-effect"
import styles from "../css/Home.module.css"


export const Home=()=>{

return  (

<div id="Home" className={styles.bc}>

     <div>
        <h2>Hello, I'm a</h2>
     </div>
 <div>
 <h1>
        <Typewriter
  options={{
    strings: ["FSD","Full Stack Developer"],
    autoStart: true,
    loop: true,
  }}
  />
        </h1>
 </div>
</div>


)

}