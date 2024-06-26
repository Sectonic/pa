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
      <div className="banner banner_blue banner_search">
        <div className='banner_logo'>
            <div className="banner_icon">
            <img
                src='/img/main/learn.png'
            />
            </div>
            <div>
                <h1 className='banner_text blue'>Learn Courses</h1>
            </div>
        </div>
        {/* <LearnSearch /> */}
      </div>
      <div className='learn_systems'>
        {!searchParams.query ? (
          <div className="section_title">Course Catalog</div>
        ) : (
          <div className="learn_systems-result">Result for "{searchParams.query}"</div>
        )}
        <div className="learn_systems-container">
          <SearchContainer query={searchParams.query}>
            <Link href="/ops">
              <TypologySystem title="Objective Personality" extraTags={['ops', 'op']} inProgress={true}>
                Uncover your default wiring through a spectrum of up to 2048 personality codes. 
                <img src='/img/learn/ops_logo.png' />
              </TypologySystem>
            </Link>
            <Link href="/typing">
              <IntroCourse color="yellow" title="Objective Typing" inProgress={true}>
                Arm yourself with the right tools and knowledge to type yourself using principles of objectivity!
                <img src='/img/learn/objective_typing.png' />
              </IntroCourse>
            </Link>
            <IntroCourse color="green" title="Discover Personality" comingSoon={true}>
                Unfold the meaning of personality & how it impacts everything in your life.
                <img src='/img/learn/intro_logo.png' />
            </IntroCourse>
            <IntroCourse color="green" title="Typing Others" comingSoon={true}>
                Disover how to objectively track personality type with scientific principles!
                <img src='/img/learn/typing_others.png' />
            </IntroCourse>
            <IntroCourse color="yellow" title="Improve With Type!" comingSoon={true}>
                Turn knowledge into action by learning to leverage the OP Code in your life!
                <img src='/img/learn/improve.png' />
            </IntroCourse>
            <TypologySystem color="pink" title="Bycognition Direct" comingSoon={true}>
                <span>
                  A project to learn about the impulsive processes which form personality.
                </span>
                <img src='/img/learn/bycog_logo.png' />
            </TypologySystem>
          </SearchContainer>
        </div>
      </div>
    </div>
  );
}