"use server";

import Stack from "./stack";
import Link from "next/link";
// import Image from "../../_components/image";
import { TypePopupClose } from "./typePopupClose";
import { getType } from "@lib/typesearch";

const TypePopupTemplate = ({ children }) => (
  <div className="popup_bg animate__animated animate__fadeIn">
    <div className="popup_main animate__animated animate__fade_in">
      <div className="popup_bottom"></div>
      {children}
    </div>
  </div>
)

export const PopupLoading = () => (
  <TypePopupTemplate>
    <div className='popup_loading'>
        <div>
          <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    </div>
  </TypePopupTemplate>
)

export async function TypePopup({ popup_id }) {

  const data = await getType(Number(popup_id));

  var animal_stack = [data.animal1, data.animal2, data.animal3, data.animal4]

  var double_animal = {
  'Blast': 'Consume',
  'Play': 'Sleep',
  'Consume': 'Blast',
  'Sleep': 'Play'
  }

  var decider_functions = ['fe', 'te', 'fi', 'ti'];
  // var observer_functions = ['ne', 'se', 'ni', 'si'];

  var function_options = {
  'Se': 'ni',
  'Ni': 'se',
  'Ne': 'si',
  'Si': 'ne',
  'Fi': 'te',
  'Fe': 'ti',
  'Ti': 'fe',
  'Te': 'fi'
  }

  var need_options = {
  'se': 'oe',
  'ni': 'oi',
  'ne': 'oe',
  'si': 'oi',
  'fi': 'di',
  'fe': 'de',
  'ti': 'di',
  'te': 'de'
  }

  var need_opposites = {
    'Oe': 'oi',
    'De': 'di',
    'Oi': 'oe',
    'Di': 'de'
  }

  var animal_options = {
  'oe': {
      'de': 'Play',
      'di': 'Consume'
  },
  'oi': {
      'de': 'Blast',
      'di': 'Sleep'
  },
  'de': {
      'oe': 'Play',
      'oi': 'Blast'
  },
  'di': {
      'oe': 'Consume',
      'oi': 'Sleep'
  }
  }

  var animal_axis = {
    'Blast': {
      'Se-Ni': 'ni',
      'Si-Ne': 'si',
      'Fe-Ti': 'fe',
      'Fi-Te': 'te'
    },
    'Play': {
      'Se-Ni': 'se',
      'Si-Ne': 'ne',
      'Fe-Ti': 'fe',
      'Fi-Te': 'te'
    },
    'Consume': {
      'Se-Ni': 'se',
      'Si-Ne': 'ne',
      'Fe-Ti': 'ti',
      'Fi-Te': 'fi'
    },
    'Sleep': {
      'Se-Ni': 'ni',
      'Si-Ne': 'si',
      'Fe-Ti': 'ti',
      'Fi-Te': 'fi'
    }
  }

  var animal_decider_observer = {
    'Blast': {
      'd': 'de',
      'o': 'oi'
    },
    'Play': {
      'd': 'de',
      'o': 'oe'
    },
    'Consume': {
      'd': 'di',
      'o': 'oe'
    },
    'Sleep': {
      'd': 'di',
      'o': 'oi'
    }
  }   

  var function1 = data.function1 ? data.function1.toLowerCase() : null;
  var function2 = data.function2 ? data.function2.toLowerCase() : null;
  var function3 = data.function2 ? function_options[data.function2].toLowerCase() : null;
  var function4 = data.function1 ? function_options[data.function1].toLowerCase() : null;

  var need1, need2, need3, need4;
  if (data.oD) {
    let observer = data.oD == "Observer";
    if (observer) {
      need1 = data.observerNeed ? data.observerNeed.toLowerCase() : null;
      need2 = data.deciderNeed ? data.deciderNeed.toLowerCase() : null;
      need3 = data.deciderNeed ? need_opposites[data.deciderNeed] : null;
      need4 = data.observerNeed ? need_opposites[data.observerNeed] : null;
    } else {
      need1 = data.deciderNeed ? data.deciderNeed.toLowerCase() : null;
      need2 = data.observerNeed ? data.observerNeed.toLowerCase() : null;
      need3 = data.observerNeed ? need_opposites[data.observerNeed] : null;
      need4 = data.deciderNeed ? need_opposites[data.deciderNeed] : null;
    }
  }

  var need_grant = [
    [need1, need2],
    [need2, need4],
    [need1, need3],
    [need3, need4]
  ]



  var jumper = false;
  // if (function1[1] === function2[1]) {
  //   function2 = function_options[data.function2].toLowerCase();
  //   function3 = data.function2.toLowerCase();
  //   jumper = true;
  // } 

  var functions = [function1, function2, function3, function4];

  var grant1 = function1 && function2 ? animal_options[need_options[function1]][need_options[function2]] : null;
  var grant2 = function2 && function4 ? animal_options[need_options[function2]][need_options[function4]] : null;
  var grant3 = function1 && function3 ? animal_options[need_options[function1]][need_options[function3]] : null;
  var grant4 = function3 && function4 ? animal_options[need_options[function3]][need_options[function4]] : null;
  var grant_funcs = {
  0: [function1, function2],
  1: [function2, function4],
  2: [function1, function3],
  3: [function3, function4],
  }
  var grants = [grant1, grant2, grant3, grant4];

  function checkDouble(animal) {
    let double_anim = double_animal[data.animal4];
    if (animal === double_anim) {
      return true;
    }
    else {
      return false;
    }
  }

  var decider_functions = ['fe', 'te', 'fi', 'ti'];

  var animal_details = []
  for (let i = 0; i < animal_stack.length; i++) {
    let curr_animal = animal_stack[i];
    if (curr_animal) {
      var anim_functions = []
      let decider_func = data.deciderAxis ? animal_axis[curr_animal][data.deciderAxis] : null;
      let observer_func = data.observerAxis ? animal_axis[curr_animal][data.observerAxis] : null;
      anim_functions.push(observer_func, decider_func);
      animal_details.push({
        modality:data[`${curr_animal.toLowerCase()}Modality`],
        functions: anim_functions
      });
    } else {
      animal_details.push(null);
    }
  }

  var stack_props = {data, need_options, functions, grant_funcs, decider_functions, animal_stack, grants, jumper, need_grant, animal_options};

  const handleAnimalFuncs = (funcs, index, animal_index) => {
    var other_index = index == 1 ? 1 : 0;
    let second_time = index == 1 ? true : false;
    var decider_observer = second_time ? 'd' : 'o';
    var decider_includes;
    var current_letter = second_time ? data.deciderLetter : data.observerLetter;
    if (funcs) {
      if (!funcs[index] && funcs[other_index]) {
        let other_decider_includes = decider_functions.includes(funcs[other_index]);
        decider_includes = !other_decider_includes;
      } else {
        decider_includes = decider_functions.includes(funcs[index]);
      }
      var location = second_time ? decider_includes : !decider_includes;
      var current_function = location ? funcs[index] : funcs[other_index];
      if (current_function) {
        return '/img/icons/Functions/' + current_function + '.png';
      } else {
        if (current_letter) {
          return '/img/icons/partial/letters/' + current_letter.toLowerCase() + '.png';
        } else if (animal_stack[animal_index]) {
          let current_need = animal_decider_observer[animal_stack[animal_index]][decider_observer];
          return '/img/icons/partial/needs/' + current_need + '.png';
        } else {
          return '/img/icons/partial/needs/' + (second_time ? 'd.png' : 'o.png');
        }
      }
    } else if (current_letter) {
      return '/img/icons/partial/letters/' + current_letter.toLowerCase() + '.png';
    } else if (animal_stack[animal_index]) {
      let current_need = animal_decider_observer[animal_stack[animal_index]][decider_observer];
      return '/img/icons/partial/needs/' + current_need + '.png';
    } else {
      return '/img/icons/partial/needs/' + (second_time ? 'd.png' : 'o.png');
    }
  }

  return (
    <TypePopupTemplate>
      <TypePopupClose person_id={popup_id} />
      <div className="popup_text">
        <h2 className="popup_title">{data["name"]}</h2>
        <div className="type_top">
            <div className="type_top-img"><img src={data["image"]}/></div>
            <div className="type_top-info">
            <div className="type_top-info__full">
                <p className="db_card-type">{data['type']}</p>
                {data['tag'] != null ? <p className="db_card-text-purple">{data['tag']}</p> : <p className="db_card-text-purple">General</p> }
            </div>
            <div className="type_top-info__links">
                <div className="type_top-info__links-title">Links</div>
                {data['links'].map((person, i) => {
                return(
                    <Link href={person['url']} rel="noopener noreferrer" target="_blank" key={i}>
                    <div className="type_top-info_link">
                        <strong>{person['name']}</strong>
                    </div>
                    </Link>
                )
                })}
            </div>
            </div>
        </div>
        <div className="diagram_container">
            <div className="stack_container outline-gray">
            <Stack {...stack_props} />
            </div>
            <div className="animal_container">
                <div className="animals_diagram outline-gray">
                {data.social ? (
                    <img src={`/img/icons/social/${data.social}.png`} className='social_type' />
                ) : (
                    <img src='/img/icons/partial/social/social_blank.png' className='social_type' />
                )}
                <div className='animals_diagram-container'>
                    <div className="animal_diagram-names">
                    {animal_stack.map((animal, i, {length}) => {
                        if (i + 1 === length) {
                        return <div key={i} className="names_last">{animal ? animal[0] : 'x'}</div>
                        }
                        else {
                        return (
                            <>
                            {animal ? (
                            <div key={i} >
                                {animal[0]}
                                { checkDouble(animal) ? <div className="animal_double">x2</div> : null}
                            </div>
                            ) : (
                            <div key={i}>
                                x
                            </div>
                            )}
                            </>
                        )
                        }
                    })}
                    </div>
                    <div className="animal_diagram-details">
                    {animal_details.map((detail, i) => {
                        return (
                        <div key={i}>
                            {detail ? (
                            <>
                                <div className="animal_detail-modality">{detail.modality}</div>
                                <div className="animal_detail-funcs">
                                <img src={handleAnimalFuncs(detail.functions, 0, i)} />
                                <img src={handleAnimalFuncs(detail.functions, 1, i)} />
                                </div>
                            </>
                            ) : (
                            <>
                                <div className='animal_detail-modality'>xx</div>
                                <div className='animal_detail-funcs'>
                                <img src="/img/icons/partial/needs/o.png" />
                                <img src="/img/icons/partial/needs/d.png" />
                                </div>
                            </>
                            )}
                        </div>
                        )
                    })}
                    </div>
                </div>
                </div>
                <div className="animals_analysis outline-gray">
                </div>
              </div>
          </div>
      </div>
    </TypePopupTemplate>
  );
}