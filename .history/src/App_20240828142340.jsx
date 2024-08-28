import React, { useState } from 'react';

function PageSelector() {
  const [allChecked, setAllChecked] = useState(false);
  const [pages, setPages] = useState({
    page1: false,
    page2: false,
    page3: false,
    page4: false,
  });

  const handleAllCheck = () => {
    const newCheckedStatus = !allChecked;
    setAllChecked(newCheckedStatus);
    setPages({
      page1: newCheckedStatus,
      page2: newCheckedStatus,
      page3: newCheckedStatus,
      page4: newCheckedStatus,
    });
  };

  const handlePageCheck = (page) => {
    const newPages = { ...pages, [page]: !pages[page] };
    setPages(newPages);
    setAllChecked(Object.values(newPages).every((val) => val === true));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white border border-gray-300 shadow-lg rounded-lg p-6 flex flex-col">
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={allChecked}
            onChange={handleAllCheck}
            className="h-5 w-5 text-blue-600 border-gray-300 rounded mr-3"
          />
          <label className="text-lg font-medium text-gray-800">All Pages</label>
        </div>
        <div className="overflow-y-auto max-h-64 mb-4">
          {Object.keys(pages).map((page, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={pages[page]}
                onChange={() => handlePageCheck(page)}
                className="h-5 w-5 text-blue-600 border-gray-300 rounded mr-3"
              />
              <label className="text-sm font-medium text-gray-800 capitalize">{page}</label>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg text-lg font-semibold hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 transition ease-in-out duration-150">
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

export default PageSelector;
