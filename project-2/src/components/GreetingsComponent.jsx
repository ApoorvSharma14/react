const Greetings = () => {
    const name = "Apoorv"
    const date = new Date().toISOString();
    return (
        <div>
            <h1>A very Good Afternoon {name}</h1>
            <p>{date}</p>
        </div>
    );
}