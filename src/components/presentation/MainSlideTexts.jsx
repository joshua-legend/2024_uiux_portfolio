import { targets } from "../../animation/targets";
import Text from "../common/Text";

const MainSlideTexts = () => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: "1",
        width: "100%",
      }}
    >
      <Text className={targets.textName} text={"JEON JI YEON"} />
      <Text
        className={targets.textFrontend}
        text={"FRONTEND"}
        textAlign={"end"}
      />
    </div>
  );
};

export default MainSlideTexts;
