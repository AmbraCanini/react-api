import { useState } from 'react'

function YesNo() {

    const [answer, setAnswer] = useState("");
    const [image, setImage] = useState("");

    return (
        <>
            <h1>Yes or No?</h1>
        </>
    );
}

export default YesNo;