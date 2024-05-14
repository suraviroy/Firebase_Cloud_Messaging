import React from 'react';
// import { useNavigate } from 'react-router-dom';
import './Profile.css';
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiPencilFill } from "react-icons/ri";
import profile_pic from '../images/profile1.png';
import { useState } from 'react';

const Profile = () => {

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="adjust-profile" onClick={handleDropdownToggle}>
            <div className="custom-style">
                <div className="custom-flex-style">
                    <span className="custom-circle-image">
                        <img src={profile_pic}
                            alt="User Image"
                            className="custom-user-image" />
                    </span>
                    <span className="custom-items-center">
                        <span className="custom-text-style">Ryan</span>
                        <div className="custom-ml-2">
                            <RiArrowDropDownLine className="custom-icon-style" />
                        </div>
                        {isDropdownOpen && (
                            <div className="dropdown-content">
                                <p><div className="profile-info">
                                    <img src={profile_pic} alt="User Image" className="dropdown-user-image" />
                                    <div className='details'>
                                        <p className="profile-name">Ryan</p>
                                        <p className="profile-phone">1234567890</p>
                                    </div>
                                    <div className="icon-container">
                                        <span><RiPencilFill className="custom-icon-pencile" /></span>
                                    </div>
                                </div></p>
                              <div className='other-option'> <a href='#'> <p>My Appointment </p></a>
                              <a href='#'> <p>My Health File </p></a>
                              <a href='#'> <p>Help Center </p></a>
                              <a href='#'> <p>Logout </p></a>
                              </div>
                            </div>
                        )}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Profile;