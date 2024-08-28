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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: '8px 15px 8px 22px',
            gap: 5,
            mb: 2,
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={allChecked}
                onChange={handleAllCheck}
                color="primary"
              />
            }
            label="All Pages"
            sx={{
              width: 64,
              height: 18,
              fontFamily: 'Montserrat',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '18px',
              color: '#1F2128',
              margin: 0,
            }}
          />
        </Box>
        <Box
          sx={{
            width: '340px',
            height: '0px',
            border: '0.7px solid #CDCDCD',
            mb: 2,
          }}
        />
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
            <Box
              key={page}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: '8px 15px 8px 22px',
                gap: 5,
                mb: 1,
                backgroundColor: 'white',
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={pages[page]}
                    onChange={() => handlePageCheck(page)}
                    color="primary"
                  />
                }
                label={page}
                sx={{
                  width: 35,
                  height: 35,
                  border: '1px solid #BDBDBD',
                  borderRadius: '6px',
                  boxSizing: 'border-box',
                }}
              />
            </Box>
          ))}
        </Box>
        <Box sx={{ mt: 'auto' }}>
          <Button
            variant="contained"
            sx={{
              width: '100%',
              borderRadius: 1,
              backgroundColor: '#FFCE22', // Website color/Orange
              color: '#1F2128', // Black color
              boxShadow: 'none', // Remove shadow
              '&:hover': {
                backgroundColor: '#FFD84D', // Lighter Orange color
                boxShadow: 'none', // Remove shadow on hover
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
