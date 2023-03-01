import LogoIcon from '@mui/icons-material/AppRegistration';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { MouseEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Routes } from '@/types/enums';

import appRoutes from '../routes';

const accountFakeTabs = ['Profil', 'Paramètres', 'Déconnexion'];

const APP_NAME = 'RECENSE';

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <AppBar position="static" sx={{ backgroundColor: 'primary.dark' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link
            component={NavLink}
            to={Routes.Home}
            color="inherit"
            underline="none"
            variant="button"
            sx={{
              display: { xs: 'none', md: 'flex' },
              color: 'secondary.main',
            }}
          >
            <MenuItem onClick={handleCloseNavMenu}>
              <LogoIcon sx={{ mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: 5,
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                {APP_NAME}
              </Typography>
            </MenuItem>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="current user account"
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
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              keepMounted
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {appRoutes.map((page) => (
                <Link
                  key={page.key}
                  component={NavLink}
                  to={page.path}
                  color="inherit"
                  underline="none"
                  variant="button"
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" sx={{ letterSpacing: 1 }}>
                      {page.title}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: 5,
              color: 'secondary.main',
              textDecoration: 'none',
              alignItems: 'center',
            }}
          >
            <LogoIcon sx={{ mr: 1 }} />
            {APP_NAME}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {appRoutes.slice(1).map((page) => (
              <Link
                key={page.key}
                component={NavLink}
                to={page.path}
                color="inherit"
                underline="none"
                variant="button"
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{ letterSpacing: 2 }}>
                    {page.title}
                  </Typography>
                </MenuItem>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                alt="profile image"
                src="https://source.unsplash.com/random/40×40"
              />
            </IconButton>
            <Menu
              sx={{ mt: '2.8rem' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              keepMounted
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {accountFakeTabs.map((tab) => (
                <MenuItem key={tab} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{tab}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
