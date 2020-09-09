import react,{useContext} from 'react';
import ThemeContext from './ThemeContext';

const themetogglerstyle={
    cursor:"pointer"

}
const ThemeToggler = () => {
    const[themeMode, setThemeMode] = useContext(ThemeContext);
    return(
        <div style = {themeTogglerStyle} onClick = {() => {setThemeMode(themeMode === "light"? "dark": "light")}}>
            <span title = "switch theme">
                {themeMode === "light" ? "🌙" : "☀️"}
            </span>
        </div>
    );
}
export default Themetoggler;