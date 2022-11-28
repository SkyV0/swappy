import { ValueOf } from "next/dist/shared/lib/constants"

export interface StarWarsPlanets {
    count: number
    next: string
    previous: any
    results: StarWarsPlanet[]
}


export interface StarWarsCharacters {
    count: number
    next: string
    previous: any
    results: StarWarsCharacter[]
}
  
export interface LayoutProps {
    title: string;
    children: React.ReactNode;  
}
  
export interface FilterSearchProps {
    value?: string;
    onSearch: (value: string) => void;
    placeholder?: string;
} 

export interface SeachBarProps {
    filter: string;
    setFilter: (value: string) => void;
}

export interface NavBarProps {
    Children?: React.ReactNode;
}