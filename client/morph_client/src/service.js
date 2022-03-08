const baseURLAppointments = "http://localhost:8080/api/appointments/";
const baseURLProviders = "http://localhost:8080/api/providers/";
const baseURLClients = "http://localhost:8080/api/clients/";
const baseURLLocations = "http://localhost:8080/api/locations/";
const baseURLRooms = "http://localhost:8080/api/rooms/";

export const getAppointments = () => {
  return fetch(baseURLAppointments).then((res) => res.json());
};

export const getAppointmentByID = (id) => {
  return fetch(baseURLAppointments+id).then((res) => res.json());
};

export const getProviders = () => {
  return fetch(baseURLProviders).then((res) => res.json());
};

export const getProviderById = (id) => {
  return fetch(baseURLProviders+id).then((res) => res.json());
};

export const getClients = () => {
  return fetch(baseURLClients).then((res) => res.json());
};

export const getClientById = (id) => {
  return fetch(baseURLClients+id).then((res) => res.json());
};

export const getLocations = () => {
  return fetch(baseURLLocations).then((res) => res.json());
};

export const getLocationById = (id) => {
  return fetch(baseURLLocations+id).then((res) => res.json());
};

export const getRooms = () => {
  return fetch(baseURLRooms).then((res) => res.json());
};

export const getRoomById = (id) => {
  return fetch(baseURLRooms+id).then((res) => res.json());
};





