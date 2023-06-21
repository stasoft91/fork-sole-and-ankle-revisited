import React from 'react';
import styled from 'styled-components/macro';

import {COLORS, QUERIES, WEIGHTS} from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">dumbSales</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Manliest</NavLink>
          <NavLink href="/women">Woman</NavLink>
          <NavLink href="/kids">KidsAreDumb</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side>
            <MobileNav>
                <Button>
                    <Icon id="shopping-bag" strokeWidth={2}  color={COLORS.gray["900"]} />
                </Button>

                <Button>
                    <Icon id="search" strokeWidth={2}  color={COLORS.gray["900"]}/>
                </Button>

                <Button onClick={() => setShowMobileMenu(true)}>
                    <Icon id="menu" strokeWidth={2} color={COLORS.gray["900"]}/>
                </Button>
            </MobileNav>
        </Side>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const Button = styled.button`
    padding: 8px 6px;
    border-radius: 2px;
    border: none;
    background-color: transparent;
    color: ${COLORS.gray["900"]};
    cursor: pointer;
`;

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 18px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow-x: auto;

  @media ${QUERIES.tabletAndDown} {
    justify-content: space-between;
    align-items: center;
  }

  @media ${QUERIES.phone} {
    padding: 18px 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, -4.5rem + 9.2vw, 3.5rem);
  margin: 0 clamp(1rem, -4.5rem + 9.2vw, 3.5rem);
  
  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: none;
  gap: 48px;

  @media ${QUERIES.tabletAndDown} {
    gap: 32px;
    display: flex;
    justify-content: flex-end;
  }

  @media ${QUERIES.phone} {
    gap: 16px;
  }
`;

const Side = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndDown} {
    flex: revert;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
