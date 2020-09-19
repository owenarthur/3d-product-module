import styled, { keyframes } from 'styled-components';

// animations //
export const InFromBottom = keyframes`
  0% { opacity: 0; top: 70vh; }
  100% { opacity: 1; top: 40vh; }
`;

export const InFromTop = keyframes`
  0% { opacity: 0; top: 10vh; }
  100% { opacity: 1; top: 40vh; }
`;

export const OutToBottom = keyframes`
  0% { opacity: 1; top: 40vh; }
  100% { opacity: 0; top: 70vh; }
`;

export const OutToTop = keyframes`
  0% { opacity: 1; top: 40vh; }
  100% { opacity: 0; top: 10vh; }
`;

export const Wrapper = styled.div`
  max-width: 440px;
`;

export const Header = styled.div`
  font-weight: 500;
  font-size: 40px;
`;

export const Copy = styled.div`
  font-weight: 25;
  font-style: italic;
  font-size: 24px;
`;



// styled divs //
export const TextShell = styled.div`
  height: 100%;
  position: fixed;
  margin: 0;
  z-index: 99;
`;

export const Zero = styled.div`
  position: fixed;
  left: 30%;
  font-size: 92px;
  z-index: 99;
`;

export const One = styled.div`
  position: fixed;
  left: 10%;
  z-index:99;
`;

export const Two = styled.div`
  position: fixed;
  left: 70%;
  z-index:99;
`;

export const Three = styled.div`
  position: fixed;
  left: 5%;
  z-index:99;
`;

export const Four = styled.div`
  position: fixed;
  left: 70%;
  z-index:99;
`;

export const Five = styled.div`
  position: fixed;
  left: 10%;
  z-index:99;
`;

export const Six = styled.div`
  position: fixed;
  left: 70%;
  z-index:99;
`;



// animation classes //

export const InBottom = styled.div`
  position: inherit;
  top: 40vh;
  animation: ${InFromBottom} 1.5s ease-in-out;
  `;

export const InTop = styled.div`
  position: inherit;
  top: 40vh;
  animation: ${InFromTop} 1.5s ease-in-out;
`;

export const OutBottom = styled.div`
  position: inherit;
  opacity: 0;
  top: 100vh;
  animation: ${OutToBottom} 1.5s ease-in-out;
`;

export const OutTop = styled.div`
  position: inherit;
  opacity: 0;
  top: 0vh;
  animation: ${OutToTop} 1.5s ease-in-out;
`;



// title //

export const TitleInFromBottom = keyframes`
  0% { opacity: 0; top: 20vh; }
  100% { opacity: 1; top: 10vh; }
`;

export const TitleInFromTop = keyframes`
  0% { opacity: 0; top: 0vh; }
  100% { opacity: 1; top: 10vh; }
`;

export const TitleOutToBottom = keyframes`
  0% { opacity: 1; top: 10vh; }
  100% { opacity: 0; top: 20vh; }
`;

export const TitleOutToTop = keyframes`
  0% { opacity: 1; top: 10vh; }
  100% { opacity: 0; top: 0vh; }
`;

export const TitleInBottom = styled.div`
  position: inherit;
  top: 10vh;
  animation: ${TitleInFromBottom} 1s ease-in-out;
`;

export const TitleInTop = styled.div`
  position: inherit;
  top: 10vh;
  animation: ${TitleInFromTop} 1s ease-in-out;
`;

export const TitleOutBottom = styled.div`
  position: inherit;
  opacity: 0;
  top: 20vh;
  animation: ${TitleOutToBottom} 1s ease-in-out;
`;

export const TitleOutTop = styled.div`
  position: inherit;
  opacity: 0;
  top: 0vh;
  animation: ${TitleOutToTop} 1s ease-in-out;
`;

// SVG //

export const SVGFadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

export const SVGFadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const SVGShell = styled.div`
  background: rgb(197, 147, 152);
  position: fixed;
  height: 361px;
  width: 390px;
  top: 34%;
  left: 38.7%;
  z-index: 0;
  opacity: 1;
`;

export const SVGShellOut = styled.div`
  position: fixed;
  opacity: 0;
  height: 361px;
  width: 390px;
  top: 34%;
  left: 38.7%;
  z-index: 0;
  animation: ${SVGFadeOut} 1s ease-in-out;
`;

export const SVGShellIn = styled.div`
  position: fixed;
  opacity: 0;
  height: 361px;
  width: 390px;
  top: 34%;
  left: 38.7%;
  z-index: 0;
  opacity: 1;
  animation: ${SVGFadeIn} 1s ease-in-out;
`;

export const SVGHide = styled.div`
  position: fixed;
  display: none;
`;


