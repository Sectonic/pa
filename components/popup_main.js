import * as popups from "./popups/popup_links";
import "animate.css";

function Popup(props) {
  function removePopup() {
    props.popup(false, "");
  }

  return (
    <div className="popup_bg animate__animated animate__fadeIn">
      <div className="popup_main animate__animated animate__fade_in">
        <div className="popup_bottom"></div>
        <div className="popup_exit" onClick={() => removePopup()}>
          <img
            src="/img/main/cross.png"
            alt=""
          />
        </div>
        <div className="popup_text">
          {props.type === "updates" && <popups.UpdatesPopup />}
          {props.type === "account" && <popups.AccountPopup data={props.data} />}
          {props.type === "type" && <popups.TypePopup data={props.data} />}
        </div>
      </div>
    </div>
  );
}

export { Popup };
