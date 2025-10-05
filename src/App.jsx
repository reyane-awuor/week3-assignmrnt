import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Simple test components
function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">🚀 TaskManager</h1>
        <p className="text-2xl">Your app is working!</p>
        <p className="mt-4">If you see this, React + Tailwind is working correctly.</p>
      </div>
    </div>
  )
}

function Tasks() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-800">Tasks Page</h1>
      <p className="text-lg mt-4">This is the tasks page.</p>
    </div>
  )
}

function Users() {
  return (
    <div className="min-h-screen bg-green-100 p-8">
      <h1 className="text-4xl font-bold text-gray-800">Users Page</h1>
      <p className="text-lg mt-4">This is the users page.</p>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div>
        {/* Simple Navigation */}
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">TaskManager</h1>
            <div className="flex space-x-4 mt-2">
              <a href="/" className="hover:text-blue-300">Home</a>
              <a href="/tasks" className="hover:text-blue-300">Tasks</a>
              <a href="/users" className="hover:text-blue-300">Users</a>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App