import React, { useEffect, useState } from 'react';

const Test2 = () => {
    const [data, setData] = useState({ data: [] }); // Initialize data with an empty array
    const {img, setImg} = useState("")
    useEffect(() => {
        var request = {
            method: "GET",
            redirect: "follow"
        }

        fetch("http://localhost:1337/api/foods", request)
        .then(response => response.json())
     
        .then(result => {
            setData(result); // Update the data state with the fetched result
                })
    }, []);
   

    return (
        <div>
            {/* Check if data.data has items before accessing properties */}
            {data.data.map(item => (
                <div key={item.id}>
                    <h1>{item.attributes?.name}</h1>
                   <img src={"http://localhost:1337" + item.attributes.img.item.attributes.formats.thumbnail.url} alt={item.attributes?.name} />
                </div>
            ))}
        </div>
    )
}

export default Test2;

