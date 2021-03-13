import { useRef, useContext } from 'react';
import {
  Container,
  HeaderBg,
  NavBar,
  MenuItems,
  ImageCover,
  Content,
  Section
}  from './style';
import Link from 'next/link';
import styled, {  ThemeContext } from 'styled-components';
import { fontSizeBigger, fontWeightBolder } from '../../styles/theme';
import { useWindowScroll, useWindowSize } from 'react-use';


export default function Header() {
  const theme = useContext(ThemeContext);
  const { y } = useWindowScroll();
  const { height } = useWindowSize();
  const menuItem = [
    { label: 'Section 1', link: '/#section-1' },
    { label: 'Section 2', link: '/#section-2' },
    { label: 'Section 3', link: '/#section-3' },
  ];


  return (
    <Container>
      <HeaderBg src="/assets/img/header.jpg" alt="" />
      <ImageCover />
      <Content>
        <NavBar
          style={{ '--visible': y > height ? theme.nbPrimary : 'transparent' }}
        >
          {menuItem.map((item, index) => (
            <Link href={item.link} key={index}>
              <MenuItems>{item.label}</MenuItems>
            </Link>
          ))}
        </NavBar>
      </Content>
    </Container>
  );
}
