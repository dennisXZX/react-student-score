import { useEffect, useState } from "react";
import ScoreItem from "../ScoreItem/ScoreItem";
import mockStudentResponse from "../../mockData/students.json";
import "./scoreList.css";

const ScoreList = () => {
  const [rawScoreData, setRawScoreData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredScoreData, setFilteredScoreData] = useState([]);

  const changeHandler = (event) => {
    setSearchTerm(event.target.value);

    const filteredScore = rawScoreData.filter(({ firstName, lastName }) => {
      const fullName = (firstName + lastName).toLowerCase();
      return fullName.includes(searchTerm.toLowerCase());
    });

    setFilteredScoreData(filteredScore);
  };

  useEffect(() => {
    setRawScoreData(mockStudentResponse);
    setFilteredScoreData(mockStudentResponse);
  }, []);

  return (
    <>
      <input
        type="text"
        placeholder="Filter name"
        onChange={changeHandler}
        value={searchTerm}
      />

      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {filteredScoreData?.map((score) => (
            <ScoreItem {...score} key={score.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ScoreList;
