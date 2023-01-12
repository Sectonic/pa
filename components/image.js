import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Image(props) {
    var attributes = {}
    if (props.class) {
        attributes.className = props.class
    }
    return (
      <LazyLoadImage
        {...attributes}
        alt=''
        src={props.src}
        effect='blur'
        />
  );
}
  
  export default Image;