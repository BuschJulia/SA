import { createBrowserRouter } from "react-router-dom"; 
import TelaLogin from "../pages/TelaLogin";
import Cadastrese from '../components/Cadastrese';

const router = createBrowserRouter([
    {path: "/", element: <TelaLogin />},
    {path: "/cadastro", element: <Cadastrese />},
    {path: "/generica", element: <Generica />},
    {path: "/final", element: <Final />},
    {path: "/ornitorrinco", element: <Ornitorrinco />},
])

export default router;