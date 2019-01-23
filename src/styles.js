import styled from "styled-components";

export const StyledWrapper = styled.div`
margin: auto;
position: relative;
top: 0;
bottom: 0;
right: 0;
left: 0;
display: flex;
justify-content: center;
align-self: center;
align-items: center;
dipslay:flex;
flex-direction: row;
`;
export const StyledButtonWrapper = styled.div`
padding-top: 10px;
display: flex;
width:100%;
`;
export const StyledInputWrapper = styled.div`
height: 50px;
width: 100%;
padding-top: 10px;
`;
export const Button = styled.button`
transition: all .2s ease-in-out;
    width:100%;
    height: 45px;
    font-size: 12px;
    background: #1B1C1F;
    color: rgb(255, 87, 26);
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    border: 1.5px solid rgb(255, 87, 26);
    outline: none;
    display: block;
    border-radius: 5px;
    margin-right:15px;
    cursor: pointer;
`;
export const Wrapper = styled.div`
margin: auto;
position: relative;
top: 0;
bottom: 0;
right: 0;
left: 0;
display: flex;
justify-content: center;
align-self: center;
align-items: center;
display:flex;
flex-direction: row;
width:40%;
`;
export const Span = styled.span`
color:#999
`;
export const Input = styled.input`
transition: all 0.2s linear;
width: 100%;
display: inline-block;
height: 40px;
font-size: 15px;
border: 0;
outline: none;
display: block;
border-radius:5px;
text-indent: 10px;
color:#999;
background: #505050;
&:focus {
  border-bottom: 1px solid #f76f39;
}
`;
export const TextArea = styled.input`
transition: all 0.2s linear;
width: 100%;
display: inline-block;
height: 80px;
font-size: 15px;
border: 0;
outline: none;
display: block;
border-radius:5px;
text-indent: 10px;
color:#999;
background: #505050;
&:focus {
  border-bottom: 1px solid #f76f39;
}`;
export const Paragraph = styled.p`
transition: all 0.2s linear;
width: 100%;
display: inline-block;
height: 80px;
font-size: 15px;
border: 0;
outline: none;
display: block;
border-radius:5px;
text-indent: 10px;
color:#999;
background: #505050;
&:focus {
  border-bottom: 1px solid #f76f39;
}`;
