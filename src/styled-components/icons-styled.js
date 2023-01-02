import styled from 'styled-components';
import { themeColor } from '../styled-components/theme';

import { FcMusic } from 'react-icons/fc';
import { FcFilingCabinet } from 'react-icons/fc';
import { BiSearchAlt } from 'react-icons/bi';
import { SlArrowLeft } from 'react-icons/sl';
import { SlArrowRight } from 'react-icons/sl';
import { AiFillHeart } from 'react-icons/ai';
import { FcSettings } from 'react-icons/fc';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';

export const Home = styled(FcMusic)`
   transform: scale(3);
   color: ${themeColor};

   & :hover {
      opacity: 0.8;
   }
   @media (max-width: ${({ theme }) => theme.mobile}) {
      transform: scale(1.8);
   }
`;

export const Library = styled(FcFilingCabinet)`
   transform: scale(3);
   color: ${themeColor};

   & :hover {
      opacity: 0.8;
   }
   @media (max-width: ${({ theme }) => theme.mobile}) {
      transform: scale(1.8);
   }
`;

export const Search = styled(BiSearchAlt)`
   transform: scale(2.8);
   color: ${themeColor};

   & :hover {
      opacity: 0.8;
   }
   @media (max-width: ${({ theme }) => theme.mobile}) {
      transform: scale(1.8);
   }
`;
export const Heart = styled(AiFillHeart)`
   transform: scale(2.8);
   color: ${themeColor};

   & :hover {
      opacity: 0.8;
   }
   @media (max-width: ${({ theme }) => theme.mobile}) {
      transform: scale(1.8);
   }
`;
export const Left = styled(SlArrowLeft)`
   transform: scale(1.8);
   margin-left: 6px;
   margin-right: 6px;

   & :hover {
      opacity: 0.8;
   }
   @media (max-width: ${({ theme }) => theme.mobile}) {
      transform: scale(0.8);
   }
`;
export const Right = styled(SlArrowRight)`
   transform: scale(1.8);
   margin-left: 6px;
   margin-right: 6px;

   & :hover {
      opacity: 0.8;
   }
   @media (max-width: ${({ theme }) => theme.mobile}) {
      transform: scale(0.8);
   }
`;
export const CogIcon = styled(FcSettings)`
   color: ${({ theme }) => theme.colors.text};
   transform: scale(1.6);
   margin: 0 1rem 0 0;

   & :hover {
      opacity: 0.8;
   }
   @media (max-width: ${({ theme }) => theme.mobile}) {
      transform: scale(1.2);
   }
`;

export const AdminIcon = styled(MdOutlineAdminPanelSettings)`
   color: ${({ theme }) => theme.colors.text};
   transform: scale(1.4);

   & :hover {
      opacity: 0.8;
   }
   @media (max-width: ${({ theme }) => theme.mobile}) {
      transform: scale(1.2);
   }
`;
