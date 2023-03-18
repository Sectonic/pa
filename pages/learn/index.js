import Link from 'next/link';
import { IconContainer, Icon, IconDropdown, DropdownItem } from '../../components/learn_icons';

function give_trees() {
  return ["intro", "fundamentals" , "basic", "advanced"];
}

function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  );
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

function change_btns(curr_section, other_sections) {
  if (window.innerWidth > 1200) {
    for (let i = 0; i < other_sections.length; i++) {
      let btn = document.getElementById(`${other_sections[i]}_btn`);
      if (btn.className !== "section_button_small") {
        btn.className = "section_button_small";
        var collection = btn.getElementsByTagName("*");
        collection[0].className = "button-title-container_small";
        collection[1].className = "button_send_small";
        collection[3].className = "button-title_small";
        collection[4].className = "button_text_small";
        collection[5].className = "button_infos_small";
      }
    }
  
    var current_btn = document.getElementById(`${curr_section}_btn`);
    current_btn.className = "section_button";
    var current_collection = current_btn.getElementsByTagName("*");
    current_collection[0].className = "button-title-container";
    current_collection[1].className = "button_send";
    current_collection[3].className = "button-title";
    current_collection[4].className = "button_text";
    current_collection[5].className = "button_infos";
  }
}

function handleScroll() {
  var scrollTarget = document.getElementById("tree");
  var basic = document.getElementById("basic");
  var intro = document.getElementById("intro");
  var fundamentals = document.getElementById("fundamentals");
  var advanced = document.getElementById("advanced");
  if (intro) {
    var new_trees = give_trees();
    var picked_section = "idk";
    if (
      scrollTarget.scrollHeight - scrollTarget.scrollTop ===
      scrollTarget.clientHeight
    ) {
      new_trees.splice(new_trees.indexOf(advanced.id), 1);
      picked_section = advanced.id;
    } else {
      if (basic.getBoundingClientRect().y < 200 && checkVisible(basic)) {
        new_trees.splice(new_trees.indexOf(basic.id), 1);
        picked_section = basic.id;
      } else if (fundamentals.getBoundingClientRect().y < 200 && checkVisible(fundamentals)) {
        new_trees.splice(new_trees.indexOf(fundamentals.id), 1);
        picked_section = fundamentals.id;
      } else if (intro.getBoundingClientRect().y < 200 && checkVisible(intro)) {
        new_trees.splice(new_trees.indexOf(intro.id), 1);
        picked_section = intro.id;
      } else if (
        advanced.getBoundingClientRect().y < 500 &&
        checkVisible(advanced)
      ) {
        new_trees.splice(new_trees.indexOf(advanced.id), 1);
        picked_section = advanced.id;
      }
    }
    change_btns(picked_section, new_trees);
  }
}

async function scrollTree(scrollID) {
  scrollID.scrollIntoView({
    behavior: "smooth",
  });
  setTimeout(function() {
    document.getElementById("intro_closed").id = "intro";
    document.getElementById("fundamentals_closed").id = "fundamentals";
    document.getElementById("basic_closed").id = "basic";
    document.getElementById("advanced_closed").id = "advanced";
  }, 700);
}

async function changeTree(section) {
  if (document.getElementById("intro_closed") == null) {
    var tree = document.getElementById("tree");
    var new_trees = give_trees();
    new_trees.splice(new_trees.indexOf(section), 1);
    document.getElementById("intro").id = "intro_closed";
    document.getElementById("fundamentals").id = "fundamentals_closed";
    document.getElementById("basic").id = "basic_closed";
    document.getElementById("advanced").id = "advanced_closed";

    await scrollTree(tree.querySelector(`#${section + "_closed"}`));

    change_btns(section, new_trees);
  }
}

function Learn() {
  return (
    <div className="main">
      <div className="learn_section">
        <div className="section_map" id="tree" onScroll={handleScroll}>
          <div className="section_map-space">
            <div id="intro">
              <div className="section_top">First Steps</div>
              <IconContainer>
                <Icon img='start' name='Start'>
                  <IconDropdown title="Start">
                    <DropdownItem label="I" title="Start" link="start" />
                    <DropdownItem label="II" title="Start" link="start" />
                    <DropdownItem label="III" title="Start" link="start" />
                    <DropdownItem label="IV" title="Start" link="start" />
                  </IconDropdown>
                </Icon>
              </IconContainer>
              <IconContainer>
                <Icon img='typology_intro' name='Personality Theory' />
                <Icon img='ops_intro' name='Objective Personality' />
              </IconContainer>
            </div>
            <div id="fundamentals">
              <div className="section_top">Fundamentals</div>
              <IconContainer>
                <Icon img='savior_demon' name='Savior & Demon' />
              </IconContainer>
              <IconContainer>
                <Icon img='human_needs' name='Human Needs' />
                <Icon img='letters' name='Letters' />
              </IconContainer>
              <IconContainer>
                <Icon img='functions' name='Functions'>
                  <IconDropdown title="Functions">
                    <DropdownItem src="icons/Functions/ne" title="Ne" link="functions" />
                    <DropdownItem src="icons/Functions/se" title="Se" link="functions" />
                    <DropdownItem src="icons/Functions/ni" title="Ni" link="functions" />
                    <DropdownItem src="icons/Functions/si" title="Si" link="functions" />
                  </IconDropdown>
                </Icon>
              </IconContainer>
              <IconContainer>
                <Icon img='function_stack' name='Function Stack' />
                <Icon img='observer_decider' name='Observer & Decider' />
              </IconContainer>
              <IconContainer>
                <Icon img='action_trait' name='Actions' />
              </IconContainer>
            </div>
            <div id="basic">
              <div className="section_top">Intermediate</div>
              <IconContainer>
                <Icon img='animals' name='Animals' />
                <Icon img='animal_stack' name='Animal Stack' />
              </IconContainer>
              <IconContainer>
                <Icon img='modalities' name='Modalities' />
                <Icon img='modality_combos' name='Modality Combos' />
              </IconContainer>
            </div>
            <div id="advanced">
              <div className="section_top">Advanced</div>
              <IconContainer>
                <Icon img='extroversion' name='Energy Spectrum' />
              </IconContainer>
              <IconContainer>
                <Icon img='animal_modalities' name='Animal Modalities' />
                <Icon img='quadras' name='Quadras' />
              </IconContainer>
              <IconContainer>
                <Icon img='social' name='Social Hierarchy' />
              </IconContainer>
            </div>
          </div>
        </div>
      </div>
      <div className="section_buttons" id="section_btns">
        <div className="section_buttons-container">
        <div
            className="section_button"
            onClick={() => changeTree("intro")}
            id="intro_btn"
          >
            <div className="button-title-container">
              <div className="button_send">
                <img src={"/img/main/section_btn.png"} alt=""  />
              </div>
              <div className="button-title">First Steps</div>
            </div>
            <div className="button_text">
            New to OPS or personality theory as a whole? 
            Here you'll find the first few pieces to the puzzle.
            </div>
            <div className="button_infos">
              <div className="button_info"></div>
              <div className="button_info"></div>
            </div>
          </div>
          <div
            className="section_button_small"
            onClick={() => changeTree("fundamentals")}
            id="fundamentals_btn"
          >
            <div className="button-title-container_small">
              <div className="button_send_small">
                <img src={"/img/main/section_btn.png"} alt=""  />
              </div>
              <div className="button-title_small">Fundamentals</div>
            </div>
            <div className="button_text_small">
            The first pillars of OPS. Here you'll find the basic concepts the entire system stands on.
            The spectrum of personality is split into 32 types.
            </div>
            <div className="button_infos">
              <div className="button_info"></div>
              <div className="button_info"></div>
            </div>
          </div>
          <div
            className="section_button_small"
            onClick={() => changeTree("basic")}
            id="basic_btn"
          >
            <div className="button-title-container_small">
              <div className="button_send_small">
                <img src={"/img/main/section_btn.png"} alt=""  />
              </div>
              <div className="button-title_small">Intermediate</div>
            </div>
            <div className="button_text_small">
            Concepts that layer on top of the fundamentals to unfold the type code to track 
            personality on a spectrum of 512 types.

            </div>
            <div className="button_infos_small">
              <div className="button_info"></div>
              <div className="button_info"></div>
            </div>
          </div>
          <div
            className="section_button_small"
            onClick={() => changeTree("advanced")}
            id="advanced_btn"
          >
            <div className="button-title-container_small">
              <div className="button_send_small">
                <img src={"/img/main/section_btn.png"} alt="" />
              </div>
              <div className="button-title_small">Advanced</div>
            </div>
            <div className="button_text_small">
            Concepts that tie multiple aspects of OPS together to further unfold the personality spectrum 
            through all the binary coins.
            </div>
            <div className="button_infos_small">
              <div className="button_info"></div>
              <div className="button_info"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learn;
