import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled(FormikField)`
  padding: 10px;
  max-width: 600px;
  width: 100%;
  border-radius: 16px;
  border: none;
  outline: 0;
  background-color: #fff;
  box-shadow: 0 1px 6px 0 #25262946;
`;

export const Button = styled.button`
  padding: 8px 16px;
  margin-top: 8px;
  font-size: 18px;
  border-radius: 24px;
  border: 1px solid;
  background-color: #f4f1de;
  color: #050a38;
  &:hover {
    background: #3a3d58;
    color: #f4f1de;
  }
`;

export const Text = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
  color: #050a38;
  font-weight: 700;
`;

export const ErrorMessage = styled(FormikError)`
  color: #cf4545;
  font-size: 14px;
`;
