import PropTypes from "prop-types";
import React from "react";
import Button from "./Logout";

const DashboardPage = ({ title }) => {
  const onClick = () => {
    alert("Are you sure you want to logout?");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="red" text="Logout" onClick={onClick} />
    </header>
  );
};

DashboardPage.defaultProps = {
  title: "Manage My Projects",
};

DashboardPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default DashboardPage;
