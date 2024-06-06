import { Navbar } from "./components/Navbar"
import { PayoutCard1 } from "./components/PayoutCard1"
import { PayoutCard2 } from "./components/PayoutCard2"
import { PayoutCard3 } from "./components/PayoutCard3"
import { Sidebar } from "./components/Sidebar"

function App() {

  return (
    <>
      <div className="relative">
        <div className=" w-0 md:w-64 duration-300 absolute inset-y-0 left-0">
          <Sidebar/>
        </div>
        <div className="ml-0 md:ml-64 duration-300">
          <Navbar/> 
        </div>
        <div className="grid grid-cols-1 ml-0 md:grid-cols-2 md:ml-64 lg:grid-cols-3 gap-x-4 px-5 duration-300">
          <PayoutCard1 title={"Next Payout"} payoutAmount={"2,312.23"} orderCount={23} paymentDate={"Today, 4:00PM"}/>
          <PayoutCard2 title={"Amount Pending"} amount={"92,312.20"} orderCount={13}/>
          <PayoutCard3 title={"Amount Processed"} amount={"23,92,312.19"}/>
        </div>
      </div>
    </>
  )
}

export default App
