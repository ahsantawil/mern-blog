import React from "react";
import { RegisterBg } from "../../assets";
import "./detailblog.scss";
import { Gap, Link } from "../../components";
import { useHistory } from "react-router-dom";

const DetailBlog = () => {
  const history = useHistory();
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={RegisterBg} alt="thumb" />
      <p className="blog-title">Title Blog</p>
      <p className="blog-author">Author - Date Post</p>
      <p className="blog-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta tenetur
        sed expedita quas cupiditate. Corrupti impedit itaque natus accusantium
        repellat hic quod maiores quo dolorum, laudantium neque error eum
        voluptatibus.
      </p>
      <Gap height={20} />
      <Link title="Back to Home" onClick={() => history.push("/")} />
    </div>
  );
};

export default DetailBlog;
