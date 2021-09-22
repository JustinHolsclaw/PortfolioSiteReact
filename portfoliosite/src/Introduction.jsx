import './Introduction.scss'
function Introduction(){
    const DescriptionText="Justin is a hardworking Software Engineer with experience with an emphasis in web design";
    const Name = "Justin Holsclaw"
    const Title = "Software Engineer"
    return(
        <div className="IntroCard">
            <div className="ImageAndLabel">
                <image className="UserImage"></image>
                <p className="NameBar">{Name}</p>
                <p className="TitleBar">{Title}</p>
            </div>
            <div className="UserDescriptionCard">
                <p className="UserDescription">{DescriptionText}</p>
            </div>
        </div>
    );
}

export default Introduction;