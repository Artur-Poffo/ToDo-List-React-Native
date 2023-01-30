import styled from 'styled-components/native';

interface ModalProps {
  show: boolean
}

export const Container = styled.View<ModalProps>`
  display: ${({ show }) => show ? 'flex' : 'none'};
  position: absolute;
  width: 100%;
  height: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all .5s ease;
`;

export const ModalComponent = styled.View`
  position: relative;
  width: 100%;
  height: 220px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.CONTRAST};
`

export const ExitButton = styled.TouchableOpacity`
  position: relative;
  top: 10px;
  left: 10px;
`