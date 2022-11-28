import React from 'react'
import { StarWarsPlanet } from '../utils/types'
import Image from 'next/image'

const StarWarsPlanetCard = (
  props: StarWarsPlanet & { isNextImage: boolean }
) => {
  const {
    name,
    diameter,
    rotation_period,
    orbital_period,
    gravity,
    population,
    climate,
    terrain,
    surface_water,
    created,
    edited,
    imageSrc,
    residents,
    isNextImage,
  } = props

  const createdFormattedDate = new Date(created).toLocaleDateString()
  const editedFormattedDate = new Date(edited).toLocaleDateString()

  return (
    <div className="card">
        {isNextImage ? (
        <Image className="card-image"
          src={imageSrc}
          alt={`${name} planet`}
          height={250}
          width={250}
          layout="fixed"
          objectFit="cover"
          loading="eager"
          priority
        />
      ) : (
        <Image className="card-image"
          alt={`${name} planet`}
          height={250}
          width={250}
          src={imageSrc}
        />
      )}
      <div className="card-wrapper">
        <p className="sub-header-paragraph">
          created: <b>{createdFormattedDate}</b>
        </p>
        <p className="sub-header-paragraph">
          last edited: <b>{editedFormattedDate}</b>
        </p>
        <h2 className="card-header">{name}</h2>
        <dl className="description-list">
          <div className="description-wrapper">
            <dt className="description-list-term">Diameter</dt>
            <dd className="description-list-description">{diameter}</dd>
          </div>
          <div className="description-wrapper">
            <dt className="description-list-term">Rotation Period</dt>
            <dd className="description-list-description">
              {rotation_period}
            </dd>
          </div>
          <div className="description-wrapper">
            <dt className="description-list-term">Orbital Period</dt>
            <dd className="description-list-description">
              {orbital_period}
            </dd>
          </div>
          <div className="description-wrapper">
            <dt className="description-list-term">Gravity</dt>
            <dd className="description-list-description">{gravity}</dd>
          </div>
          <div className="description-wrapper">
            <dt className="description-list-term">Population</dt>
            <dd className="description-list-description">{population}</dd>
          </div>
          <div className="description-wrapper">
            <dt className="description-list-term">Climate</dt>
            <dd className="description-list-description">{climate}</dd>
          </div>
          <div className="description-wrapper">
            <dt className="description-list-term">Terrain</dt>
            <dd className="description-list-description">{terrain}</dd>
          </div>
          <div className="description-wrapper">
            <dt className="description-list-term">Surface Water</dt>
            <dd className="description-list-description">
              {surface_water}
            </dd> 
          </div>
        </dl>
      </div>
    </div>
  )
}

export default StarWarsPlanetCard
