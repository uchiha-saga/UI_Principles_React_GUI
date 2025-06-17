import NameInput from "./NameInput";
import CollegeOptions from "./CollegeOptions";
import ClubOptions from "./ClubOptions";
import { FaArrowLeft, FaRedoAlt } from "react-icons/fa";

type Props = {
  name: string;
  setName: (name: string) => void;
  nameError: string;
  college: string;
  setCollege: (college: string) => void;
  clubs: string[];
  setClubs: (clubs: string[]) => void;
  collegeOptions: string[];
  clubOptions: string[];
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onBack: () => void;
  onResetForm?: () => void;
};

const FormPage = ({
  name,
  setName,
  nameError,
  college,
  setCollege,
  clubs,
  setClubs,
  collegeOptions,
  clubOptions,
  onSubmit,
  onBack,
  onResetForm,
}: Props) => {
  return (
    <div>
      <div className="top-buttons">
        <button className="back-button" onClick={onBack}>
          <FaArrowLeft style={{ marginRight: "6px" }} />
          Back
        </button>
        <button className="reset-button" onClick={onResetForm}>
          <FaRedoAlt style={{ marginRight: "6px" }} />
          Reset
        </button>
      </div>

      <h1>GaTech Form</h1>
      <form onSubmit={onSubmit}>
        <NameInput name={name} setName={setName} nameError={nameError} />
        <CollegeOptions
          college={college}
          setCollege={setCollege}
          options={collegeOptions}
        />
        <ClubOptions clubs={clubs} setClubs={setClubs} options={clubOptions} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
