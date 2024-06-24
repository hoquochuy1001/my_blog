import Navbar from "./components/navbar.component";
import { LanguageProvider } from "./components/LanguageContext";
import { Route, Routes } from "react-router-dom";
import UserAuthForm from "./pages/userAuthForm.page";

const App = () => {
    return (
        <LanguageProvider>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route path="signin" element={<UserAuthForm type="sign-in"/>}/> 
                    <Route path="signup" element={<UserAuthForm type="sign-up"/>}/>
                </Route>
            </Routes>
        </LanguageProvider>
        
    )
}

export default App;