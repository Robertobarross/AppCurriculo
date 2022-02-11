import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import foto from 'C:/wamp64/www/Projetos-React-Native/AppCurriculo/src/imgs/foto.jpeg';

const App = () => {
  return (

    <View style={style.page}>
      <View style={style.container_cabecalho}>
        <Image source={foto} style={style.foto} />
        <Text style={style.nome}>ROBERTO BARROS</Text>
        <Text style={style.funcao}>Desenvolvedor Mobile</Text>
        <View>
          <Text style={style.redes_sociais}>GitHub | Linkedin | YouTuby</Text>
        </View>
      </View>

      <View style={style.card}>
        <View style={style.card_header}>
          <Text>Experiência Profissional;</Text>
        </View>
        <View style={style.card_content}>
          <Text style={style.card_content_text}>Desenvolvedor Mobile</Text>
          <Text style={style.card_content_text}>Desenvolvedor Web</Text>
          <Text style={style.card_content_text}>Frontend-BackEnd</Text>
        </View>
      </View>

      <View style={style.card}>
        <View style={style.card_header}>
          <Text>Formação Academica;</Text>
        </View>
        <View style={style.card_content}>
          <Text style={style.card_content_text}>Análise Desen. Sistemas - FAM</Text>
          <Text style={style.card_content_text}>Letras Português - IFPB</Text>
          <Text style={style.card_content_text}>Teologia - UB</Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#1C1C1C',
    flex: 1,
    alignItems: 'center',
  },

  container_cabecalho: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 2,
    borderColor: '#939393',
  },

  nome: {
    color: '#00FFFF',
    fontSize: 25,
    fontFamily: 'Arial',
    marginTop: 10,
  },

  funcao: {
    color: '#939393',
    fontSize: 20,
    fontFamily: 'Arial',
    marginBottom: 10,
  },

  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  card: {
    width: '70%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#00FFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    padding: 10,
  },

  card_content: {
    marginTop: 10,
  },

  card_content_text: {
    color: '#7FFFD4',
    marginBottom: 10,
    textAlign: 'center',
  },
});
export default App;
