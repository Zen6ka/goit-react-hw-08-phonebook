import { useAuth } from '../hooks/userAuth';
import { Links } from './Navigation.styled';

export default function Navigation () {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Links to="/" end>
        Home
      </Links>
      {isLoggedIn && <Links to="/contacts">Phonebook</Links>}
    </nav>
  );
};