import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { Container_zineb } from "../style/style";

const Nav = () =>{    
    return (
            <NavStyle>
                <Logo>
                    <Link  to="/">MovieLogo </Link>
                </Logo>
                <List>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    {/* <li><Link to="/reservation">Reservation</Link></li> */}
                    {/* <li><Link to="/description">Description</Link></li> */}
                    <li><Link to="/movies">Movies</Link></li>
                    <li><Link to="/login">login</Link></li>
                    <li><Link to="/signUp">signUp</Link></li>
                    
                </List>
            </NavStyle>
)}


const NavStyle = styled(Container_zineb)`
    /* background-color:rgba(119, 2, 2, 0.404) ; */
    /* background-color: rgba(0, 0, 0, 0.427); */
    color : #dddddd;
    display: flex;
    align-items:center;
    justify-content:space-between;
    padding-top:1.5em;
    padding-bottom:1.5em;
    /* position:absolute; */
    
`;
const List = styled.ul`
    display: flex;
    flex-direction:row;
    margin-bottom: 0;
    /* align-items:center; */
    li{
        padding-left: 1.5em;        
        a{
            color: #dddddd;
            font-weight: 600;
            list-style-type: none;
            &:hover{
              text-decoration:underline;
              padding-bottom:10px;
            }
        }
    }
    
`;
const Logo = styled.div`
    a{
        color:#dddddd;
        font-weight: bold;
    }
`;

export default Nav;