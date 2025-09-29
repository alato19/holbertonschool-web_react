import Container from "./container";
import NewContainer from "./newContainer";
const App = () => {
  return (
    <>
      <Container>
        <h1>Hello, Andi!</h1>
        <p>To ignore, add // eslint-disable-next-line to the line before. </p>
      </Container>

      <NewContainer />
    </>
  );
};

export default App;
