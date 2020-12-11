import React, { useEffect, useState } from "react";
var requestOptions = {
  method: "GET",
  redirect: "follow",
};
const useFetch = (url) => {
  const [data, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log({ url });
    fetch(url, requestOptions)
      .then((data) => data.json())
      .then((res) => {
        if (!res.success) setLoading(false);

        console.log(res.data);
        setProducts(res.data);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  return [data, loading];
};

export default useFetch;
