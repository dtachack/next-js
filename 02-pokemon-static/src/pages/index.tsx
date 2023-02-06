import { GetStaticProps, NextPage } from "next";
import { Grid } from "@nextui-org/react";

import { PokemonCard } from "@/components/pokemon";
import { Layout } from "@/components/layouts";
import { pokeApi } from "api";
import { PokemonListResponse, SmallPokemon } from "interfaces";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Listado de Pokemones">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons?.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon}></PokemonCard>
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons = data.results?.map((pokemon, i) => {
    return {
      ...pokemon,
      id: i + 1,
      url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        i + 1
      }.svg`,
    };
  });

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
