import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import PracticalExperience from "./components/PracticalExperience";

export default function App() {
  return (
    <main className="app">
      <h1>CV Builder</h1>

      <GeneralInfo />
      <Education />
      <PracticalExperience />
    </main>
  );
}