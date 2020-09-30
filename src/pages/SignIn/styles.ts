import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 0 30px;
`;

export const ContainerForm = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 32px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;
export const ForgotPasswordText = styled.Text`
  color: #f4ede8;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const CreateAcountButton = styled.TouchableOpacity`
  background: #312e38;
  border-top-width: 1px;
  border-color: #232129;
  padding: 16px 0;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CreateAcountButtonText = styled.Text`
  margin-left: 16px;
  font-size: 18px;
  color: #ff9000;
  font-family: 'RobotoSlab-Regular';
`;
