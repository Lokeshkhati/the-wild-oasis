import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import useLogin from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

const LoginForm = () => {
    const [email, setEmail] = useState("demo@wildoasis.com");
    const [password, setPassword] = useState("demouser");

    const { login, isLoading } = useLogin()

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!email || !password) return
        login({ email, password }, {
            onSettled: () => {
                setEmail(''),
                    setPassword('')
            }
        })

    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormRowVertical label="Email address" orientation="vertical">
                <Input
                    type="email"
                    id="email"
                    autoComplete="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                />
            </FormRowVertical>
            <FormRowVertical label="Password" orientation="vertical">
                <Input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                />
            </FormRowVertical>
            <FormRowVertical orientation="vertical">
                <Button size="large" disabled={isLoading}>
                    {isLoading ? <SpinnerMini /> : "Login"}
                </Button>
            </FormRowVertical>
        </Form>
    );
}

export default LoginForm;