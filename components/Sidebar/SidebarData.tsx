import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import HomeIcon from '@mui/icons-material/Home';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import SettingsIcon from '@mui/icons-material/Settings';

export const SidebarData = [
    {
        title: "ホーム",
        icon: <HomeIcon />,
        link: "/",
    },
    {
        title: "文字列操作",
        icon: <ModeEditIcon />,
        link: "./string",
    },
    {
        title: "設定",
        icon: <SettingsIcon />,
        link: "./Test",
    },
]