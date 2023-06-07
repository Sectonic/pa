import Link from "next/link";
import { SearchContainer, IntroCourse, TypologySystem } from "@components/search";
import { createMetaData } from "@lib/metadata";
import { LearnSearch } from "./learnSearch";

export const metadata = createMetaData({
  title: 'Learn',
  image: '/embed/learn.png',
  url: '/learn'
});

export default function Learn({ searchParams }) {
  return (
    <div className="main min-box">
      <div className="search_banner">
        <div className="search_banner-title">
          Learn Typology
        </div>
        <div className="search_banner-subtitle">
          Explore the courses and systems below made to be feasible and comprehensive for your learning experience.
        </div>
        <LearnSearch />
      </div>
      <div className='learn_systems'>
        {!searchParams.query ? (
          <div className="learn_systems-title">Featured</div>
        ) : (
          <div className="learn_systems-result">Result for "{searchParams.query}"</div>
        )}
        <div className="learn_systems-container">
          <SearchContainer query={searchParams.query}>
            <Link href="/learn">
              <IntroCourse color="green" title="Intro to Typology">
                What is Typology? Get introduced to why people categorize personality and what are the benefits.
                <img src='/img/learn/intro_logo.png' />
              </IntroCourse>
            </Link>
            <Link href="/learn">
              <IntroCourse color="yellow" title="Intro to Typing">
                "Typing" is how you find someone's personality type. Get introduced to how you type accurately and efficiently.
                <img src='/img/typing/home/target.png' />
              </IntroCourse>
            </Link>
            <Link href="/ops">
              <TypologySystem title="Objective Personality" extraTags={['ops', 'op']}>
                A system of over 2048 combinations of personality. It aims to uncover default wirings for growth.
                <img src='/img/learn/ops_logo.webp' />
              </TypologySystem>
            </Link>
            <Link href="/learn">
              <TypologySystem color="pink" title="BYCOG Direct">
                <span>
                Each person has an impulsive process they use all the time. <br/><br/>
                BYCOG Direct is a project to learn about these processes and grow a community exploring this topic.
                </span>
                <img src='/img/learn/bycog_logo.png' />
              </TypologySystem>
            </Link>
          </SearchContainer>
        </div>
      </div>
    </div>
  );
}