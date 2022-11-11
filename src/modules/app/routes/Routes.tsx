import { Route, Routes, Navigate } from 'react-router-dom'
import {
  rootPath,
  homePath,
} from '../../../logic/paths'
import { withHeader } from '../../../shared/hocs/withHeader'
import { Home } from '../../home/Home'


const notFoundRoute: RouteDefinition = {
  path: '*',
  element: () => {},
  protected: false,
  title: '',
}

export const routes: RouteDefinition[] = [
  {
    path: rootPath,
    // element: Home,
    // protected: false,
    redirect: homePath,
    // title: 'Home',
    // pathType: 0,
  },
  {
    path: homePath,
    element: Home,
    protected: false,
    title: 'Home',
    pathType: 0,
  },
  notFoundRoute,
]
  .map((r) => ({ ...r, element: withHeader(r.element, r.path) }))
  .concat()

export interface RouteDefinition {
  path: string
  protected?: boolean
  redirect?: string
  element?: any
  routes?: RouteDefinition[]
  title?: string
  requires?: any
  pathType?: number
}

export interface User {
  id: string
}

function getRouteRenderWithAuth(isLoggedIn: boolean, route: RouteDefinition) {
  if (isLoggedIn === route.protected || !route.redirect) {
    const RouteComponent = route.requires ? route.requires(route.element) : route.element
    return { element: <RouteComponent /> }
  } else {
    return { element: <Navigate replace to={route.redirect} /> }
  }
}

export const RoutesComponent = () => {
  const isLoggedIn = false

  const mapRoutes = (route: RouteDefinition, i: number) => {
    const render = getRouteRenderWithAuth(isLoggedIn, route)
    return <Route key={i} path={route.path} {...render} />
  }

  return <Routes>{routes.map(mapRoutes)}</Routes>
}
