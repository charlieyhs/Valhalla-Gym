import React, { useState, useRef } from 'react';
import { Avatar, Popper, Box } from '@mui/material';
import PropTypes from 'prop-types';

export function AvatarTooltip({ src, alt }) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  return (
    <button
      ref={anchorRef}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      style={{ display: 'inline-block', background: 'transparent', border: 'none' }}
    >
      <Avatar src={src} alt={alt} sx={{ width: 120, height: 120 }} />

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement="top"
        modifiers={[{ name: 'offset', options: { offset: [10, 10] } }]}
      >
        <Box sx={{ p: 1, pointerEvents: 'none' }}> 
          <Avatar src={src} alt={alt} sx={{ width: 220, height: 220, boxShadow: 3 }} />
        </Box>
      </Popper>
    </button>
  );
}

AvatarTooltip.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
};