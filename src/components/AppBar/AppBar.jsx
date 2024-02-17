import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { Header } from './AppBar.styled';
import { useAuth } from '../hooks/userAuth';

export default function AppBar () {
  const { isLoggedIn } = useAuth();

  const renderNavigation = () => {
    return isLoggedIn ? <UserMenu /> : <AuthNav />;
  };

  return (
    <Header>
      <Navigation />
      {renderNavigation()}
    </Header>
  );
};