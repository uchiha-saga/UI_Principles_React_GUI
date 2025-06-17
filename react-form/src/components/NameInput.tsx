type Props = {
  name: string;
  setName: (name: string) => void;
  nameError: string;
};

const NameInput = ({ name, setName, nameError }: Props) => (
  <div>
    <label> Your Name: </label>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    {nameError && <p style={{ color: "red" }}>{nameError}</p>}
  </div>
);

export default NameInput;
