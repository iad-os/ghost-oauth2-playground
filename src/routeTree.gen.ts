/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PublicImport } from './routes/public'
import { Route as PrivateImport } from './routes/private'
import { Route as IndexImport } from './routes/index'
import { Route as PublicIndexImport } from './routes/public/index'
import { Route as PrivateIndexImport } from './routes/private/index'
import { Route as PrivateUsersImport } from './routes/private/users'
import { Route as PrivateFormImport } from './routes/private/form'

// Create/Update Routes

const PublicRoute = PublicImport.update({
  id: '/public',
  path: '/public',
  getParentRoute: () => rootRoute,
} as any)

const PrivateRoute = PrivateImport.update({
  id: '/private',
  path: '/private',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PublicIndexRoute = PublicIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => PublicRoute,
} as any)

const PrivateIndexRoute = PrivateIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => PrivateRoute,
} as any)

const PrivateUsersRoute = PrivateUsersImport.update({
  id: '/users',
  path: '/users',
  getParentRoute: () => PrivateRoute,
} as any)

const PrivateFormRoute = PrivateFormImport.update({
  id: '/form',
  path: '/form',
  getParentRoute: () => PrivateRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/private': {
      id: '/private'
      path: '/private'
      fullPath: '/private'
      preLoaderRoute: typeof PrivateImport
      parentRoute: typeof rootRoute
    }
    '/public': {
      id: '/public'
      path: '/public'
      fullPath: '/public'
      preLoaderRoute: typeof PublicImport
      parentRoute: typeof rootRoute
    }
    '/private/form': {
      id: '/private/form'
      path: '/form'
      fullPath: '/private/form'
      preLoaderRoute: typeof PrivateFormImport
      parentRoute: typeof PrivateImport
    }
    '/private/users': {
      id: '/private/users'
      path: '/users'
      fullPath: '/private/users'
      preLoaderRoute: typeof PrivateUsersImport
      parentRoute: typeof PrivateImport
    }
    '/private/': {
      id: '/private/'
      path: '/'
      fullPath: '/private/'
      preLoaderRoute: typeof PrivateIndexImport
      parentRoute: typeof PrivateImport
    }
    '/public/': {
      id: '/public/'
      path: '/'
      fullPath: '/public/'
      preLoaderRoute: typeof PublicIndexImport
      parentRoute: typeof PublicImport
    }
  }
}

// Create and export the route tree

interface PrivateRouteChildren {
  PrivateFormRoute: typeof PrivateFormRoute
  PrivateUsersRoute: typeof PrivateUsersRoute
  PrivateIndexRoute: typeof PrivateIndexRoute
}

const PrivateRouteChildren: PrivateRouteChildren = {
  PrivateFormRoute: PrivateFormRoute,
  PrivateUsersRoute: PrivateUsersRoute,
  PrivateIndexRoute: PrivateIndexRoute,
}

const PrivateRouteWithChildren =
  PrivateRoute._addFileChildren(PrivateRouteChildren)

interface PublicRouteChildren {
  PublicIndexRoute: typeof PublicIndexRoute
}

const PublicRouteChildren: PublicRouteChildren = {
  PublicIndexRoute: PublicIndexRoute,
}

const PublicRouteWithChildren =
  PublicRoute._addFileChildren(PublicRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/private': typeof PrivateRouteWithChildren
  '/public': typeof PublicRouteWithChildren
  '/private/form': typeof PrivateFormRoute
  '/private/users': typeof PrivateUsersRoute
  '/private/': typeof PrivateIndexRoute
  '/public/': typeof PublicIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/private/form': typeof PrivateFormRoute
  '/private/users': typeof PrivateUsersRoute
  '/private': typeof PrivateIndexRoute
  '/public': typeof PublicIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/private': typeof PrivateRouteWithChildren
  '/public': typeof PublicRouteWithChildren
  '/private/form': typeof PrivateFormRoute
  '/private/users': typeof PrivateUsersRoute
  '/private/': typeof PrivateIndexRoute
  '/public/': typeof PublicIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/private'
    | '/public'
    | '/private/form'
    | '/private/users'
    | '/private/'
    | '/public/'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/private/form' | '/private/users' | '/private' | '/public'
  id:
    | '__root__'
    | '/'
    | '/private'
    | '/public'
    | '/private/form'
    | '/private/users'
    | '/private/'
    | '/public/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  PrivateRoute: typeof PrivateRouteWithChildren
  PublicRoute: typeof PublicRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  PrivateRoute: PrivateRouteWithChildren,
  PublicRoute: PublicRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/private",
        "/public"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/private": {
      "filePath": "private.tsx",
      "children": [
        "/private/form",
        "/private/users",
        "/private/"
      ]
    },
    "/public": {
      "filePath": "public.tsx",
      "children": [
        "/public/"
      ]
    },
    "/private/form": {
      "filePath": "private/form.tsx",
      "parent": "/private"
    },
    "/private/users": {
      "filePath": "private/users.tsx",
      "parent": "/private"
    },
    "/private/": {
      "filePath": "private/index.tsx",
      "parent": "/private"
    },
    "/public/": {
      "filePath": "public/index.tsx",
      "parent": "/public"
    }
  }
}
ROUTE_MANIFEST_END */
