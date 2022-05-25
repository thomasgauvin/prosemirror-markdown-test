import {EditorView} from "prosemirror-view"
import {EditorState} from "prosemirror-state"
import {schema, defaultMarkdownParser,
        defaultMarkdownSerializer} from "prosemirror-markdown"
import {exampleSetup} from "prosemirror-example-setup"

class ProseMirrorView {
  constructor(target, content) {
    this.view = new EditorView(target, {
      state: EditorState.create({
        doc: defaultMarkdownParser.parse(content),
        plugins: exampleSetup({schema})
      })
    })
  }

  get content() {
    return defaultMarkdownSerializer.serialize(this.view.state.doc)
  }
  focus() { this.view.focus() }
  destroy() { this.view.destroy() }
}

class MarkdownView {
    constructor(target, content) {
      this.textarea = target.appendChild(document.createElement("textarea"))
      this.textarea.value = content
    }
  
    get content() { return this.textarea.value }
    focus() { this.textarea.focus() }
    destroy() { this.textarea.remove() }
  }

let place = document.querySelector("#editor")
let view = new MarkdownView(place, `# Hello world *how are you*`)

document.querySelectorAll("input[type=radio]").forEach(button => {
  button.addEventListener("change", () => {
    if (!button.checked) return
    let View = button.value == "markdown" ? MarkdownView : ProseMirrorView
    if (view instanceof View) return
    let content = view.content
    view.destroy()
    view = new View(place, content)
    view.focus()
  })
})