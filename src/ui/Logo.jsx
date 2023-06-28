import { styled } from "styled-components"


const StyledLogo = styled.div`
text-align:center;
`

const Img = styled.img`
height:9.6rem;
width:auto
`
const Logo = () => {
    return (
        <StyledLogo>
            <Img src='' alt='Logo' />
        </StyledLogo>
    )
}
export default Logo