import React from "react";
import { RegisterBg } from "../../../assets";
import { Button, Gap } from "../../atoms";
import "./blogitem.scss";
import { useHistory } from "react-router-dom";

const BlogItem = () => {
  const history = useHistory();
  return (
    <div className="blog-item">
      <img className="image-thumb" src={RegisterBg} alt="post" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author - Date Post</p>
        <p className="body">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          sequi doloribus eos facilis consequatur asperiores sit et sunt
          voluptas minima eligendi, non repudiandae fugit voluptatibus expedita
          culpa earum, aliquid delectus!
        </p>
        <Gap height={20} />
        <Button
          title="View Detail"
          onClick={() => history.push("/detail-blog")}
        />
      </div>
    </div>
  );
};

export default BlogItem;
