'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import { navLinks } from '../constants';

const Navbar = () => {
  const [stateSearch, setStateSearch] = useState(false);
  const [stateMenu, setStateMenu] = useState(false);
  const handleClickSearch = () => {
    setStateSearch((prev) => !prev);
    const input = document.getElementById('searchInput');
    input.focus();
    input.value = '';
  };
  const handleEnterPress = (event) => {
    if (event.key === 'Enter') {
      handleClickSearch();
    }
  };
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative z-30`}
    >
      <div className={`${styles.innerWidth} mx-auto flex justify-between`}>
        <div className="hidden justify-center absolute sm:flex">
          <img src="/search.svg" alt="search"
            className={`w-[24px] h-[24px] object-contain cursor-pointer animationInput ${stateSearch && 'activeInput'}`}
            onClick={handleClickSearch}
          />
          <input type="text" className={`${stateSearch ? 'inputBlock' : 'inputHidden'} input`}
            id="searchInput" onKeyDown={handleEnterPress}
          />
        </div>
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white sm:text-center sm:flex-grow">
          METAVERSUS
        </h2>
        <img src="/menu.svg" alt="menu"
          className="w-[24px] h-[24px] object-contain cursor-pointer"
          onClick={() => setStateMenu((prev) => !prev)}
        />
      </div>
      <div className={`${stateMenu ? 'menuBlock' : 'menuHidden'} absolute right-0 sm:right-36 rounded-[32px]
        border-[1px] border-[#6a6a6a] p-5`}
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.id} className="text-white uppercase mb-1 last:mb-0 hover:text-[#B0B0B0] transition-colors">
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};
export default Navbar;
