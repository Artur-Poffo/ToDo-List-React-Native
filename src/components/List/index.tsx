import { Container } from "./styles"
import { FlatList } from "react-native-gesture-handler"

import ListItem from "../ListItem"

interface Props {
  tasks: Array<string>
}

export default function List({ tasks }: Props) {
  function renderItem({ item }: { item: string }) {
    return <ListItem name={item} />
  }

  return (
    <Container>
      <FlatList
        data={tasks}
        renderItem={renderItem}
      />
    </Container>
  )
}