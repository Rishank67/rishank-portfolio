import "./Projects.css";
import projectdata from "../../api/projectdata.json";
import { NavLink } from "react-router-dom";
export const Projects = () => {
  return (
    <div className="projects container">
      <h1>PROJECTS</h1>
      <ul>
        {projectdata.map((curElem, index) => {
          return (
            <li key={index}>
              <div className="card">
                <div className="front">
                  <div className="card-image">
                    <img src={curElem.image} alt="" />
                  </div>
                  <p className="project-title">
                    <em>Title:</em> {curElem.title}
                  </p>
                </div>
                <div className="back">
                  <p>
                    <em>Description: </em>
                    {curElem.description}
                  </p>
                  <div className="btn">
                    <NavLink to={curElem.code} target="_blank">
                      <button>View Code</button>
                    </NavLink>
                    <NavLink to={curElem.url} target="_blank">
                      <button>Visit Website</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
