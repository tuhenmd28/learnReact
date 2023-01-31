import styled from "styled-components";

const Input = styled.input`
background: transparent;
border:${(props)=>props.border ?'1px solid red':'1px solid #33ff76'};
// border:1px solid #33ff76;
outline: none;
border-radius: 5px;
padding: 7px 0 7px 10px;
display: block;
width:100%;
box-sizing:border-box;
`
export default Input;