import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import { useTheme } from '../../context/ThemeContext'

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="bg-white shadow-lg dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
            TaskManager
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Home
            </Link>
            <Link to="/tasks" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Tasks
            </Link>
            <Link to="/users" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Users
            </Link>
            <Button
              variant="secondary"
              size="small"
              onClick={toggleTheme}
              className="flex items-center"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar