import { Image, Title } from "./styles"

interface Props {
  HeaderImage: HTMLImageElement
  title?: string
}

export default function Header({ HeaderImage, title }: Props) {
  return (
    <Image source={HeaderImage} >
      <Title>{title}</Title>
    </Image>
  )
}