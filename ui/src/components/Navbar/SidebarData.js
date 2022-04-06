import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import CloseIcon from '@material-ui/icons/Close';
import BookIcon from '@material-ui/icons/Book';
import PersonIcon from '@material-ui/icons/Person';



export const SidebarData = [
    {
        title:'Главная',
        path: '/',
        icon: <HomeIcon/>,
        cName: 'nav-text'
    },
    {
        title:'Библиотека',
        path: '/',
        icon: <BookIcon/>,
        cName: 'nav-text'
    },
    {
        title:'Пользователи',
        path: '/',
        icon: <PersonIcon/>,
        cName: 'nav-text'
    }
]