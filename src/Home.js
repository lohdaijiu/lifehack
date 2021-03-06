import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import CreateIcon from '@material-ui/icons/Create';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import NavItem from './1';
import IU from "./photo.jpg"

const user = {
  avatar: IU,
  name: 'Mary Lee'
};

const items = [
  {
    href: '/',
    icon: HomeIcon,
    title: 'Home'
  },
  {
    href: '/3',
    icon: GroupIcon,
    title: 'Group'
  },
  {
    href: '/Journal',
    icon: CreateIcon,
    title: 'Journaling'
  },
  {
    href: '/4',
    icon: LibraryBooksIcon,
    title: 'Resources'
  },  
];

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 5
        }}
      >
        <Avatar
          component={RouterLink}
          src={user.avatar}
          sx={{
            width: 128,
            height: 128
          }}
        />
        <Typography
          color="textPrimary"
          variant="h5"
        >
          {user.name}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 3}}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box
        sx={{
          backgroundColor: 'background.default',
          m: 2,
          p: 2
        }}
      > 
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: 'calc(100% - 64px)'
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <asdf/>
    </>
  );
};

export default DashboardSidebar;