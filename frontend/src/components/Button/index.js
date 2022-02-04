import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid #c7ecee;
  border-radius: 8px;
  padding: 8px 16px;
  width: ({width} => width && width || "");
  display: inline-block;
  outline: none;
  background: transparent;
  transition: all .3s ease;

  &:hover{
      background: #c7ecee;
  }
`

export default Button;

