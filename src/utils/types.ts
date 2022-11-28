export type StarWarsPlanet = {
  name: string
  rotation_period: string
  orbital_period: string
  diameter: string
  climate: string
  gravity: string
  terrain: string
  surface_water: string
  population: string
  residents: string[]
  films: string[]
  created: string
  edited: string
  url: string
  imageSrc?: string
}

export type StarWarsCharacter = {
  name: string
  birth_year: string
  eye_color: string
  gender: string
  hair_color: string
  height: string
  mass: string
  skin_color: string
  homeworld: string[]
  films: string[]
  species: string[]
  starships: string[]
  vehicles: string[]
  url: string
  created: string
  edited: string
  imageSrc?: string
}
