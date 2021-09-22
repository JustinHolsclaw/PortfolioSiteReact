import './MainMenu.scss';
function MainMenu(){
    return(
        <div className="MenuLayoutContainer">
                <image className="Logo"></image>
            <div className="MenuButtons">
                <button className="MenuButton">Home</button>
                <button className="MenuButton">Resume</button>
                <button className="MenuButton">Projects</button>
                <button className="MenuButton">Contact Me</button>
            </div>
            <div className="SocialMediaButtons">
                <button href='#' className="fa fa-facebook SocialMediaButton"/>
                <button href='#' className="fa fa-linkedin SocialMediaButton" />
                <button href='#' className="fa fa-github SocialMediaButton"></button>
            </div>
        </div>

    );
}
export default MainMenu;