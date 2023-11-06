import './navbar.css'

export function Navbar() {
    return(
        <div className='navbar'>
            <div className='leftSide'>
            <img className='image1' src='https://static.vecteezy.com/system/resources/previews/023/627/271/original/sun-outline-icon-summertime-sunny-day-icon-summer-design-elements-hot-weather-sunlight-icon-outline-black-and-white-free-vector.jpg' />
            </div>
            <div className='midSide'>BookLit</div>

            <div className="rightSide">
                    <a className='navLinks' href="#login">Log in</a>
                    <a className='navLinks' href="#signUp">Sign Up</a>
                    <a className='navLinks' href="home">Home</a>
                    <a className='navLinks' href="contactUs">Contact Us</a>

            </div>

            
        </div>
    );
}

export default Navbar