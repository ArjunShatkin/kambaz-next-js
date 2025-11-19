"use client";

import React, { useEffect, useState } from "react";
import * as client from "./client"

export default function HttpClient() {
  const [welcomeOnClick, setWelcomeOnClick] = useState("");
  const [welcomeOnLoad, setWelcomeOnLoad] = useState("");

  // Fetch welcome message when button is clicked
  const fetchWelcomeOnClick = async () => {
    const message = await client.fetchWelcomeMessage();
    setWelcomeOnClick(message);
  };

  // Fetch welcome message when component loads
  const fetchWelcomeOnLoad = async () => {
    const welcome = await client.fetchWelcomeMessage();
    setWelcomeOnLoad(welcome);
  };

  useEffect(() => {
    fetchWelcomeOnLoad();
  }, []); // Empty dependency array ensures this runs only on component mount

  return (
    <div>
      <h3>HTTP Client</h3>
      <hr />

      {/* Requesting on Click */}
      <h4>Requesting on Click</h4>
      <button className="btn btn-primary me-2" onClick={fetchWelcomeOnClick}>
        Fetch Welcome
      </button>
      <br />
      Response from button click: <b>{welcomeOnClick}</b>
      <hr />

      {/* Requesting on Load */}
      <h4>Requesting on Load</h4>
      Response from server: <b>{welcomeOnLoad}</b>
      <hr />
    </div>
  );
}
