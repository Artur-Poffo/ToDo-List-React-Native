import { Container, ModalComponent, ExitButton } from "./styles"
import { Feather } from '@expo/vector-icons';

import InputSection from "../InputSection";

interface Props {
  tasks: Array<string>
  setTasks: Function
  showModal: boolean
  setShowModal: Function
}

export default function Modal({ tasks, setTasks, showModal, setShowModal }: Props) {
  return (
    <Container show={showModal} >
      <ModalComponent>
        <ExitButton
          onPress={() => setShowModal(false)}
        >
          <Feather name="x-circle" size={30} color="white" />
        </ExitButton>

        <InputSection tasks={tasks} setTasks={setTasks} setShowModal={setShowModal} />
      </ModalComponent>
    </Container>
  )
}