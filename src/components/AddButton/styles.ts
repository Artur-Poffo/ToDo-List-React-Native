import styled from 'styled-components/native';

export const Btn = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_700};
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 16px;
  right: 16px;
`;