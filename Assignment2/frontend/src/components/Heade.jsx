import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ display: "flex", alignItems: "center", padding: "10px", height: "20%", backgroundColor: "#000000", color: "#ffffff" }}>
      <img style={{ height: "70px", borderRadius: "50%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZVBdSn-1xDcTSccAw3D6ISpSIP07nzFcQA&s" alt="" />
      <ul style={{ display: "flex", gap: "10px", listStyle: "none" }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/work">Work</Link></li>
      </ul>
    </header>
  )
}

export default Header;