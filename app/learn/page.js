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
          Academy Courses
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
              <IntroCourse color="green" title="What is Personality?">
                Unfold the meaning of personality & how it impacts everything in your life.
                <img src='/img/learn/intro_logo.png' />
              </IntroCourse>
            </Link>
            <Link href="/learn">
              <IntroCourse color="yellow" title="Learn to Type Objectively">
                Learn to the best methods for objectively tracking personality type.
                <img src='/img/learn/objective_typing.png' />
              </IntroCourse>
            </Link>
            <Link href="/ops">
              <TypologySystem title="Objective Personality" extraTags={['ops', 'op']}>
                Uncover your default wiring through a spectrum of up to 2048 personality codes. 
                <img src='/img/learn/ops_logo.png' />
              </TypologySystem>
            </Link>
            <Link href="/learn">
              <TypologySystem color="pink" title="Bycognition Direct">
                <span>
                  A project to learn about the impulsive processes which form personality.
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