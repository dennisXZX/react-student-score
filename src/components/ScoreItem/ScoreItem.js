const ScoreItem = ({ firstName, lastName, lessonScore }) => {
  const highlightClass = lessonScore < 35 ? "highlight" : "";

  return (
    <tr className={highlightClass}>
      <td className="ScoreItem">
        {firstName} {lastName}
      </td>
      <td className="ScoreItem">{lessonScore}</td>
    </tr>
  );
};

export default ScoreItem;
