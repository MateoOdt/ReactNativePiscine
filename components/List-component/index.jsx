import { List } from "react-native-paper";

export function ListComponent() {
  const list = [
    { prenom: "Devin" },
    { prenom: "Dan" },
    { prenom: "Dominic" },
    { prenom: "Jackson" },
    { prenom: "James" },
    { prenom: "Joel" },
    { prenom: "John" },
    { prenom: "Jillian" },
    { prenom: "Jimmy" },
    { prenom: "Julie" },
  ];

  return (
    <List.Section title="Prenoms">
      <List.Accordion
        title="Prenoms Folder"
        left={(props) => <List.Icon {...props} icon="folder" />}
      >
        {list.map((item, index) => (
          <List.Item key={index} title={item.prenom} />
        ))}
      </List.Accordion>
    </List.Section>
  );
}
