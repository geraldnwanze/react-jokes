function Joke(props) {
    return (
        <>
            {props.joke.setup && <h4>{props.joke.setup}</h4>}
            {props.joke.isShown && props.joke.punchline && <p>{props.joke.punchline}</p>}
            <button onClick={props.toggle}>{props.joke.isShown ? "Hide" : "Show"} punchline</button>
            <hr />
        </>
    )
}

export default Joke;