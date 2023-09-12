import { useEffect,useState } from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import SideDrawer from './SideDrawer'

const Header = () => {
    const [drawerOpen,setDrawerOpen] = useState(false);
    const [headerShow,setHeaderShow] = useState(false);

    const toggleDrawer =(value:boolean) =>{
        setDrawerOpen(value)
    }

    const handleScroll=()=>{
        if(window.scrollY>0){
            setHeaderShow(true);
        }else{
            setHeaderShow(false);
        };
    }

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
    },[])

    return (
        <AppBar
            position="fixed"
            style={{
                backgroundColor:headerShow? "#2f2f2f":"transparent",
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
                    onClick={()=>toggleDrawer(true)}
                >
                    <MenuIcon/>
                </IconButton>

                <SideDrawer
                    open={drawerOpen}
                    onClose={(value:boolean)=>toggleDrawer(value)}
                />

            </Toolbar>
        </AppBar>
    )
}

export default Header;