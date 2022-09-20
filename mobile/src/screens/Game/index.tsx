import React, { useEffect, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import logoImg from '../../assets/logo-nlw-esports.png'
import { styles } from './styles';
import { GameParams } from '../../@types/navigation';
import { FlatList, Image, TouchableOpacity, View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons'
import { THEME } from '../../theme';
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { DuoMatch } from '../../components/DuoMatch';


export function Game() {
    const [duos, setDuos] = useState<DuoCardProps[]>([])
    const [discordDuoSelected, setDiscordDuoSelected] = useState('dsadsad')

    const navigation = useNavigation()
    const route = useRoute();
    const game = route.params as GameParams;

    function handleGoBack() {
        navigation.goBack();
    }

    useEffect(() => {

        fetch(`http://192.168.15.11:3333/games/${game.id}/ads`)
            .then(response => response.json())
            .then(data => setDuos(data))
    }, [])

    return (

        <Background>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleGoBack}>
                        <Entypo name="chevron-thin-left"
                            color={THEME.COLORS.CAPTION_300}
                            size={20} />
                    </TouchableOpacity>

                    <Image
                        source={logoImg}
                        style={styles.logo} />

                    <View style={styles.right} />
                </View>

                <Image
                    source={{ uri: game.bannerUrl }}
                    style={styles.cover}
                    resizeMode='cover'
                />
                <Heading
                    title={game.title}
                    subtitle="Conecte-se e comece a jogar!" />


                <FlatList
                    data={duos}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <DuoCard onConnect={() => { }} data={item} />
                    )}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    contentContainerStyle={[duos.length > 0 ? styles.contentList : styles.emptyListContent]}
                    style={styles.containerList}
                    ListEmptyComponent={() => (
                        <Text style={styles.emptyListText}> Não há anúncios publicados ainda</Text>
                    )}
                />

                <DuoMatch
                    onClose={() => setDiscordDuoSelected('')}
                    visible={discordDuoSelected.length > 0}
                    discord="rodrigo#3232"
                />
            </SafeAreaView>
        </Background>
    );
}