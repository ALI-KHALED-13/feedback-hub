// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface Colors {
    red: string,
    lightRed: string,
    peach: string,
    violet: string,
    lightViolet: string,
    blue: string,
    lightBlue: string,
    grayishBlue: string,
    skyBlue: string,
    spaceNavy: string,
    navy: string,
    lightNavy: string,
    gray: string,
    lightGray: string,
    whitishGray: string,
    white: string,
  };
}