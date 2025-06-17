type Props = {
  onReset: () => void;
};

const ConfirmationPage = ({ onReset }: Props) => {
  return (
    <div>
      <h2>Done! Your form has been submitted.</h2>
      <button onClick={onReset}>Fill the Form</button>
    </div>
  );
};

export default ConfirmationPage;
