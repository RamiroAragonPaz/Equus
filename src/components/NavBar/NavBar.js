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

//Css
import './NavBar.css'
//Files
import equus from '../../components/img/equus.svg';


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container className='toolBar' maxWidth="xl">
        <Toolbar disableGutters >
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
                <Link className='link-a' to={`/`}>
                <MenuItem onClick={handleCloseNavMenu} >
                  <Typography textAlign="center" className='link-a' sx={{}}>Inicio</Typography>
                </MenuItem> 
                </Link>
                <Link className='link-a' to={`/Nosotros`}>
                <MenuItem onClick={handleCloseNavMenu} >
                  <Typography textAlign="center" className='link-a' sx={{}}>Nosotros</Typography>
                </MenuItem> 
                </Link>
                <Link className='link-a' to={`/Bodegas`}>
                <MenuItem onClick={handleCloseNavMenu} >
                  <Typography textAlign="center" className='link-a' sx={{}}>Bodegas</Typography>
                </MenuItem> 
                </Link>
                <Link className='link-a' to={`/Contacto`}>
                <MenuItem onClick={handleCloseNavMenu} >
                  <Typography textAlign="center"  sx={{}}>Contacto</Typography>
                </MenuItem> 
                </Link>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Link to={`/`} className="buttons">
                <Button 
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block'}}
                className="nosotros font-link"
              >
                Inicio
              </Button>
              </Link>
              <Link to={`/Nosotros`} className="buttons">
                <Button 
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block'}}
                className="nosotros font-link"
              >
                Nosotros
              </Button>
              </Link>
              <Link to={`/Bodegas`} className="buttons">
                <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block'}}
              >
                Bodegas
              </Button>
              </Link>
              <Link to={`/Contacto`} className="buttons">
                <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block'}}
              >
                Contacto
              </Button>
              </Link>
              {/* <Link to={`/Redes`} className="buttons">
                <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block'}}
              >
                Redes
              </Button> 
              </Link>*/}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
          <div className='img-container'>
            <Link to={`/`}>
                <img src={equus} alt="logo" className='logo'/>
            </Link>
          </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
