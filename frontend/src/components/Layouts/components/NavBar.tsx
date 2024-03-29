import React, { useEffect, FC } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
    Avatar,
    Box,
    Divider,
    Drawer,
    Hidden,
    List,
    Typography,
    makeStyles
} from '@material-ui/core';
import {
    BarChart,
    Warning,
    FormatPaint
} from '@material-ui/icons';
import NavItem from './NavItem';

const user = {
    avatar: '/static/images/avatars/avatar_6.png',
    jobTitle: 'Senior Developer',
    name: 'Mateusz Romanowski'
};

const items = [
    {
        href: 'products',
        icon: FormatPaint,
        title: 'Products'
    }
];

const useStyles = makeStyles(() => ({
    mobileDrawer: {
        width: 256
    },
    desktopDrawer: {
        width: 256,
        top: 64,
        height: 'calc(100% - 64px)'
    },
    avatar: {
        cursor: 'pointer',
        width: 64,
        height: 64
    }
}));

interface INavBar {
    onMobileClose: any,
    openMobile: boolean
}

const NavBar: FC<INavBar> = ({ onMobileClose, openMobile }) => {
    const classes = useStyles();
    const location = useLocation();

    useEffect(() => {
        if (openMobile && onMobileClose) {
            onMobileClose();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname]);

    const content = (
        <Box
            height="100%"
            display="flex"
            flexDirection="column"
        >
            <Box
                alignItems="center"
                display="flex"
                flexDirection="column"
                p={2}
            >
                <Avatar
                    className={classes.avatar}
                    component={RouterLink}
                    // src={user.avatar}
                    to="/"
                />
                <Typography
                    color="textPrimary"
                    variant="button"
                >
                    {user.name}
                </Typography>
                <Typography
                    color="textSecondary"
                    variant="body2"
                >
                    {user.jobTitle}
                </Typography>
            </Box>
            <Divider />
            <Box p={2}>
                <List>
                    {items.map((item: any) => (
                        <NavItem
                            href={item.href}
                            key={item.title}
                            title={item.title}
                            icon={item.icon}
                        />
                    ))}
                </List>
            </Box>
            <Box flexGrow={1} />
            <Divider />
            <Box
                mb={1}
                pt={1}
                display="flex"
                justifyContent="center"
            >
                <Typography
                    align="center"
                    gutterBottom
                    variant="overline"
                >
                    Tikkurila 2021
                </Typography>
            </Box>
        </Box>
    );

    return (
        <>
            <Hidden lgUp>
                <Drawer
                    anchor="left"
                    classes={{ paper: classes.mobileDrawer }}
                    onClose={onMobileClose}
                    open={openMobile}
                    variant="temporary"
                >
                    {content}
                </Drawer>
            </Hidden>
            <Hidden mdDown>
                <Drawer
                    anchor="left"
                    classes={{ paper: classes.desktopDrawer }}
                    open
                    variant="persistent"
                >
                    {content}
                </Drawer>
            </Hidden>
        </>
    );
};

export default NavBar;
