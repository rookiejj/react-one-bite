import Header from "../src/components/Header";
import Button from "../src/components/Button";
import DiaryList from "../src/components/DiaryList";

const Home = () => {
  return (
    <div>
      <Header
        title={"2024년 2월"}
        leftChild={<Button text={"<"} />}
        rightChild={<Button text={">"} />}
      />
      <DiaryList />
    </div>
  );
};

export default Home;
