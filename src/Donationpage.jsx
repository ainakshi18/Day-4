import React, { useState } from "react";
import SockJS from "sockjs-client";
import { over } from "stompjs";

const DonorPage = () => {
  const [stompClient, setStompClient] = useState(null);
  const [donationId, setDonationId] = useState("");
  const [donorName, setDonorName] = useState("");
  const [needyName, setNeedyName] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const connect = () => {
    const socket = new SockJS("http://localhost:8080/ws");
    const client = over(socket);
    client.connect({}, () => {
      console.log("Connected to WebSocket");
      setStompClient(client);
    });
  };

  const sendUpdate = () => {
    if (stompClient) {
      const donationUpdate = {
        donationId,
        donorName,
        needyName,
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
      };
      stompClient.send("/app/donation/update", {}, JSON.stringify(donationUpdate));
      alert("Donation update sent!");
    }
  };

  return (
    <div>
      <h1>Donor Page</h1>
      <button onClick={connect}>Connect</button>
      <div>
        <input placeholder="Donation ID" onChange={(e) => setDonationId(e.target.value)} />
        <input placeholder="Donor Name" onChange={(e) => setDonorName(e.target.value)} />
        <input placeholder="Needy Name" onChange={(e) => setNeedyName(e.target.value)} />
        <input placeholder="Latitude" onChange={(e) => setLatitude(e.target.value)} />
        <input placeholder="Longitude" onChange={(e) => setLongitude(e.target.value)} />
        <button onClick={sendUpdate}>Send Update</button>
      </div>
    </div>
  );
};

export default DonorPage;
