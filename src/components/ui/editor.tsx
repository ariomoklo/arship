import Header from '@editorjs/header';
import { createReactEditorJS } from "react-editor-js";

const Editor = () => {
  
  const EditorJS = createReactEditorJS()
  const EDITOR_JS_TOOLS = { header: Header }

  return <EditorJS tools={EDITOR_JS_TOOLS} placeholder={`Write from here...`}/>
}

export default Editor