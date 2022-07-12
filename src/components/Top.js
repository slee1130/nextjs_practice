import { Header } from "semantic-ui-react";
import Nav from "../components/Nav";

export default function Top() {
  return (
    <div>
      <div style={{ display: "flex", paddingTop: 20 }}>
        <Header as="h1">Shopping Mall</Header>
      </div>
      <Nav />
    </div>
  );
}
