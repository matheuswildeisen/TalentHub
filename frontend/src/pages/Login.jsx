import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const API_URL = import.meta.env.VITE_API_URL;
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`${API_URL}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, senha }),
            });

            const data = await response.json();

            console.log("Usuário logado:", data)
            

            localStorage.setItem("token", data.token);
            console.log(data.token);
            
            localStorage.setItem("user", JSON.stringify(data.user));
            console.log(data.user);

            navigate("/profiles")


        } catch (err) {
            console.error("Erro ao fazer login:", err)
        }
    }
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">E-mail</label>
                <input type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">E-mail</label>
                <input type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)} />
                <button type="submit">Entrar</button>
            </form>
        </>
    )

}