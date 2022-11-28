import React from 'react'
import { FixedSizeList as List } from 'react-window'
import InfiniteLoader from 'react-window-infinite-loader'
import AutoSizer from 'react-virtualized-auto-sizer'
import useSWRInfinite from 'swr/infinite'

import StarWarsCharacterCard from '../src/components/characters/StarWarsCharacterCard'
import fetch from '../src/utils/fetch'
import { StarWarsCharacters } from '../src/types/types'
import Image from 'next/image'

const InfiniteWrapper = ({
  hasNextPage,

  isNextPageLoading,

  items,

  loadNextPage,
}: {
  hasNextPage: boolean
  isNextPageLoading: boolean
  items: any[]
  loadNextPage: () => {boolean}
}) => {
  const itemCount = hasNextPage ? items.length + 1 : items.length
  const loadMoreItems = isNextPageLoading ? () => null : loadNextPage
  const isItemLoaded = (index: number) => !hasNextPage || index < items.length
  const [switchImageSrc, setSwitchImgSrc] = React.useState('NEXT')

  const Item = ({
    index,
    style,
  }: {
    index: number
    style: React.CSSProperties
  }) => {
    if (!isItemLoaded(index)) {
      return <div style={style}>Loading...</div>
    } else {
      const starWarsCharacterData = items[index]
      return (
        <div style={style}>
          <StarWarsCharacterCard
            isNextImage={switchImageSrc === 'NEXT'}
            {...starWarsCharacterData}
          ></StarWarsCharacterCard>
        </div>
      )
    }
  }

  return (
    <div className="AutoSizeWrapper">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="button"
          onClick={() => {
            if (switchImageSrc === 'STANDARD') {
              setSwitchImgSrc('NEXT')
            } else {
              setSwitchImgSrc('STANDARD')
            }
          }}
        >
          {switchImageSrc}
        </button>
      </div>

      <AutoSizer className="AutoSizer disableHeight">
        {({ width }: { width: number }) => (
          <InfiniteLoader
            isItemLoaded={isItemLoaded}
            itemCount={itemCount}
            loadMoreItems={loadMoreItems}
          >
            {({ onItemsRendered, ref }) => (
              <List
                height={800}
                itemCount={itemCount}
                itemSize={300}
                layout="horizontal"
                onItemsRendered={onItemsRendered}
                ref={ref}
                width={width}
              >
                {Item}
              </List>
            )}
          </InfiniteLoader>
        )}
      </AutoSizer>
    </div>
  )
}

const addImageToData = (data: StarWarsCharacters) => {
  return data.results.map((resultData, index) => {
    const imageSource =  `/images/starwars/characters/${index}.jpg`
    return { ...resultData, imageSrc: imageSource }
  })
}

const MAX_PAGE = 100
const MAX_SIZE = 6
const START_PAGE = 1

const App = () => {
  const { data, error, size, setSize } = useSWRInfinite(
    (index) => `https://swapi.dev/api/people/?page=${index + START_PAGE}`,
    fetch,
    {
      revalidateOnFocus: false,
    }
  )
  const starWarsCharacters = data
    ? [].concat(
        ...data.map((data) => {
          return addImageToData(data)
        })
      )
    : []
  const isLoadingInitialData = !data && !error
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined')
  const isEmpty = data?.[0]?.length === 0
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < MAX_PAGE)

  if (error) return <div>failed to load {JSON.stringify(error)}</div>

  return (
    <div>
      <main>
        <div className="App">
        <InfiniteWrapper
            hasNextPage={!isReachingEnd}
            isNextPageLoading={isLoadingMore}
            items={starWarsCharacters}
            loadNextPage={() =>
              setSize((size) => {
                if (size === MAX_SIZE) {
                  return 1
                } else {
                  return size + 1
                }
              })
            }
          ></InfiniteWrapper>
        </div>
      </main>
    </div>
  )
}

export const Home = (): JSX.Element => <App></App>

export default Home
