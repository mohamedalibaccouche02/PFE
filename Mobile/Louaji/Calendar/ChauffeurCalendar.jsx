import React, { useState } from 'react';
import { SafeAreaView, Text, ActivityIndicator, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-big-calendar';
import moment from 'moment';
import { useQuery } from 'react-query';
import { fetchAllChauffeurs } from '../../Louaji/api_Mobile/chauffeur_api';
import { useNavigation } from '@react-navigation/native';
import { useChauffer } from './ChaufferContext'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import LOGO from '../Loginpage/logoo.jpg';
import { Button, Dialog, Portal } from 'react-native-paper';

const ChauffeurCalendar = () => {
    const navigation = useNavigation();
    const { data, isLoading, isError } = useQuery('chauffeurs', fetchAllChauffeurs);
    const { username, password } = useChauffer();
    const [visible, setVisible] = useState(false);

    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);
    const onLogoutPress = () => {
        showDialog();
    };
    const handleLogout = () => {
        navigation.navigate('Login');
        hideDialog();
    };

    if (isLoading) {
        return <ActivityIndicator />;
    }

    if (isError) {
        return <Text>Error fetching data</Text>;
    }

    const events = data.map(chauffeur => {
        if (chauffeur.nom === username && chauffeur.motpasse === password) {
            const today = moment();
            const startDateTime = today.clone().set({
                hour: moment(chauffeur.startWork, 'HH:mm').hour(),
                minute: moment(chauffeur.startWork, 'HH:mm').minute()
            });

            const endDateTime = today.clone().set({
                hour: moment(chauffeur.endWork, 'HH:mm').hour(),
                minute: moment(chauffeur.endWork, 'HH:mm').minute()
            });

            return {
                id: `${chauffeur._id}-${today.format('YYYY-MM-DD')}`,
                title: chauffeur.nom,
                start: new Date(startDateTime),
                end: new Date(endDateTime),
                color: '#052c51'
            };
        }
    }).filter(event => event !== undefined);
    const theme = {
        typography: {
            xs: {
                fontWeight: 'bold',
                fontSize: 16,
                color: '#333'
            },
        }
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.topBar}>
                <Image
                    style={styles.logo}
                    source={LOGO}
                />
                <TouchableOpacity onPress={onLogoutPress} style={styles.logoutContainer}>
                    <Text style={{ color: "white", marginRight: 10, fontSize: 17 }}>{username}</Text>
                    <Icon name="sign-out" size={27} color="white" />
                </TouchableOpacity>
            </View>
            
            <Calendar
                events={events}
                height={500}
                theme={theme}
                hourRowHeight={30}
                eventCellStyle={(event) => ({
                    backgroundColor: event.color,
                    padding: 1,
                    
                })}
                onPressEvent={(event) => console.log(event)}  
                mode="week"
                bodyContainerStyle={{
                    borderWidth: 1,  
                    borderColor: '#ccc' ,
                
                }}
            />

            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title>Logout</Dialog.Title>
                    <Dialog.Content>
                        <Text>Are you sure you want to logout?</Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={handleLogout} style={{ backgroundColor: '#052c51' }} labelStyle={{ color: 'white' }}>Logout</Button>
                        <Button onPress={hideDialog} style={{ backgroundColor: '#052c51' }} labelStyle={{ color: 'white' }}>Cancel</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#052c51',
    },
    logo: {
        width: 140,
        height: 40,
    },
    logoutContainer: {
        flexDirection: 'row',
        alignItems: 'center',
            
    },
});

export default ChauffeurCalendar;