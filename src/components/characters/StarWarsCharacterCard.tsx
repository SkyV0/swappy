import { StarWarsCharacter } from "../../types/types"
import React from 'react'
import Image from 'next/image'

const StarWarsCharacterCard = (
  props: StarWarsCharacter & { isNextImage: boolean }
) => {
  const {
      name,
      birth_year,
      eye_color,
      gender,
      hair_color,
      height,
      mass,
      skin_color,
      homeworld,
      films,
      species,
      starships,
      vehicles,
      url,
      created,
      edited,
      imageSrc,
      isNextImage,
  }  = props

    const createdFormattedDate = new Date(created).toLocaleDateString()
    const editedFormattedDate = new Date(edited).toLocaleDateString()

    return (
        <div className="card">
        {isNextImage ? (
          <Image
            src={imageSrc}
            alt={`${name} character`}
            height={250}
            width={250}
            layout="fixed"
            objectFit="cover"
            loading="eager"
            priority
          />
        ) : (
          <Image className="card-image"
            alt={`${name} character`}
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
                        <dt className="description-list-term">Birth Year</dt>
                        <dd className="description-list-description">{birth_year}</dd>
                    </div>
                    <div className="description-wrapper">
                        <dt className="description-list-term">Eye Color</dt>
                        <dd className="description-list-description">{eye_color}</dd>
                    </div>
                    <div className="description-wrapper">
                        <dt className="description-list-term">Gender </dt>
                        <dd className="description-list-description">{gender}</dd>
                    </div>
                    <div className="description-wrapper">
                        <dt className="description-list-term">Hair Color</dt>
                        <dd className="description-list-description">{hair_color}</dd>
                    </div>
                    <div className="description-wrapper">
                        <dt className="description-list-term">Height</dt>
                        <dd className="description-list-description">{height}</dd>
                    </div>
                    <div className="description-wrapper">
                        <dt className="description-list-term">Mass</dt>
                        <dd className="description-list-description">{mass}</dd>
                    </div>
                    <div className="description-wrapper">
                        <dt className="description-list-term">Skin Color</dt>
                        <dd className="description-list-description">{skin_color}</dd>
                    </div>
                    <div className="description-wrapper">
                        <dt className="description-list-term">Homeworld</dt>
                        <dd className="description-list-description">{homeworld}</dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}

export default StarWarsCharacterCard;


                       