import "./App.css";
import Greet from "./component/Greet";
import Heading from "./component/Heading";
import Oscar from "./component/Oscar";
import Person from "./component/Person";
import PersonList from "./component/PersonList";
import Status from "./component/Status";
import Button from "./component/Button";
import Input from "./component/Input";
import Container from "./component/Container";
import User from "./component/User";
import { ThemeContextProvider } from "./component/context/ThemeContext";
import Box from "./component/context/Box";

function App() {
  const personName = {
    first: "Deep",
    last: "Patel",
  };
  const personList = [{ first: "" }, { first: "" }, { first: "" }];
  const handleClick = (e: any, id: number) => {
    console.log("propsbuttonClick", e);
  };
  return (
    <div className="App">
      <Greet name="world" number={20} IsLoggedIn={true} />
      <Person name={personName} />
      <PersonList name={personList} />
      <Status status="error" />
      <Heading>Heading Children Text</Heading>
      <Oscar>
        <Heading>Oscar Goes to Deep Patel</Heading>
      </Oscar>
      <Button onClick={handleClick}>Click</Button>
      <Input
        value=""
        onChange={(event) => console.log(event.target.value)}
      ></Input>
      <Container style={{ border:"1px solid red", width:"80%" }} />
      <User />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
