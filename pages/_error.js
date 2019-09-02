import React from "react";
import { MemoryRouter as Redirect } from "react-router-dom";

const Error = () => <Redirect from="*" to="/" />;

export default Error;
