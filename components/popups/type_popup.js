import Image from '../image';
import Link from 'next/link';
import {useEffect} from 'react';

function TypePopup({data}) {

  function checkSavior(animal) {
    return [data.animal1, data.animal2].includes(animal)
  }

  if (data.linked) {
    return (
      <div>
        <h2>Hello</h2>
      </div>
    )
  }

  var animal_stack = [data.animal1, data.animal2, data.animal3, data.animal4]
  function checkStack(animal) {
    let checkIndex = animal_stack.indexOf(animal) + 1;
    return checkIndex
  }

  var double_animal = {
    'Blast': 'Consume',
    'Play': 'Sleep',
    'Consume': 'Blast',
    'Sleep': 'Play'
  }

  function checkDouble(animal) {
    let double_anim = double_animal[data.animal4];
    if (animal === double_anim) {
      return true;
    }
    else {
      return false;
    }
  }

  var jumper = false;

  var decider_functions = ['fe', 'te', 'fi', 'ti'];

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

  var modality_options = {
    'm': {
      'ne': false,
      'ni': false,
      'si': true,
      'se': true,
      'fi': false,
      'ti': false,
      'fe': true,
      'te': true
    },
    'f': {
      'ne': true,
      'ni': true,
      'si': false,
      'se': false,
      'fi': true,
      'ti': true,
      'fe': false,
      'te': false
    }
  }

  var double_options = {
    'Blast': ['oe', 'di'],
    'Play': ['oi', 'di'],
    'Consume': ['oi', 'de'],
    'Sleep': ['oe', 'de']
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

  var stack_options = {
    1: 'main_logo',
    2: 'savior_logo',
    3: 'demon_logo',
    4: 'last_logo'
  }

  var bracket_options = {
    1: 'first_bracket',
    2: 'bracket',
    3: 'demon_bracket',
    4: 'last_demon_bracket'
  }

  var function1 = data.function1.toLowerCase();
  var function2 = data.function2.toLowerCase();
  var function3 = function_options[data.function2].toLowerCase();
  var function4 = function_options[data.function1].toLowerCase();
  // if (function1[1] === function2[1]) {
  //   function2 = function_options[data.function2].toLowerCase();
  //   function3 = data.function2.toLowerCase();
  //   jumper = true;
  // } 
  var functions = [function1, function2, function3, function4];

  var grant1 = animal_options[need_options[function1]][need_options[function2]];
  var grant2 = animal_options[need_options[function2]][need_options[function4]];
  var grant3 = animal_options[need_options[function1]][need_options[function3]];
  var grant4 = animal_options[need_options[function3]][need_options[function4]];
  var grant_funcs = {
    0: [function1, function2],
    1: [function2, function4],
    2: [function1, function3],
    3: [function3, function4],
  }
  var grants = [grant1, grant2, grant3, grant4];

  var anim_all = [];
  for (let i = 0; i < grants.length; i++) {
    anim_all.push({
      'animal': grants[i],
      'stack': checkStack(grants[i]),
      'savior': checkSavior(grants[i])
    })
  }

  var double_funcs = {}
  var doubles = double_options[data.animal4]
  for (let i = 0; i < functions.length; i++) {
    let func = functions[i];
    double_funcs[i + 1] = false;
    if (doubles.includes(need_options[func])) {
      double_funcs[i + 1] = true;
    }
  }

  var sensory_modality = data.sensoryModality.substring(0,1);
  var de_modality = data.deModality.substring(0,1);
  var masc_modality = {}
  for (let i = 0; i < functions.length; i++) {
    let func = functions[i];
    if (decider_functions.includes(func)) {
      masc_modality[i + 1] = modality_options[de_modality][func]
    }
    else {
      masc_modality[i + 1] = modality_options[sensory_modality][func]
    }
  }

  var animal_details = []
  for (let i = 0; i < animal_stack.length; i++) {
    let curr_animal = animal_stack[i];
    animal_details.push({
      modality:data[`${curr_animal.toLowerCase()}Modality`],
      functions: grant_funcs[grants.indexOf(curr_animal)]
    });
  }

  return (
    <div>
      <h2 className="popup_title">{data["name"]}</h2>
      <div className="type_top">
        <div className="type_top-img"><Image src={data["image"]}/></div>
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
          <div className="stack">
            <div className="big-axis"></div>
            <div className="small-axis"></div>
            <div className={`${bracket_options[anim_all[0]['stack']]} top_bracket`}></div>
            <div className={`bracket-logo top_logo ${stack_options[anim_all[0]['stack']]}`}>
                <p>{anim_all[0]['stack'] === 4 ? "(" : null}{anim_all[0]['animal'][0]}{anim_all[0]['stack'] === 4 ? ")" : null}</p>
            </div>
            <div className={`${bracket_options[anim_all[1]['stack']]} second_bracket`}></div>
            <div className={`bracket-logo second_logo ${stack_options[anim_all[1]['stack']]}`}>
                <p>{anim_all[1]['stack'] === 4 ? "(" : null}{anim_all[1]['animal'][0]}{anim_all[1]['stack'] === 4 ? ")" : null}</p>
            </div>
            <div className={`${bracket_options[anim_all[2]['stack']]} third_bracket`}></div>
            <div className={`bracket-logo third_logo ${stack_options[anim_all[2]['stack']]}`}>
                <p>{anim_all[2]['stack'] === 4 ? "(" : null}{anim_all[2]['animal'][0]}{anim_all[2]['stack'] === 4 ? ")" : null}</p>
            </div>
            <div className={`${bracket_options[anim_all[3]['stack']]} last_bracket`}></div>
            <div className={`bracket-logo fourth_logo ${stack_options[anim_all[3]['stack']]}`}>
                <p>{anim_all[3]['stack'] === 4 ? "(" : null}{anim_all[3]['animal'][0]}{anim_all[3]['stack'] === 4 ? ")" : null}</p>
            </div>
            <div className="top border-func"><Image src={`/img/icons/Modalities/${masc_modality[1] ? "Masc/m" : "Fem/f"}_${function1}.png`}/>{ double_funcs[1] ? <div className="double_logo double_top">x2</div> : null}</div>
            <div className={`second ${jumper ? "demon_func" : "border-func"}`}><Image src={`/img/icons/Modalities/${masc_modality[2] ? "Masc/m" : "Fem/f"}_${function2}.png`}/>{ double_funcs[2] ? <div className="double_logo double_2nd">x2</div> : null}</div>
            <div className={`third ${jumper ? "border-func" : "demon_func"}`}><Image  src={`/img/icons/Modalities/${masc_modality[3] ? "Masc/m" : "Fem/f"}_${function3}.png`}/>{ double_funcs[3] ? <div className="double_logo double_3rd">x2</div> : null}</div>
            <div className="last demon_func"><Image src={`/img/icons/Modalities/${masc_modality[4] ? "Masc/m" : "Fem/f"}_${function4}.png`}/>{ double_funcs[4] ? <div className="double_logo double_last">x2</div> : null}</div>
          </div>
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
                      return <div key={i} className="names_last">{animal[0]}</div>
                    }
                    else {
                      return <div key={i} >{animal[0]}{ checkDouble(animal) ? <div className="animal_double">x2</div> : null}</div>
                    }
                  })}
                </div>
                <div className="animal_diagram-details">
                  {animal_details.map((detail, i) => {
                    return (<div key={i}>
                      <div className="animal_detail-modality">{detail.modality}</div>
                      <div className="animal_detail-funcs">
                        <Image src={`/img/icons/Functions/${!decider_functions.includes(detail.functions[0]) ? detail.functions[0] : detail.functions[1]}.png`} />
                        <Image src={`/img/icons/Functions/${decider_functions.includes(detail.functions[1]) ? detail.functions[1] : detail.functions[0]}.png`} />
                      </div>
                      </div>)
                  })}
                </div>
              </div>
            </div>
            <div className="animals_analysis outline-gray">
            </div>
        </div>
      </div>
    </div>
  );
}

export default TypePopup;
