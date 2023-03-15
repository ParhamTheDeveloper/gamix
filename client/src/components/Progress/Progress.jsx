import "./Progress.css";

const Progress = ({ percent, label }) => {
  return (
    <>
      <div className="mx-10 text-white">{label}</div>
      <div className="Progress">
        <div className="Progress-Inner" style={{ width: `${percent}%` }}>
          <span className="mr-auto text-gray-300">{percent}%</span>
        </div>
      </div>
    </>
  );
};

export default Progress;
