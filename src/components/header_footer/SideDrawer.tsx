import { Drawer, List, ListItem } from '@mui/material'

type SideDrawerProps = {
    open: boolean
    onClose: (value: boolean) => void
}

type LinkItem = {
    where: string;
    value: string;
  };

const SideDrawer = ({ open, onClose }: SideDrawerProps) => {
    const links: LinkItem[] = [
        { where: 'featured', value: 'To top' },
        { where: 'venuenfo', value: 'Venue NFO' },
        { where: 'highlights', value: 'Highlights' },
        { where: 'pricing', value: 'Pricing' },
        { where: 'location', value: 'Location' },
    ]

    const renderItem =(item:LinkItem) =>{
        return(
        <ListItem button onClick={()=> alert(item.where)} key={item.where}>
            {item.value}
        </ListItem>
        )
    }

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={() => onClose(false)}
        >
            <List component="nav">
                {links.map((item)=>renderItem(item))}
            </List>
        </Drawer>
    )
}

export default SideDrawer;