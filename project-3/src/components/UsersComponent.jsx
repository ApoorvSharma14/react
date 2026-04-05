import { UsersList } from "../assets/UsersList";
const UserComponent = () => {
    return (
        <>
            {UsersList.map((user) => {
                return (
                    <div key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.age}</p>
                    </div>
                )
            })}
        </>
    )
}

export default UserComponent;