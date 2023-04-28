import { useEffect, useRef, useState } from "react";
import submit from "../helpers/submit";
import handlingText from "../helpers/handlingText";
import "../styles/editor.sass";

interface IArticle {
  name: string;
  description: string;
}

export default function TextEditor() {
  const [article, setArticle] = useState<IArticle>({name:"", description:""});
  const editor = useRef<HTMLDivElement | undefined>(undefined);

  useEffect(() => {
    const localArticle = window.localStorage.getItem("article");
    if(localArticle !== null) {
      setArticle(JSON.parse(localArticle));
    }
  }, []);

  return (
    <>
      <div className="prevBox" style={{display: article.description ? "block" : "none"}}>{article.description}</div>
      <input type="text" placeholder="Name of your article" className="name" maxLength={20}
        value={article.name}
        onChange={(e) => {
          setArticle(pr => {
            return {description: pr.description, name: e.target.value};
          });
          setTimeout(() => {
            window.localStorage.setItem("article", JSON.stringify({...article, name: e.target.value}));
          }, 10);
        }}/>
      <div className="editor">
        <div className="panel">
          <button onClick={(e) => handlingText(e, editor.current)} className="p">p</button>
          <button onClick={(e) => handlingText(e, editor.current)} className="i">I</button>
          <button onClick={(e) => handlingText(e, editor.current)} className="b">B</button>
          <button onClick={(e) => handlingText(e, editor.current)} className="h1">h1</button>
          <button onClick={(e) => handlingText(e, editor.current)} className="h2">h2</button>
          <button onClick={(e) => handlingText(e, editor.current)} className="h3">h3</button>
          <button onClick={(e) => handlingText(e, editor.current)} className="sup">
            <span className="sup">
              A<sup>x</sup>
            </span>
          </button>
          <button onClick={(e) => handlingText(e, editor.current)} className="sub">
            <span className="sub">
              A<sub>x</sub>
            </span>
          </button>
        </div>
        <div
          ref={editor as any}
          className="field"
          contentEditable="true"
          suppressContentEditableWarning={true}
          dangerouslySetInnerHTML={
            {
              __html: window.localStorage.getItem("article") !== undefined ?
                JSON.parse(window.localStorage.getItem("article") as string).description as string
                :
                `
                  <p>
                    Try to edit this text
                  </p>
                `
            }
          }
        >
        </div>
      </div>
      <button className="btn" onClick={() => {
        const description = document.getElementsByClassName('field')[0].innerHTML;
        const name = document.getElementsByClassName('name')[0] as HTMLInputElement;
        const handledName = name.value;
        
        setArticle({description: description, name: handledName});
        window.localStorage.setItem("article", JSON.stringify({description: description, name: handledName}));
      }}>Save</button>

      <button className="btn" onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        const description = document.getElementsByClassName('field')[0].innerHTML;
        const name = document.getElementsByClassName('name')[0] as HTMLInputElement;
        const handledName = name.value;
        
        setArticle({description: description, name: handledName});
        window.localStorage.setItem("article", JSON.stringify({description: description, name: handledName}));
        
        submit(e);
      }}>Submit</button>
    </>
  );
}