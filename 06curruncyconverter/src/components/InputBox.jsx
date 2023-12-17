
function InputBox({
    label,
    Amount,
    onAmountChange,
    onCurrencyChange,
    currencyFrom,
    amountDisable = false,
    currencyDisable = false,
    currencyOptions = []
}){
    return(
        <div className=" flex p-4 bg-white border-none mb-2 rounded-lg w-full text-sm">
            <div className=" w-1/2">
                <label className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    className="outline-none w-full bg-transparent py-1.5" 
                    placeholder="Amount"
                    value={Amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    disabled={amountDisable}
                    type="number"
                >
                </input>
            </div>
            <div className=" w-1/2 flex flex-wrap justify-end text-right">
                <p className=" text-black/40 mb-2 w-full">Currency Type</p>
                <select  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                         value={currencyFrom}
                         onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value) }
                         disabled={currencyDisable}
                >
                    {
                        currencyOptions.map((item) =>(
                            <option value={item}>
                                {item}
                            </option>
                        ))
                    }
                </select>
            </div>

        </div>
    )
}

export default InputBox