import "./Skills.css";
import data from "../../api/skillsdata.json";
import { RiCss3Fill, RiHtml5Line, RiNodejsLine } from "react-icons/ri";
import { SiReact } from "react-icons/si";
import { TbSql } from "react-icons/tb";
const icon = {
  RiHtml5Line: <RiHtml5Line />,
  RiCss3Fill: <RiCss3Fill />,
  RiNodejsLine: <RiNodejsLine />,
  SiReact: <SiReact />,
  TbSql: <TbSql />,
};
export const Skills = () => {
  return (
    <div className="skills container">
      <h1>SKILLS</h1>
      <ul>
        {data.map((curSkill, index) => {
          return (
            <li key={index}>
              <div className="skill-icon">{icon[curSkill.icon]}</div>
              <h3>{curSkill.name}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
