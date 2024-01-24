import { Button } from "react-native-paper";
import { ModalCustom } from "../../components/Modal-component";
import React from "react";
import { ListComponent } from "../../components/List-component";
export function DetailScreen() {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <>
      <Button style={{ marginTop: 30 }} onPress={showModal}>
        Show
      </Button>
      <ModalCustom visible={visible} hideModal={hideModal} />
      <ListComponent />
    </>
  );
}
