'use client';

const CommonButton = ({
  children,
  onClick,
  className = '',
  type = 'button',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-primary py-3 px-12 rounded-lg hover:bg-blue-700 transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default CommonButton;
