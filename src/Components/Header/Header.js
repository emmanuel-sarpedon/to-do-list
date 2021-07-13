import "./Header.scss";

const Header = (props) => {
  const { text, isDarkModeEnabled, setDarkMode } = props;

  return (
    <header className="header">
      <div>
        <i class="fas fa-list fa-2x"></i>
        <span>{text}</span>
      </div>

      <span onClick={setDarkMode}>
        {isDarkModeEnabled ? (
          <i class="fas fa-sun fa-lg">
            <span>Disable Dark Mode</span>
          </i>
        ) : (
          <i class="fas fa-moon fa-lg">
            <span>Enable Dark Mode</span>
          </i>
        )}
      </span>
    </header>
  );
};

export default Header;
