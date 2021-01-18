import React, { useContext } from 'react';
import profileImg from '../static/image/profile.png';
import styled from "styled-components";
import AuthContext from '../context/auth/authContext';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LogoutLink = styled.span`
  margin-right: 1rem;
`;

const ProfileSection = () => {
  const authContext = useContext(AuthContext);
  const { logout, isAuth } = authContext;

  const onLogout = (e) => {
    e.preventDefault();
    logout()
  }

  return (
    <Container>
      {isAuth &&
        <LogoutLink>
          <a href="#" onClick={onLogout}>Logout</a>
        </LogoutLink>
      }
      <div className="profile-image">
        <img src={profileImg} alt="Profile"/>
      </div>
    </Container>
  )
}

export default ProfileSection
