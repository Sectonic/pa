
function Banner(props) {
  var directory;
  if ("type" in props) {
    if (props.type === "nav") {
      directory = "main/";
    } else if (props.type === "typing") {
      directory = "typing/home/";
    }
  } else {
    directory = "learn/home/";
  }
  return (
    <div
      className={`banner banner_${props.background} banner_${props.background}-outline`}
    >
      <div className="banner_logo">
        <div className="banner_icon">
          <img
            src={`/img/${directory}/${props.section}.png`}
          />
        </div>
        <h1 className={`banner_text ${props.background}`}>{props.title}</h1>
      </div>
    </div>
  );
}

export default Banner;
