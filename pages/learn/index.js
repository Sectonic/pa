import Link from "next/link";
import { SearchContainer, IntroCourse, TypologySystem } from "../../components/search";
import { useState, useRef } from 'react';
3
function Learn() {
  const search = useRef(null);
  const [query, setQuery] = useState("")

  const checkReset = (e) => {
    if (e.target.value == "") {
      setQuery("")
    }
  }

  return (
    <div className="main min-box">
      <div className="search_banner">
        <div className="search_banner-title">
          Learn Typology
        </div>
        <div className="search_banner-subtitle">
          Explore the courses and systems below made to be feasible and comprehensive for your learning experience.
        </div>
        <div className="search_banner-input">
          <input className="search_input" placeholder="Search catalog" ref={search} onChange={checkReset} />
          <div className="search_input-btn" onClick={() => setQuery(search.current.value)}>
            Find
          </div>
        </div>
      </div>
      <div className='learn_systems'>
        {query == "" ? (
          <div className="learn_systems-title">Featured</div>
        ) : (
          <div className="learn_systems-result">Result for "{query}"</div>
        )}
        <div className="learn_systems-container">
          <SearchContainer query={query}>
            <Link href="">
              <IntroCourse color="green" title="Intro to Typology">
                What is Typology? Get introduced to why people categorize personality and what are the benefits.
                <img src='/img/learn/home/intro_logo.png' />
              </IntroCourse>
            </Link>
            <Link href="">
              <IntroCourse color="yellow" title="Intro to Typing">
                "Typing" is how you find someone's personality type. Get introduced to how you type accurately and efficiently.
                <img src='/img/typing/home/target.png' />
              </IntroCourse>
            </Link>
            <Link href="/ops/learn">
              <TypologySystem title="Objective Personality" extraTags={['ops', 'op']}>
                A system of over 2048 combinations of personality. It aims to uncover default wirings for growth.
                <img src='/img/learn/home/ops_logo.webp' />
              </TypologySystem>
            </Link>
            <Link href="">
              <TypologySystem color="pink" title="ByCognition Direct">
                Known as "Bycog," its refined terms aims for accessibility and comprehension. 
                <img src='/img/main/logo.png' />
              </TypologySystem>
            </Link>
          </SearchContainer>
        </div>
      </div>
    </div>
  );
}

export default Learn;
