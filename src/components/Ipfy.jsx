import { useState } from 'react'


function Ipify() {
const [ip, setIp] = useState("");
    function getIp() {
    fetch("https://api.ipify.org/?format=json")
       .then(response => response.json())
            .then(data => setIp(data.ip));
}

    return (
        
        <>
            <h1>Il mio IP pubblico</h1>
            <button onClick={getIp}>Scopri il mio IP</button>
            <p>{ip}</p>
        </>
    );
}

export default Ipify;