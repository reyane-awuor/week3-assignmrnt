import { Link } from 'react-router-dom'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
          Welcome to TaskManager
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          A modern React application for managing your tasks and exploring user data
        </p>
        
        <div className="flex justify-center space-x-4">
          <Link to="/tasks">
            <Button size="large">Get Started with Tasks</Button>
          </Link>
          <Link to="/users">
            <Button variant="secondary" size="large">Explore Users</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 text-center">
          <div className="text-3xl mb-4">🎯</div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Task Management</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Create, organize, and track your tasks with our intuitive task manager
          </p>
        </Card>

        <Card className="p-6 text-center">
          <div className="text-3xl mb-4">🌙</div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Dark Mode</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Enjoy comfortable viewing with our built-in light and dark theme support
          </p>
        </Card>

        <Card className="p-6 text-center">
          <div className="text-3xl mb-4">📱</div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Responsive</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Works perfectly on all your devices - desktop, tablet, and mobile
          </p>
        </Card>
      </div>
    </div>
  )
}

export default Home