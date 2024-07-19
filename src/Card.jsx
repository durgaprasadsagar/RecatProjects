import profilePic from './ARJUN/Arjun.jpg'

function Card(){
    return(
       <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" width={200} height={200}></img>
            <h2 className="card-title">Arjun Prasad</h2>
            <p className="card-text">I am a Video Editor and Story writer</p>
       </div> 
    );
}
export default Card
