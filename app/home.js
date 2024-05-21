import { load, html } from "emmy-dom"
import "./components/counter.js"
import "./routes.js"

export function home({ el }) {
  el.className = 'flex flex-col justify-center items-center space-y-3 text-center w-full h-full text-white'

  return html`
    <h1 class="text-3xl font-bold">Hello from Emmy.js!</h1>
    <p class="text-xl">
      Edit <code style="font-family: source-code-pro, Menlo, Monaco, Consolas;">
      app/index.js
      </code> and save to reload.
    </p>
    <Counter></Counter>
    <Xlink href='/counter'>Go to Counter</Xlink>
  `
}

load(home, 'Home')
