import { LearnLayout, LearnButtons, LearnButton, LearnTree, TreeSection, IconContainer, Icon, IconDropdown, DropdownItem } from '../../components/learn_tree';

function Learn() {

    return (
        <div className="main">
        <LearnLayout>
            <LearnTree>
            <TreeSection title="First-Steps">
                <IconContainer>
                <Icon img='start' name='Start'>
                    <IconDropdown title="Start">
                    <DropdownItem src="learn/home/start" title="Overview" link="start" />
                    <DropdownItem src="learn/home/typology_intro" title="Personality Theory" link="typology_intro" />
                    <DropdownItem src="learn/home/ops_intro" title="Objective Personality" link="ops_intro" />
                    </IconDropdown>
                </Icon>
                </IconContainer>
            </TreeSection>
            <TreeSection title="Fundamentals">
                <IconContainer>
                <Icon img='savior_demon' name='Savior & Demon'>
                    <IconDropdown title="Savior & Demon">
                    <DropdownItem src="learn/home/savior_demon" title="Overview" link="savior_demon" />
                    <DropdownItem src="learn/home/action_trait" title="Action vs Trait" link="action_trait" />
                    </IconDropdown>
                </Icon>
                </IconContainer>
                <IconContainer>
                <Icon img='human_needs' name='Human Needs'>
                    <IconDropdown title="Human Needs">
                    <DropdownItem src="learn/home/human_needs" title="Overview" link="human_needs" />
                    </IconDropdown>
                </Icon>
                <Icon img='letters' name='Letters'>
                    <IconDropdown title="Letters">
                    <DropdownItem src="learn/home/letters" title="Overview" link="letters" />
                    </IconDropdown>
                </Icon>
                </IconContainer>
                <IconContainer>
                <Icon img='functions' name='Functions'>
                    <IconDropdown title="Functions">
                    <DropdownItem src="learn/home/functions" title="Overview" link="functions" />
                    </IconDropdown>
                </Icon>
                </IconContainer>
            </TreeSection>
            <TreeSection title="Intermediate">
                <IconContainer>
                <Icon img='animals' name='Animals'>
                    <IconDropdown title="Animals">
                    <DropdownItem src="learn/home/animals" title="Overview" link="animals" />
                    </IconDropdown>
                </Icon>
                </IconContainer>
                <IconContainer>
                <Icon img='modalities' name='Modalities'>
                    <IconDropdown title="Modalities">
                    <DropdownItem src="learn/home/modalities" title="Masc vs Fem" link="modalities" />
                    </IconDropdown>
                </Icon>
                </IconContainer>
            </TreeSection>
            <TreeSection title="Advanced">
                <IconContainer>
                <Icon img='extroversion' name='Energy Spectrum'>
                    <IconDropdown title="Energy Spectrum">
                    <DropdownItem src="learn/home/extroversion" title="Extroversion" link="extroversion" />
                    </IconDropdown>
                </Icon>
                <Icon img='social' name='Social Hierarchy'>
                    <IconDropdown title="Social Hierarchy">
                    <DropdownItem src="learn/home/social" title="Overview" link="social" />
                    </IconDropdown>
                </Icon>
                </IconContainer>
                <IconContainer>
                <Icon img='advanced' name='Concept Combos'>
                    <IconDropdown title="Concept Combos">
                    <DropdownItem src="learn/home/animal_modalities" title="Animal Modalities" link="animal_modalities" />
                    <DropdownItem src="learn/home/quadras" title="Quadras" link="quadras" />
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
                <img src='/img/learn/home/ops_logo.webp' />
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

export default Learn;