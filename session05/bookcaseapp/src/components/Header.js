import {Link} from 'react-router-dom';
// NEW functional component called Header

function Header () {

    return(
        <div className="bookCaseApp"> 
        <h1>My Bookcase</h1>
        <Link to="/"> Home </Link>
        <Link to="/bookcase" className="bookLink"> Bookcase</Link>
        
        
        
        
        </div>
    );

}

export default Header;