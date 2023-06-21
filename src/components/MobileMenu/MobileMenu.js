/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent, Dialog } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import {COLORS} from "../../constants";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
      <Dialog>
          <CustomDialogOverlay>
              <Wrapper>
                  <CustomDialogContent>
                      <Button onClick={onDismiss}><VisuallyHidden>Close</VisuallyHidden><Icon id="close" strokeWidth={1} /></Button>
                      <Nav>
                          <a href="/sale">Sale</a>
                          <a href="/new">New&nbsp;Releases</a>
                          <a href="/men">Men</a>
                          <a href="/women">Women</a>
                          <a href="/kids">Kids</a>
                          <a href="/collections">Collections</a>
                      </Nav>
                      <Footer>
                          <a href="/terms">Terms and Conditions</a>
                          <a href="/privacy">Privacy Policy</a>
                          <a href="/contact">Contact Us</a>
                      </Footer>
                  </CustomDialogContent>
              </Wrapper>
          </CustomDialogOverlay>



      </Dialog>
  );
};

const Wrapper = styled.div`
  isolation: isolate;
  position: fixed;
  top:0;
  bottom:0;
  right:0;
  width: 80%;
  height: 100%;
`;

const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 14px;
    font-size: 0.875rem;
    color: ${COLORS.gray["700"]};
  
    margin-bottom: 32px;
  
  margin-left: 32px;
    a {
        text-decoration: none;
        color: inherit;
    }
`;

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 22px;
    font-size: 1.125rem;
    font-weight: 600;
    text-transform: uppercase;
    color: ${COLORS.gray["900"]};
    margin-top: 32px;
    margin-bottom: 32px;
    margin-left: 32px;
    a {
        text-decoration: none;
        color: inherit;
    }
`;

const Button = styled.button`
    align-self: flex-end;
  padding: 26px 16px;

  border-radius: 2px;
  background-color: transparent;
    border: none;
    color: ${COLORS.gray["900"]};
    cursor: pointer;
`;

const CustomDialogOverlay = styled(DialogOverlay)`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
  left: 0;
  background-color: hsla(0deg 0% 0% / 0.5);
  z-index: 1;
`;

const CustomDialogContent = styled(DialogContent)`
  isolation: isolate;
  height: 100%;
  
    background-color: white;
    z-index: 2;
  
    display: flex;
    flex-direction: column;

  justify-content: space-between;
  
`;

export default MobileMenu;
