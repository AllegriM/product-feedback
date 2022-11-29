import React from 'react';
function Roadmap() {
  const taskStatus = [
    { color: 'salmon', name: 'Planned', quantity: 2 },
    { color: 'darkPurple', name: 'In-Progress', quantity: 3 },
    { color: 'darkBlue', name: 'Live', quantity: 4 },
  ];

  return (
    <div className="max-w-[255px] flex flex-wrap mx-auto gap-3 bg-white rounded-lg py-4 px-6 mt-4">
      <h4 className="text-darkBlueXs font-extrabold text-lg">Roadmap</h4>
      <p className="underline ml-auto text-darkBlue font-bold">View</p>
      <ul className="w-full">
        {taskStatus.map((task) => {
          return (
            <li key={task.name} className="text-lightGray flex text-lg items-center">
              <div className={`bg-${task.color} h-2 w-2 rounded-full mr-3`}></div>
              <p className="">{task.name}</p>
              <p className="font-bold ml-auto">{task.quantity}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Roadmap;
