import "./DiaryItem.css";
import { getEmotionImage } from "../util/get-emotion-image";
import Button from "./Button";

const DiaryItem = () => {
  const emotionId = 3;

  return (
    <div className="DiaryItem">
      <div className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div className="info_section">
        <div className="created_date">{new Date().toLocaleDateString()}</div>
        <div className="content">content</div>
      </div>
      <div className="button_section">
        <Button text={"modify"}></Button>
      </div>
    </div>
  );
};

export default DiaryItem;
