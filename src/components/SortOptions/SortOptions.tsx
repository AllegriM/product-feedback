import { useState } from 'react';
import ArrowDown from '../Icons/ArrowDown';

function SortOptions() {
  const sortOptions: string[] = ['Most Upvotes', 'Least Upvotes', 'Most Comments', 'Least Comments'];

  const [select, setSelect] = useState<boolean>(true);
  const [selectOption, setSelectOption] = useState<string>('Most Upvotes');

  const handleSelectOption = (option: string) => {
    setSelectOption(option);
    setSelect(!select);
  };
  return (
    <>
      <button className="flex items-center text-sm" onClick={() => setSelect(!select)}>
        Sort by:
        <span className="flex items-center">
          <span className="block ml-1 mr-2 truncate font-bold text-sm">{selectOption}</span>
          <ArrowDown />
        </span>
      </button>
      <ul
        className={`${
          select ? 'opacity-0 hidden' : 'opacity-100'
        } absolute transition ease-in duration-100 top-28 z-10 mt-1 max-h-56 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`}
        tabIndex={-1}
        role="listbox"
        aria-labelledby="listbox-label"
        aria-activedescendant="listbox-option-3"
      >
        {sortOptions.map((option) => {
          return (
            <li
              key={option}
              onClick={() => handleSelectOption(option)}
              onKeyDown={() => {
                handleSelectOption(option);
              }}
              className={`${
                option === selectOption ? 'text-darkPurple' : 'text-gray-900'
              } relative select-none py-2 pl-3 pr-9 cursor-pointer hover:bg-indigo-500 hover:text-white`}
              id="listbox-option-0"
              role={'option'}
              aria-selected={option === selectOption}
            >
              <div className="flex items-center">
                <span className={`${option ? 'font-semibold' : 'font-normal'}  block truncate`}>{option}</span>
              </div>
              <span
                className={`${
                  option === selectOption ? 'block  text-indigo-600 hover:text-white' : 'hidden text-white'
                }  text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4`}
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default SortOptions;
