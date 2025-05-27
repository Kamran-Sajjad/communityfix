// export default function FormRadioGroup({ 
//     title, 
//     name, 
//     options, 
//     selectedValue, 
//     onChange,
//     columns = 1,
//     wrapperClassName
//   }) {
//     return (
//       <div className="mb-2">
//         <h2 className="text-lg md:text-xl font-semibold mb-3">{title}</h2>
//         {/* <div className={`grid grid-cols-${columns} gap-y-3`}> */}
//         {/* <div className={`flex flex-wrap gap-4`}> */}
//         <div className={`grid grid-cols-${columns} gap-4 ${wrapperClassName}`}>

//           {options.map((option) => (
//             <label key={option.value} className="flex items-center">
//               <input
//                 type="radio"
//                 name={name}
//                 value={option.value}
//                 checked={selectedValue === option.value}
//                 onChange={() => onChange(option.value)}
//                 className="mr-2"
//               />
//               <span className="text-sm md:text-base">{option.label}</span>
//             </label>
//           ))}
//         </div>
//       </div>
//     );
//   }

export default function FormRadioGroup({ 
  title, 
  name, 
  options, 
  selectedValue, 
  onChange,
  wrapperClassName
}) {
  return (
    <div className="mb-2">
      <h2 className="text-lg md:text-xl font-semibold mb-3">{title}</h2>
      <div className={`${wrapperClassName}`}>
        {options.map((option) => (
          <label key={option.value} className="flex items-center">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => onChange(option.value)}
              className="mr-2"
            />
            <span className="text-sm md:text-base">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
