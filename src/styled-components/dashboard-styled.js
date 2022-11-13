import styled from 'styled-components';

export const StyledDashboard = styled.section`
  background-color: ${({ theme }) => theme.colors.header};
  /* padding: 0px 60px 40px 60px; */
  height: 100vh;
  color: ${({ color }) => color || '#fff'};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 25px 15px 10px 15px;
  }
`;
