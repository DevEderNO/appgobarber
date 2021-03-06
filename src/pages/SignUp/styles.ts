import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${150}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 32px 0 24px;
`;

export const BackToSignInButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #312e38;
  border-top-width: 1px;
  border-color: #323129;
  padding: 16px 0;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BackToSignInButtonText = styled.Text`
  margin-left: 16px;
  font-size: 18px;
  color: #fff;
  font-family: 'RobotoSlab-Regular';
`;
