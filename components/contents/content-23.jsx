export default function content() {
  return (
    <>
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto space-y-8 text-center">
          <div
            className="grid grid-cols-3 gap-8"
            style={{
              gridTemplateRows: 'repeat(4, 200px)',
            }}
          >
            <div className="col-span-1 row-start-1 row-end-4 overflow-hidden rounded-lg shadow">
              <img
                src={require('@/assets/bg-04.jpg')}
                alt="bg image"
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="col-span-1 row-start-1 row-end-2 overflow-hidden rounded-lg shadow">
              <img
                src={require('@/assets/bg-04.jpg')}
                alt="bg image"
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="row-start-1 row-end-3 overflow-hidden rounded-lg shadow">
              <img
                src={require('@/assets/bg-04.jpg')}
                alt="bg image"
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="row-start-4 row-end-5 overflow-hidden rounded-lg shadow">
              <img
                src={require('@/assets/bg-04.jpg')}
                alt="bg image"
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="row-start-2 row-end-5 overflow-hidden rounded-lg shadow">
              <img
                src={require('@/assets/bg-04.jpg')}
                alt="bg image"
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="row-start-3 row-end-5 overflow-hidden rounded-lg shadow">
              <img
                src={require('@/assets/bg-04.jpg')}
                alt="bg image"
                className="object-cover object-center w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
