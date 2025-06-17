import { useState } from "react";
import "./css/App.css";
import HomePage from "./components/HomePage";
import FormPage from "./components/FormPage";
import ConfirmationPage from "./components/ConfirmationPage";

function App() {
  const [page, setPage] = useState<"home" | "form" | "confirmation">("home");

  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [college, setCollege] = useState<string>("");
  const [clubs, setClubs] = useState<string[]>([]);

  const collegeOptions = [
    "College of Computing",
    "College of Engineering",
    "Scheller College of Business",
  ];
  const clubOptions = ["GT iOS Club", "GT Swimming Club", "Babel Club"];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.trim() === "") {
      setNameError("Name is required");
      return;
    }
    setNameError("");
    const formData = { name, college, clubs };
    const json = JSON.stringify(formData, null, 2);

    console.log("Form data as JSON:", json);
    localStorage.setItem("formData", json);

    // Optional: also trigger download
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "form-data.json";
    link.click();
    URL.revokeObjectURL(url);
    setPage("confirmation");
  };

  const resetForm = () => {
    setName("");
    setCollege("");
    setClubs([]);
    setNameError("");
    setPage("form");
  };

  return (
    <div className="App">
      {page === "home" && <HomePage onStart={() => setPage("form")} />}
      {page === "form" && (
        <FormPage
          name={name}
          setName={setName}
          nameError={nameError}
          college={college}
          setCollege={setCollege}
          clubs={clubs}
          setClubs={setClubs}
          collegeOptions={collegeOptions}
          clubOptions={clubOptions}
          onSubmit={handleSubmit}
          onBack={() => setPage("home")}
          onResetForm={resetForm}
        />
      )}
      {page === "confirmation" && <ConfirmationPage onReset={resetForm} />}
    </div>
  );
}

export default App;
