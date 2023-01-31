import styled from "styled-components";

const fontSize = {
    sm:'16px',
    md:'20px',
    lg:'25px'
}
const Button = styled.button`
// border: 1px solid red;
border:none;
outline: none;
background: transparent;
padding: 11px 35px;
border-radius: 5px;
text-transform: capitalize;
box-shadow: 0 0 10px 2px #00000059;
font-weight:500;
cursor:pointer;
font-size:${(props) => fontSize[props.size] ?? '14px'};
&:hover{
    background:#dddddd;
    color:black;
}

`

export default Button