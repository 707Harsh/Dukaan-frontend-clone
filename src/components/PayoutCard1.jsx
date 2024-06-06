export function PayoutCard1({title, payoutAmount, orderCount, paymentDate})
{
    return(
        <div className="text-white shadow overflow-hidden">
            <div className="bg-l-blue rounded-lg">
                <div className="px-3 pt-3">{title}&nbsp;&nbsp;&nbsp;<span className="cursor-pointer border rounded-full px-2  text-sm ">?</span>
                </div>
                <div className="flex justify-between px-3 py-4 items-center">
                    <div className="text-3xl font-medium">₹{payoutAmount}</div>
                    <div className="underline flex items-center cursor-pointer font-medium">{orderCount} {orderCount>1?"Orders":"Order"}
                    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"  stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                    </div>
                </div>
                <div className="flex justify-between bg-d-blue px-3 py-2 rounded-lg">
                    <div>Next Payment Date:</div>
                    <div>{paymentDate}</div>
                </div>
            </div>
        </div>
    )
}