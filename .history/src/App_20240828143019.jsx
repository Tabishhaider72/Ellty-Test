import React, { useState } from 'react';
import './app.css'; // Import the CSS file

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
    <div className="container">
      <div className="card">
        <div className="header">
          <div
            className={`custom-checkbox ${allChecked ? 'checked' : ''}`}
            onClick={handleAllCheck}
          />
          <label>All Pages</label>
        </div>
        <div className="scrollable-list">
          {Object.keys(pages).map((page, index) => (
            <div key={index} className="list-item">
              <div
                className={`custom-checkbox ${pages[page] ? 'checked' : ''}`}
                onClick={() => handlePageCheck(page)}
              />
              <label>{page}</label>
            </div>
          ))}
        </div>
        <div className="footer">
          <button className="button">Done</button>
        </div>
      </div>
    </div>
  );
}

export default PageSelector;
