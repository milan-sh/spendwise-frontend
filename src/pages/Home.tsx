import { Navbar } from "@/components"

const Home = () => {
  return (
    <div>
      <Navbar/>      
      <div className="max-w-[80%] mx-auto text-center mt-12">
        <h1 className="md:text-6xl font-medium">
        Improve Your Money
        Management with <span className="text-primary">ExpenseTracker</span>
        </h1>
        <p className="mt-8 max-w-[80%] mx-auto leading-6 text-lg text-gray-400">
        Take charge of your finances with ExpenseTracker – the ultimate dashboard to track, analyze, and optimize your spending. Visualize expenses with interactive charts, set budgets effortlessly.
        </p>
      </div>
    </div>
  )
}

export default Home
