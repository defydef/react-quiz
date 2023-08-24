import { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";

export default function App() {
  useEffect(function () {
    async function fetchQuestions() {
      const res = await fetch("http://localhost:8000/questions");
      console.log(res);
      if (!res.ok) throw new Error();
      const data = await res.json();
      if (data.Response === "False") throw new Error(data.Error);
      console.log(data);
    }
    fetchQuestions();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Questions</p>
      </Main>
    </div>
  );
}
