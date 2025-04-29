import { Link } from 'react-router-dom';
import '../styles.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Головна</Link></li>
          <li><Link to="/courses">Курси</Link></li>
          <li><Link to="/schedule">Розклад занять</Link></li>
        </ul>
        <Link to="/profile" className="profile-btn">Мій кабінет</Link>
      </nav>
    </header>
  );
};

export default Header;