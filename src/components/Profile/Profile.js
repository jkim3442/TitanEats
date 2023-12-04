import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="App">
      <h1 className="Heading">Personal Information</h1>
      <img src="profile.png" />
      <table>
        <tr>
          <th className="firstName">First Name</th>
          <th>name</th>
        </tr>
        <tr>
          <th className="lastName">Last Name</th>
          <th>lastname</th>
        </tr>
        <tr>
          <h2 className="userName">Username</h2>
          <th>username</th>
        </tr>
        <tr>
          <h2 className="email">Email</h2>
          <th>@yahoo.com</th>
        </tr>
      </table>
    </div>
  );
}
