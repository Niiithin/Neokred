/* Imports */
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import ContentCopyTwoToneIcon from "@mui/icons-material/ContentCopyTwoTone";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import HelpIcon from "@mui/icons-material/Help";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
/* Relative Imports */

import { PAGE_ADMIN_DASHBOARD } from "routes/paths";

// ----------------------------------------------------------------------

/* Side bar tabs */
const SidebarConfig = [
  {
    title: "Home",
    href: PAGE_ADMIN_DASHBOARD.home.absolutePath,
    icon: HomeOutlinedIcon,
    selectedIcon: HomeRoundedIcon,
  },
  {
    title: "Events",
    href: PAGE_ADMIN_DASHBOARD.events.absolutePath,
    icon: ContentCopyOutlinedIcon,
    selectedIcon: ContentCopyTwoToneIcon,
  },
  {
    title: "Orders",
    href: PAGE_ADMIN_DASHBOARD.orders.absolutePath,
    icon: Inventory2OutlinedIcon,
    selectedIcon: Inventory2RoundedIcon,
  },
  {
    title: "Settings",
    href: PAGE_ADMIN_DASHBOARD.settings.absolutePath,
    icon: SettingsOutlinedIcon,
    selectedIcon: SettingsRoundedIcon,
  },
];

export const SidebarUpcomingConfig = [
  {
    title: "Bear Hug: Live in concert",
    href: PAGE_ADMIN_DASHBOARD.upcoming.absolutePath,
  },
  {
    title: "Six Fingers - DJ Set",
    href: PAGE_ADMIN_DASHBOARD.upcoming.absolutePath,
  },
  {
    title: "We all look the same",
    href: PAGE_ADMIN_DASHBOARD.upcoming.absolutePath,
  },
  {
    title: "Viking people",
    href: PAGE_ADMIN_DASHBOARD.upcoming.absolutePath,
  },
];

export const profileConfig = [
  {
    title: "My Account",
    icon: AccountCircleIcon,
  },
  {
    title: "Privacy policy",
    icon: VerifiedUserIcon,
  },
  {
    title: "Share feedback",
    icon: LightbulbIcon,
  },
  {
    title: "Sign out",
    icon: ExitToAppIcon,
  },
];

export const SidebarBottomConfig = [
  {
    title: "Support",
    href: PAGE_ADMIN_DASHBOARD.upcoming.absolutePath,
    icon: HelpOutlineOutlinedIcon,
    selectedIcon: HelpIcon,
  },
  {
    title: "Changelog",
    href: PAGE_ADMIN_DASHBOARD.upcoming.absolutePath,
    icon: AutoAwesomeOutlinedIcon,
    selectedIcon: AutoAwesomeIcon,
  },
];
export default SidebarConfig;
