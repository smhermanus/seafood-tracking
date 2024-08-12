import { useState } from "react";
import { FaCheckDouble, FaEnvelope, FaInbox, FaInfo, FaSearch } from "react-icons/fa";

const ReturnTable = () => {
  return (
    <div className="my-6 rounded bg-white shadow-md">
      <div className="flex h-10 w-full justify-between rounded-t bg-SeaTrackingBlue pt-1">
        <span className="ml-3 text-lg font-bold items-center justify-center text-white">Returns</span>
        <span className="flex items-center justify-center">
          <FaSearch size={23} className="mr-4 p-1 text-white" />
        </span>
      </div>
      <table className="w-full min-w-max table-auto">
        <thead>
          <tr className="bg-LightBlue text-sm leading-normal text-gray-600">
            <th className="px-3 py-3 text-left">Event ID</th>
            <th className="px-1 py-3 text-left">Skipper</th>
            <th className="px-1 py-3 text-left">Vessel</th>
            <th className="px-1 py-3 text-left">Company</th>
            <th className="px-1 py-3 text-left">Description</th>
            <th className="px-1 py-3 text-left">Date</th>
            <th className="px-1 py-3 text-left">Time</th>
            <th className="px-1 py-3 text-left">Actions</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="text-sm font-light text-gray-600">
          {/* Add rows dynamically here */}
          <tr className="border-b border-gray-200">
            <td className="whitespace-nowrap px-3 py-3 text-left">GB143</td>
            <td className="px-1 py-3 text-left">Joe Davis</td>
            <td className="px-1 py-3 text-left">Fleur Du Cap</td>
            <td className="px-1 py-3 text-left">Adam’s Fisheries</td>
            <td className="px-1 py-3 text-left">In Transit</td>
            <td className="px-1 py-3 text-left">24-11-21</td>
            <td className="px-1 py-3 text-left">08:45</td>
            <td>
            <select className="bg-LightBlue px-3 py-2 text-left">
              <option value="">0/4 | Confirm Arrival</option>
              <option value="">2/4 | Supply Certificate</option>
              <option value="">1/4 | Log Catch</option>
            </select>
            </td>
            <td className="mt-[10px] flex items-center justify-center gap-2">

              <span className="bg-SeaTrackingBlue rounded-full h-7 w-7 flex items-center justify-center">
                <FaInfo size={17} className=" text-white"/>
              </span>

              <span className="bg-gray-400 rounded-full h-7 w-7 flex items-center justify-center">
                <FaEnvelope size={17} className="text-white"/>
              </span>

              <span className="bg-green-400 rounded-full h-7 w-7 flex items-center justify-center">
                <FaCheckDouble size={17} className=" text-white"/>
              </span>
            
            </td>
          </tr>

          <tr className="border-b border-gray-200">
            <td className="whitespace-nowrap px-3 py-3 text-left">GB143</td>
            <td className="px-1 py-3 text-left">Joe Davis</td>
            <td className="px-1 py-3 text-left">Fleur Du Cap</td>
            <td className="px-1 py-3 text-left">Adam’s Fisheries</td>
            <td className="px-1 py-3 text-left">In Transit</td>
            <td className="px-1 py-3 text-left">24-11-21</td>
            <td className="px-1 py-3 text-left">08:45</td>
            <td>
            <select className="bg-LightBlue px-3 py-2 text-left">
              <option value="">2/4 | Supply Certificate</option>
              <option value="">0/4 | Confirm Arrival</option>
              <option value="">1/4 | Log Catch</option>
            </select>
            </td>
            <td className="mt-[10px] flex items-center justify-center gap-2">

              <span className="bg-SeaTrackingBlue rounded-full h-7 w-7 flex items-center justify-center">
                <FaInfo size={17} className=" text-white"/>
              </span>

              <span className="bg-gray-400 rounded-full h-7 w-7 flex items-center justify-center">
                <FaEnvelope size={17} className="text-white"/>
              </span>

              <span className="bg-green-400 rounded-full h-7 w-7 flex items-center justify-center">
                <FaCheckDouble size={17} className=" text-white"/>
              </span>
            
            </td>
          </tr>

          <tr className="border-b border-gray-200 ">
            <td className="whitespace-nowrap px-3 py-3 text-left">GB143</td>
            <td className="px-1 py-3 text-left">Joe Davis</td>
            <td className="px-1 py-3 text-left">Fleur Du Cap</td>
            <td className="px-1 py-3 text-left">Adam’s Fisheries</td>
            <td className="px-1 py-3 text-left">In Transit</td>
            <td className="px-1 py-3 text-left">24-11-21</td>
            <td className="px-1 py-3 text-left">08:45</td>
            <td>
            <select className="bg-LightBlue px-3 py-2 text-left">
              <option value="">1/4 | Log Catch</option>
              <option value="">2/4 | Supply Certificate</option>
              <option value="">0/4 | Confirm Arrival</option>
            </select>
            </td>
            <td className="mt-[10px] flex items-center justify-center gap-2">

              <span className="bg-SeaTrackingBlue rounded-full h-7 w-7 flex items-center justify-center">
                <FaInfo size={17} className=" text-white"/>
              </span>

              <span className="bg-gray-400 rounded-full h-7 w-7 flex items-center justify-center">
                <FaEnvelope size={17} className="text-white"/>
              </span>

              <span className="bg-green-400 rounded-full h-7 w-7 flex items-center justify-center">
                <FaCheckDouble size={17} className=" text-white"/>
              </span>
            
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReturnTable;
