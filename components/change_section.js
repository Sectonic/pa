import Link from "next/link";

function ChangeSection(props) {
  var learn_pages = [
    "start",
    "typology_intro",
    "ops_intro",
    "savior_demon",
    "human_needs",
    "letters",
    "functions",
    "function_stack",
    "observer_decider",
    "action_trait",
    "animals",
    "animal_stack",
    "modalities",
    "function_modalities",
    "extroversion",
    "animal_modalities",
    "modality_combos",
    "quadras",
  ];

  var start_end;

  var index = learn_pages.indexOf(props.section);
  if ("type" in props) {
    return (
      <div className="change_section hidden-menu back_menu">
        <div className="change_back hidden-seen">
          <Link href="/typing">
            <img src="/img/main/section_btn.png" alt="" />
          </Link>
        </div>
        <div className="change_forward hidden">
          <img src="/img/main/section_btn.png" alt="" />
        </div>
      </div>
    );
  } else {
    if (index > 0 && index < 15) {
      return (
        <div className="change_section">
          <div className="change_back">
            <Link href={`/learn/${learn_pages[index - 1]}`}>
              <img src="/img/main/section_btn.png" alt="" />
            </Link>
          </div>
          <div className="current">
            <Link href={`/learn/${learn_pages[index]}`}>
              <img
                src={`/img/learn/home/${learn_pages[index]}.png`}
                alt=""
              />
            </Link>
          </div>
          <div className="change_forward">
            <Link href={`/learn/${learn_pages[index + 1]}`}>
              <img src="/img/main/section_btn.png" alt="" />
            </Link>
          </div>
        </div>
      );
    } else {
      start_end = false;
      if (index - 1 === -1) {
        start_end = true;
      }

      return (
        <div className="change_section hidden-menu">
          <div
            className={`change_back ${start_end ? "hidden" : "hidden-seen"}`}
          >
            <Link href={`/learn/${learn_pages[index - 1]}`}>
              <img src="/img/main/section_btn.png" alt="" />
            </Link>
          </div>
          <div className={`current ${start_end ? "hidden-current-left" : "hidden-current-right"}`}>
            <Link href={`/learn/${learn_pages[index]}`}>
              <img
                src={`/img/learn/home/${learn_pages[index]}.png`}
                alt=""
              />
            </Link>
          </div>
          <div
            className={`change_forward ${start_end ? "hidden-seen hidden-seen-right" : "hidden"}`}
          >
            <Link href={`/learn/${learn_pages[index + 1]}`}>
              <img src="/img/main/section_btn.png" alt="" />
            </Link>
          </div>
        </div>
      );
    }
  }
}

export default ChangeSection;
