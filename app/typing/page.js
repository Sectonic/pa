import { createMetaData } from "@lib/metadata";
import { LearnLayout, LearnButtons, LearnButton, LearnTree, TreeSection, IconContainer, Icon, IconDropdown, DropdownItem } from '@components/learn_tree';
import { getCourseActivity } from "@lib/courses";

export const metadata = createMetaData({
  title: 'Typing',
  description: 'Learn all there is to typing yourself and others',
  image: '/embed/typing.png',
  url: '/typing/typing',
});

async function Typing() {
  const viewedPages = await getCourseActivity('typing');

  return (
    <div className="main">
      <LearnLayout viewedPages={viewedPages}>
          <LearnTree>
          <TreeSection title="Mentality">
          <IconContainer>
                <Icon img='typing/home/start' name='Get Started' direction='right'>
                    <IconDropdown title="Get Started">
                    <DropdownItem src="learn/typing/home/start" title="Expectations" link="/typing/expectations" />
                    <DropdownItem src="learn/typing/home/ribbon" title="A Better Way" link="/typing/better_way" />
                    </IconDropdown>
                </Icon>
          </IconContainer>
          <IconContainer>
          <Icon img='typing/home/compass' name='Mindset' direction='right'>
                    <IconDropdown title="Mindset">
                    <DropdownItem src="learn/typing/home/shield" title="Truth" link="/typing/truth" />
                    </IconDropdown>
                </Icon>
                <Icon img='typing/home/flame' name='Fallacies' direction='left'>
                    <IconDropdown title="Fallacies">
                    <DropdownItem src="learn/typing/home/flame" title="Psychology" link="/typing/psychology" />
                    <DropdownItem src="learn/typing/home/perception" title="Perception" link="/typing/perception" />
                    <DropdownItem src="learn/typing/home/identity" title="Identity" link="/typing/identity" />
                    <DropdownItem src="learn/typing/home/biases" title="Biases" link="/typing/biases" />
                    </IconDropdown>
                </Icon>
          </IconContainer>
          </TreeSection>
          <TreeSection title="Methodology">
            <IconContainer>
                  <Icon comingSoon={true} img='typing/home/material' name='Material' direction='right'>
                      <IconDropdown title="Material">
                      <DropdownItem src="learn/typing/home/start" title="Expectations" link="/typing/expectations" />
                      <DropdownItem src="learn/typing/home/guide" title="The Journey" link="/typing/expectations" />
                      </IconDropdown>
                  </Icon>
                  <Icon comingSoon={true} img='typing/home/method' name='Basics' direction='right'>
                      <IconDropdown title="Basics">
                      <DropdownItem src="learn/typing/home/start" title="Expectations" link="/typing/expectations" />
                      <DropdownItem src="learn/typing/home/guide" title="The Journey" link="/typing/expectations" />
                      </IconDropdown>
                  </Icon>
            </IconContainer>
          </TreeSection>
          <TreeSection title="Approaches">
              <IconContainer>
              <Icon img='typing/home/triangulation' name='Triangulation' direction='right'>
                    <IconDropdown title="Triangulation">
                    <DropdownItem src="learn/typing/home/triangulation" title="Triangulation" link="/typing/triangulation" />
                    </IconDropdown>
                </Icon>
              </IconContainer>
              <IconContainer>
              <Icon img='typing/home/teams' name='Typing Teams' direction='right'>
                    <IconDropdown title="Typing Teams">
                    <DropdownItem src="learn/typing/home/teams" title="Typing Teams" link="/typing/typing_teams" />
                    </IconDropdown>
                </Icon>
                <Icon img='typing/home/d&s' name='Paid Typings' direction='left'>
                    <IconDropdown title="Paid Typings">
                    <DropdownItem src="learn/typing/home/d&s" title="D&S Typing (OPS)" link="/typing/d&s_typing" />
                    </IconDropdown>
                </Icon>
              </IconContainer>
          </TreeSection>
          <TreeSection title="Post-Typing">
              <IconContainer>
              <Icon comingSoon={true} img='typing/home/sun' name='After Typing' direction='right'>
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
              <div className='learn_system-title'>Objective Typing</div>
              <div className='learn_system-description'>Arm yourself with the right tools and knowledge to type yourself using principles of objectivity!</div>
              <div className='learn_system-image'>
              <img src='/img/learn/objective_typing.png' />
              </div>
          </div>
          <LearnButton title="Mentality">
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