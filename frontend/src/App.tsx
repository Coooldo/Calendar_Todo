import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Details, Login, MyPage, SignUp, Intro } from "./Pages";
import { Header, Footer } from "./Components";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/Details" element={<Details />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/MyPage" element={<MyPage />} />
                <Route path="/SignUp" element={<SignUp />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
