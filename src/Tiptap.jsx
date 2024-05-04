import { EditorProvider, FloatingMenu, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'

import MenuBar from './MenuBar'
import './Tiptap.css'

// define your extension array
const extensions = [
    StarterKit,
    Underline
]

const content = '<p>Hello World!</p>'

const handleUpdate = (editor) => {
    console.log(editor.getJSON())
}

const Tiptap = () => {
    return (
        <div className="tiptap-container">
                <EditorProvider
                    content={content}
                    extensions={extensions}
                    editable={true}
                    autofocus={false}
                    onUpdate={({editor}) => handleUpdate(editor)}
                    slotBefore={<MenuBar />}
                >
                    {/* <FloatingMenu>This is the floating menu</FloatingMenu> */}
                    {/* <BubbleMenu>This is the bubble menu</BubbleMenu> */}
                </EditorProvider>
        </div>
    )
}

export default Tiptap