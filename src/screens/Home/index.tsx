import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'

import { Participant } from '../../components/Participant'

import { styles } from './styles'

export function Home() {
  const participants = ['Rodrigo', 'Diego', 'Joelma', 'Carlo', 'Ana', 'Zack', 'Bruna', 'Sarah', 'Murilo', 'Danilo', 'Roberto', 'Samara']

  function handleParticipantAdd() {
    console.log('Adicionar participante')
  }

  function handleParticipantRemove(name: string) {
    console.log(`${name} removido do evento`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder='Nome do participante'
          placeholderTextColor={'#6B6B6B'}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {
          participants.map((participant, index) => (
            <Participant 
              key={index} 
              name={participant} 
              onRemove={() => handleParticipantRemove(participant)}
            />
          ))
        }
      </ScrollView>
    </View>
  )
}
