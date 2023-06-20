
function Banner(props) {
  var directory;
  if ("type" in props) {
    if (props.type === "nav") {
      directory = "main/";
    } else if (props.type === "typing") {
      directory = "/learn/typing/home/";
    }
  } else {
    directory = "learn/";
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
        <h1 className={`banner_text ${props.background} ${props.title_size && "banner_text-sm"}`}>{props.title}</h1>
      </div>
    </div>
  );
}

export default Banner;
