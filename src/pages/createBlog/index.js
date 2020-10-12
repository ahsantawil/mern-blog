import React from "react";
import { Button, Gap, Input, Link, Textarea, Upload } from "../../components";
import "./createblog.scss";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
  const history = useHistory();
  return (
    <div className="blog-post">
      <p className="title">Create New Blog Post</p>
      <Input label="Post Title" />
      <Upload />
      <Textarea />
      <Gap height={20} />
      <div className="button-action">
        <Button title="Save" />
      </div>
      <Link title="kembali" onClick={() => history.push("/")} />
    </div>
  );
};

export default CreateBlog;
