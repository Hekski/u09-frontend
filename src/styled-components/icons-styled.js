import styled from 'styled-components';
import { themeColor } from '../styled-components/theme';


import { MdMusicNote } from 'react-icons/md';
import { MdLibraryMusic } from 'react-icons/md';
import { BiSearchAlt } from 'react-icons/bi';
import { SlArrowLeft } from 'react-icons/sl';
import { SlArrowRight } from 'react-icons/sl';
import { AiFillHeart } from 'react-icons/ai';
import { HiOutlineCog8Tooth } from 'react-icons/hi2';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';

export const Home = styled(MdMusicNote)`
  transform: scale(3);
  color: ${themeColor};

  & :hover {
    opacity: 0.8;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    transform: scale(1.8);
  }
`;

export const Library = styled(MdLibraryMusic)`
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
export const CogIcon = styled(HiOutlineCog8Tooth)`
  transform: scale(1.2);
  color: ${({ theme }) => theme.colors.text};
  margin-left: 6px;
  margin-right: 6px;

  & :hover {
    opacity: 0.8;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    transform: scale(0.8);
  }
`;

export const AdminIcon = styled(MdOutlineAdminPanelSettings)`
  transform: scale(1.2);
  color: ${({ theme }) => theme.colors.text};
  margin-left: 6px;
  margin-right: 6px;

  & :hover {
    opacity: 0.8;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    transform: scale(0.8);
  }
`;
