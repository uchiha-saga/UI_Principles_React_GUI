type Props = {
  clubs: string[];
  setClubs: (clubs: string[]) => void;
  options: string[];
};

const ClubOptions = ({ clubs, setClubs, options }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) setClubs([...clubs, value]);
    else setClubs(clubs.filter((club) => club !== value));
  };

  return (
    <div>
      <p>Select Clubs (Multiple Allowed):</p>
      {options.map((club) => (
        <label key={club}>
          <input
            type="checkbox"
            value={club}
            checked={clubs.includes(club)}
            onChange={handleChange}
          />
          {club}
        </label>
      ))}
    </div>
  );
};

export default ClubOptions;
