import * as popups from "./popups/popup_links";

function Popup(props) {
  function removePopup() {
    props.popup(false, "");
  }

  return (
    <div className="popup_bg">
      <div className="popup_main">
        <div className="popup_bottom"></div>
        <div className="popup_exit" onClick={() => removePopup()}>
          <img
            src="/img/main/cross.png"
            alt=""
          />
        </div>
        <div className="popup_text">
          {props.type === "saviors" && <popups.SaviorPopup />}
          {props.type === "type" && <popups.TypePopup data={props.data} />}
        </div>
      </div>
    </div>
  );
}

export { Popup };
