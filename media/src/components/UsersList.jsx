import { useEffect } from "react";
import { useSelector } from "react-redux";
import useThunk from "../hooks/useThunk";
import { fetchUsers, addUser } from "../store";
import Button from './Button';
import Skeleton from "./Skeleton";
import UsersListItem from "./UsersListItem";

function UsersList() {
    const [doFetchUsers, isFetchinUsersLoading, fetchingUsersError] = useThunk(fetchUsers);
    const [doAddUser, isCreatingUserLoading, creatingUserError] = useThunk(addUser);
    const { data } = useSelector(state => {
        return state.users;
    });
    
    useEffect(() => {
        doFetchUsers();
    }, [doFetchUsers])

    let content;
    if (isFetchinUsersLoading) {
        content = (
            <Skeleton times={1} className="h-10 w-full" />
        );
    } else if (fetchingUsersError) {
        content = <div>Error fetching data...</div>;;
    } else {
        content = data.map(user => {
            return <UsersListItem key={user.id} user={user}/>;
        });
    }
    
    const handleUserAdd = async () => {
        await doAddUser();
    }
    
    return (
        <div>
            <div className="flex flex-row justify-between m-3 items-center">
                <h1 className="m-2 text-xl">Users</h1>
                <Button
                    onClick={handleUserAdd}
                    loading={isCreatingUserLoading}
                >+ Add User</Button>
                {creatingUserError && "Error creating user!"}
            </div>
            {content}
        </div>
    );
}

export default UsersList;