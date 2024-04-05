import { Pressable, ScrollView, StatusBar, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../constant'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useState } from 'react'
const HomeScreen = () => {
  const [todos, setTodos] = useState([])
  return (<View style={{ flex: 1 }}>
    <View style={{ height: 60, width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, gap: 5, backgroundColor: 'white' }}>
      <Pressable style={styles.menuBox}>
        <Text style={styles.menuText}>All</Text>
      </Pressable>
      <Pressable style={styles.menuBox}>
        <Text style={styles.menuText}>Work</Text>
      </Pressable>
      <Pressable style={styles.menuBox}>
        <Text style={styles.menuText}>Personal</Text>
      </Pressable>

      <Pressable style={{ marginLeft: 'auto' }}>
        <AntDesign name='pluscircle' color={'green'} size={28} />
      </Pressable>
    </View>

    <View style={{ borderBottomWidth: 3, borderBottomColor: 'lightgrey' }}></View>

    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ padding: 10 }}>
        {todos.length > 0 ? (<View></View>) : (<View style={{ marginTop: 100, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../../assets/todo.png')} style={{ height: 200, width: 200 }} />
          <Text style={{ color: 'black', fontWeight: 'bold', marginVertical: 10 }}>No Task for Today! add task....</Text>
          <Pressable style={{ marginTop: 20 }}>
            <AntDesign name='pluscircle' color={'green'} size={48} />
          </Pressable>
        </View>)}
      </View>
    </ScrollView>
  </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  menuBox: { backgroundColor: 'rgba(0,128,0,0.15)', paddingHorizontal: 12, paddingVertical: 8, width: 'auto', borderRadius: 25, textAlign: 'center', justifyContent: 'center', alignItems: 'center' },
  menuText: {
    color: 'rgba(0,128,0,1)', fontSize: 16, fontWeight: '700'
  }
})