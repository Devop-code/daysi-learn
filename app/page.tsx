export default function Home() {
  return (
    <div className=" flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className=" text-3xl font-bold mb-5">Welcomme to the Daisy UI crash course</h1>
            <div className="mb-4">
              <p className="text-gray-500 mb-2">Buutons</p>
              <button className="btn btn-primary rounded-md">Primary Button</button>
              <button className="btn btn-secondary rounded-md">Primary Button</button>
            </div>
            <div className="mb-4">
              <p className="text-gray-500 mb-5">Alert</p>
              <div className="alert alert-success text-white font-mono">success</div>
              <div className="alert alert-error text-white font-serif">error</div>
            </div>
            <div className="mb-4">
              <p className="text-gray-600 mb-2"> Forms</p>
              <div className="forms-control">
                  <label htmlFor="" className=" label">Name</label>
                  <input type="text" className="input input-bordered"/>
              </div>
            </div>
            <div className="mb-4">
              <p className="card p-4">
                <h2 className="text-xl font-semibold">
                   Card title
                </h2>
                <p className="text-gray-300 text-xl">card content</p>
              </p>
            </div>
      </div>
    </div>
    );
}
