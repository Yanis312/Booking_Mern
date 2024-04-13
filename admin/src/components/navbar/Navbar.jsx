import "./navbar.scss"; // Import SCSS styles for the navbar component

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"; // Import Search icon
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined"; // Import Language icon
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"; // Import Dark mode icon
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined"; // Import Fullscreen exit icon
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined"; // Import Notifications icon
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined"; // Import Chat icon
import ListOutlinedIcon from "@mui/icons-material/ListOutlined"; // Import List icon
import { DarkModeContext } from "../../context/darkModeContext"; // Import Dark mode context
import { useContext } from "react"; // Import useContext hook

const Navbar = () => {
  // Access dispatch function from DarkModeContext for toggling dark mode
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">  {/* Main container for the navbar */}
      <div className="wrapper">  {/* Inner container for layout */}
        <div className="search">   {/* Search bar section */}
          <input type="text" placeholder="Search..." />  {/* Search input field */}
          <SearchOutlinedIcon className="search-icon" />  {/* Search icon */}
        </div>
        <div className="items">   {/* Section for various navbar items */}
          <div className="item">  {/* Language selection item */}
            <LanguageOutlinedIcon className="icon" />  {/* Language icon */}
            English  {/* Text label for language */}
          </div>
          <div className="item" onClick={() => dispatch({ type: "TOGGLE" })}>  {/* Dark mode toggle item */}
            <DarkModeOutlinedIcon className="icon" />  {/* Dark mode icon */}
          </div>
          <div className="item">  {/* Fullscreen exit item (functionality might need clarification) */}
            <FullscreenExitOutlinedIcon className="icon" />  {/* Fullscreen exit icon */}
          </div>
          <div className="item">  {/* Notifications item */}
            <NotificationsNoneOutlinedIcon className="icon" />  {/* Notifications icon */}
            <div className="counter">1</div>  {/* Notification counter (assuming it shows unread count) */}
          </div>
          <div className="item">  {/* Chat item */}
            <ChatBubbleOutlineOutlinedIcon className="icon" />  {/* Chat icon */}
            <div className="counter">2</div>  {/* Chat counter (assuming it shows unread messages) */}
          </div>
          <div className="item">  {/* List item (functionality might need clarification) */}
            <ListOutlinedIcon className="icon" />  {/* List icon */}
          </div>
          <div className="item">  {/* User avatar item */}
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="User avatar"  
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
