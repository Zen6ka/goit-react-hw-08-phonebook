import styled from 'styled-components';
import { Links } from 'components/AuthNav/AuthNav.styled';

export const HeroWrapper = styled.div`
height: auto;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;


export const BlurWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: rgba(217, 205, 173, 0.5);
height: auto;
min-width: 500px;
min-height: 270px;
padding: 8px 8px 0 8px;
margin-bottom: 16px;
margin-top:450px;
border-radius: 16px;
font-size:24px;
font-weight: 600;

`;

export const RegBlurWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: rgba(217, 205, 173, 0.5);
height: auto;
min-width: 500px;
min-height: 300px;
padding: 8px 8px 0 8px;
margin-bottom: 16px;
margin-top:200px;
border-radius: 16px;
font-size:24px;
font-weight: 600;

`;

export const ButtonReg = styled.button`
	padding: 10px 20px;
  margin-top: 5px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid;
	color: #ffffff;
	font-weight:700;
	font-size:18px;
	background-color:#9f8c54;
  &:hover {
    background-color: #3a3d58;    
  }
`

export const ButtonLog = styled.button`
	padding: 10px 20px;
  margin-top: 5px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid;
	color: #ffffff;
	font-weight:700;
	font-size:18px;
	background-color:#9f8c54;
  &:hover {
    background-color: #3a3d58;    
  }
`
export const TextBlurWrap = styled.h1 `
font-family: "Gill Sans", sans-serif;
font-size:35px;
font-weight: 700;
color:#050a38;
text-shadow: rgb(165, 193, 224) 1px 2px 3px;
`


export const HomeLogin = styled(Links)`
color: #ffffff;
background-color:#9f8c54;
font-family: "Gill Sans", sans-serif;
border: 1px solid #ffffff;
margin-top: 40px;
  &:hover {
    background: #3a3d58;
    color: #f4f1de;
  }
`
