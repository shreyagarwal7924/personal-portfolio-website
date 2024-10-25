import React, { useState } from 'react'
import { styled, useTheme } from 'styled-components'
import { Link as LinkR } from 'react-router-dom';
import { DiCssdeck } from "react-icons/di";
import {FaBars}from "react-icons/fa"
import { Bio } from '../../data/constants';

const Nav = styled.div `
background-color: ${({theme}) => theme.card_light};
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
@media screen and (max-width: 960px) {
  transition: 0.8s all ease;
}
`;

const NavContainer = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR) `
width: 80%;    
padding: 0 6px;
display: flex;
justify-content: start;
align-items: center;
text-decoration: none;
@media (max-width: 640px) {
  padding: 0 0px;
}
`;

const MobileIcon = styled.div `
display: none;
@media screen and (max-width: 768px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.text_primary};
}
`;

const NavItems = styled.ul `
width: 100%;
display: flex;
align-items: center;
justify-content:center;
gap: 32px;
padding: 0 6px;
list-style: none;

@media screen and (max-width: 768px) {
  display: none;
}
`;

const NavLink = styled.a `
color: ${({ theme }) => theme.text_primary};
font-weight: 500;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
:hover {
  color: ${({ theme }) => theme.primary};
}

&.active {
  border-bottom: 2px solid ${({ theme }) => theme.primary};
}
`;

const ButtonContainer = styled.div `
width: 80%;  
height: 100%;
display: flex;
justify-content: end;
align-items: center;
padding: 0 6px;
@media screen and (max-width: 768px) {
  display: none;
}
`;

const GitHubButton = styled.a`
  border: 1.8px solid #3498DB;
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: #3498DB;
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.3s ease-in-out;
  background: transparent;
  
  &:hover {
    background: linear-gradient(225deg, #3498DB 0%, #2980B9 100%);
    color: #ffffff;
    transform: scale(1.05);
    box-shadow: 0 4px 6px rgba(52, 152, 219, 0.3);
  }
  
  @media screen and (max-width: 768px) { 
    font-size: 14px;
  }
`;

const MobileGitHubButton = styled(GitHubButton)`
  padding: 10px 16px;
  background: linear-gradient(225deg, #3498DB 0%, #2980B9 100%);
  color: white;
  width: max-content;
  border: none;
  box-shadow: 0 4px 6px rgba(52, 152, 219, 0.3);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 8px rgba(52, 152, 219, 0.5);
  }
`;

const Span = styled.div`
padding: 0 4px;
font-weight: bold;
font-size: 18px
`;

const MobileMenu = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
gap: 16px;
position: absolute;
top: 80px;
right: 0;
width: 100%;
padding: 12px 40px 24px 40px;
background: ${({ theme }) => theme.card_light+99};
transition: all 0.6s ease-in-out;
transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
border-radius: 0 0 20px 20px;
box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
`;

const MobileMenuLink = styled(LinkR) `
color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  return(
    <Nav>
      <NavContainer>
        <NavLogo to= '/'>
          <a
          style={{
            display: "flex",
            alignItems:"center",
            color: "white",
            marginBottom:"20",
            cursor: "pointer"
          }}>
            <DiCssdeck  size="3rem" /> <Span> Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon> 
          <FaBars 
           onClick= {() => {
            setOpen(!open)
           }}
            />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
        </NavItems>
        <ButtonContainer> 
          <GitHubButton href= {Bio.github} target="_blank"> GitHub Profile</GitHubButton>
        </ButtonContainer>
      </NavContainer>
      {
        open && (
          <MobileMenu open={open}>
            <MobileMenuLink
            href="#about"
            onClick={() => {
              setOpen(!open)
            }}>
              About
            </MobileMenuLink>
            <MobileMenuLink
            href="#skills"
            onClick={() => {
              setOpen(!open)
            }}>
              Skills
            </MobileMenuLink>
            <MobileMenuLink
            href="#experience"
            onClick={() => {
              setOpen(!open)
            }}>
              Experience
            </MobileMenuLink>
            <MobileMenuLink
            href="#projects"
            onClick={() => {
              setOpen(!open)
            }}>
              Projects
            </MobileMenuLink>
            <MobileGitHubButton href={Bio.github} target="_blank">
              Github
            </MobileGitHubButton>
          </MobileMenu>
        )
      }
    </Nav>
  );
}

export default Navbar
