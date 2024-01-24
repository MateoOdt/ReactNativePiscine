import PushNotification from "react-native-push-notification";

class NotificationManager {
  configure() {
    PushNotification.configure({
      // Configuration de base, ajustez selon vos besoins
      onNotification: (notification) => {
        // Gérer les actions lorsque la notification est reçue
        console.log("Notification reçue:", notification);
      },
      requestPermissions: true,
    });
  }

  showNotification(title, message) {
    PushNotification.localNotification({
      channelId: "default",
      title,
      message,
    });
  }
}

export default new NotificationManager();
