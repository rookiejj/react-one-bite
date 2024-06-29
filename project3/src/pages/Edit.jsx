import { useParams } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";

const Edit = () => {
  const params = useParams();

  usePageTitle(`${params.id}번 일기 수정`);

  return <div>{params.id} of Edit</div>;
};

export default Edit;
