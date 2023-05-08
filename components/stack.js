import Image from './image';

export default function Stack({data, need_options, functions, decider_functions, animal_stack, jumper, need_grant, animal_options}) {

    function checkSavior(animal) {
        return [data.animal1, data.animal2].includes(animal);
    }

    function checkStack(animal) {
        let checkIndex = animal_stack.indexOf(animal) + 1;
        return checkIndex
    }

    var double_options = {
        'Blast': ['oe', 'di'],
        'Play': ['oi', 'di'],
        'Consume': ['oi', 'de'],
        'Sleep': ['oe', 'de']
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

    var anim_all = [];
    need_grant.forEach(current_grant => {
        let any_null = !current_grant[0] || !current_grant[1];
        if (!any_null) {
            let current_animal = animal_options[current_grant[0]][current_grant[1]];
            let current_stack = checkStack(current_animal);
            let current_savior = checkSavior(current_animal);
            if (current_stack != 0) {
                anim_all.push({
                    'animal': current_animal,
                    'stack': current_stack,
                    'savior': current_savior
                })
            }
        } else {
            anim_all.push(null);
        }
    })

    var double_funcs = {}
    var doubles = double_options[data.animal4];
    for (let i = 1; i < functions.length + 1; i++) {
        let func = functions[i - 1];
        double_funcs[i] = false;
        if (doubles && doubles.includes(need_options[func])) {
            double_funcs[i] = true;
        }
    }

    var sensory_modality = data.sensoryModality ? data.sensoryModality.substring(0,1) : null;
    var de_modality = data.deModality ? data.deModality.substring(0,1) : null;
    var masc_modality = {}
    for (let i = 1; i < functions.length + 1; i++) {
        let func = functions[i - 1];
        if (func) {
            if (decider_functions.includes(func)) {
                masc_modality[i] = de_modality ? modality_options[de_modality][func] : null;
            }
            else {
                masc_modality[i] = sensory_modality ? modality_options[sensory_modality][func] : null;
            }
        } else {
            masc_modality[i] = null;
        }
    }

    const HandleAnimals = ({anim_num}) => {
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
        var bracket_placements = {
            bracket: {
                0: 'top_bracket',
                1: 'second_bracket',
                2: 'third_bracket',
                3: 'last_bracket'
            },
            logo: {
                0: 'top_logo',
                1: 'second_logo',
                2: 'third_logo',
                3: 'fourth_logo'
            }
        }
        var current_anim = anim_all[anim_num];
        if (current_anim) {
            let bracket_option = bracket_options[current_anim.stack];
            let stack_option = stack_options[current_anim.stack];
            let animal_letter = current_anim.animal[0];
            let stack_placement = current_anim.stack;
            let bracket_placement = bracket_placements.bracket[anim_num];
            let logo_placement = bracket_placements.logo[anim_num];
            return (
                <>
                    <div className={`${bracket_option} ${bracket_placement}`}></div>
                    <div className={`bracket-logo ${logo_placement} ${stack_option}`}>
                        <p>
                            {stack_placement == 4 ? (
                                <p>({animal_letter})</p>
                            ) : (
                                <p>{animal_letter}</p>
                            )}
                        </p>
                    </div>
                </>
            )
        } else {
            return(<></>);
        }
    }

    const HandleFunctions = ({func_index}) => {
        var func_placements = ['top', 'second', 'third', 'last'];
        var savior_demons = {
            0: 'border-func',
            1: jumper ? 'demon_func' : 'border-func',
            2: jumper ? 'border-func' : 'demon_func',
            3: 'demon_func'
        }
        var opposites = {
            needs: {
                Oe: 'oi',
                Oi: 'oe',
                De: 'di',
                Di: 'de'
            },
            letters: {
                F: 't',
                T: 'f',
                N: 's',
                S: 'n'
            }
        }
        var double_placements = ['double_top', 'double_2nd', 'double_3rd', 'double_last'];
        var observer;
        if (data.oD == "Observer") {
            observer = [0,3].includes(func_index) ? true : false;
        } else if (data.oD == "Decider") {
            observer = [0,3].includes(func_index) ? false : true;
        }
        let double = double_funcs[func_index + 1] ? true : false;
        let double_placement = double_placements[func_index];
        let func_placement = func_placements[func_index];
        let savior_demon = savior_demons[func_index];
        const FunctionImage = () => {
            if (observer != null) {
                var current_function = functions[func_index];
                var path_location = '/img/icons/Modalities/';
                var masculine_feminine;
                if (observer) {
                    if (data.sensoryModality && current_function) {
                        if (current_function) {
                            masculine_feminine = masc_modality[func_index + 1] ? "Masc/m_" : "Fem/f_";
                        }
                    } else {
                        masculine_feminine = "";
                        if (current_function) {
                            path_location = '/img/icons/Functions/';
                        } else if (data.observerNeed) {
                            current_function = savior_demon == 'border-func' ? data.observerNeed.toLowerCase() : opposites.needs[data.observerNeed];
                            path_location = '/img/icons/partial/needs/';
                        } else if (data.observerLetter) {
                            current_function = savior_demon == 'border-func' ? data.observerLetter.toLowerCase() : opposites.letters[data.observerLetter];
                            path_location = '/img/icons/partial/letters/';
                        } else {
                            path_location = "/img/icons/partial/";
                            current_function = "blank";
                        }
                    }
                } else {
                    if (data.deModality) {
                        if (current_function) {
                            masculine_feminine = masc_modality[func_index + 1] ? "Masc/m_" : "Fem/f_";
                        }
                        else if (data.deciderNeed) {
                            masculine_feminine = masc_modality[func_index + 1] ? "m_" : "f_";
                            current_function = savior_demon == 'border-func' ? data.deciderNeed.toLowerCase() : opposites.needs[data.deciderNeed];
                            if (data.deModality == "mDe") {
                                masculine_feminine = current_function.substring(1, 2) == "e" ? 'm_' : 'f_';
                            } else {
                                masculine_feminine = current_function.substring(1, 2) == "e" ? 'f_' : 'm_';
                            }
                            path_location = '/img/icons/partial/needs/';
                        } else if (data.deciderLetter) {
                            masculine_feminine = "";
                            current_function = savior_demon == 'border-func' ? data.deciderLetter.toLowerCase() : opposites.letters[data.deciderLetter];
                            path_location = '/img/icons/partial/letters/';
                        } else {
                            path_location = "/img/icons/partial/";
                            current_function = "blank";
                            masculine_feminine = "";
                        }
                    } else {
                        masculine_feminine = "";
                        if (current_function) {
                            path_location = '/img/icons/Functions/';
                        } else if (data.deciderNeed) {
                            current_function = savior_demon == 'border-func' ? data.deciderNeed.toLowerCase() : opposites.needs[data.deciderNeed];
                            path_location = '/img/icons/partial/needs/';
                        } else if (data.deciderLetter) {
                            current_function = savior_demon == 'border-func' ? data.deciderLetter.toLowerCase() : opposites.letters[data.deciderLetter];
                            path_location = '/img/icons/partial/letters/';
                        } else {
                            path_location = "/img/icons/partial/";
                            current_function = "blank";
                        }
                    }
                }

            } else {
                path_location = "/img/icons/partial/";
                current_function = "blank";
                masculine_feminine = "";
            }
            return (
                <Image src={`${path_location}${masculine_feminine}${current_function}.png`} />
            )
        }
        return (
            <div className={`${func_placement} ${savior_demon}`}>
                <FunctionImage/>
                { double ? <div className={`double_logo ${double_placement}`}>2x</div> : null}
            </div>
        )
    }

    return (
        <div className="stack">
            <div className="big-axis"></div>
            <div className="small-axis"></div>
            {[...Array(4)].map((e, i) => {
                return (<HandleAnimals anim_num={i} key={i} />)
            })}
            {[...Array(4)].map((e, i) => {
                return (<HandleFunctions func_index={i} key={i} />)
            })}
        </div>
    )
}