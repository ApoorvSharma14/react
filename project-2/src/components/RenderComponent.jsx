const friendsList = [
    {
        id: 1,
        name: "Apoorv",
        age: 20
    },

    {
        id: 2,
        name: "Harmit",
        age: 23
    },
    {
        id: 3,
        name: "Deergh",
        age: 24
    },
    {
        id: 1,
        name: "Ramu",
        age: 90
    },

]

const RenderComponent = () => {
    return (
        <div>
            <h2>My Friends List</h2>
            <div>
                {friendsList.map((friend, index) => {
                    return (
                        <div key={friend.id} style={{ border: "1px solid black", padding: "20px 40px", marginBottom: "20px" }}>
                            <span style={{ color: "blue", fontWeight: "bold" }}>Date: </span><span>{new Date().toLocaleString()} </span>
                            <span style={{ color: "blue", fontWeight: "bold" }}>Name: </span><span>{friend.name + " "}</span>
                            <span style={{ color: "blue", fontWeight: "bold" }}>Age: </span><span>{friend.age}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default RenderComponent;