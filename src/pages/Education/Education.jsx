import "./Education.css";
import education_data from "../../api/educationdata.json";
export const Education = () => {
  return (
    <div className="education container">
      <h1>Education</h1>
      <ul>
        {education_data.map((curElem, index) => {
          return (
            <li key={index} id={`card-${index}`}>
              <h2>{curElem.title}</h2>
              <p>Year: {curElem.year}</p>
              <p>
                {curElem.score.includes("%")
                  ? `Percentage: ${curElem.score}`
                  : `Cgpa: ${curElem.score}`}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
