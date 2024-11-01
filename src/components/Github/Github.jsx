import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Github() {
    const { username } = useParams(); 
    const [data, setData] = useState(null); 

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => console.error(err));
    }, [username]);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {data.followers !== undefined ? data.followers : "Followers data not available."}
            <img src={data.avatar_url} alt="" />
            <p>{data.bio}</p>
            <p>number of repos = {data.public_repos}</p>
            <a href={data.blog}> youtube </a>

        </div>
    );
}

export default Github;


 