import { useEffect, useState } from 'react';
import { View, Image, FlatList } from 'react-native';
import LogoImg from '../../assets/logo-nlw-esports.png'
import { GameCard, GameCardProps } from '../../components/GameCard';
import { Heading } from '../../components/Heading';
import { GAMES } from '../../utils/games';
import { styles } from './styles';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([])

  useEffect(() => {
    fetch("http://192.168.15.10:3333/games")
      .then(response => response.json())
      .then(data => setGames(data))
  }, [])

  return (
    <View style={styles.container}>
      <Image source={LogoImg}
        style={styles.logo}
      />
      <Heading title="Econtre o seu duo!" subtitle="Selecione o game que deseja jogar..." />

      <FlatList
        contentContainerStyle={styles.contentList}
        data={games}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <GameCard
            data={item}
          />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal

      />
    </View>
  );
}