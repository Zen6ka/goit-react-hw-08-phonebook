import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 16px;
  border: none;
  outline: 0;
  background-color: #fff;
  box-shadow: 0 1px 6px 0 #25262946;
`;

export const Button = styled.button`
  padding: 8px 16px;
  margin-top: 8px;
  font-size: 18px;
  border-radius: 24px;
  border: 1px solid;
  background-color: #f4f1de;
  color: #050a38;
  &:hover {
    background: #3a3d58;
    color: #f4f1de;
  }
`;

export const Text = styled.p`
  margin-bottom: 8px;
  color: #050a38;
  font-weight:700;
`;