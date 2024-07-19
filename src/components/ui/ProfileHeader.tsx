import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import CustomButton from '../ui/Button';

const ProfileHeader = () => {
    // @ts-ignore
  const [isUSer, setIsUser] = useState(false);

  useEffect(()=>{
    if(localStorage.getItem("user")){
      setIsUser(true);
    }
  })
  return (
    <div className="flex items-center gap-4">
        <CustomButton
          title="login"
           varient="outlined"
           />
        <Link to="/signup" className="hidden md:block">
          <CustomButton         title="Sign up"
           varient="contained"/>
        </Link>
    </div>
  );
};

export default ProfileHeader;