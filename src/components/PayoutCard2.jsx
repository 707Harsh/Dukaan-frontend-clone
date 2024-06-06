export function PayoutCard2({title, orderCount, amount})
{
    return(
        <div className="shadow rounded-lg">
            <div className="px-3 pt-3 text-slate-700">{title}&nbsp;&nbsp;&nbsp;<span className="cursor-pointer border border-slate-400 rounded-full px-2  text-sm">?</span></div>
            <div className="flex justify-between px-3 py-4 items-center">
                <div className="text-3xl font-medium">₹{amount}</div>
                {orderCount ? <div className="underline flex items-center cursor-pointer text-l-blue font-medium">{orderCount} {orderCount>1?"Orders":"Order"} 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"  stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>:null}
            </div>
        </div>
    )
}