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
  margin-top: 5px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid;
  background-color: #3a3d58;
  :hover {
    background-color: #e0e0e0;
  }
`;
  