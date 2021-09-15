import { AddCircle, MonetizationOn } from "@material-ui/icons";
import { AccountCircle, Person } from "@material-ui/icons";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FeedbackIcon from "@material-ui/icons/Feedback";
import SettingsIcon from "@material-ui/icons/Settings";
import Dashboard from "../../pages/navigation/navigation-tabs/dashboard";
import AddSlots from "../../pages/navigation/navigation-tabs/add-slots";
import CancelRefund from "../../pages/navigation/navigation-tabs/cancel-refund";
import UserDetails from "../../pages/navigation/navigation-tabs/user-details";
import Feedback from "../../pages/navigation/navigation-tabs/feedback";
import Settings from "../../pages/navigation/navigation-tabs/settings";
import Registration from "../../pages/registration";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

let x = new Date();
let today = `${x.getDate()}-${x.getMonth() + 1}-${x.getFullYear()}`;

const userAccount = {
  createAccount: {
    text: "Create an account",
    button: "Sign up",
    bottomText: "Have an account? ",
    link: "Sign In",
    display: false,
    showField: true,
  },

  accountLogin: {
    text: "Sign in to continue",
    button: "Sign in",
    bottomText: "New User? ",
    link: "Sign Up",
    display: true,
    showField: true,
  },

  passwordReset: {
    text: "Reset Your Password",
    button: "Send Mail",
    bottomText: "Have an account? ",
    link: "Sign In",
    display: false,
    showField: false,
  },
};

let details = {
  area: {
    row: "",
    col: "",
  },
  slot: {
    row: "",
    col: "",
  },
};

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const menu = [
  {
    name: "Dashboard",
    value: "dashboard",
    id: "dashboard-tab",
    icon: <DashboardIcon className="navigation-icons" />,
  },
  {
    name: "Add Slots",
    value: "add-slots",
    id: "add-slots-tab",
    icon: <AddCircle className="navigation-icons" />,
  },
  {
    name: "Cancel & Refund",
    value: "cancel-refund",
    id: "cancel-refund-tab",
    icon: <MonetizationOn className="navigation-icons" />,
  },
  {
    name: "User Details",
    value: "user-details",
    id: "user-details-tab",
    icon: <AccountCircle className="navigation-icons" />,
  },
  {
    name: "Feedback",
    value: "feedback",
    id: "feedback-tab",
    icon: <FeedbackIcon className="navigation-icons" />,
  },
  {
    name: "Settings",
    value: "settings",
    id: "settings-tab",
    icon: <SettingsIcon className="navigation-icons" />,
  },
  {
    name: "Log Out",
    value: "log-out",
    id: "log-out-tab",
    icon: <Person className="navigation-icons" />,
  },
];

const tab = {
  dashboard: <Dashboard />,
  addslots: <AddSlots />,
  cancelrefund: <CancelRefund />,
  userdetails: <UserDetails />,
  feedback: <Feedback />,
  settings: <Settings />,
  logout: <Registration />,
};

const userLength = {
  maxLength: 9,
  minLength: 9,
};

const passwordLength = {
  maxLength: 8,
  minLength: 8,
};

const shrink = {
  shrink: true,
};

const adminData = {
  placeName: "",
  category: "others",
  address: "",
  openingTime: "",
  closingTime: "",
  workingDays: [],
  vehicleType: "two",
  amountCharge: {
    two: "",
    threeFour: "",
  },
  delayCharge: {
    two: "",
    threeFour: "",
  },
  duration: {
    delay: 15,
    charge: 60,
  },
};

export { userAccount, userLength };
export { details, menu, tab, adminData };
export { days, MenuProps, today };
export { passwordLength, shrink };
