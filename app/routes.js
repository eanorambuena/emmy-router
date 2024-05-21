import { BrowserRoute } from 'vanilla-routing'
import { load, html, Emmy } from 'emmy-dom'

const createCustomElement = (name) => {
  const root = document.createElement('div')
  root.innerHTML = html`<${name}></${name}>`
  return root
}

Emmy.routes = []

const Xroute = ({ el, props, children }) => {
  el.className = 'hidden'
  const { path, component } = props()
  for (const route of Emmy.routes) {
    if (route.pathname === path()) {
      return ``
    }
  }
  let name = `xrouter${path().replace(/\//g, '-')}`
  if (!component)
  {
    load(children, name)
  }
  else
  {
    name = component()
  }
  const route = {
    pathname: path(),
    element: () => createCustomElement(name)
  }
  Emmy.routes.push(route)
  return () => children()
}

load(Xroute, 'Xroute')

const Xrouter = ({ el, children }) => {
  el.useEffect(() => {
    BrowserRoute(Emmy.routes)
  }, ['didMount'])
  return () => html`${children()}
    <main data-vanilla-route-ele="router-wrap" class="flex flex-col justify-center items-center space-y-3 text-center w-full h-full"></main>
  `
}

load(Xrouter, 'Xrouter')

const Xlink = ({ props, children }) => {
  const { href } = props()
  return () => html`
    <a data-vanilla-route-link="spa" href="${href()}">
      ${children()}
    </a>
  `
}

load(Xlink, 'Xlink')
