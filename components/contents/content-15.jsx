export default function content() {
  return (
    <>
      <div className="relative overflow-hidden h-192">
        <div className="absolute z-0">
          <img
            src={require('@/assets/bg-02.jpg')}
            alt="bg image"
            className="object-cover"
            style={{
              filter: 'blur(5px)',
            }}
          />
        </div>
        <div className="relative z-50 h-full">
          <div className="grid h-full max-w-4xl grid-cols-5 grid-rows-3 py-20 mx-auto">
            <div className="col-span-3 row-start-3">
              <p className="text-4xl font-bold text-white">Get Some Fresh Air</p>
              <p className="mt-4 text-gray-200">
                The most important part of the Startup Framework are the samples or Bootstrap themes
                and templates. The samples consist of a set of few pages you can use «as is» or add
                new blocks from UI Kit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
