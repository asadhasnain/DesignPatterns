import { Editor } from "./Editor";
import { EditorHistory } from "./EditorHistory";

(() => { 
    console.log("\n***** Behavioral Design Pattern: Memento -> Capture and restore an object internal state *****\n");

    const editor: Editor = new Editor();
    const history: EditorHistory = new EditorHistory();

    editor.setContent("Design Pattern");
    history.push(editor.createState());

    editor.setContent("Session");
    history.push(editor.createState());

    editor.setContent("Knowledge Gurus");
    editor.restore(history.pop());
    console.log(editor.getContent());
    editor.restore(history.pop());
    console.log(editor.getContent());

    editor.restore(history.pop());
    console.log(editor.getContent());
    editor.restore(history.pop());
    console.log(editor.getContent());
})();