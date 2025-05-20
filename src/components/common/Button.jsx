function Button({ children, variant = 'default', onClick, className = '', ...props }) {
  const variants = {
    default: 'bg-gray-700/50 text-white hover:bg-gray-700 rounded-lg ',
    primary: 'bg-yellow-500 hover:bg-yellow-600 text-black font-bold',
  };

  const baseClasses = 'px-6 py-2 transition-colors';
  const variantClasses = variants[variant] || variants.default;

  return (
    <button 
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
