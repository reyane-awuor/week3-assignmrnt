const Card = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md border border-gray-200 dark:bg-gray-800 dark:border-gray-700 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card