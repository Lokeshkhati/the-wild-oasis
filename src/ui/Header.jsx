
import HeaderMenu from "../pages/HeaderMenu";
import UserAvatar from '../features/authentication/UserAvatar'
import { styled } from "@tanstack/react-query-devtools/build/lib/utils";

const StyledHeader = styled.header`
background-color:var(--color-grey-0)
padding:1.2rem 4.8rem;
border-bottom: 2px solid var(--color-grey-100);
display:flex;
gap:2.4rem;
align-items:center;
justify-content:flex-end
`;

const Header = () => {

    return (
        <StyledHeader>
            <UserAvatar />
            <HeaderMenu />
        </StyledHeader>
    )
}
export default Header   