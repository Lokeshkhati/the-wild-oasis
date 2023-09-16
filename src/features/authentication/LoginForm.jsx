import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit() { }

    return (
        <Form onSubmit={handleSubmit}>
            <FormRowVertical label="Email address" orientation="vertical">
                <Input
                    type="email"
                    id="email"
                    autoComplete="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormRowVertical>
            <FormRowVertical label="Password" orientation="vertical">
                <Input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </FormRowVertical>
            <FormRowVertical orientation="vertical">
                <Button size="large">Login</Button>
            </FormRowVertical>
        </Form>
    );
}

export default LoginForm;