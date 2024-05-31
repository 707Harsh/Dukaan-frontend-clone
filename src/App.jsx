import { Navbar } from "./components/Navbar"
import { PayoutCard1 } from "./components/PayoutCard1"
import { PayoutCard2 } from "./components/PayoutCard2"
import { PayoutCard3 } from "./components/PayoutCard3"

function App() {

  return (
    <>
    <Navbar/>
    <div className="grid grid-cols-3 gap-x-4 px-5">
      <PayoutCard1 title={"Next Payout"} payoutAmount={"2,312.23"} orderCount={23} paymentDate={"Today, 4:00PM"}/>
      <PayoutCard2 title={"Amount Pending"} amount={"92,312.20"} orderCount={13}/>
      <PayoutCard3 title={"Amount Processed"} amount={"23,92,312.19"}/>
    </div>
    </>
  )
}

export default App
