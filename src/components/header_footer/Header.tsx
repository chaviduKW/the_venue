import { AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

//import SideDrawer from './SideDrawer'

const Header = () => {
    return (
        <AppBar
            position="fixed"
            style={{
                backgroundColor: "#2f2f2f",
                boxShadow: "none",
                padding: '10px 0px'
            }}
        >
            <Toolbar>
                <div className='header_logo'>
                    <div className="font_righteous header_logo_venue">The Venue</div>
                    <div className="header_logo_title">Musicle Events</div>
                </div>

                <IconButton
                    ariea-aria-label='Menue'
                    color="inherit"
                >
                    <MenuIcon/>
                </IconButton>

                {/* <SideDrawer/> */}

            </Toolbar>
        </AppBar>
    )
}

export default Header;