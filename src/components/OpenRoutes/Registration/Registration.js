import React from "react";
import { useDispatch } from "react-redux";
import { addToken } from "../../../redux/actions";
import { Link } from "react-router-dom";

export default function Registration() {
  const dispatch = useDispatch();
  dispatch(addToken(true));

  return (
    <div>
      <Link to="/adminPanel">Panel</Link>
      <p>Registration</p>
    </div>
  );
}
