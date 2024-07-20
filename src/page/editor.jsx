import './editor.css'
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";

import { SuggestionMenuController, useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";

import { Header } from "../components/header"
import { Helper } from "../components/helper"
import { MenuEditor } from "../components/menu-editor"
import { Navbar } from "../components/navbar"
import { defaultBlockSpecs, BlockNoteSchema } from '@blocknote/core'

const schema = BlockNoteSchema.create({
  blockSpecs: {
    heading: defaultBlockSpecs.heading,
    paragraph: defaultBlockSpecs.paragraph,
  },
});
 
export function Editor() {
  const editor = useCreateBlockNote({
    schema,
    initialContent: [
      {
        type: 'paragraph',
        content: 'Your goal is to make a page that looks exactly like this one, and has the ability to create H1 text simply by typing / then 1, then typing text, and hitting enter.'
      },
      {
        type: 'paragraph',
        content: '',
      }
    ],
    defaultStyles: true,
  });
    
  return (
    <main className="main-container">
      <Navbar />
      <div className="content-container">
        <Header />
        <div className="editor-container">
          <BlockNoteView
            editor={editor}
            slashMenu={false}
            sideMenu={false}
            theme="light"
          >
            <SuggestionMenuController
              triggerCharacter='/'
              suggestionMenuComponent={MenuEditor}
            />
          </BlockNoteView>
        </div>
      </div>
      <Helper />
    </main>
  )
}
