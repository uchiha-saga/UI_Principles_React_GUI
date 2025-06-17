type Props = {
  college: string;
  setCollege: (college: string) => void;
  options: string[];
};

const CollegeOptions = ({ college, setCollege, options }: Props) => (
  <div>
    <p>Select Your College:</p>
    {options.map((col) => (
      <label key={col}>
        <input
          type="radio"
          name="college"
          value={col}
          checked={college === col}
          onChange={(e) => setCollege(e.target.value)}
        />
        {col}
      </label>
    ))}
  </div>
);

export default CollegeOptions;
