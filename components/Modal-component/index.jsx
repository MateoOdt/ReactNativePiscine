import { Modal, PaperProvider, Portal } from "react-native-paper";
import { Text } from "react-native-paper";

export function ModalCustom({ hideModal, visible }) {
  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <PaperProvider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Text>Example Modal</Text>
        </Modal>
      </Portal>
    </PaperProvider>
  );
}
