import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCard'
import ElevatedCards from './components/ElevatedCard'
import FancyCard from './components/FancyCard'
//import ActionCard from './components/ActionCard'
//import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards/>
        <FancyCard />
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default App