import { css } from 'styled-components';
import { generateMedia } from 'styled-media-query';

const theme = {
  primaryColor: '#fac',
  primaryColorConstrat: '#fff',
  mutedColor: '#ccc',
  bgPrimary: 'rgba(44, 51, 64, 0.5)',
  nbPrimary: 'rgba(0, 61, 0, 0.5)',

  font: {
    size: {
      bigger: '1.3em',
      big: '1.05em',
      normal: '1em',
      small: '0.9em',
      smaller: '0.075em',
    },

    weight: {
      bolder: 700,
      bold: 600,
      normal: 400,
      thing: 300,
    },
  },
};

export default theme;

export const primaryColor = ({ theme: { primaryColor } }) => primaryColor;
export const primaryColorConstrat = (p) => p.theme.primaryColorConstrat;
export const mutedColor = (p) => p.theme.mutedColor;
export const bgPrimary = (p) => p.theme.bgPrimary;

export const fontSizeBigger = (p) => p.theme.font.size.bigger;
export const fontSizeBig = (p) => p.theme.font.size.big;
export const fontSizeNormal = (p) => p.theme.font.size.normal;
export const fontSizeSmall = (p) => p.theme.font.size.small;
export const fontSizeSmaller = (p) => p.theme.font.size.smaller;

export const fontWeightBolder = (p) => p.theme.font.weight.bolder;
export const fontWeightBold = (p) => p.theme.font.weight.bold;
export const fontWeightNormal = (p) => p.theme.font.weight.normal;
export const fontWeightThing = (p) => p.theme.font.weight.thing;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const sizes = {
  xl: '1600px',
  lg: '1200px',
  md: '1024px',
  sm: '768px',
  xs: '480px',
};

export const media = generateMedia(sizes);
