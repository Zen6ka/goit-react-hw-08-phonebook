import { useSelector } from "react-redux";
import { BlurWrap, HomeLogin } from "./Pages.styled";
import { selectIsLoggedIn, selectUser } from "../redux/auth/auth-selectors";
import { Text } from "../components/LoginForm/LoginForm.styled";
import { LoginOutlined } from "@ant-design/icons";
import{TextBlurWrap} from "../pages/Pages.styled"

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return(

    <BlurWrap >
      {isLoggedIn ? (<><Text >
          Hi, {user.name}! <br />
          Welcome to your phonebook. </Text>
        </>) :
          (<><TextBlurWrap component="h1" variant="h3" color="inherit">
            Welcome to the Phonebook! </TextBlurWrap>
            <Text>
              Please log in to your account or register.
            </Text>
            <HomeLogin to="/login"><LoginOutlined /> Login</HomeLogin>
        </>)}
    </BlurWrap>
  )
};
