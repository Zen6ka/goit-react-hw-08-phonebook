import { useDispatch } from 'react-redux';
import { Form, Input, Checkbox } from 'antd';
import{ButtonLog} from '../../pages/Pages.styled'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { logIn } from '../../redux/auth/auth-fetch';
import { BlurWrap } from 'pages/Pages.styled';
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

export default function LoginForm () {
  const dispatch = useDispatch();

  const onFinish = values => {
    dispatch(logIn(values));
  };

	// useEffect(() => {
	// 	if (Number(error) === 400) {toast.error ('Invalid login credentials')};
	// },
	// )

  return (
    <BlurWrap>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: false,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <ButtonLog type="primary" shape="round" htmlType="submit" className="login-form-button">
          Log in
        </ButtonLog>
      </Form.Item>
      </Form>
			<ToastContainer/>
      </BlurWrap>			
  );
};