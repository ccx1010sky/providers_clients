import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../static/css/homepage.css";

import {
  getAppointments,
  getClients,
  getLocations,
  getProviders,
  getRooms,
} from "../service";

const HomePage = () => {
  const [appointments, setAppointments] = useState([]);
  const [providers, setProviders] = useState([]);
  const [clients, setClients] = useState([]);
  const [locations, setLocations] = useState([]);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getAppointments().then((data) => setAppointments(data));

    getProviders().then((data) => setProviders(data));

    getClients().then((data) => setClients(data));

    getLocations().then((data) => setLocations(data));

    getRooms().then((data) => setRooms(data));
  }, []);

  return (
  <div className="homepage">homepage

  </div>
  )
};

export default HomePage;
