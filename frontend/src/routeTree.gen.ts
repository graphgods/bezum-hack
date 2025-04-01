/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as RegistratciyaImport } from './routes/registratciya'
import { Route as AvtorizatciyaImport } from './routes/avtorizatciya'
import { Route as IndexImport } from './routes/index'
import { Route as PrilozhenieLayoutImport } from './routes/prilozhenie/_layout'
import { Route as PrilozhenieLayoutIndexImport } from './routes/prilozhenie/_layout/index'

// Create Virtual Routes

const PrilozhenieImport = createFileRoute('/prilozhenie')()

// Create/Update Routes

const PrilozhenieRoute = PrilozhenieImport.update({
  id: '/prilozhenie',
  path: '/prilozhenie',
  getParentRoute: () => rootRoute,
} as any)

const RegistratciyaRoute = RegistratciyaImport.update({
  id: '/registratciya',
  path: '/registratciya',
  getParentRoute: () => rootRoute,
} as any)

const AvtorizatciyaRoute = AvtorizatciyaImport.update({
  id: '/avtorizatciya',
  path: '/avtorizatciya',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PrilozhenieLayoutRoute = PrilozhenieLayoutImport.update({
  id: '/_layout',
  getParentRoute: () => PrilozhenieRoute,
} as any)

const PrilozhenieLayoutIndexRoute = PrilozhenieLayoutIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => PrilozhenieLayoutRoute,
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
    '/avtorizatciya': {
      id: '/avtorizatciya'
      path: '/avtorizatciya'
      fullPath: '/avtorizatciya'
      preLoaderRoute: typeof AvtorizatciyaImport
      parentRoute: typeof rootRoute
    }
    '/registratciya': {
      id: '/registratciya'
      path: '/registratciya'
      fullPath: '/registratciya'
      preLoaderRoute: typeof RegistratciyaImport
      parentRoute: typeof rootRoute
    }
    '/prilozhenie': {
      id: '/prilozhenie'
      path: '/prilozhenie'
      fullPath: '/prilozhenie'
      preLoaderRoute: typeof PrilozhenieImport
      parentRoute: typeof rootRoute
    }
    '/prilozhenie/_layout': {
      id: '/prilozhenie/_layout'
      path: '/prilozhenie'
      fullPath: '/prilozhenie'
      preLoaderRoute: typeof PrilozhenieLayoutImport
      parentRoute: typeof PrilozhenieRoute
    }
    '/prilozhenie/_layout/': {
      id: '/prilozhenie/_layout/'
      path: '/'
      fullPath: '/prilozhenie/'
      preLoaderRoute: typeof PrilozhenieLayoutIndexImport
      parentRoute: typeof PrilozhenieLayoutImport
    }
  }
}

// Create and export the route tree

interface PrilozhenieLayoutRouteChildren {
  PrilozhenieLayoutIndexRoute: typeof PrilozhenieLayoutIndexRoute
}

const PrilozhenieLayoutRouteChildren: PrilozhenieLayoutRouteChildren = {
  PrilozhenieLayoutIndexRoute: PrilozhenieLayoutIndexRoute,
}

const PrilozhenieLayoutRouteWithChildren =
  PrilozhenieLayoutRoute._addFileChildren(PrilozhenieLayoutRouteChildren)

interface PrilozhenieRouteChildren {
  PrilozhenieLayoutRoute: typeof PrilozhenieLayoutRouteWithChildren
}

const PrilozhenieRouteChildren: PrilozhenieRouteChildren = {
  PrilozhenieLayoutRoute: PrilozhenieLayoutRouteWithChildren,
}

const PrilozhenieRouteWithChildren = PrilozhenieRoute._addFileChildren(
  PrilozhenieRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/avtorizatciya': typeof AvtorizatciyaRoute
  '/registratciya': typeof RegistratciyaRoute
  '/prilozhenie': typeof PrilozhenieLayoutRouteWithChildren
  '/prilozhenie/': typeof PrilozhenieLayoutIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/avtorizatciya': typeof AvtorizatciyaRoute
  '/registratciya': typeof RegistratciyaRoute
  '/prilozhenie': typeof PrilozhenieLayoutIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/avtorizatciya': typeof AvtorizatciyaRoute
  '/registratciya': typeof RegistratciyaRoute
  '/prilozhenie': typeof PrilozhenieRouteWithChildren
  '/prilozhenie/_layout': typeof PrilozhenieLayoutRouteWithChildren
  '/prilozhenie/_layout/': typeof PrilozhenieLayoutIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/avtorizatciya'
    | '/registratciya'
    | '/prilozhenie'
    | '/prilozhenie/'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/avtorizatciya' | '/registratciya' | '/prilozhenie'
  id:
    | '__root__'
    | '/'
    | '/avtorizatciya'
    | '/registratciya'
    | '/prilozhenie'
    | '/prilozhenie/_layout'
    | '/prilozhenie/_layout/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AvtorizatciyaRoute: typeof AvtorizatciyaRoute
  RegistratciyaRoute: typeof RegistratciyaRoute
  PrilozhenieRoute: typeof PrilozhenieRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AvtorizatciyaRoute: AvtorizatciyaRoute,
  RegistratciyaRoute: RegistratciyaRoute,
  PrilozhenieRoute: PrilozhenieRouteWithChildren,
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
        "/avtorizatciya",
        "/registratciya",
        "/prilozhenie"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/avtorizatciya": {
      "filePath": "avtorizatciya.tsx"
    },
    "/registratciya": {
      "filePath": "registratciya.tsx"
    },
    "/prilozhenie": {
      "filePath": "prilozhenie",
      "children": [
        "/prilozhenie/_layout"
      ]
    },
    "/prilozhenie/_layout": {
      "filePath": "prilozhenie/_layout.tsx",
      "parent": "/prilozhenie",
      "children": [
        "/prilozhenie/_layout/"
      ]
    },
    "/prilozhenie/_layout/": {
      "filePath": "prilozhenie/_layout/index.tsx",
      "parent": "/prilozhenie/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
