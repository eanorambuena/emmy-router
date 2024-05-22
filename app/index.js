import { load, html } from "emmy-dom"
import "./components/counter.js"
import "./home.js"
import "./routes.js"

export function app() {
  return html`
    <Xrouter>
      <Xroute path="/">
        <Home />
      </Xroute>
      <Xroute path="/counter" component="emmy-counter" />
      <Xroute path="/about">
        <div>Hello world!</div>
        <Xlink href='/'>Go to Home</Xlink>
      </Xroute>
    </Xrouter>
  `
}

export const App = load(app, 'App')
