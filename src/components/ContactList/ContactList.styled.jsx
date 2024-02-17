import styled from 'styled-components';

export const ContactItems = styled.li`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;
  background-color: #f5f6f7;
  padding-left: 10px;
  border-radius: 24px;
`;

export const Contact = styled.span` 
 margin-right: 12px; 
 color: #000;
`;

export const Btn = styled.button`
  @media only screen and (max-width: 600px) {
    margin-right: 10px;
  }
  padding: 8px 16px;
  margin-left: 1px;
  font-size: 18px;
  border-radius: 0 24px 24px 0;
  border: 1px solid;
  background-color: #f4f1de;
  color: #000;
  &:hover {
    background: #e07a5f;
    color: #f4f1de;
    border:none;
    border: 1px solid #e07a5f;
  }
`;

export const BtnEdit = styled.button`
  padding: 8px 16px;
  margin-left: 5px;
  font-size: 18px;
  border-radius: 24px 0 0 24px;
  border: 1px solid;
  background-color: #f4f1de;
  color: #000;
  &:hover {
    background: #f2cc8f;
    color: #a1712a;
    border: 1px solid #f2cc8f;
  }
`;

export const Text = styled.p`
text-align: center;
color: #fff;
margin-top: 8px;
  margin-bottom: 16px;  
`;