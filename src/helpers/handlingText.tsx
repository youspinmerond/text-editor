export default function handlingText(e: any, editor: HTMLDivElement | undefined) {
  
  
  let selection;
  if(window.getSelection() !== undefined) selection = window.getSelection()?.rangeCount > 0 ? window.getSelection()?.getRangeAt(0) : "";

  if(selection?.toString() === "") {
    if(!editor) return;
    const elem = document.createElement(e.target.className);
    elem.textContent = `New ${e.target.className} element.`;
    editor.append(elem);
  } else {
    if(typeof selection === "string" || !selection) return;

    const parent = selection?.startContainer.parentNode as HTMLDivElement;
    const parentparent = parent.parentNode as HTMLDivElement;
    if(!parent) return;

    console.log(parent);
    if(parent?.className === "field" || parentparent.className === "field") {
      console.log(e.target);
      const elem = document.createElement(e.target.className);
      
      selection.surroundContents(elem);
    }
  }
  return e;
}