import React, { useState } from "react"
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native"

import { Container, Input, Btn, TextButton } from "./styles"

interface Props {
  tasks: Array<string>
  setTasks: Function
  setShowModal: Function
}

export default function InputSection({ tasks, setTasks, setShowModal }: Props) {
  const [text, setText] = useState("")

  return (
    <Container>
      <Input value={text} onChangeText={text => setText(text)} />
      <Btn
        onPress={() => {
          if (text !== '') {
            setTasks([...tasks, text])
            setText('')
            setShowModal(false)
          }
        }}
      >
        <TextButton>Set Task</TextButton>
      </Btn>
    </Container>
  )
}