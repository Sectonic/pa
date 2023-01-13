import Link from "next/link";

function ChangeSection(props) {

  var external_links = {};
  if (props.link.includes('http')) {
    external_links = {
      target: '_blank',
      rel: "noopener noreferrer"
    }
  }

  const BtnInfo= () => {
    return (
      <Link href={props.link} {...external_links}>
      <div className={`multi_paragraph page_btn ${props.type === "multi" && "page_btn_multi"}`}>
        <div className="text-sm_img page_btn-img">
          <img
            src={props.src.includes('/') ? props.src : `/img/learn/home/${props.src}.png`}
          />
        </div>
        <div className="page_btn-text">
          <h3 className="section_subtitle text-center">{props.text}</h3>
        </div>
      </div>
      </Link>
    )
  }

  if (props.type === 'multi') {
    return (
      <div style={{'width': '100%'}}>
        <BtnInfo/>
      </div>
    )
  }
  else {
    return (
      <div className={`section_body section_texts-sm ${props.padding && "top_padding"}`}>
        <BtnInfo/>
      </div>
    )
  }
}

export default ChangeSection;
