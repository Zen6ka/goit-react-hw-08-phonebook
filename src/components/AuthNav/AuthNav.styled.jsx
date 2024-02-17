import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Links = styled(NavLink)`
  @media only screen and (max-width: 600px) {
    justify-content: space-around;
  }
  display: inline-block;
  text-decoration: none;
  margin-bottom: 6px;
  margin-right: 8px;
  padding: 8px 16px;
  border-radius: 16px;
  font-weight: 700;
  color: #d9cdad;

  &.active {
    color: #f4f1de;
    background-color: #3d405b;
  }
`;