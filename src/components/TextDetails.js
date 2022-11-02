import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TextDetails = (props) => {
  const params = useParams();
  const [textDetails, setTextDetails] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3004/posts/${params.id}`)
      .then((res) => {
        setTextDetails(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2 className="ui header">{textDetails.title}</h2>
      <p>{textDetails.date}</p>
      <p>{textDetails.content}</p>
    </>
  );
};

export default TextDetails;
