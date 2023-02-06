import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import styles from "../css/githubstats.module.css"

const Calender = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 8;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

if(  date.getFullYear() === currentYear ){
 return monthOfDay > currentMonth - shownMonths && monthOfDay <= currentMonth
}else if( date.getFullYear()===currentYear-1){
 return  monthOfDay>currentMonth+4
}
 
    });
  };
  return (
    // #16253a 
    <div style={{background:"#1b2430",padding:"50px 0px"}}>




        <div className={styles.gitStats}>
               <h1 style={{ color:"#fff"}}>My Github Statistics</h1>
              <div>
                  <div>
                <img src="https://github-readme-streak-stats.herokuapp.com/?user=gk072745&theme=radical&hide_border=false" alt="" />
                 </div>
                <div >
                <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=gk072745&theme=radical&hide_border=false&include_all_commits=true&count_private=true&layout=compact" alt="" />
                <img src="https://github-readme-stats.vercel.app/api?username=gk072745&theme=radical&hide_border=false&include_all_commits=true&count_private=true" alt="" />
                </div>
           </div>
        </div>






       <div className={styles.calc}>
       <h1 style={{ color:"#fff",padding:"50px 0px"}}>My Github Calender</h1>
      <GitHubCalendar
        style={{ margin: "auto",color:"#fff"}}
        username="gk072745"
        transformData={selectLastHalfYear}
        blockSize={20}
        fontSize={20}
        hideColorLegend={false}

        
      >
         <ReactTooltip delayShow={50} html /> 
      </GitHubCalendar>
       </div>
    </div>
  );
};

export default Calender;