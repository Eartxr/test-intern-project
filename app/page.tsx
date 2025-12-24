"use client" // บอกให้ Next.js รู้ว่าหน้าจอมีการขยับเขยื้อนได้
import { useState } from "react"

export default function Home() {
  // สร้างตัวแปรเก็บยอดเงิน (ค่าเริ่มต้นคือ 1000)
  const [balance, setBalance] = useState(1000)

  return (
    <div className="p-10 font-sans max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-5">💰 FinTech App (Intern)</h1>
      
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-6 rounded-2xl text-white mb-5 shadow-lg">
        <p className="text-sm opacity-80">ยอดเงินคงเหลือ:</p>
        <h2 className="text-4xl font-bold">฿ {balance.toLocaleString()}</h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={() => setBalance(balance + 100)} 
          className="bg-green-500 text-white p-3 rounded-xl font-bold active:scale-95 transition"
        >
          + รายรับ (100)
        </button>
        <button 
          onClick={() => setBalance(balance - 50)}
          className="bg-red-500 text-white p-3 rounded-xl font-bold active:scale-95 transition"
        >
          - รายจ่าย (50)
        </button>
      </div>
    </div>
  )
}