
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [userRole, setUserRole] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const user = localStorage.getItem('username') || '';
    const role = localStorage.getItem('userRole') || '';
    setIsLoggedIn(loggedIn);
    setUsername(user);
    setUserRole(role);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setUsername('');
    setUserRole('');
    navigate('/');
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.leftSection}>
        <div style={styles.menuToggle} onClick={toggleMenu} className="nav-menu-toggle">
          <span style={styles.bar}></span>
          <span style={styles.bar}></span>
          <span style={styles.bar}></span>
        </div>
        <Link to="/menu" style={styles.menuLink} onClick={() => setIsOpen(false)}>Menu</Link>
        <h2 style={styles.title}>Mutual Funds Platform</h2>
      </div>
      <div style={styles.navContent}>
        {isLoggedIn && (
          <div style={styles.userSection}>
            <Avatar sx={{ bgcolor: '#667eea', width: 32, height: 32, fontSize: '14px' }}>
              {username.charAt(0).toUpperCase()}
            </Avatar>
            <span style={styles.welcomeText}>Welcome, {username}</span>
          </div>
        )}
        <ul style={styles.menu} className={`nav-menu ${isOpen ? 'nav-menu-open' : ''}`}>
          <li><Link to="/" style={styles.link} onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/funds" style={styles.link} onClick={() => setIsOpen(false)}>Funds</Link></li>
          <li><Link to="/courses" style={styles.link} onClick={() => setIsOpen(false)}>Courses</Link></li>
          <li><Link to="/posts" style={styles.link} onClick={() => setIsOpen(false)}>Posts</Link></li>
          <li><Link to="/compare" style={styles.link} onClick={() => setIsOpen(false)}>Compare</Link></li>
          {isLoggedIn ? (
            <li><button onClick={handleLogout} style={styles.menuLogoutButton}>Logout</button></li>
          ) : (
            <li><Link to="/login" style={styles.link} onClick={() => setIsOpen(false)}>Login</Link></li>
          )}
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
    position: 'relative',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    backdropFilter: 'blur(10px)',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  menuLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    padding: '6px 12px',
    borderRadius: '6px',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
  navContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  title: {
    margin: 0,
    fontSize: '24px',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #fff, #e8eaf6)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  userSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginRight: '20px',
  },
  welcomeText: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#fff',
  },
  logoutButton: {
    background: 'rgba(255, 255, 255, 0.2)',
    border: 'none',
    color: '#fff',
    padding: '8px 16px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.3)',
    },
  },
  loginLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    padding: '8px 16px',
    borderRadius: '6px',
    background: 'rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.2)',
      textDecoration: 'none',
      color: '#fff',
    },
  },
  menuLogoutButton: {
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '16px',
    fontWeight: '500',
    padding: '8px 16px',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.1)',
    },
  },
  menuToggle: {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
  },
  bar: {
    width: '25px',
    height: '3px',
    backgroundColor: '#fff',
    margin: '3px 0',
    transition: '0.3s',
    borderRadius: '2px',
  },
  menu: {
    listStyle: 'none',
    display: 'flex',
    gap: '25px',
    margin: 0,
    padding: 0,
    flexDirection: 'row',
  },
  menuOpen: {
    flexDirection: 'column',
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '20px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
    zIndex: 1000,
    borderRadius: '0 0 8px 8px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
    display: 'block',
    padding: '8px 16px',
    borderRadius: '6px',
    transition: 'all 0.3s ease',
    fontWeight: '500',
  },
  linkHover: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    transform: 'translateY(-1px)',
  },
};

// Add responsive styles using CSS-in-JS approach
const responsiveStyles = `
  @media (max-width: 768px) {
    .nav-menu-toggle {
      display: flex !important;
    }
    .nav-menu {
      display: none !important;
    }
    .nav-menu.nav-menu-open {
      display: flex !important;
    }
  }
`;

// Inject responsive styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = responsiveStyles;
  document.head.appendChild(styleSheet);
}

export default NavBar;
