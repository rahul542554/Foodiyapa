import './Footer.css'; // Import your stylesheet here

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h1 className="logo">Your Logo</h1>
            <p>
              Your Food Ordering Website is dedicated to providing delicious meals for every occasion.
            </p>
            <div className="contact">
              <span><i className="fas fa-phone"></i> 123-456-7890</span>
              <span><i className="fas fa-envelope"></i> info@example.com</span>
            </div>
          </div>

          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section social">
            <h2>Follow Us</h2>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Your Food Ordering Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
