import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';

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
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: 2,
      }}
    >
      <Box
        sx={{
          width: 370,
          height: 326,
          backgroundColor: 'white',
          border: '1px solid',
          borderColor: 'grey.300',
          boxShadow: 3,
          borderRadius: 2,
          p: 2,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ mb: 2 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={allChecked}
                onChange={handleAllCheck}
                color="primary"
              />
            }
            label="All Pages"
          />
        </Box>
        <Box
          sx={{
            overflowY: 'auto',
            height: 164,
            mb: 2,
            border: '1px solid',
            borderColor: 'grey.300',
            borderRadius: 1,
            p: 1,
          }}
        >
          {Object.keys(pages).map((page) => (
            <FormControlLabel
              key={page}
              control={
                <Checkbox
                  checked={pages[page]}
                  onChange={() => handlePageCheck(page)}
                  color="primary"
                />
              }
              label={page}
              sx={{ mb: 1 }}
            />
          ))}
        </Box>
        <Box sx={{ mt: 'auto' }}>
          <Button
            variant="contained"
            color="warning"
            sx={{ borderRadius: 1, width: '100%' }}
          >
            Done
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default PageSelector;
