import React, {useState, useEffect } from 'react';
import { AsyncStorage, SafeAreaView, Text, Image, StyleSheet , TouchableOpacity , ScrollView} from 'react-native';

import logo from '../assets/logo.png';
import SpotList from '../components/SpotList';

export default function List({ navigation }){

    const [techs, setTechs] = useState([]);

    useEffect(()=> {
        AsyncStorage.getItem('techs')
            .then(storagedTechs => {
                const techsArray = storagedTechs.split(',').map(tech => tech.trim())

                setTechs(techsArray);
        })
    }, []);

    async function logout(){
        await AsyncStorage.removeItem('user')
        navigation.navigate('Login')
    }


    return (
        <SafeAreaView style={styles.container}>

             <TouchableOpacity onPress={logout}>
                <Image style={styles.logo} source={logo} />
            </TouchableOpacity>

            <ScrollView>
                {techs.map(tech => <SpotList key={tech} tech={tech} /> )}
            </ScrollView>

           
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
    logo: {
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 10
    },


})