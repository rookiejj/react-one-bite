import { useParams } from "react-router-dom";

const Diary = () => {
  const params = useParams();

  return <div>{params.id} diary</div>;
};

export default Diary;
