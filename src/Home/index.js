import styled from "styled-components";
import Navbar from "../components/Navbar";
import image from "../images/background.jpg";
import Slider from "./Slider";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  background-image: url(${image});
  background-attachment: fixed;
  background-size: 100vw 100vh;
  height: 100vh;
`;

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Slider />
    </Container>
  );
}
