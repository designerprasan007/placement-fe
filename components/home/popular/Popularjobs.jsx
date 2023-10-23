import {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import useFetch from '../../../hook/useFetch'

import styles from './popularjobs.style'
import {COLORS, SIZES } from "../../../constants"
import PopularJobCard from "../../common/cards/popular/PopularJobCard"
const Popularjobs = () => {
  const router = useRouter()
  const {data, error, isLoading } = useFetch('search', {
    query : "React developer in Bengaluru, Karnataka",
    num_pages : 1,
  }) 
  console.log(data)
  return (
    <View style={styles.container}>
     <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
     </View>

    <View style={styles.cardsContainer}>
      {isLoading ? (<ActivityIndicator size="large" color={COLORS.primary} />)
       : error ? (<Text>Something went wrong!</Text>) : 
       (<FlatList 
        data = {data}
        renderItem={({item}) =>(
          <PopularJobCard item = {item} />
        )}
        keyExtractor={item => item?.job_id}
        contentContainerStyle={{columnGap: SIZES.small}}
        horizontal
       />)
       }
    </View>

    </View>
  )
}

export default Popularjobs