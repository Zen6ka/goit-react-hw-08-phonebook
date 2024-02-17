import { Links } from './AuthNav.styled';
import { LoginOutlined } from '@ant-design/icons';

export default function AuthNav() {
  return (
    <div>
      <Links to="/registration">Registration</Links>
      <Links to="/login"><LoginOutlined /> Login</Links>
    </div>
  );
}