import style from './Styles/FrontEnd.module.scss';

function FrontEnd(){
    
    return(
        <div className={style.FrontEndContainer}>
            <h3 className={style.Text}>Frontends that are dynamic, easy to use and mobile friendly.</h3>
            <button className={style.SeeExample}>See Example</button>
        </div>
    );
}

export default FrontEnd;