import { createMetaData } from "@lib/metadata";
import { LearnLayout, LearnButtons, LearnButton, LearnTree, TreeSection, IconContainer, Icon, IconDropdown, DropdownItem } from '@components/learn_tree';

export const metadata = createMetaData({
  title: 'Typing',
  description: 'Learn all there is to typing yourself and others',
  image: '/embed/typing.png',
  url: '/typing/typing',
});

function Typing() {
  return (
    <div className="main">
      <LearnLayout>
          <LearnTree>
          <TreeSection title="Learn-the-Method">
              <IconContainer>
                <Icon img='typing/home/guide' name='Your Type' direction='right' href="/typing/your_type" />
                <Icon img='typing/home/method' name='Typing Others' direction='right' href="/typing/typing_method" />
              </IconContainer>
          </TreeSection>
          <TreeSection title="Pick-an-Approach">
              <IconContainer>
                <Icon img='typing/home/triangulation' name='Triangulation' direction='right' href="/typing/triangulation" />
              </IconContainer>
              <IconContainer>
                <Icon img='typing/home/teams' name='Typing Teams' direction='right' href="/typing/typing_teams" />
                <Icon img='typing/home/d&s' name='Official Typing' direction='left' href="/typing/d&s_typing" />
              </IconContainer>
          </TreeSection>
          </LearnTree>
          <LearnButtons>
          <div className='learn_system learn_system-learnbtn learn_system-yellow'>
              <div className='learn_system-tag'>Introduction Course</div>
              <div className='learn_system-title'>Intro to Typing</div>
              <div className='learn_system-description'>Typing" is how you find someone's personality type. Get introduced to how you type accurately and efficiently.</div>
              <div className='learn_system-image'>
              <img src='/img/learn/objective_typing.png' />
              </div>
          </div>
          <LearnButton title="Learn-the-Method">
            Learn how to go through typing yourself & how to type others accurately.
          </LearnButton>
          <LearnButton title="Pick-an-Approach">
            Turn knowledge into action and start tracking your type objectively.
          </LearnButton>
          </LearnButtons>
      </LearnLayout>
      </div>
  );
}

export default Typing;