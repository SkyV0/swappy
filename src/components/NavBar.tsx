import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { SearchBar } from './SearchBar';
import { NavBarProps } from '../utils/interfaces';
import Image from 'next/image';

const NavBar:FC<NavBarProps> = ({children}) => {
    return (
        <>
        <div className="background-color-black height-100 width-100">
            <div className="height-100 width-100">
                <Image src="/images/star-wars-logo.svg" alt="Star Wars Logo" width={100} height={100} />
                 {children}
            </div>
        </div>
        </>
    );
}

export default NavBar;