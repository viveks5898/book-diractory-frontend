import { AddBookForm } from "./component/Book/AddBookForm";
import Layout from "./component/Layout/Layout";
import ShowBook from "./component/Book/ShowBook";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Layout>

    <BrowserRouter>
        <Routes>

          <Route path="/" element={<AddBookForm />} />
          <Route path="/books" element={<ShowBook />} />


        </Routes>

    </BrowserRouter>
    </Layout>

  );
}

export default App;
