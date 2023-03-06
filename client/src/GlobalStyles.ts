import { createGlobalStyle } from 'styled-components';
import JostRegularWoff2 from './fonts/Jost-Regular.woff2';
import JostRegularWoff from './fonts/Jost-Regular.woff';
import JostRegularTtf from './fonts/Jost-Regular.ttf';
import JostBoldWoff2 from './fonts/Jost-Bold.woff2';
import JostBoldWoff from './fonts/Jost-Bold.woff';
import JostBoldTtf from './fonts/Jost-Bold.ttf';
import JostSemiBoldWoff2 from './fonts/Jost-SemiBold.woff2';
import JostSemiBoldWoff from './fonts/Jost-SemiBold.woff';
import JostSemiBoldTtf from './fonts/Jost-SemiBold.ttf';

export const colors = {
  red: '#D73737',
  lightRed: '#E98888',
  peach: '#F49F85',
  violet: '#AD1FEA',
  lightViolet: '#C75AF6',
  blue: '#4661E6',
  lightBlue: '#7C91F9',
  grayishBlue: '#CFD7FF',
  skyBlue: '#62BCFA',
  spaceNavy: '#373F68',
  navy: '#3A4374',
  lightNavy: '#656EA3',
  gray: '#647196',
  lightGray: '#F2F4FF',
  whitishGray: '#F7F8FD',
  white: '#FFFFFF',
};

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Jost Regular';
    src: url(${JostRegularWoff2}) format('woff2'),
        url(${JostRegularWoff}) format('woff'),
        url(${JostRegularTtf}) format('truetype');
    font-weight: normal; 
    font-style: normal; 
  }

  @font-face {
    font-family: 'Jost Semi Bold';
    src: url(${JostSemiBoldWoff2}) format('woff2'),
        url(${JostSemiBoldWoff}) format('woff'),
        url(${JostSemiBoldTtf}) format('truetype');
    font-weight: normal; 
    font-style: normal; 
  }

  @font-face {
    font-family: 'Jost Bold';
    src: url(${JostBoldWoff2}) format('woff2'),
        url(${JostBoldWoff}) format('woff'),
        url(${JostBoldTtf}) format('truetype');
    font-weight: normal; 
    font-style: normal; 
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Jost Regular', sans-serif;
    font-size: 1.6rem;
    color: ${colors.navy};
    scrollbar-width: thin;
    scrollbar-color: ${colors.gray} ${colors.white};
  }

  *::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }

  *::-webkit-scrollbar-track {
    background: ${colors.white};
    border-radius: 1rem;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${colors.gray};
    border: 1px solid ${colors.white};
    border-radius: 1rem;
  }
  
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    background-color: ${colors.lightGray};
  }

  #root {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export default GlobalStyles;
