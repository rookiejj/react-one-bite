import { useParams } from "react-router-dom";

const Edit = () => {
  const params = useParams();

  return <div>{params.id} of Edit</div>;
};

export default Edit;
