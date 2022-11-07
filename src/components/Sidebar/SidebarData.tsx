import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import SettingsIcon from "@mui/icons-material/Settings";

export const Home = {
  title: "ホーム",
  icon: <HomeIcon />,
  link: "/",
};

export const ToolContents = [
  {
    title: "文字列操作",
    icon: <ModeEditIcon />,
    link: "/string",
    children: [
      {
        title: "スネークキャメル変換",
        link: "/string/snake-to-camel",
      },
    ],
  },
];

export const Setting = {
  title: "設定",
  icon: <SettingsIcon />,
  link: "/About",
};
