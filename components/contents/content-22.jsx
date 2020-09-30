export default function content() {
  return (
    <>
      <div className="relative h-128">
        <div className="absolute z-0 w-full h-full overflow-hidden bg-indigo-700 shadow">
          <img
            src={require('@/assets/bg-02.jpg')}
            alt="bg image"
            className="object-cover object-center"
          />
        </div>
        <div className="h-full max-w-4xl mx-auto">
          <div className="relative z-10 flex flex-row items-end justify-end h-full pb-8">
            <span className="px-4 py-2 text-sm font-bold text-white uppercase bg-indigo-700 rounded shadow">
              zulfadhli zakari
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
