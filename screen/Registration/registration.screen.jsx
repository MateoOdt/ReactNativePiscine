import React from "react";
import { Button, Text, TextInput } from "react-native-paper";
import { View } from "react-native";
import { StyleSheet } from "react-native";

const RegistrationScreen = (props) => {
  const [email, setEmail] = React.useState("");
  const [nom, setNom] = React.useState("");
  const [prenom, setPrenom] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");

  /**
   * Navigate to Detail page with modal & List
   */
  const redirection = () => {
    props.navigation.push("Login");
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Nom"
        value={nom}
        onChangeText={(nom) => setNom(nom)}
        style={styles.input}
        error={nom === ""}
      />
      <TextInput
        label="Prenom"
        value={prenom}
        onChangeText={(prenom) => setPrenom(prenom)}
        style={styles.input}
        error={prenom === ""}
      />
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
      <TextInput
        label="Confirm Password"
        value={passwordConfirm}
        onChangeText={(passwordConfirm) => setPasswordConfirm(passwordConfirm)}
        style={styles.input}
        error={passwordConfirm === ""}
      />
      {nom !== "" &&
      prenom !== "" &&
      email !== "" &&
      password !== "" &&
      passwordConfirm !== "" ? (
        <Button mode="contained" style={styles.button} onPress={redirection}>
          Register Yourself
        </Button>
      ) : (
        <Button mode="contained" style={styles.button} disabled>
          Register Yourself
        </Button>
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
});

export default RegistrationScreen;
