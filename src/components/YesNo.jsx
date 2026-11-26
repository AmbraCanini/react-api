import { useState, useEffect } from "react";

function YesNo() {

    const [answer, setAnswer] = useState("");
    const [image, setImage] = useState("");

       useEffect(() => {
        fetch("https://yesno.wtf/api")
            .then(response => response.json())
            .then(data => {
                setAnswer(data.answer);
                setImage(data.image);
            });
    }, []);

    return (
        <>
            <h1>Yes or No?</h1>
            <p>{answer}</p>
        <img src={image} alt="Risposta Yes or No" />
        </>
    );
}

export default YesNo;