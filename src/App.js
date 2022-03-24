import './App.css';
import Main from './Main'

function App() {
  return (
    <Main/>
  );
}

export default App;

// import Select from "react-select";
// import { useState } from "react";

// const allOptions = [
//   {
//     label: "john",
//     value: 1
//   },
//   {
//     label: "joe",
//     value: 2
//   },
//   {
//     label: "joel",
//     value: 3
//   },
//   {
//     label: "jackie",
//     value: 4
//   }
// ];

// const generateInitialState = (numberOfSelects) =>
//   numberOfSelects.map((item) => null);

// const CustomSelectComponent = ({ value, options, onSelect }) => {
//   return <Select value={value} options={options} isMulti onChange={onSelect} />;
// };

// export default function App() {
//   const [selectState, setSelectState] = useState(() =>
//     // increase the array elements to add more select fields
//     generateInitialState(["Group1", "Group2", "Group3"])
//   );

//   const onSelectValues = (value, index) => {
//     // clone state
//     const clonedSelectState = JSON.parse(JSON.stringify(selectState));

//     clonedSelectState[index] = value;
//     setSelectState(clonedSelectState);
//   };

//   return (
//     <div className="App">
//       {selectState.map((selectCount, index) => {
//         const options = getOptionsToRender(selectState, allOptions);
//         return (
//           <CustomSelectComponent
//             value={selectState[index]}
//             options={options}
//             onSelect={(value) => onSelectValues(value, index)}
//             key={index}
//           />
//         );
//       })}
//     </div>
//   );
// }

// const getOptionsToRender = (allSelectedOptions, allOptions) => {
//   // convert [[{}, {}], [{}]] -> [{}, {}, {}]
//   const filteredOptions = allSelectedOptions.flatMap((options) => options);

//   const optionsToRender =
//     filteredOptions.length > 0
//       ? allOptions.filter(
//           (option) =>
//             !filteredOptions.some(
//               (selectOption) =>
//                 option && selectOption && option.value === selectOption.value
//             )
//         )
//       : allOptions;

//   return optionsToRender;
// };

