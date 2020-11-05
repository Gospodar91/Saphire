import React from "react";
import { Link } from "react-router-dom";

export default function Header({ token, adminID }) {
  return (
    <>
      <div>Header</div>
      <div>
        {!token && (
          <>
            <ul>
              <li>
                {" "}
                <Link to="/mainPage">MainPage</Link>
              </li>
              <li>
                <Link to="/authPage">authPage</Link>
              </li>
              <li>
                <Link to="/contacts">contacts</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
              <li>
                <Link to="/price">price</Link>
              </li>
              <li>
                <Link to="/forgotPassword">forgotPassword</Link>
              </li>
              <li>
                <Link to="/online_shedule">online_shedule</Link>
              </li>
              <li>
                <Link to="/registration">registration</Link>
              </li>
            </ul>
          </>
        )}
        {token && !adminID && (
          <>
            <ul>
              <li>
                <Link to="/mainPage">MainPage</Link>
              </li>
              <li>
                <Link to="/contacts">contacts</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
              <li>
                <Link to="/price">price</Link>
              </li>
              <li>
                <Link to="/online_shedule">online_shedule</Link>
              </li>
              <li>
                <Link to="/userProfile">userProfile</Link>
              </li>
            </ul>
          </>
        )}
        {token && adminID && (
          <>
            <ul>
              <li>
                {" "}
                <Link to="/adminPanel">adminPanel</Link>
              </li>
              <li>
                {" "}
                <Link to="/registration">registration</Link>
              </li>
            </ul>
          </>
        )}
      </div>
    </>
  );
}
