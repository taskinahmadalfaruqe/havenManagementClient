import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import useAdmin from '../../../Hooks/useAdmin';
import { Button } from '@mui/base';
import useMember from '../../../Hooks/useMember';

function NavBar() {
    const { user, handelLogOut } = useAuth();
    const [isAdmin] = useAdmin();
    const [isMember] = useMember();
    const navigate = useNavigate()
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const logout = () => {
        navigate('/')
        handelLogOut();
    }
    return (
        <AppBar position="fixed" style={{position:'fixed', top:'10px', left:0}} >
            <Container maxWidth='xl' sx={{ background: 'none' }}>
                <Toolbar disableGutters>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>

                        {/* web site logo  */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
                            onClick={() => navigate('/')}>
                            <AccountBalanceIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                            <Typography
                                href="/"
                                variant="h6"
                                noWrap
                                component="a"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                Haven
                            </Typography>
                        </Box>

                        {/* SMALL DEVICE START */}
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
                                <MenuItem onClick={handleCloseNavMenu} >
                                    <Typography sx={{ width: '100%' }}>
                                        <NavLink
                                            to="/"
                                            className={({ isActive }) =>
                                                isActive ? "active" : ""
                                            }
                                            style={({ isActive }) =>
                                                isActive ?
                                                    { backgroundColor: '#42a5f5', color: 'white', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '180px' }
                                                    :
                                                    { color: '#000', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '180px' }
                                            }
                                        >
                                            Home
                                        </NavLink>
                                    </Typography>
                                </MenuItem>

                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography sx={{ width: '100%' }}>
                                        <NavLink
                                            to="/apartment"
                                            className={({ isActive }) =>
                                                isActive ? "active" : ""
                                            }
                                            style={({ isActive }) =>
                                                isActive ?
                                                    { backgroundColor: '#42a5f5', color: 'white', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '180px' }
                                                    :
                                                    { color: '#000', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '180px' }
                                            }
                                        >
                                            Apartment
                                        </NavLink>
                                    </Typography>
                                </MenuItem>
                                {user && isAdmin ?
                                    <Box>

                                        <MenuItem onClick={handleCloseNavMenu}>
                                            <Typography sx={{ width: '100%' }}>
                                                <NavLink
                                                    to="/dasboard/admin"
                                                    className={({ isActive }) =>
                                                        isActive ? "active" : ""
                                                    }
                                                    style={({ isActive }) =>
                                                        isActive ?
                                                            { backgroundColor: '#42a5f5', color: 'white', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '180px' }
                                                            :
                                                            { color: '#000', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '180px' }
                                                    }
                                                >
                                                    Admin Dasboard
                                                </NavLink>
                                            </Typography>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseNavMenu}>
                                            <Typography sx={{ width: '100%' }}>
                                                <NavLink
                                                    to="/dasboard/cupon"
                                                    className={({ isActive }) =>
                                                        isActive ? "active" : ""
                                                    }
                                                    style={({ isActive }) =>
                                                        isActive ?
                                                            { backgroundColor: '#42a5f5', color: 'white', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '180px' }
                                                            :
                                                            { color: '#000', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '180px' }
                                                    }
                                                >
                                                    Manage Cupon
                                                </NavLink>
                                            </Typography>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseNavMenu}>
                                            <Typography sx={{ width: '100%' }}>
                                                <NavLink
                                                    to="/dasboard/manageMember"
                                                    className={({ isActive }) =>
                                                        isActive ? "active" : ""
                                                    }
                                                    style={({ isActive }) =>
                                                        isActive ?
                                                            { backgroundColor: '#42a5f5', color: 'white', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '180px' }
                                                            :
                                                            { color: '#000', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '180px' }
                                                    }
                                                >
                                                    Manage Member
                                                </NavLink>
                                            </Typography>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseNavMenu}>
                                            <Typography sx={{ width: '100%' }}>
                                                <NavLink
                                                    to="/dasboard/memberRequest"
                                                    className={({ isActive }) =>
                                                        isActive ? "active" : ""
                                                    }
                                                    style={({ isActive }) =>
                                                        isActive ?
                                                            { backgroundColor: '#42a5f5', color: 'white', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '180px' }
                                                            :
                                                            { color: '#000', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '180px' }
                                                    }
                                                >
                                                    Member Request
                                                </NavLink>
                                            </Typography>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseNavMenu}>
                                            <Typography sx={{ width: '100%' }}>
                                                <NavLink
                                                    to="/dasboard/manageAnnoucement"
                                                    className={({ isActive }) =>
                                                        isActive ? "active" : ""
                                                    }
                                                    style={({ isActive }) =>
                                                        isActive ?
                                                            { backgroundColor: '#42a5f5', color: 'white', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '180px' }
                                                            :
                                                            { color: '#000', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '180px' }
                                                    }
                                                >
                                                    Make Announcement
                                                </NavLink>
                                            </Typography>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseNavMenu}>
                                            <Typography sx={{ width: '100%' }}>
                                                <NavLink
                                                    to="/dasboard/addApeartment"
                                                    className={({ isActive }) =>
                                                        isActive ? "active" : ""
                                                    }
                                                    style={({ isActive }) =>
                                                        isActive ?
                                                            { backgroundColor: '#42a5f5', color: 'white', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '180px' }
                                                            :
                                                            { color: '#000', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '180px' }
                                                    }
                                                >
                                                    Add Apartment
                                                </NavLink>
                                            </Typography>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseNavMenu}>
                                            <Typography sx={{ width: '100%' }}>
                                                <NavLink
                                                    to="/dasboard/allPayments"
                                                    className={({ isActive }) =>
                                                        isActive ? "active" : ""
                                                    }
                                                    style={({ isActive }) =>
                                                        isActive ?
                                                            { backgroundColor: '#42a5f5', color: 'white', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '180px' }
                                                            :
                                                            { color: '#000', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '180px' }
                                                    }
                                                >
                                                    Payments
                                                </NavLink>
                                            </Typography>
                                        </MenuItem>
                                    </Box>
                                    :
                                    ""}

                                {
                                    user && isMember ?
                                        <Box>
                                            <MenuItem onClick={handleCloseNavMenu}>
                                                <Typography sx={{ width: '100%' }}>
                                                    <NavLink
                                                        to={'/dasboard/makePayment'}
                                                        className={({ isActive }) =>
                                                            isActive ? "active" : ""
                                                        }
                                                        style={({ isActive }) =>
                                                            isActive ?
                                                                { backgroundColor: '#42a5f5', color: 'white', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '180px' }
                                                                :
                                                                { color: '#000', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '180px' }
                                                        }
                                                    >
                                                        Make Payment
                                                    </NavLink>
                                                </Typography>
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseNavMenu}>
                                                <Typography sx={{ width: '100%' }}>
                                                    <NavLink
                                                        to={'/dasboard/paymentHistory'}
                                                        className={({ isActive }) =>
                                                            isActive ? "active" : ""
                                                        }
                                                        style={({ isActive }) =>
                                                            isActive ?
                                                                { backgroundColor: '#42a5f5', color: 'white', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '180px' }
                                                                :
                                                                { color: '#000', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '180px' }
                                                        }
                                                    >
                                                        Payment History
                                                    </NavLink>
                                                </Typography>
                                            </MenuItem>
                                        </Box>
                                        :
                                        ''
                                }
                                {
                                    user ?
                                        <Box>
                                            <MenuItem onClick={handleCloseNavMenu}>
                                                <Typography sx={{ width: '100%' }}>
                                                    <NavLink
                                                        to={'/dasboard/profile'}
                                                        className={({ isActive }) =>
                                                            isActive ? "active" : ""
                                                        }
                                                        style={({ isActive }) =>
                                                            isActive ?
                                                                { backgroundColor: '#42a5f5', color: 'white', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '180px' }
                                                                :
                                                                { color: '#000', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '180px' }
                                                        }
                                                    >
                                                        Profile
                                                    </NavLink>
                                                </Typography>
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseNavMenu}>
                                                <Typography sx={{ width: '100%' }}>
                                                    <NavLink
                                                        to={'/dasboard/annoucement'}
                                                        className={({ isActive }) =>
                                                            isActive ? "active" : ""
                                                        }
                                                        style={({ isActive }) =>
                                                            isActive ?
                                                                { backgroundColor: '#42a5f5', color: 'white', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '180px' }
                                                                :
                                                                { color: '#000', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '180px' }
                                                        }
                                                    >
                                                        Announcment
                                                    </NavLink>
                                                </Typography>
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseNavMenu}>
                                                <Typography sx={{ width: '100%' }}>
                                                    <NavLink
                                                        to={'/'}
                                                        onClick={logout}
                                                        className={({ isActive }) =>
                                                            isActive ? "active" : ""
                                                        }
                                                        style={({ isActive }) =>
                                                            isActive ?
                                                                { backgroundColor: '#42a5f5', color: 'white', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '180px' }
                                                                :
                                                                { color: '#000', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '180px' }
                                                        }
                                                    >
                                                        Log Out
                                                    </NavLink>
                                                </Typography>
                                            </MenuItem>
                                        </Box>
                                        :
                                        <MenuItem onClick={handleCloseNavMenu}>
                                            <Typography sx={{ width: '100%' }}>
                                                <NavLink
                                                    to="/login"
                                                    className={({ isActive }) =>
                                                        isActive ? "active" : ""
                                                    }
                                                    style={({ isActive }) =>
                                                        isActive ?
                                                            { backgroundColor: '#42a5f5', color: 'white', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '180px' }
                                                            :
                                                            { color: '#000', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '180px' }
                                                    }
                                                >
                                                    Log In
                                                </NavLink>
                                            </Typography>
                                        </MenuItem>
                                }
                            </Menu>
                        </Box>
                        {/* SMALL DEVICE START */}

                        {/* BIG DIVICE  START */}
                        {/* LOGO  */}
                        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <AccountBalanceIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                href="#app-bar-with-responsive-menu"
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
                                Haven
                            </Typography>
                        </Box>
                        {/* NAVLINK  */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <MenuItem onClick={handleCloseNavMenu} >
                                <Typography sx={{ width: '100%' }}>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            isActive ? "active" : ""
                                        }
                                        style={({ isActive }) =>
                                            isActive ?
                                                { backgroundColor: '#42a5f5', color: 'white', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100px' }
                                                :
                                                { color: '#000', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100px' }
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </Typography>
                            </MenuItem>

                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography sx={{ width: '100%' }}>
                                    <NavLink
                                        to="/apartment"
                                        className={({ isActive }) =>
                                            isActive ? "active" : ""
                                        }
                                        style={({ isActive }) =>
                                            isActive ?
                                                { backgroundColor: '#42a5f5', color: 'white', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100px' }
                                                :
                                                { color: '#000', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100px' }
                                        }
                                    >
                                        Apartment
                                    </NavLink>
                                </Typography>
                            </MenuItem>
                            {
                                user ? <MenuItem onClick={handleCloseNavMenu}>
                                <Typography sx={{ width: '100%' }}>
                                    <NavLink
                                        to="/dasboard"
                                        className={({ isActive }) =>
                                            isActive ? "active" : ""
                                        }
                                        style={({ isActive }) =>
                                            isActive ?
                                                { backgroundColor: '#42a5f5', color: 'white', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100px' }
                                                :
                                                { color: '#000', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100px' }
                                        }
                                    >
                                        Dasboard
                                    </NavLink>
                                </Typography>
                            </MenuItem>
                            : 
                            ''
                            }
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            {
                                user ?
                                    <Box>
                                        <Tooltip title="Open settings">
                                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                                <Avatar alt="Remy Sharp" src={user?.photoURL} />
                                            </IconButton>
                                        </Tooltip>
                                        <Menu
                                            sx={{ mt: '45px', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
                                            id="menu-appbar"
                                            anchorEl={anchorElUser}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={Boolean(anchorElUser)}
                                            onClose={handleCloseUserMenu}
                                        >
                                            <MenuItem onClick={handleCloseNavMenu} >
                                                <Typography sx={{ width: '100%' }}>
                                                    {user?.displayName}
                                                </Typography>
                                            </MenuItem>

                                            <MenuItem onClick={handleCloseNavMenu}>
                                                <Typography sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                                    <NavLink
                                                        to="/dasboard"
                                                        className={({ isActive }) =>
                                                            isActive ? "active" : ""
                                                        }
                                                        style={({ isActive }) =>
                                                            isActive ?
                                                                { backgroundColor: '#42a5f5', color: 'white', textDecoration: 'none', width: '100%', padding: '5px' }
                                                                :
                                                                { color: '#000', textDecoration: 'none', width: '100%', padding: '5px' }
                                                        }
                                                    >
                                                        Dasboard
                                                    </NavLink>
                                                </Typography>
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseNavMenu}>
                                                <Typography sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                                    <NavLink
                                                        variant="outlined"
                                                        to={'/'}
                                                        onClick={logout}
                                                        className={({ isActive }) =>
                                                            isActive ? "active" : ""
                                                        }
                                                        style={({ isActive }) =>
                                                            isActive ?
                                                                { backgroundColor: '#42a5f5', color: 'white', textDecoration: 'none', width: '100%', padding: '5px' }
                                                                :
                                                                { color: '#000', textDecoration: 'none', width: '100%', padding: '5px' }
                                                        }
                                                    >
                                                        Log Out
                                                    </NavLink>
                                                </Typography>
                                            </MenuItem>
                                        </Menu>
                                    </Box>
                                    :
                                    <Button variant="contained"
                                        onClick={() => navigate('/login')}>Login</Button>
                            }


                        </Box>
                        {/* BIG DIVICE  END */}

                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;