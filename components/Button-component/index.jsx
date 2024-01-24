import { Button } from "react-native-paper";

function ButtonCustom({ title, onClickFunc, mode, icon }) {
  return (
    <Button icon={icon} mode={mode} onPress={onClickFunc}>
      {title}
    </Button>
  );
}

export default ButtonCustom;
