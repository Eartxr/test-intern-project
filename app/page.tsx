<div className="space-y-3">
  {history.map(item => (
    <div key={item.id} className="bg-white p-4 rounded-2xl flex justify-between shadow-sm border-r-4 border-indigo-500">
      <span className="font-semibold text-gray-700">{item.text}</span>
      <span className={`font-bold ${item.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
        {item.amount > 0 ? '+' : ''}{item.amount.toLocaleString()}
      </span> {/* แก้จาก </h2> เป็น </span> ตรงนี้ครับ */}
    </div>
  ))}
</div>