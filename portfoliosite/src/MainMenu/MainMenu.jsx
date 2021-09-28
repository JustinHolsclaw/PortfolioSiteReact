import style from './Styles/MainMenu.module.scss';
import './Styles/MainMenu.scss';
function MainMenu(){
    return(
        <div className={style.MenuLayoutContainer}>
                <image className={style.Logo}></image>
            <div className={style.MenuButtons}>
                <button className={style.MenuButton}>Home</button>
                <button className={style.MenuButton}>Resume</button>
                <button className={style.MenuButton}>Projects</button>
                <button className={style.MenuButton}>Contact Me</button>
            </div>
            <div className={style.SocialMediaButtons}>
                <button href='#' className="fa fa-facebook SocialMediaButton"/>
                <button href='#' className="fa fa-linkedin SocialMediaButton" />
                <button href='#' className="fa fa-github SocialMediaButton"></button>
            </div>
        </div>

    );
}
export default MainMenu;