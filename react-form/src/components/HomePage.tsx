type Props = {
  onStart: () => void;
};

const HomePage = ({ onStart }: Props) => {
  return (
    <div>
      <h2>Welcome User!</h2>
      <button onClick={onStart}>Fill a Form</button>
    </div>
  );
};

export default HomePage;
