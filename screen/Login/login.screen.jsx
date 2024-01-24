import React from "react";
import { Button, Text, TextInput, ActivityIndicator } from "react-native-paper";
import { View } from "react-native";
import { StyleSheet } from "react-native";

const LoginScreen = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const login = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      props.navigation.push("Detail");
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(email) => setEmail(email)}
        style={styles.input}
        error={email === ""}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={(password) => setPassword(password)}
        style={styles.input}
        error={password === ""}
      />
      {email !== "" && password !== "" ? (
        <Button mode="contained" style={styles.button} onPress={login}>
          Login
        </Button>
      ) : (
        <Button mode="contained" style={styles.button} disabled>
          Login
        </Button>
      )}
      {loading && (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={styles.indicator}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    marginVertical: 10,
    width: "100%",
  },
  button: {
    marginTop: 10,
    width: "100%",
  },
  loading: {
    marginTop: 10,
  },
});

export default LoginScreen;
