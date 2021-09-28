import style from './Styles/BackEnd.module.scss'

function Backend(){
    
    return(
        <div className={style.BackendContainer}>
            <h3 className={style.Text}>Apis that compliment the application and offer creative solutions to problems.</h3>
            <button className={style.SeeExample}>See Example</button>
        </div>
    );
}

export default Backend;