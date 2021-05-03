import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


import Link from "../src/Link";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Language
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component={Link} href="/tavern/elgrecomenu/en">English</MenuItem>
        <MenuItem onClick={handleClose} component={Link} href="/tavern/elgrecomenu/gr">Greek</MenuItem>
        <MenuItem onClick={handleClose} component={Link} href="/tavern/elgrecomenu/bg">Bulgarian</MenuItem>
        <MenuItem onClick={handleClose} component={Link} href="/tavern/elgrecomenu/ro">Romanian</MenuItem>
        <MenuItem onClick={handleClose} component={Link} href="/tavern/elgrecomenu/de">German</MenuItem>
      </Menu>
    </div>
  );
}