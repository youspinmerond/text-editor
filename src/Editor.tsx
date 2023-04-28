import TextEditor from "./components/TextEditor";
import Nav from "./components/Navigation";

export default function Editor() {
  return (
    <>
      <Nav/>
      <div className="article">
        <TextEditor/>
      </div>
    </>
  );
}