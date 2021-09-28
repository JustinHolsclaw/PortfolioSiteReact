import Backend from './Backend';
import Databases from './Databases';
import FrontEnd from './FrontEnd';
import style from './Styles/Demonstration.module.scss'



function Demonstration (){
    

    return(
      <div className={style.SkillBoxContainer}>
        <div className={style.SkillBox1}>
          <Databases/>
        </div>
        <div className={style.SkillBox2}>
            <FrontEnd/>
        </div>
        <div className={style.SkillBox3}>
            <Backend/>
        </div>
      </div>  
    );
}

export default Demonstration;