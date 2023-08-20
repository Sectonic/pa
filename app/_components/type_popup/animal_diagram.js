

export const AnimalDiagram = ({ data, noSocial }) => {

    var animal_stack = [data.animal1, data.animal2, data.animal3, data.animal4];
    var decider_functions = ['fe', 'te', 'fi', 'ti'];

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
        <div className="animals_diagram outline-gray">
            {!noSocial && (
              <>
                {data.social ? (
                    <img src={`/img/icons/social/${data.social}.png`} className='social_type' />
                ) : (
                    <img src='/img/icons/partial/social/social_blank.png' className='social_type' />
                )}
              </>
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
    )
}