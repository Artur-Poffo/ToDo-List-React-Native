import { Btn } from "./styles"
import { AntDesign } from '@expo/vector-icons';

interface Props {
  setShowModal: Function
}

export default function AddButonn({ setShowModal }: Props) {
  return (
    <Btn
      onPress={() => setShowModal(true)}
    >
      <AntDesign name="plus" size={30} color="white" />
    </Btn>
  )
}