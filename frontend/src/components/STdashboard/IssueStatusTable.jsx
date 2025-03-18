// // components/IssueStatusTable.jsx
// import { Filter } from "lucide-react";

// export default function IssueStatusTable() {
//   return (
//     <div className="bg-white rounded-lg border border-gray-100 p-4">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-bold">issue status</h2>
//         <button className="flex items-center space-x-2 bg-gray-100 px-3 py-1.5 rounded-md text-sm">
//           <span>Filter & Short</span>
//           <Filter className="w-4 h-4" />
//         </button>
//       </div>
//       <table className="w-full">
//         <thead>
//           <tr className="text-left text-gray-500">
//             <th className="pb-3">Name</th>
//             <th className="pb-3">Address</th>
//             <th className="pb-3">Age</th>
//             <th className="pb-3">issue</th>
//             <th className="pb-3">Status</th>
//           </tr>
//         </thead>
        // <tbody>
        //   <tr className="border-t border-gray-100">
        //     <td className="py-3">Hasnain</td>
        //     <td className="py-3">Street 4 House 38</td>
        //     <td className="py-3">32</td>
        //     <td className="py-3">Ups installation</td>
        //     <td className="py-3 text-red-500">not completed</td>
        //   </tr>
        //   <tr className="border-t border-gray-100">
        //     <td className="py-3">Kamran</td>
        //     <td className="py-3">Street 7 House 9</td>
        //     <td className="py-3">45</td>
        //     <td className="py-3">Pipe leaks</td>
        //     <td className="py-3">completed</td>
        //   </tr>
        //   <tr className="border-t border-gray-100">
        //     <td className="py-3">Nizam</td>
        //     <td className="py-3">Street 2 House 50</td>
        //     <td className="py-3">22</td>
        //     <td className="py-3">Solar installation</td>
        //     <td className="py-3">completed</td>
        //   </tr>
        // </tbody>
//       </table>
//     </div>
//   );
// }

// components/IssueStatusTable.jsx
import { Filter } from "lucide-react";

const IssueStatusTable=()=> {
// export default function IssueStatusTable() {
  return (
    <div className="bg-white rounded-lg border border-gray-100 p-4 overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg lg:text-xl font-bold">issue status</h2>
        <button className="flex items-center space-x-2 bg-gray-100 px-3 py-1.5 rounded-md text-sm">
          <span>Filter & Short</span>
          <Filter className="w-4 h-4" />
        </button>
      </div>
      <table className="w-full min-w-[600px]">
        <thead>
          <tr className="text-left text-gray-500">
            <th className="pb-3">Name</th>
            <th className="pb-3">Address</th>
            <th className="pb-3">Age</th>
            <th className="pb-3">issue</th>
            <th className="pb-3">Status</th>
          </tr>
        </thead>
        
        <tbody>
          <tr className="border-t border-gray-100">
            <td className="py-3">Hasnain</td>
            <td className="py-3">Street 4 House 38</td>
            <td className="py-3">32</td>
            <td className="py-3">Ups installation</td>
            <td className="py-3 text-red-500">not completed</td>
          </tr>
          <tr className="border-t border-gray-100">
            <td className="py-3">Kamran</td>
            <td className="py-3">Street 7 House 9</td>
            <td className="py-3">45</td>
            <td className="py-3">Pipe leaks</td>
            <td className="py-3">completed</td>
          </tr>
          <tr className="border-t border-gray-100">
            <td className="py-3">Nizam</td>
            <td className="py-3">Street 2 House 50</td>
            <td className="py-3">22</td>
            <td className="py-3">Solar installation</td>
            <td className="py-3">completed</td>
          </tr>
        
        </tbody>
      </table>
    </div>
  );
}


export default IssueStatusTable;