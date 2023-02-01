import { useState } from "react"

import { Container } from "./styles"
import HeaderImage from "../../assets/masthead.png"

import Header from "../../components/Header"
import List from "../../components/List"
import Modal from "../../components/Modal"
import AddButonn from "../../components/AddButton"

export default function Home() {
  const [tasks, setTasks] = useState([])
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Header HeaderImage={HeaderImage} title="Hello Tasks!!!" />

      <Container>
        <List tasks={tasks} />
      </Container>

      <Modal tasks={tasks} setTasks={setTasks} showModal={showModal} setShowModal={setShowModal} />
      <AddButonn setShowModal={setShowModal} />
    </>
  )
}