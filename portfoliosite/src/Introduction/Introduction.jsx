import style from './Styles/Introduction.module.scss';
function Introduction(){
    const DescriptionText="Justin is a hardworking Software Engineer with experience with an emphasis in web design";
    const Name = "Justin Holsclaw"
    const Title = "Software Engineer"
    return(
        <div className={style.IntroCard}>
            <div className={style.ImageAndLabel}>
                <image className={style.UserImage}></image>
                <p className={style.NameBar}>{Name}</p>
                <p className={style.TitleBar}>{Title}</p>
            </div>
            <div className={style.UserDescriptionCard}>
                <p className={style.serDescription}>{DescriptionText}</p>
            </div>
        </div>
    );
}

export default Introduction;