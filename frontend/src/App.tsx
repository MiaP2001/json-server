import Header from "./components/Header";
import PostList from "./components/PostList";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Container>
      <Header />
      <PostList />
      <Footer />
    </Container>
  );
}

export default App;
