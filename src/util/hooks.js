//app.js에서 함수를 가져와서 Custom hook을 만들어 봅시다.
//hooks.js의 이름도 알맞게 바꿔주세요.
import { useEffect, useState } from "react";

const useFetch = (data) => {
  useEffect(() => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setData(myJson);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
};

export default useFetch;
