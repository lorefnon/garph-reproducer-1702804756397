import { g } from 'garph'

export const CoordinatesT = g.type('Coordinates', {
  lat: g.float(),
  long: g.float(),
})

export const LocationT = g.type('Location', {
  id: g.id(),
  title: g.string(),
  description: g.string(),
  coordinates: g.ref(() => CoordinatesT)
})

export const PageT = g.type('Page', {
  current: g.int(),
  size: g.int(),
})

export const LocationsLinkT = g.type('LocationsLink', {
  locations: g.ref(LocationT).list(),
  page: PageT,
})

export const PageInputT = g.inputType('PageInput', {
  num: g.int().default(1),
  size: g.int().default(10),
})

export const QueryT = g.type('Query', {
  locations: g.ref(LocationsLinkT).args({
    page: PageInputT
  })
})

export { g }
