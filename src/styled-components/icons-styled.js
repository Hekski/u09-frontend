import styled from 'styled-components';
import { themeColor } from '../styled-components/theme';
import { TiNotes } from 'react-icons/ti';
import { RiFolderMusicFill } from 'react-icons/ri';
import { BiSearchAlt } from 'react-icons/bi';
import { SlArrowLeft } from 'react-icons/sl';
import { SlArrowRight } from 'react-icons/sl';
import { AiFillHeart } from 'react-icons/ai';
import { FaRecordVinyl } from 'react-icons/fa';
import { FcSettings } from 'react-icons/fc';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';

export const Home = styled(TiNotes)`
   fill: ${({ theme }) => theme.colors.gray};
   transform: scale(3);
   transition: 0.2s ease-in-out;

   & :hover {
      animation: color-change 0.4s;
      animation-fill-mode: forwards;
   }

   @media (max-width: ${({ theme }) => theme.mobile}) {
      transform: scale(1.8);
   }

   @keyframes color-change {
      0% {
         fill: ${({ theme }) => theme.colors.gray};
      }
      100% {
         fill: ${({ theme }) => theme.colors.text};
      }
   }
`;

export const Library = styled(RiFolderMusicFill)`
   transform: scale(3);
   fill: ${({ theme }) => theme.colors.gray};
   transition: 0.4s ease-in-out;

   & :hover {
      animation: color-change 0.4s;
      animation-fill-mode: forwards;
   }
   @media (max-width: ${({ theme }) => theme.mobile}) {
      transform: scale(1.8);
   }
`;

export const Search = styled(BiSearchAlt)`
   transform: scale(2.8);
   fill: ${({ theme }) => theme.colors.gray};
   transition: 0.4s ease-in-out;

   & :hover {
      opacity: 0.8;
   }
   @media (max-width: ${({ theme }) => theme.mobile}) {
      transform: scale(1.8);
   }
`;
export const Heart = styled(AiFillHeart)`
   transform: scale(2.8);
   fill: ${({ theme }) => theme.colors.gray};
   transition: fill 0.5s;

   & :hover {
      animation: color-change 0.4s;
      animation-fill-mode: forwards;
   }
   @media (max-width: ${({ theme }) => theme.mobile}) {
      transform: scale(1.8);
   }
`;
export const Record = styled(FaRecordVinyl)`
   transform: scale(2.8);
   fill: ${({ theme }) => theme.colors.gray};
   transition: 0.4s ease-in-out;

   & :hover {
      animation: color-change 0.4s;
      animation-fill-mode: forwards;
   }
   @media (max-width: ${({ theme }) => theme.mobile}) {
      transform: scale(1.8);
   }
`;
export const Left = styled(SlArrowLeft)`
   transform: scale(1.2);
   margin-left: 6px;
   margin-right: 6px;
   cursor: pointer;

   & :hover {
      opacity: 0.8;
   }
   @media (max-width: ${({ theme }) => theme.mobile}) {
      transform: scale(0.8);
   }
`;
export const Right = styled(SlArrowRight)`
   transform: scale(1.2);
   margin-left: 6px;
   margin-right: 6px;
   cursor: pointer;

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
