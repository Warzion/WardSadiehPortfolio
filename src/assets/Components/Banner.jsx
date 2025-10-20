import { FaLinkedin } from 'react-icons/fa';
import { ReactTyped } from 'react-typed';
import './Banner.css';

const myImage = ${import.meta.env.BASE_URL}Images/WardPortfolio.png;

const Banner = () => {
  return (
    <div className='container' id='Banner'>
      <div className='banner'>
        <h2>Welcome to My Portfolio</h2>
        <h1>
          My name is <span>Ward Sadieh</span> and I am a <br />
          <ReactTyped
            strings={[
              'Game Developer.',
              'Business Developer.',
              'Game Producer.',
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
            className="typed-text"
          />
        </h1>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/wardsadieh/"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={40} />
          </a>
        </div>
      </div>

      <div className="image-div">
        <img src={myImage} alt="Ward Sadieh" />
      </div>
    </div>
  );
};

export default Banner;
