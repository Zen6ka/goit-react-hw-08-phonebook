import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/auth-fetch';
import { useAuth } from '../hooks/userAuth';
import { Container, Name, Button } from './UserMenu.styled';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';


export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container>
      <UserOutlined />
      <Name> Welcome, {user.name}!</Name>
      <Button type="button" onClick={() => dispatch(logOut())}>
        <LogoutOutlined /> Log out
      </Button>
    </Container>
  );
}