import React from 'react';
import styled from 'styled-components';
import adminService from '../services/adminService';

import { useState, useEffect } from 'react';
import { Button } from '../styled-components/button-styled';
import AvatarImage from '../components/assets/avatarImage2.jpg';
import { useStateProvider } from '../context/state-provider';
import { Spinner } from '../styled-components/spinner-styled';
import Badge from '../components/badge';

const UserProfilePage = () => {
   const [{ user }] = useStateProvider();
   const [isLoading, setIsLoading] = useState(true);
   const [message, setMessage] = useState('');
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const currentUser = JSON.parse(user);

   useEffect(() => {
      if (user) setIsLoading(false);
   }, [user]);

   const handleUpdate = async (e) => {
      e.preventDefault();
      const userData = {
         email: email,
         name: name,
      };
      let res = await adminService.adminUpdateUser(user.data._id, userData);
      console.log(res);
      setMessage(res.message);
   };

   return (
      <Container>
         {isLoading ? (
            <Spinner />
         ) : (
            <>
               <SubContainer>
                  <TopContainer>
                     <h2>User Profile, {currentUser.data.name}</h2>

                     <Badge
                        content={currentUser.data.isAdmin ? 'Admin' : 'User'}
                     />
                  </TopContainer>
                  <InfoUpdate>Joined: {currentUser.data.date}</InfoUpdate>

                  {message ? <p>{message} </p> : ''}

                  <Form>
                     <InputContainer>
                        <p>What's your email?</p>
                        <Input
                           onChange={(e) => setEmail(e.target.value)}
                           label="What's your email?"
                           placeholder={currentUser.data.email}
                        />
                     </InputContainer>
                     <InputContainer>
                        <p>What should we call you?</p>

                        <Input
                           onChange={(e) => setName(e.target.value)}
                           label='What should we call you?'
                           placeholder={currentUser.data.name}
                           name='name'
                           required={true}
                        />
                     </InputContainer>
                     <BirthContainer>
                        <p>What's your date of birth?</p>
                        <Birth>
                           <Month>
                              <Input
                                 name='month'
                                 // handleInputState={handleInputState}
                                 label='Month'
                                 placeholder='Months'
                                 // options={months}
                                 // value={data.month}
                                 required={true}
                              />
                           </Month>
                           <Date>
                              <Input
                                 label='Date'
                                 placeholder='DD'
                                 name='date'
                                 // value={data.date}
                                 // handleInputState={handleInputState}
                                 required={true}
                              />
                           </Date>
                           <Year>
                              <Input
                                 label='Year'
                                 placeholder='YYYY'
                                 name='year'
                                 // value={data.year}
                                 // handleInputState={handleInputState}
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
                                 // handleInputState={handleInputState}
                                 label='Month'
                                 placeholder='Genre1'
                                 // options={months}
                                 // value={data.month}
                                 required={true}
                              />
                           </Genre1>
                           <Genre2>
                              <Input
                                 label='Date'
                                 placeholder='Genre2'
                                 name='date'
                                 // value={data.date}
                                 // handleInputState={handleInputState}
                                 required={true}
                              />
                           </Genre2>
                           <Genre3>
                              <Input
                                 label='Year'
                                 placeholder='Genre3'
                                 name='year'
                                 // value={data.year}
                                 // handleInputState={handleInputState}
                                 required={true}
                              />
                           </Genre3>
                        </Genre>
                     </GenreContainer>
                     <InputContainer>
                        <Gender
                           label="What's your gender?"
                           name='gender'
                           // handleInputState={handleInputState}
                           // options={genders}
                           // value={data.gender}
                           required={true}
                        />
                        <Button
                           onClick={handleUpdate}
                           label='Update'
                           type='submit'>
                           Update user
                        </Button>
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
            </>
         )}
      </Container>
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

export default UserProfilePage;
