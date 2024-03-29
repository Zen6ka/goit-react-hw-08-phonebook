import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/auth-fetch';
import { Form, Input } from 'antd';
import { ButtonReg } from '../../pages/Pages.styled';
import { RegBlurWrap } from '../../pages/Pages.styled';
// import toast from 'react-hot-toast';
import { selectError, selectIsLoading } from '../../redux/auth/auth-selectors';

const defaultValues = {
  email: '',
  password: '',
  confirm: '',
  name: '',
};

export default function RegisterForm() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const onFinish = values => {
    const { name, email, password, confirm } = values;

    if (password === confirm) {
      dispatch(register({ name, email, password }));
      !isLoading && !error && form.resetFields();
    }
  };

  const formItemLayout = {
    labelCol: {
      span: 24,
    },
    wrapperCol: {
      span: 24,
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 4,
      },
    },
  };

  return (
    <RegBlurWrap>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        size={'default'}
        // initialValues={{
        //   residence: ['zhejiang', 'hangzhou', 'xihu'],
        //   prefix: '86',
        // }}
        initialValues={defaultValues}
        style={{
          width: 300,
        }}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
            {
              min: 7,
              message: 'Too Short!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('The new password that you entered do not match!')
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="name"
          label="Name"
          tooltip="How would you like to be called?"
          rules={[
            {
              required: true,
              message: 'Please input your name!',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <ButtonReg type="primary" shape="round" htmlType="submit">
            Register
          </ButtonReg>
        </Form.Item>
      </Form>
    </RegBlurWrap>
  );
}
