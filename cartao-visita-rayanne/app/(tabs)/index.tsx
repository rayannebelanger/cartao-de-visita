import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://avatars.githubusercontent.com/u/135059362?s=400&u=5757c68e5a4d87e8ede67c4602caf06d65cc4d83&v=4' }}
          style={styles.image}
        />
        <Text style={styles.name}>Rayanne Belanger</Text>
        <Text style={styles.role}>Analista de Dados</Text>
        <View style={styles.contactContainer}>
          <Text style={styles.contact}>📞 (81) 89028922</Text>
          <Text style={styles.contact}>📧 rayannebelanger123@gmail.com</Text>
        </View>
        
        <View style={styles.socialContainer}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/rayannebelanger')}>
            <Text style={styles.socialLink}>LinkedIn</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/rayannebelanger')}>
            <Text style={styles.socialLink}>GitHub</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.location}>📍 Localização: Recife, PE</Text>
        
        <TouchableOpacity style={styles.button} onPress={() => alert('Conectando!')}>
          <Text style={styles.buttonText}>Conectar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F8FA', // fundo suave e moderno
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    width: 300,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
    overflow: 'hidden',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#ff2d95', // borda rosa para destacar a imagem
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  role: {
    fontSize: 18,
    color: '#555',
    fontStyle: 'italic',
    marginBottom: 15,
  },
  contactContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  contact: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  socialContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  socialLink: {
    fontSize: 16,
    color: '#ff2d95',
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
  location: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ff2d95',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    shadowColor: '#ff2d95',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
