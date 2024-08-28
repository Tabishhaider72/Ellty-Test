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
    <div className="absolute top-[85px] left-[104px] w-[370px] h-[326px] bg-white border border-gray-200 shadow-lg rounded-md p-4 flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={allChecked}
            onChange={handleAllCheck}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <span className="text-sm font-medium text-black">All Pages</span>
        </label>
      </div>
      <div className="overflow-y-scroll h-[164px]">
        {Object.keys(pages).map((page, index) => (
          <div key={index} className="flex justify-between items-center mb-2">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={pages[page]}
                onChange={() => handlePageCheck(page)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <span className="text-sm font-medium text-black capitalize">{page}</span>
            </label>
          </div>
        ))}
      </div>
      <div className="mt-auto flex justify-end">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Done</button>
      </div>
    </div>
  );
}

export default PageSelector;
