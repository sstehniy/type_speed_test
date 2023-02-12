import './header.css';

import Logo from './Logo';

function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 justify-center">
        <Logo />
      </div>
    </div>
  );
}

export default Header;
