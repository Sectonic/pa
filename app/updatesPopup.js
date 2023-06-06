import Popup from "./_components/popup";

function UpdatesPopup({ onClose }) {
    return (
        <Popup onClose={onClose} >
            <h2 className="popup_title">Updates</h2>
            <div className="popup_section">
            <div className="popup_section-img">
                <img src="/img/main/launch.png" />
            </div>
            <div className="popup_section-text">
                <h3 className="popup_subtitle margin-sm">Official Project Launch</h3>
                <p>
                Hi, I'm Alex, you may already know me as Aze. I'm proud to finally announce that Personality Academy has officially launched! 
                </p>
                <p>
                Almost a year ago, this all started as a vision to make the best project, for the community. 
                A place that ties OPS together with the best resources and tools, to make tracking personality type objectively, the best it can be.
                </p>
                <p>
                At last, we can't wait to finally share everything we've been working on.
                Me and Sujal have worked tirelessly on this for more than half a year.
                </p>
                <p>
                And now, it's all yours.
                </p>
            </div>
            </div>
        </Popup>
    );
  }
  
  export default UpdatesPopup;