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
          <TreeSection title="Understanding">
          <IconContainer>
                <Icon img='typing/home/start' name='Get Started' direction='right'>
                    <IconDropdown title="Get Started">
                    <DropdownItem src="learn/typing/home/start" title="Expectations" link="/typing/expectations" />
                    </IconDropdown>
                </Icon>
          </IconContainer>
          <IconContainer>
          <Icon img='typing/home/compass' name='Principles' direction='right'>
                    <IconDropdown title="Principles">
                    <DropdownItem src="learn/typing/home/shield" title="Truth" link="/typing/expectations" />
                    <DropdownItem src="learn/typing/home/arrow" title="Purpose" link="/typing/expectations" />
                    </IconDropdown>
                </Icon>
                <Icon img='typing/home/flame' name='Obstacles' direction='left'>
                    <IconDropdown title="Obstacles">
                    <DropdownItem src="learn/typing/home/start" title="Expectations" link="/typing/expectations" />
                    </IconDropdown>
                </Icon>
          </IconContainer>
          </TreeSection>
          <TreeSection title="Methodology">
          <IconContainer>
                <Icon img='typing/home/method' name='Basics' direction='right'>
                    <IconDropdown title="Basics">
                    <DropdownItem src="learn/typing/home/start" title="Expectations" link="/typing/expectations" />
                    <DropdownItem src="learn/typing/home/guide" title="The Journey" link="/typing/expectations" />
                    </IconDropdown>
                </Icon>
          </IconContainer>
          <IconContainer>
                <Icon img='typing/home/material' name='Material' direction='right'>
                    <IconDropdown title="Material">
                    <DropdownItem src="learn/typing/home/start" title="Expectations" link="/typing/expectations" />
                    <DropdownItem src="learn/typing/home/guide" title="The Journey" link="/typing/expectations" />
                    </IconDropdown>
                </Icon>
                <Icon img='typing/home/choice' name='Conclusion' direction='left'>
                    <IconDropdown title="Conclusion">
                    <DropdownItem src="learn/typing/home/start" title="Expectations" link="/typing/expectations" />
                    <DropdownItem src="learn/typing/home/guide" title="The Journey" link="/typing/expectations" />
                    </IconDropdown>
                </Icon>
          </IconContainer>
          </TreeSection>
          <TreeSection title="Approaches">
              <IconContainer>
                <Icon img='typing/home/triangulation' name='Triangulation' direction='right' href="/typing/triangulation" />
              </IconContainer>
              <IconContainer>
                <Icon img='typing/home/teams' name='Typing Teams' direction='right' href="/typing/typing_teams" />
                <Icon img='typing/home/d&s' name='Official Typing' direction='left' href="/typing/d&s_typing" />
              </IconContainer>
          </TreeSection>
          <TreeSection title="Post-Typing">
              <IconContainer>
              <Icon img='typing/home/sun' name='After Typing' direction='right'>
                    <IconDropdown title="After Typing">
                    <DropdownItem src="learn/typing/home/sun" title="Expectations" link="/typing/expectations" />
                    </IconDropdown>
             </Icon>
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
          <LearnButton title="Understanding">
            Understand the psychological aspects of the typing process.
          </LearnButton>
          <LearnButton title="Methodology">
            Nail down the right methods and techniques for an accurate typing.
          </LearnButton>
          <LearnButton title="Approaches">
            Turn knowledge into action with practical solutions to getting typed.
          </LearnButton>
          <LearnButton title="Post-Typing">
            What comes after determining your type, and what it means to you.
          </LearnButton>
          </LearnButtons>
      </LearnLayout>
      </div>
  );
}

export default Typing;