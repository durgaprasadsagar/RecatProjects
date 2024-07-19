
function ProfilePicture(){

    const imageUrl = './src/ARJUN/Arjun.jpg';

    const handleClick = (e) => e.target.style.display = "none";

    return(<img onClick={(e) => handleClick(e)} src={imageUrl} width={200} height={200}></img>);
}
export default ProfilePicture