//app.js에서 함수를 가져와서 Custom hook을 만들어 봅시다.
//hooks.js의 이름도 알맞게 바꿔주세요.
import {useEffect, useState} from "react";

const useFetch = (fetchUrl) => {
    const [data, setData] = useState();
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);


    useEffect(() => {
        fetch(fetchUrl, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        })
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                // setLoading(true);
                setData(myJson);
            })
            .catch((error) => {
                // setError(error);
                console.log(error);
            });
    }, [fetchUrl]);

    return data;
};

export default useFetch;
