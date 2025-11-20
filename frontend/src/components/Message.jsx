import { useState } from "react"
import { getLoggedUser } from "../services/Auth"

function Message() {

    const usuario = getLoggedUser()

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Obrigado, ${nome}! Mensagem enviada.`)
        setNome('')
        setEmail('')
        setMensagem('')
    }

    return (
        <>
        </>
    )
}

export default Message