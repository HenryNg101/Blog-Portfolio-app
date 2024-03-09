import * as React from 'react';
import {
  AppBar, Box, Toolbar, IconButton,
  Menu, Container, Button, MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

//Some shared styles
const lightToDark = {backgroundColor: 'white', color: 'black'};

const menuTextStyle = { color: 'white', '&:hover': lightToDark};
const homeButtonStyle = { ...menuTextStyle, fontWeight: 'bold', fontSize: 18};
const LgDisplayStyle = {display: { xs: 'none', md: 'flex'}};
const SmDisplayStyle = {display: { xs: 'flex', md: 'none'}, flexGrow: 1};
const menuButtonStyle = {border: 'solid thin white', borderRadius: 1, '&:hover': { ...lightToDark, '& .MuiSvgIcon-root': lightToDark}};

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const pages = ['Projects'];  //TODO: Add the blog page later, when we done the blog backend api

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //Render differently when screen size is large or small.
  return (
    <AppBar position="static" sx={{backgroundColor: 'rgb(9,54,0)', mb: 2}}>
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          {/* This is the elements design for navigation menu for normal screen size */}
          <Button sx={{...homeButtonStyle, ...LgDisplayStyle}}>
            <Link to={`/`}>Henry Nguyen</Link>
          </Button>

          <Box sx={LgDisplayStyle}>
            {pages.map((page) => (
              <Button key={page} sx={{...menuTextStyle, mx: 0.5}}>
                <Link to={`/${page.toLowerCase()}`}>{page}</Link>
              </Button>
            ))}
          </Box>


          {/* This is the elements design for navigation menu for small screen size, esp on mobile */}
          <Box sx={SmDisplayStyle}>
            <IconButton size="large" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} sx={menuButtonStyle}>
              <MenuIcon sx={{color: 'white'}}/>
            </IconButton>
            <Menu
              id="menu-appbar" keepMounted anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={`/${page.toLowerCase()}`}>{page}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Button sx={{...homeButtonStyle, ...SmDisplayStyle}}>
            <Link to={`/`}>Henry Nguyen</Link>
          </Button>
          
          <div style={{flexGrow: 1}}></div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;