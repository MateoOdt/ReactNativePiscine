import { Button } from "react-native-paper";
import { ModalCustom } from "../../components/Modal-component";
import React from "react";
import { ListComponent } from "../../components/List-component";
export function DashboardScreen() {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const sendNotification = () => {
    /**
     * NotificationManager.showNotification(
      "Notification de l'expéditeur",
      "Ceci est un message de notification."
    );
     */
  };

  return (
    <>
      <Button style={{ marginTop: 30 }} onPress={showModal}>
        Show
      </Button>
      <Button
        mode="contained"
        style={{ marginTop: 30 }}
        onPress={sendNotification}
      >
        Send Notification
      </Button>
      <ModalCustom visible={visible} hideModal={hideModal} />
      <ListComponent />
    </>
  );
}
