import { Container, Paragraph } from "./styles"
import HeaderImage from "../../assets/about-masthead.png"

import Header from "../../components/Header"

export default function About() {
  return (
    <>
      <Header HeaderImage={HeaderImage} title="About this app!!!" />

      <Container>
        <Paragraph>
          This is my first React-Native project, so it's probably not following "Best practices". I intend to go deeper into this technology this year.
        </Paragraph>
      </Container>
    </>
  )
}