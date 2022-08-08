import { Button } from "@mui/material";
// import { Box } from "@mui/system";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'YDestreet';
    font-weight: 300;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/kt/YDestreetLight.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/kt/YDestreetLight.eot?#iefix') format('embedded-opentype'),
         url('https://cdn.jsdelivr.net/gh/webfontworld/kt/YDestreetLight.woff2') format('woff2'),
         url('https://cdn.jsdelivr.net/gh/webfontworld/kt/YDestreetLight.woff') format('woff'),
         url('https://cdn.jsdelivr.net/gh/webfontworld/kt/YDestreetLight.ttf') format("truetype");
    font-display: swap;
} 
@font-face {
    font-family: 'YDestreet';
    font-weight: 700;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/kt/YDestreetBold.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/kt/YDestreetBold.eot?#iefix') format('embedded-opentype'),
         url('https://cdn.jsdelivr.net/gh/webfontworld/kt/YDestreetBold.woff2') format('woff2'),
         url('https://cdn.jsdelivr.net/gh/webfontworld/kt/YDestreetBold.woff') format('woff'),
         url('https://cdn.jsdelivr.net/gh/webfontworld/kt/YDestreetBold.ttf') format("truetype");
    font-display: swap;
} 
* {
    box-sizing: border-box;
}
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        font-family: 'YDestreet', sans-serif;
    };
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    };
    body {
        padding: 0;
        margin: 0;
        line-height: 1;
        color:#fff;
    };
    ol, ul {
        list-style: none;
    };
    blockquote, q {
        quotes: none;
    };
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    };
    table {
        border-collapse: collapse;
        border-spacing: 0;
    };
    button{
        display: flex;
        cursor: pointer;
        outline: none;
        border-radius: 3px;
    };
    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    hr{
      margin:0;
      border: none;
      border-bottom: 1px solid rgba(63,63,63,0.16);
    }

    .MuiPaper-root.MuiPaper-rounded{
      border-radius: 0;
      max-width: none;
    }

    .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiMenu-paper {
      border-radius: 0;
      box-shadow: none;
      border: 1px solid #DCDDE1;
      box-sizing: border-box;
    }

    .MuiList-root {
      max-height: ${48 * 4.5 + 8 + "px"};
    }

    .MuiLinearProgress-root {
      && {
        background-color: #571500;

      }
    }

    .MuiLinearProgress-bar {
      && {
        background-color: #ed5829;
      }
    }

    #root {
      overflow-y: auto;
      background-color:#000;
    }

    .fullScreenDialog .MuiPaper-root.MuiPaper-rounded{
      width: 100%;
      height: 100%;
    }
`;

export default GlobalStyle;

// Button
const DefaultButton = styled(Button)`
  && {
    padding: 15px 15px;
    width: 100%;
    height: 100%;
    background-color: #ed5829;
    min-width: 128px;
    border-radius: 10px;
    box-shadow: none;
    color: #fff;
    font-family: "YDestreet", sans-serif;

    & .MuiTypography-root {
      color: #fff !important;
    }

    &:hover {
      background-color: #d13c0d;
    }

    &.Mui-disabled {
      color: #906868;
      background-color: #571500;
    }
  }
`;

// Button
const OutlineButton = styled(Button)`
  && {
    padding: 10px 24px;
    width: 100%;
    height: 100%;
    min-width: 128px;
    border-radius: 23px;
    border: 1px solid #ed5829;
    box-shadow: none;
    color: #fff;
    font-family: "YDestreet", sans-serif;
    box-sizing: border-box;

    & .MuiTypography-root {
      color: #fff !important;
    }

    &:hover {
      padding: 9px 23px;
      border: 2px solid #ed5829;
      background-color: rgba(237, 88, 41, 0.2);
    }

    &.Mui-disabled {
      color: rgba(255, 255, 255, 0.4);
      background-color: rgba(237, 88, 41, 0.2);
    }
  }
`;

const PointColor = styled.span`
  color: #ed5829;
`;

const LinkStyle = styled.a`
  color: #ed5829;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const UlListStyle = styled.ul`
  li {
    position: relative;
    padding-left: 12px;
    &:after {
      content: "∙";
      display: block;
      position: absolute;
      left: 0;
      top: 0px;
    }
  }
`;

const UnstyleButton = styled.button`
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
  cursor: pointer;
`;

export {
  DefaultButton,
  OutlineButton,
  PointColor,
  LinkStyle,
  UlListStyle,
  UnstyleButton,
};
