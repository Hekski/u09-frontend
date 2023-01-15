import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../styled-components/button-styled';
import AvatarImage from '../components/assets/avatarImage2.jpg';
import { useStateProvider } from '../context/state-provider';
import { Spinner } from '../styled-components/spinner-styled';
import Badge from '../components/badge';
import adminService from '../services/adminService';

const AdminUserProfilePage = () => {
   const [{ users }] = useStateProvider();
   const [isLoading, setIsLoading] = useState(true);
   const [message, setMessage] = useState('');
   const [data, setData] = useState({});
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');

   const id = useParams();
   const index = users.data.findIndex((x) => x._id === id.id);

   useEffect(() => {
      setData(users.data[index]);
      setIsLoading(false);
   }, [users.data, index]);

   const handleDelete = async (e) => {
      e.preventDefault();
      await adminService.deleteUser(data._id);
      setMessage('User Deleted!');
   };

   const handleUpdate = async (e) => {
      e.preventDefault();
      const userData = {
         email: email,
         name: name,
      };
      let res = await adminService.adminUpdateUser(data._id, userData);
      setMessage(res.message);
      setName(res.name);
      setEmail(res.email);
   };

   return (
      <>
         {isLoading ? (
            <Spinner />
         ) : (
            <>
               return (
               <Container key={data._id}>
                  <SubContainer>
                     <TopContainer>
                        <h2>User Profile, {data.name}</h2>

                        <Badge content={data.isAdmin ? 'Admin' : 'User'} />
                     </TopContainer>
                     <InfoUpdate>Joined: {data.date}</InfoUpdate>

                     {message ? (
                        <Link to='/home/admin'>
                           <p>{message} go back</p>
                        </Link>
                     ) : (
                        ''
                     )}
                     <Message></Message>

                     <Form>
                        <InputContainer>
                           <p>What's your email?</p>
                           <Input
                              label="What's your email?"
                              placeholder={data.email}
                              name='email'
                              type='email'
                              onChange={(e) => setEmail(e.target.value)}
                              required={true}
                           />
                        </InputContainer>
                        <InputContainer>
                           <p>What should we call you?</p>

                           <Input
                              label='What should we call you?'
                              placeholder={data.name}
                              name='name'
                              type='name'
                              onChange={(e) => setName(e.target.value)}
                              required={true}
                           />
                        </InputContainer>
                        <BirthContainer>
                           <p>What's your date of birth?</p>
                           <Birth>
                              <Month>
                                 <Input
                                    name='month'
                                    label='Month'
                                    placeholder='Months'
                                    required={true}
                                 />
                              </Month>
                              <Date>
                                 <Input
                                    label='Date'
                                    placeholder='DD'
                                    name='date'
                                    required={true}
                                 />
                              </Date>
                              <Year>
                                 <Input
                                    label='Year'
                                    placeholder='YYYY'
                                    name='year'
                                    required={true}
                                 />
                              </Year>
                           </Birth>
                        </BirthContainer>
                        <GenreContainer>
                           <p>What's your favorite genres?</p>
                           <Genre>
                              <Genre1>
                                 <Input
                                    name='month'
                                    label='Month'
                                    placeholder='Genre1'
                                    required={true}
                                 />
                              </Genre1>
                              <Genre2>
                                 <Input
                                    label='Date'
                                    placeholder='Genre2'
                                    name='date'
                                    required={true}
                                 />
                              </Genre2>
                              <Genre3>
                                 <Input
                                    label='Year'
                                    placeholder='Genre3'
                                    name='year'
                                    required={true}
                                 />
                              </Genre3>
                           </Genre>
                        </GenreContainer>
                        <InputContainer>
                           <Gender
                              label="What's your gender?"
                              name='gender'
                              required={true}
                           />
                           {!message ? (
                              <Button
                                 onClick={handleUpdate}
                                 label='Update'
                                 type='submit'>
                                 Update user
                              </Button>
                           ) : (
                              ''
                           )}
                           {data.isAdmin ? (
                              ''
                           ) : (
                              <>
                                 {!message ? (
                                    <Button
                                       onClick={handleDelete}
                                       label='Delete'>
                                       Delete user
                                    </Button>
                                 ) : (
                                    ''
                                 )}
                              </>
                           )}
                        </InputContainer>
                     </Form>
                  </SubContainer>
                  <SubContainerTwo>
                     <InfoContainer>
                        <Avatar>
                           <img src={AvatarImage} alt='' />
                        </Avatar>
                        <Info>
                           <ButtonWrapper>
                              <Button label='Update' type='submit'>
                                 Update picture
                              </Button>
                           </ButtonWrapper>
                        </Info>
                     </InfoContainer>
                  </SubContainerTwo>
               </Container>
               );
            </>
         )}
      </>
   );
};

const Container = styled.div`
   top: 0;
   display: flex;
   align-items: space-between;
   color: ${({ theme }) => theme.colors.text};
   flex-direction: row;
   transition: 0.4s ease-in-out;

   @media screen and (min-width: 320px) and (max-width: 880px) {
      justify-content: center;
      flex-direction: column;
      align-items: center;
   }
`;
const TopContainer = styled.div`
   display: flex;
   align-items: center;
   flex-direction: row;
   transition: 0.4s ease-in-out;

   @media screen and (min-width: 320px) and (max-width: 980px) {
      align-items: center;
   }
`;
const SubContainer = styled.div`
   padding: 1rem;
   top: 0;
   display: flex;
   flex-direction: column;
   align-items: space-between;
   width: 50%;
   color: ${({ theme }) => theme.colors.text};
   > p {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.text};
      font-size: 0.8rem;
      margin-bottom: 0.4rem;
   }

   @media screen and (min-width: 320px) and (max-width: 1080px) {
      width: 100%;
   }
`;
const SubContainerTwo = styled.div`
   padding: 1rem;
   top: 0;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   width: 50%;

   color: ${({ theme }) => theme.colors.text};

   @media screen and (min-width: 320px) and (max-width: 1080px) {
   }
`;

const Form = styled.form`
   display: flex;
   flex-direction: column;
   margin-top: 1rem;
   @media screen and (min-width: 320px) and (max-width: 1080px) {
   }
`;
const InputContainer = styled.div`
   margin: 0.5rem 0;

   > p {
      font-weight: bold;
      font-size: 0.8rem;
      margin-bottom: 0.4rem;
   }

   @media screen and (min-width: 320px) and (max-width: 1080px) {
   }
`;
const Input = styled.input`
   display: flex;
   width: 100%;
   align-items: center;
   border: none;
   justify-content: space-around;
   padding: 0.5rem 1rem;
   border-radius: 1rem;
   background-color: rgba(146, 166, 255, 0.3);

   &::placeholder {
      font-weight: bold;
      font-size: 0.8rem;
      font-weight: normal;
      /* color: ${({ color }) => color || '#3CB9FF'}; */
      color: ${({ theme }) => theme.colors.text};
   }
`;
const BirthContainer = styled.div`
   width: 60%;
   margin: 0.5rem 0;

   > p {
      font-weight: bold;
      font-size: 0.8rem;
      margin-bottom: 0.4rem;
   }

   @media screen and (min-width: 320px) and (max-width: 1080px) {
   }
`;

const Birth = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 100%;

   @media screen and (min-width: 320px) and (max-width: 1080px) {
   }
`;
const Date = styled.div`
   width: 20%;
`;
const Month = styled.div`
   width: 40%;
`;
const Year = styled.div`
   width: 30%;
`;
const Gender = styled.div`
   width: 30%;
`;
const GenreContainer = styled.div`
   margin: 0.5rem 0;

   > p {
      font-weight: bold;
      font-size: 0.8rem;
      margin-bottom: 0.4rem;
   }

   @media screen and (min-width: 320px) and (max-width: 1080px) {
   }
`;
const Genre = styled.div`
   display: flex;
   align-items: center;
   width: 100%;

   @media screen and (min-width: 320px) and (max-width: 1080px) {
   }
`;
const Genre1 = styled.div`
   width: 30%;
   margin-right: 1rem;
`;
const Genre2 = styled.div`
   width: 30%;
   margin-right: 1rem;
`;
const Genre3 = styled.div`
   width: 30%;
`;

const ButtonWrapper = styled.div`
   display: flex;
   @media screen and (min-width: 320px) and (max-width: 1080px) {
      justify-content: center;
      width: 12rem;
   }
`;

const InfoContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: flex-start;
   flex-direction: column;
   width: 100%;

   @media screen and (min-width: 320px) and (max-width: 880px) {
      justify-content: center;
   }
`;

const Message = styled.div`
   background-color: '#fff';
   & p > {
      color: '#fff';
   }
`;

const Avatar = styled.div`
   margin-right: 1rem;
   margin-bottom: 2rem;
   img {
      height: 12rem;
      width: 12rem;
      border-radius: 8rem;
      object-fit: cover;
   }
   @media screen and (min-width: 320px) and (max-width: 880px) {
      justify-content: center;
      margin-right: 0;
   }
`;
const Info = styled.div``;

const InfoUpdate = styled.h5`
   color: #333;
   margin-top: 0.4rem;
   font-weight: 300;
`;

export default AdminUserProfilePage;
