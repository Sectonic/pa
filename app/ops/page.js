import { LearnLayout, LearnButtons, LearnButton, LearnTree, TreeSection, IconContainer, Icon, IconDropdown, DropdownItem } from '@components/learn_tree';
import { createMetaData } from "@lib/metadata";

export const metadata = createMetaData({
  title: 'Learn OPS',
  description: 'Learn OPS through this course from beginner to advanced',
  image: '/embed/learn.png',
  url: '/ops',
});

export default function OPS() {

    return (
        <div className="main">
        <LearnLayout>
            <LearnTree>
            <TreeSection title="First-Steps">
                <IconContainer>
                    <Icon img='ops/home/start' name='Start' direction='right'>
                        <IconDropdown title="Start">
                            <DropdownItem src="learn/ops/home/intro" title="Introduction" link="/ops/intro" />
                            <DropdownItem src="learn/ops/home/purpose" title="Purpose of OPS" link="/ops/purpose" />
                            <DropdownItem src="learn/ops/home/objective_method" title="Objective Method" link="/ops/objective_method" />
                        </IconDropdown>
                    </Icon>
                </IconContainer>
            </TreeSection>
            <TreeSection title="Fundamentals">
                <IconContainer>
                    <Icon img='ops/home/savior_demon' name='Savior & Demon' direction='right'>
                        <IconDropdown title="Savior & Demon">
                        <DropdownItem src="learn/ops/home/savior_demon" title="Overview" link="/ops/savior_demon" />
                        <DropdownItem src="learn/ops/home/action_trait" title="Action vs Trait" link="/ops/action_trait" />
                        </IconDropdown>
                    </Icon>
                </IconContainer>
                <IconContainer>
                    <Icon img='ops/home/human_needs' name='Human Needs' direction='right'>
                        <IconDropdown title="Human Needs">
                        <DropdownItem src="learn/ops/home/human_needs" title="Overview" link="/ops/human_needs" />
                        </IconDropdown>
                    </Icon>
                    <Icon img='ops/home/letters' name='Letters' direction='left'>
                        <IconDropdown title="Letters">
                        <DropdownItem src="learn/ops/home/letters" title="Overview" link="/ops/letters" />
                        </IconDropdown>
                    </Icon>
                </IconContainer>
                <IconContainer>
                    <Icon img='ops/home/functions' name='Functions' direction='right'>
                        <IconDropdown title="Functions">
                        <DropdownItem src="learn/ops/home/functions" title="Overview" link="/ops/functions" />
                        </IconDropdown>
                    </Icon>
                </IconContainer>
            </TreeSection>
            <TreeSection title="Intermediate">
                <IconContainer>
                    <Icon img='ops/home/animals' name='Animals' direction='right'>
                        <IconDropdown title="Animals">
                        <DropdownItem src="learn/ops/home/animals" title="Overview" link="/ops/animals" />
                        </IconDropdown>
                    </Icon>
                </IconContainer>
                <IconContainer>
                    <Icon img='ops/home/modalities' name='Modalities' direction='right'>
                        <IconDropdown title="Modalities">
                        <DropdownItem src="learn/ops/home/modalities" title="Masc vs Fem" link="/ops/modalities" />
                        </IconDropdown>
                    </Icon>
                </IconContainer>
            </TreeSection>
            <TreeSection title="Advanced">
                <IconContainer>
                    <Icon img='ops/home/extroversion' name='Energy Spectrum' direction='right'>
                        <IconDropdown title="Energy Spectrum">
                        <DropdownItem src="learn/ops/home/extroversion" title="Extroversion" link="/ops/extroversion" />
                        </IconDropdown>
                    </Icon>
                    <Icon img='ops/home/social' name='Social Hierarchy' direction='left'>
                        <IconDropdown title="Social Hierarchy">
                        <DropdownItem src="learn/ops/home/social" title="Overview" link="/ops/social" />
                        </IconDropdown>
                    </Icon>
                </IconContainer>
                <IconContainer>
                    <Icon img='ops/home/advanced' name='Concept Combos' direction='right'>
                        <IconDropdown title="Concept Combos">
                        <DropdownItem src="learn/ops/home/animal_modalities" title="Animal Modalities" link="/ops/animal_modalities" />
                        <DropdownItem src="learn/ops/home/quadras" title="Quadras" link="/ops/quadras" />
                        </IconDropdown>
                    </Icon>
                </IconContainer>
            </TreeSection>
            </LearnTree>
            <LearnButtons>
                <div className='learn_system learn_system-learnbtn'>
                    <div className='learn_system-tag'>Typology System</div>
                    <div className='learn_system-title'>Objective Personality</div>
                    <div className='learn_system-description'>A system of over 2048 combinations of personality. It aims to uncover default wirings for growth.</div>
                    <div className='learn_system-image'>
                    <img src='/img/learn/ops_logo.png' />
                    </div>
                </div>
                <LearnButton title="First-Steps">
                    New to OPS or personality theory as a whole? 
                    Here you'll find the first few pieces to the puzzle.
                </LearnButton>
                <LearnButton title="Fundamentals">
                    The first pillars of OPS. Here you'll find the basic concepts the entire system stands on.
                    The spectrum of personality is split into 32 types.
                </LearnButton>
                <LearnButton title="Intermediate">
                    Concepts that layer on top of the fundamentals to unfold the type code to track 
                    personality on a spectrum of 512 types.
                </LearnButton>
                <LearnButton title="Advanced">
                    Concepts that tie multiple aspects of OPS together to further unfold the personality spectrum 
                    through all the binary coins.
                </LearnButton>
            </LearnButtons>
        </LearnLayout>
        </div>
    );
}