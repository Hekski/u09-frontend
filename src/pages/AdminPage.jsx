import React from 'react';
import styled from 'styled-components';
import { Button } from '../styled-components/button-styled';
import adminService from '../services/adminService.js';
import { useEffect, useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { TiDeleteOutline } from 'react-icons/ti';
import { Spinner } from '../styled-components/spinner-styled';
import { Link } from 'react-router-dom';
import Badge from '../components/badge';

import { useStateProvider } from '../context/state-provider';
import { reducerCases } from '../context/constants';

const AdminPage = () => {
  const [userData, setUserData] = useState([]);
  const [{ users }, dispatch] = useStateProvider();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let loadUserList = adminService.getAllUsers();
    loadUserList.then((users) => {
      dispatch({ type: reducerCases.SET_USERS, users });
      setIsLoading(false);
      setUserData(users);
      return users;
    });
  }, []);

  return (
    <Container>
      <h2>Admin Page</h2>
      <HeaderBody>
        <Left>
          <p>User</p>
        </Left>
        <Middle>
          <p>status</p>
        </Middle>
        <Right></Right>
      </HeaderBody>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {userData.data.map((data) => {
            return (
              <UserContainer key={data._id}>
                <Left>
                  {/* <img src={user.img} alt='song_img' /> */}
                  <p>
                    {data.name} ({data.role})
                  </p>
                </Left>

                <Middle>
                  <p>
                    <Badge content={data.isAdmin ? 'Admin' : 'User'} />

                    {/* Likes: {data.likedSongs.length}, Playlists:{' '}
                    {data.playlists.length} */}
                  </p>
                </Middle>

                <Right>
                  <Button>
                    <Link to={`/home/admin/${data._id}`}>
                      <BsThreeDots />
                    </Link>
                  </Button>
                </Right>
              </UserContainer>
            );
          })}
        </>
      )}
    </Container>

    // <Container>
    //   <h2>Admin Page</h2>

    // </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  color: ${({ theme }) => theme.colors.text};

  @media screen and (min-width: 320px) and (max-width: 1080px) {
  }
`;
const UserContainer = styled.div`
  border-bottom: 1px solid #333;
  background-color: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: 0.4s ease-in-out;
`;

const HeaderBody = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  text-transform: uppercase;
  border-bottom: 1px solid #333;
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  margin-top: 1rem;
  margin-bottom: 1rem;

  span {
    margin-right: 1.5rem;
    font-size: 1rem;
  }
  p {
    font-size: 1rem;
    margin: 0;
  }
`;
const Middle = styled.div`
  display: flex;
  flex: 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
  
  p {
    justify-content: flex-start;
    font-size: 1rem;
    margin: 0;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  svg {
    width: 1rem;
    height: 1rem;
  }
`;
const Text = styled.div`
  color: #fff;
`;

export default AdminPage;

const months = [
  { name: 'January', value: '01' },
  { name: 'February', value: '02' },
  { name: 'March', value: '03' },
  { name: 'Apirl', value: '04' },
  { name: 'May', value: '05' },
  { name: 'June', value: '06' },
  { name: 'July', value: '07' },
  { name: 'Augest', value: '08' },
  { name: 'September', value: '09' },
  { name: 'October', value: '10' },
  { name: 'November', value: '11' },
  { name: 'December', value: '12' },
];

const genders = ['male', 'female', 'non-binary'];
