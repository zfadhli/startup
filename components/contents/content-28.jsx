export default function content() {
  return (
    <>
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-sm font-bold text-center text-gray-500 uppercase">Our Clients</h3>
          <h2 className="mt-4 text-4xl font-bold text-center">
            Folks at these Awesome Companies are Already Using Startup Framework
          </h2>
          <div className="mt-16">
            <ul className="flex space-x-4">
              <li>
                <img src={require('@/assets/client-01.png')} alt="" className="w-48" />
              </li>
              <li>
                <img src={require('@/assets/client-02.png')} alt="" className="w-48" />
              </li>
              <li>
                <img src={require('@/assets/client-03.png')} alt="" className="w-48" />
              </li>
              <li>
                <img src={require('@/assets/client-04.png')} alt="" className="w-48" />
              </li>
              <li>
                <img src={require('@/assets/client-05.png')} alt="" className="w-48" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
