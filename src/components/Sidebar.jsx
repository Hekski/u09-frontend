import React from 'react';
import styled from 'styled-components';
import AvatarImage from './assets/avatarImage.jpeg';

import { Link, Outlet } from 'react-router-dom';
import { RiHomeLine, RiFileCopyLine } from 'react-icons/ri';
import { HiOutlineCog8Tooth } from 'react-icons/hi2';
import { FaWallet } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import Badge from './badge';

function Sidebar({ code }) {
  return (
    <Container>
      <LinksContainer>
        <List>
          <Link to='/'>
            <ListItem>
              <RiHomeLine />
            </ListItem>
          </Link>
          <Link to='/playlists'>
            <ListItem>
              <RiFileCopyLine />
            </ListItem>
          </Link>
          <Link to='/likes'>
            <ListItem>
              <AiOutlineHeart />
            </ListItem>
          </Link>
          <Link to='/explore'>
            <ListItem>
              <FaWallet />
            </ListItem>
          </Link>
          <Link to='/settings'>
            <ListItem>
              <HiOutlineCog8Tooth />
            </ListItem>
          </Link>
        </List>
        <ProfileContainer>
          <Avatar src={AvatarImage} />
          <Name>Henrik</Name>
          <Badge content='Admin' />
        </ProfileContainer>
      </LinksContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 100% !important;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content !important;
    justify-content: center;
    margin-left: 2rem;
    width: 100%;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Avatar = styled.img`
  height: 7rem;
  border-radius: 6rem;
  margin-top: 20%;
`;

const Name = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  height: 100%;
  width: 4rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-around;
  }
`;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 60%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: row;
    width: 14rem;
    justify-content: space-between;
  }
`;

const ListItem = styled.li`
  /* margin-left: 25%; */
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  color: #000;
  cursor: pointer;
  h3 {
    font-weight: 300;
  }
  svg {
    font-size: 1.6rem;
    margin-top: 3%;
  }
`;
/* const HomeIcon = styled.RiHomeLine`
  transform: scale(2);
`; */

export default Sidebar;
