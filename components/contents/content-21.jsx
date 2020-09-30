export default function content() {
  return (
    <>
      <div className="py-20 bg-white">
        <div className="max-w-4xl px-3 mx-auto">
          <div className="relative w-full overflow-hidden bg-indigo-700 rounded-lg shadow h-128">
            <img
              src={require('@/assets/bg-02.jpg')}
              alt="bg image"
              className="object-cover object-center"
            />
          </div>
          <div className="flex justify-end mt-4">
            <span className="text-sm font-bold text-gray-500 uppercase">zulfadhli zakari</span>
          </div>
        </div>
      </div>
    </>
  )
}
