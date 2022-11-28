import React from 'react'
import { render } from '../../test/testUtils'
import StarWarsCharacterCard from './StarWarsCharacterCard'

const StarWarsCharacterExampleData = {
  edited: '2014-12-20T20:58:18.411Z',
  birth_year: '19BBY',
  eye_color: 'blue',
  name: 'Luke Skywalker',
  gender: 'male',
  hair_color: 'blonde',
  height: '172',
  mass: '77',
  skin_color: 'fair',
  homeworld: 'Tatooine',
  films: [''],
  species: [''],
  starships: [''],
  vehicles: [''],
  films: [''],
  url: '',
  isNextImage: false,
}
test('renders StarWarsCharacterCard data ', () => {
    const { getByText } = render(
        <StarWarsCharacterCard {...StarWarsCharacterExampleData} />
    )
    const name = getByText(/Luke Skywalker/i)
    const birthYear = getByText(/19BBY/i)
    const eyeColor = getByText(/blue/i)
    const gender = getByText(/male/i)
    const hairColor = getByText(/blonde/i)
    const height = getByText(/172/i)
    const mass = getByText(/77/i)
    const skinColor = getByText(/fair/i)
    const homeworld = getByText(/Tatooine/i)
    expect(name).toBeInTheDocument()
    expect(birthYear).toBeInTheDocument()
    expect(eyeColor).toBeInTheDocument()
    expect (gender).toBeInTheDocument()
    expect(hairColor).toBeInTheDocument()
    expect(height).toBeInTheDocument()
    expect(mass).toBeInTheDocument()
    expect(skinColor).toBeInTheDocument()
    expect(homeworld).toBeInTheDocument()
})

