import "./About.css";
import { FaRegHandPointRight } from "react-icons/fa";
export const About = () => {
  return (
    <div className="about container">
      <h1>ABOUT</h1>
      <div className="about-section">
        <div className="about-img">
          <img src="/images/About.png" alt="about-img" />
        </div>
        <div className="about-info">
          <p>
            <FaRegHandPointRight />
            Hi, I’m Rishank a frontend developer with a passion for building
            interactive and user-friendly web applications. I enjoy turning
            ideas into real, functional products using modern web technologies.
            <br />
            <FaRegHandPointRight />I completed my B.E. in Electrical and
            Electronics Engineering from UIET in 2024. During my college years,
            I discovered my interest in web development and started diving into
            frontend technologies.
          </p>
        </div>

        <div className="hobby-info">
          <p>Apart from coding, some other activities that I love to do!</p>
          <p>
            <FaRegHandPointRight />
            Watching Anime
          </p>
          <p>
            <FaRegHandPointRight />
            Playing Cricket
          </p>
        </div>
        <div className="hobby-img">
          <img src="/images/Hobby.png" alt="" />
        </div>
      </div>
    </div>
  );
};
