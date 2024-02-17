import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  color: #f4f1de
`;

export const Name = styled.span`
  font-weight: 700;
  margin-right: 12px;
  color: #d9cdad;
`;

export const Button = styled.button`
  @media only screen and (max-width: 600px) {
    margin-right: 20px;
  }
  
  padding: 8px 16px;
  margin-right: 8px;
  font-size: 14px;
  border-radius: 16px;
  border: 1px solid;
  background-color: #3d405b;
  color:#f4f1de;
  &:hover {
    background-color: #e07a5f;
    color: #f4f1de;;
  }
`;