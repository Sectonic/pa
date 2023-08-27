function Popup({ children , onClose }) {
  return (
    <div className="popup_bg animate__animated animate__fadeIn">
      <div className="popup_main animate__animated animate__fade_in">
        { onClose && (
          <div className="popup_exit" onClick={onClose}>
            <img
              src="/img/main/cross.png"
              alt=""
            />
          </div>
        )}
        <div className="popup_text">
            {children}
        </div>
      </div>
    </div>
  );
}

export default Popup;