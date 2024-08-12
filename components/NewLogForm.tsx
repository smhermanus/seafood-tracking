import { FaCalendar } from "react-icons/fa";

const NewLogTable = () => {
  return (
    <div>
      <div className="flex h-10 w-full justify-between rounded-t bg-SeaTrackingBlue pt-1">
        <span className="ml-3 text-lg font-bold text-white">New Log</span>
      </div>
      <div className="bg-white shadow-md">
        <form className="flex flex-1 p-4">
          <div className="flex items-center">
            <select className="mr-3 w-[200px] flex-1 rounded border border-gray-300 bg-LightBlue p-[5px] outline-none text-grey-600">
              <option value="">Choose Port</option>
              <option>Cape Town Harbour</option>
              <option>Durban Harbour</option>
              choose
            </select>
            <h2 className="mr-3">from</h2>
            <div className="flex items-center">
              <input
                className="mr-3 w-[140px] rounded bg-LightBlue p-1 text-center"
                placeholder="Nov 12, 2024"
              />
            </div>
            <div className="flex items-center">
              <input
                className="mr-3 w-[100px] rounded bg-LightBlue p-1 text-center"
                placeholder="08:00"
              />
            </div>
            <h2 className="mr-3">to</h2>
            <div className="flex items-center">
              <input
                className="mr-3 w-[140px] rounded bg-LightBlue p-1 text-center"
                placeholder="Nov 12, 2024"
              />
            </div>
            <div className="flex items-center">
              <input
                className="mr-3 w-[100px] rounded bg-LightBlue p-1 text-center"
                placeholder="08:00"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="flex h-8 w-full justify-between bg-LightBlue pt-1">
        <span className="ml-3 font-bold text-slate-600">
          <span className="ml-7 mr-[150px]">Catch</span>
          <span className="mr-20 text-left">Qauntity</span>
          <span className="mr-[340px]">Weight</span>
          <span>Show Permit(s)</span>
        </span>
      </div>
      <div className="bg-white p-4 shadow-md">
        <form className="flex flex-1 p-4">
          <div className="flex items-center">
            <select className="mr-6 w-[140px] flex-1 rounded border border-gray-300 bg-gray-200 p-[5px] outline-none">
              <option value="">Catch</option>
              <option>Fish</option>
              <option>Grabs</option>
            </select>
            <div className="flex items-center">
              <input
                className="mr-6 w-[140px] rounded bg-gray-200 p-1 text-center"
                placeholder="enter quantity"
              />
            </div>
            <div className="flex items-center">
              <input
                className="mr-3 w-[100px] rounded bg-gray-200 p-1 text-center"
                placeholder="weight"
              />
            </div>

            <div className="flex items-center">
              <button
                className="mr-3 w-[120px] rounded bg-SeaTrackingBlue text-white p-1 text-center ml-80"
              >
                View Permit
              </button>
            </div>
            
          </div>
         
        </form>
        <h2 className="text-gray-400 ml-4">+ Add New</h2>
      </div>
    </div>
  );
};

export default NewLogTable;
