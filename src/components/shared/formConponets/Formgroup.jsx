import styled from "styled-components"
import Input from "../../ui/button/Input"
import Label from "../../ui/button/Label"
import Text from "../../ui/button/Text"
const Div = styled.div`
    padding:20px 10px;
    // box-shadow: 0 0 10px 2px #00000033;
    border:1px solid #11221155;
    border-radius:5px;
    width:50%;
    margin:auto;
    margin-top:20px;

`
const Formgroup = ({
    label,name,onchange,onfocus,onblur,placeholder,error
}) => {
  return (
    <Div>
        <Label htmlFor={name}>{label}</Label>
        <Input
        id={name}
        name={name}
        placeholder={placeholder} 
        onChange={onchange}
        onFocus={onfocus}
        onBlur={onblur}
        border={error}
         />
        {error && <Text>{error} </Text>}
    </Div>
  )
}

export default Formgroup