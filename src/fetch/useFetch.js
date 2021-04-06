import React, { useState } from "react";
import { API_KEY } from "../config/config";
export const useFetch = (url, method) => {
  const [loading, setLoading] = useState(true);
  const [cats, setCats] = useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, {
          method: method,
          headers: {
            "x-api-key": API_KEY,
          },
        })
          .then((data) => data.json())
          .then((res) => setCats(res));
        setLoading(false);
        return res;
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return [cats, loading];
};

export const usePost = (url, method, body) => {
  const [loading, setLoading] = useState(true);
  const [cats, setCats] = useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, {
          method: method,
          headers: {
            "x-api-key": API_KEY,
          },
          body: JSON.stringify(body),
        })
          .then((data) => data.json())
          .then((res) => setCats(res));
        setLoading(false);
        return res;
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return [cats, loading];
};
