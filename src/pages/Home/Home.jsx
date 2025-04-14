import { FaRegHandPointRight } from "react-icons/fa";

import "./Home.css";
export const Home = () => {
  return (
    <div className="home container">
      <div className="home-section">
        <div className="info">
          <h1>Hi, I'm</h1>
          <h1 className="info-main">Rishank - Frontend Developer</h1>
          <p>I love creating websites using React js</p>
        </div>
        <div className="profile">
          <div className="profile-ring"></div>
          <div className="profile-card">
            <img src="/images/Profile.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
