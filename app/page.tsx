"use client"
import { useState } from "react"

export default function Home() {
  const [balance, setBalance] = useState(1000)
  const [history, setHistory] = useState<{id:number, text:string, amount:number}[]>([])
  const [inputText, setInputText] = useState("")
  const [inputAmount, setInputAmount] = useState("")

  const handleAdd = (type: "plus" | "minus") => {
    const amt = parseFloat(inputAmount)
    if (!inputText || isNaN(amt)) return alert("กรุณากรอกข้อมูลให้ครบ")

    const finalAmount = type === "plus" ? amt : -amt
    setBalance(prev => prev + finalAmount)
    setHistory([{ id: Date.now(), text: inputText, amount: finalAmount }, ...history])
    
    setInputText("")
    setInputAmount("")
  }

  return (
    <div className="p-10 font-sans max-w-md mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold mb-8 text-center text-indigo-700">CyberPay Tracker</h1>
      
      <div className="bg-white p-6 rounded-3xl shadow-xl border border-indigo-100 mb-8 text-center">
        <p className="text-gray-500 text-sm mb-1">Balance</p>
        <h2 className={`text-4xl font-black ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          ฿{balance.toLocaleString()}
        </h2>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-md mb-8">
        <input 
          type="text" placeholder="ชื่อรายการ (เช่น ค่าข้าว)" 
          className="w-full p-3 border rounded-xl mb-3 outline-none focus:ring-2 focus:ring-indigo-400"
          value={inputText} onChange={(e) => setInputText(e.target.value)}
        />
        <input 
          type="number" placeholder="จำนวนเงิน" 
          className="w-full p-3 border rounded-xl mb-4 outline-none focus:ring-2 focus:ring-indigo-400"
          value={inputAmount} onChange={(e) => setInputAmount(e.target.value)}
        />
        <div className="flex gap-2">
          <button onClick={() => handleAdd("plus")} className="flex-1 bg-green-500 text-white p-3 rounded-xl font-bold hover:bg-green-600 transition">+ รายรับ</button>
          <button onClick={() => handleAdd("minus")} className="flex-1 bg-red-500 text-white p-3 rounded-xl font-bold hover:bg-red-600 transition">- รายจ่าย</button>
        </div>
      </div>

      <div className="space-y-3">
        {history.map(item => (
          <div key={item.id} className="bg-white p-4 rounded-2xl flex justify-between shadow-sm border-r-4 border-indigo-500">
            <span className="font-semibold text-gray-700">{item.text}</span>
            <span className={`font-bold ${item.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
              {item.amount > 0 ? '+' : ''}{item.amount.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}