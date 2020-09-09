import react from 'react';
import themetoggler from './themetoggler';

const headerstyle ={
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
}

const Header=()=>{
    return(
        <header style= {headerstyle}>
            <h1>context Api</h1>
            <themetoggler />
            
            </header>
    );

}
export default Header;

