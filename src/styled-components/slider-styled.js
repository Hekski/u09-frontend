import styled from 'styled-components';

export const Slider = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.text};
  align-items: space-between;

  h4 {
    margin-top: 40px;
  }

  img {
    max-height: 180px;

    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }

  section:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
  }
  section:nth-child(2) {
    display: flex;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-box-orient: horizontal;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
  }
`;
