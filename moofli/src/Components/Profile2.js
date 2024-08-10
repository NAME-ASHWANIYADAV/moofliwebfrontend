
import React, { useContext, useEffect, useState } from 'react';
import './profile2.css'
import { getUser } from '../api/userRequest';
import userPic from '../images/user.png';
import { MainContext } from '../context/MainContextProvider';
import allTag from '../images/allTag.png';
import societytag from '../images/member.png';
import mentortag from '../images/mentor tag.png'

const Profile2 = () => {
  const { currentUser, setCurrentUser } = useContext(MainContext);
  const [userDetails, setUserDetails] = useState({});

  const fetchUserDetails = async () => {
    try {
      if (!currentUser) {
        const userData = await getUser();
        setCurrentUser(userData.data.result);
        setUserDetails(userData.data.result);
      } else {
        setUserDetails(currentUser);
      }
    } catch (err) {
      console.log('Unable to fetch user details', err);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <div className='profile-2-container'>

      <div className='user-pic'>
        <img
          className='user-pic-img'
          src={
            userDetails && userDetails.profilePicUrl
              ? userDetails.profilePicUrl
              : userPic
          }
          alt='user pic'
          width={100}
        />
      </div>
      <div className='user-name'>
          {userDetails.firstname
            ? userDetails.firstname + ' ' + userDetails.lastname
            : 'Loading...'}
      </div>
    </div>
  );
};

export default Profile2;
