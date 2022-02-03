import React from "react";

function Destination(props) {
  let arr = [];
  const getSelectedValue = () => {
    let list = document.querySelectorAll("#destination");
    arr = [];
    for (let i = 0; i < list.length; i++) {
      arr.push(list[i].value);
    } 
    console.log(arr);
    return arr;
  };
  return (
    <>
      {props.destination_count.map((i) => {
        return (
          <div className="each_card">
            <form action="#">
              <label for="destination">{i}</label>
              <select
                name="languages"
                id="destination"
                onChange={getSelectedValue}
              >
                <option>Default</option>
                {props.Destination_list.map((value) => {
                  console.log(arr.includes(value.name), value.name, arr);
                  return (
                    <>
                      <option value={value.name}>{value.name}</option>
                    </>
                  );
                })}
              </select>
            </form>
          </div>
        );
      })}
    </>
  );
}

export default Destination;
