import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TextInput, Modal, Button } from "react-native";

export default function App() {
  const [texto, setTexto] = useState("");

  useEffect(() => {
    if (texto.length === 26) {
      alert("Aviso", "O nome atingiu 10 caracteres");
    }
  }, [texto]);

  changeTxt = (texto) => {
    setTexto(`Seja bem-vindo, ${texto}`);
  };

  const [visible, setVisible] = useState(false);

  visModal = (x) => {
    if (!visible) {
      setVisible(x);
    } else {
      setVisible(x);
    }
  };



  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite seu nome"
        style={{
          width: 300,
          padding: 10,
          borderWidth: 1,
          borderColor: "black",
        }}
        onChangeText={changeTxt}
      />
      <Text>{texto}</Text>
      <Button title="Abrir modal" onPress={() => visModal(true)} />
      <Button title="Abrir Formulario" onPress={() => visSecondModal(true)} />

      <Modal  transparent={true} animationType="fade" visible={visible}>
        <View
          style={{
            height: "80%",
            width: "80%",
            backgroundColor: "orange",
            justifyContent: "center",
            alignSelf: "center",
            alignItems: 'center'
          }}
        >
          <Text style={{fontSize:30}}>Paulo</Text>
          <Button title="Fechar" onPress={() => visModal(false)} />
        </View>
      </Modal>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
