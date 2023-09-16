import { useMutation, useQueryClient } from "@tanstack/react-query"
import { login as loginApi } from "../../services/apiAuth"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

const useLogin = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const { mutate: login, isLoading } = useMutation({
        mutationFn: ({ email, password }) => loginApi({ email, password }),
        onSuccess: (user) => {
            queryClient.setQueryData(['user'], user.user)
            navigate('/dashboard')
        },
        onError: (error) => {
            toast.error('Provided email or password are incorrect')
        }
    })

    return { login, isLoading }
}

export default useLogin  