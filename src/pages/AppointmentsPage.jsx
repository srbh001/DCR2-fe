import React, { useEffect } from "react";
import axios from "axios";
import AppointmentsCard from "../components/AppointmentsCard";

const AppointmentsPage = () => {
  const [data, setData] = React.useState([]);
  const fetchData = () => {
    axios
      .get("http://127.0.0.1:8000/api/search_appointment")
      .then((response) => {
        console.log(response.data.appointments);
        setData(response.data.appointments);
      });
  };
  useEffect(fetchData, []);
  const appointmentCards = data.map((appointment) => (
    <AppointmentsCard
      key={appointment.id}
      name={appointment.student_name}
      date={appointment.assigned_date}
      loc={appointment.reason}
    />
  ));
  return <div>{appointmentCards}</div>;
};

export default AppointmentsPage;
