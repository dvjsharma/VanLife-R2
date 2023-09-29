import React from 'react'
import { Navigate, useNavigate} from 'react-router-dom';
import useAuth from '../Context/useAuth';
import userImg from "../Assets/images/profile-general.png"
const Profile = () => {

    const {userData, setuserData, isloggedin, setisloggedin} = useAuth();
    const navigate=useNavigate()
    if(!isloggedin){
        return (<Navigate to="/login" state={{message: "You need to login to view your profile"}}/>)
    }
    const user=userData.user.name
    const email=userData.user.email
    function handelClick(){
        setuserData(null)
        setisloggedin(false)
        navigate("/login")
    }
  return (
      <>
        <div className="login-container">
            <br /><br /><br />
            <img src={userImg} alt="" className="profile-img"/>
            <h1>{`${user}'s VanLife`}</h1>
            <span className="email-host">{email}</span>
            <br /> <br />
            <button className="button-profile" onClick={()=>{handelClick()}}>Do you wish to Logout?</button>
        </div>
      </>
  )
}

export default Profile
