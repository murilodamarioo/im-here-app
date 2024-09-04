import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native'

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

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) =>(
          <Participant 
            key={item} 
            name={item} 
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou ainda? Adicone um participante a sua lista de presença
          </Text>
        )}
      />      
    </View>
  )
}
