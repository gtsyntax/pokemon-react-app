const PokeApi = (props) => {
    return (
        <div>
            {
                props.pokemons.length > 0 ? 
                (
                    <div className="card">
                        {props.pokemons.map(pokemonItem => {
                            return (
                                <header className="card-header" key={pokemonItem.pokemon.name}>
                                    <p className="card-header-title">{pokemonItem.pokemon.name}</p>
                                </header>
                            )
                        })}
                    </div>
                ) : 
                (
                    <div>
                        <h1>Loading...</h1>
                    </div>
                )
            }
        </div>
    )
}

export default PokeApi;