import { Link } from 'react-router-dom';

function NavButton({ icon, label, to, active = false }) {
  return (
    <Link 
      to={to}
      className={`flex items-center px-4 py-2 rounded-full text-[#ffffffcc] font-semibold text-xl hover:bg-white hover:text-black ${active ? 'border-2 border-gray-500 hover:border-none' : 'hover:bg-gray-700/30'}`}
    >
      <div className="mr-2">{icon}</div>
      <span>{label}</span>
    </Link>
  );
}

export default NavButton;