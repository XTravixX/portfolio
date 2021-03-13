import styled from 'styled-components';
import { primaryColorConstrat,fontSizeBigger, bgPrimary,fontWeightBolder, flexCenter, media, nbPrimary } from '../../styles/theme';

export const  Container = styled.div`
    width: 100%;
  `;

export const  ImageCover = styled.div`
    position: relative;
    background-color: ${bgPrimary};
    width: 100vw;
    height: 100vh;
  `;

export const  HeaderBg = styled.img`
    position: absolute;
    top: 0px;
    width: 100vw;
    height: 100vh;
  `;

export const  NavBar = styled.nav`
    position: sticky;
    top: 0px;
    transition: 0.3s ease;
    // background: ${(p) => (p.visible ? p.theme.bgPrimary : 'transparent')};
    background: var(--visible);
    height: 45px;
    display: flex;
    justify-content: flex-end;
    padding: 10px 15px;
  `;

export const  MenuItems = styled.a`
    color: #e0e0e0;
    margin-left: 5rem;
    position: relative;
    z-index: 1;
    top: 0;
    cursor: pointer;
  `;

export const  Content = styled.div`
    position: relative;
    top: -45px;
  `;
