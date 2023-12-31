import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const pages = ['About', 'Projects'];  //TODO: Add the home page later

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //Render differently when screen size is large or small.
  return (
    <AppBar position="static" sx={{backgroundColor: 'gray', mb: 2}}>
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Button
            sx={{ 
              display: { xs: 'none', md: 'flex'}, 
              color: 'black',
              fontFamily: 'Courier New, monospace',
              fontWeight: 'bold',
              fontSize: 20,
              '&:hover': { backgroundColor: 'black', color: 'white'}
            }}
          >
            <Link to={`/`}>Henry Nguyen</Link>
          </Button>

          <Box sx={{display: { xs: 'none', md: 'flex' }}}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  mx: 0.5,
                  color: 'black', 
                  fontFamily: 'monospace',
                  '&:hover': { backgroundColor: 'black', color: 'white' }
                }}
              >
                <Link to={`/${page.toLowerCase()}`}>{page}</Link>
              </Button>
            ))}
          </Box>



          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="default"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={`/${page.toLowerCase()}`}>{page}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Button
            sx={{
              padding: 1,
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Courier New, monospace',
              fontWeight: 'bold',
              fontSize: 20,
              color: 'black',
              '&:hover': {
                backgroundColor: 'black',
                color: 'white',
              },
            }}
          >
            <Link to={`/`}>Henry Nguyen</Link>
          </Button>
          <div style={{flexGrow: 1}}></div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;