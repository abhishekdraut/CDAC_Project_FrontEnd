import Avatar from "@mui/material/Avatar";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Badge from "@mui/material/Badge";
import "../assets/styles/Header/header.css";
function Header(params) {
  return (
    <>
      <div className="header_wrapper" style={{backgroundColor:`${params?.color}`}}>
        <div className="header_title">
          {params.title}
        </div>
        <div className="header_notification_icon">
          <Badge badgeContent={4} color="primary">
            <NotificationsActiveIcon />
          </Badge>
        </div>
        <div className="header_profile_icon">
          <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            // sx={{ width: 56, height: 56 }}
          />
        </div>
      </div>
    </>
  );
}

export default Header;
