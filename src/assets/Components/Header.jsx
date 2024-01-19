
import './Header.css';

const Header = () => {
  return (
    <>
    <div className="header">
      <img className='logo' draggable="false" src="https://us.123rf.com/450wm/olgastrelnikova/olgastrelnikova1901/olgastrelnikova190100001/115903194-food-icon-with-smile-label-for-food-company-grocery-store-icon-vector-illustration-with-smiling.jpg?ver=6" alt="Logo" />
      <div className="navContainer">
        <ul className="navItems">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>

    
    </>
  );
};

export default Header;
