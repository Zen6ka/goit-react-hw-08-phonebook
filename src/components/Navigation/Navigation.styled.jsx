import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Links = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 8px 16px;
  margin-bottom: 6px;
  margin-left: 8px;
  border-radius: 16px;
  font-weight: 700;
  color: #d9cdad;

  &.active {
    color: #f4f1de;
    background-color: #3a3d58;
  }
`;