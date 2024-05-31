export function PayoutCard3({title, amount})
{
    return(
        <div className="shadow rounded-lg">
            <div className="px-3 pt-3 text-slate-700">{title}&nbsp;&nbsp;&nbsp;<span className="cursor-pointer border border-slate-400 rounded-full px-2 text-slate-600 text-sm">?</span></div>
            <div className="text-3xl font-medium px-3 py-4">₹{amount}</div>
        </div>
    )
}