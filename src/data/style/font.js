import Bolds from '../extra/font/NunitoBlack.ttf'
import Medium from '../extra/font/Medium.ttf'
import Regular from '../extra/font/Regular.ttf'
import Light from '../extra/font/Light.ttf'
import extraLight from '../extra/font/NunitoExtralight.ttf'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@font-face{
    font-family: 'nunito';
    src:url(${Bolds}) format('truetype');
    font-weight:normal;
    font-style;normal
}
@font-face{
    font-family: 'medium';
    src:url(${Medium}) format('truetype');
    font-weight:normal;
    font-style;normal
}
@font-face{
    font-family: 'regular';
    src:url(${Regular}) format('truetype');
    font-weight:normal;
    font-style;normal
}
@font-face{
    font-family: 'light';
    src:url(${Light}) format('truetype');
    font-weight:normal;
    font-style;normal
}
@font-face{
    font-family: 'extralight';
    src:url(${extraLight}) format('truetype');
    font-weight:normal;
    font-style;normal
}
`
export const FontWeight={
    xxlight: 100,
    xlight: 200,
    light:300,
    medium: 400,
    semiBold: 500,
    bold: 700,
    thick: 900
}

export const padding={
    p1: 1,
    p2: 4,
    p3: 6,
    p4: 8,
    p5: 10,
    p6: 12,
    p7: 14,
    p8: 18,
    p9: 20,
    p10: 22,
    p11: 24,
    p12: 26,
    p13: 28,
    p14: 30
}
export const margin={
   m1: 1,
   m2: 4,
   m3: 6,
   m4: 8,
   m5: 10,
   m6: 12,
   m7: 14,
   m8: 18,
   m9: 20,
   m10: 22,
   m11: 24,
   m12: 26,
   m13: 28,
   m14: 30
}
