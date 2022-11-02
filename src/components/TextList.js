import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const TextList = (props) => {
  const [textList, setTextList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/posts")
      .then((res) => {
        setTextList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
 
  return (
    <div className="ui relaxed divided list">
      {textList.map((yazi) => {
        return (
          <div className="yazi" key={yazi.id}>
            <i className="large github middle aligned icon"></i>
            <div className="content">
              <Link to={`/posts/${yazi.id}`} className="header">
                {yazi.title}
              </Link>
              <div className="description">{yazi.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TextList;

 