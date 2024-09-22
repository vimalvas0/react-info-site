import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Container from "./components/Container/Container";
import ArticlePage from "./components/ArticlePage/ArticlePage";

function App() {
  return (
    <>
      <Container>
        <NavBar />
        <ArticlePage />
      </Container>
    </>
  );
}

export default App;
