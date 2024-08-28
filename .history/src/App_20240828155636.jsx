import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import '@fontsource/montserrat'; // Import Montserrat font

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
        fontFamily: 'Montserrat, sans-serif', // Apply Montserrat font
      }}
    >
      <Box
        sx={{
          width: 400, // Increased width
          backgroundColor: 'white',
          border: '1px solid',
          borderColor: 'grey.300',
          boxShadow: 3,
          borderRadius: 2,
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {/* All Pages */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '18px',
            color: '#1F2128',
            mb: 2,
            p: '8px 15px',
          }}
        >
          <span>All Pages</span>
          <Checkbox
            checked={allChecked}
            onChange={handleAllCheck}
            color="primary"
            sx={{ p: 0 }}
          />
        </Box>
        
        <Box
          sx={{
            borderBottom: '0.7px solid #CDCDCD',
            mb: 2,
          }}
        />
        
        {/* Page List */}
        <Box
          sx={{
            overflowY: 'auto',
            height: 180, // Increased height
            mb: 2,
            border: '1px solid',
            borderColor: 'grey.300',
            borderRadius: 1,
            p: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
          }}
        >
          {Object.keys(pages).map((page) => (
            <Box
              key={page}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: '8px 15px',
                backgroundColor: 'white',
              }}
            >
              <span>{page}</span>
              <Checkbox
                checked={pages[page]}
                onChange={() => handlePageCheck(page)}
                color="primary"
                sx={{ p: 0 }}
              />
            </Box>
          ))}
        </Box>
        
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 'auto',
          }}
        >
          <Button
            variant="contained"
            sx={{
              width: '100%',
              borderRadius: 1,
              backgroundColor: '#FFCE22',
              color: '#1F2128',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#FFD84D',
                boxShadow: 'none',
              },
            }}
          >
            Done
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default PageSelector;
