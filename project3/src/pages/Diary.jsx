import { useParams } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";

const Diary = () => {
  const params = useParams();

  usePageTitle(`${params.id}번 일기`);

  return <div>{params.id} diary</div>;
};

export default Diary;
