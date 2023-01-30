import { useState } from "react";
import { Container, Task } from "./styles"
import BouncyCheckbox from "react-native-bouncy-checkbox";

interface Props {
  name: string
}

export default function ListItem({ name }: Props) {
  const [isCompleted, setIsCompleted] = useState(false)

  return (
    <Container>
      <BouncyCheckbox
        size={23}
        fillColor="#7dd3fc"
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{ fontFamily: "Roboto_700Bold" }}
        onPress={(isChecked: boolean) => { isChecked ? setIsCompleted(true) : setIsCompleted(false) }}
      />
      <Task isCompleted={isCompleted} >{name}</Task>
    </Container>
  )
}