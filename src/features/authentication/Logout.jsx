import { AiOutlineLogout } from "react-icons/ai";
import ButtonIcon from '../../ui/ButtonIcon'
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";
const Logout = () => {
    const { logout, isLoading } = useLogout();
    return <ButtonIcon disabled={isLoading} onClick={logout}>
        {!isLoading ? <AiOutlineLogout /> : <SpinnerMini />}
    </ButtonIcon>
}
export default Logout