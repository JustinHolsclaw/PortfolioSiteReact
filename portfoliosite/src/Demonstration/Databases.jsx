import style from './Styles/Databases.module.scss'

function Databases(){
    
    return(
        <div className={style.DatabaseCardContainer}>
            <h3 className={style.Text}>Justin makes and maintains databases so they are well planned and tested thoroughly</h3>
            <button className={style.SeeExample}>See Example</button>
        </div>
    );
}

export default Databases;