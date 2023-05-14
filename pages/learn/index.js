import Link from "next/link";

function Learn() {
  return (
    <div className="main">
      <div className='learn_systems'>
        <Link href="">
          <div className='learn_system'>
              <div className='learn_system-tag'>Introduction Course</div>
              <div className='learn_system-title'>Intro to Typology</div>
              <div className='learn_system-description'>What is Typology? Get introduced to why people categorize personality and what are the benefits.</div>
              <div className='learn_system-image'>
                <img src='/img/learn/home/intro_logo.png' />
              </div>
          </div>
        </Link>
        <Link href="">
          <div className='learn_system'>
              <div className='learn_system-tag'>Introduction Course</div>
              <div className='learn_system-title'>Intro to Typing</div>
              <div className='learn_system-description'>"Typing" is how you find someone's personality type. Get introduced to how you type accurately and efficiently.</div>
              <div className='learn_system-image'>
                <img src='/img/typing/home/target.png' />
              </div>
          </div>
        </Link>
        <Link href="/ops/learn">
          <div className='learn_system'>
              <div className='learn_system-tag'>Typology System</div>
              <div className='learn_system-title'>Objective Personality</div>
              <div className='learn_system-description'>A system of over 2048 combinations of personality. It aims to uncover default wirings for growth.</div>
              <div className='learn_system-image'>
                <img src='/img/learn/home/ops_logo.webp' />
              </div>
          </div>
        </Link>
        <Link href="">
          <div className='learn_system'>
              <div className='learn_system-tag'>Typology System</div>
              <div className='learn_system-title'>ByCognition Direct</div>
              <div className='learn_system-description'>Known as "Bycog," its refined terms aims for accessibility and comprehension. </div>
              <div className='learn_system-image'>
                <img src='/img/main/logo.png' />
              </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Learn;
