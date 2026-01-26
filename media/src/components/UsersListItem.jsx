import { GoTrashcan } from 'react-icons/go';
import Button from './Button';
import { deleteUser } from '../store';
import useThunk from '../hooks/useThunk';
import ExpandablePanel from './ExpandablePanel';
import AlbumsList from './AlbumsList';

export default function UsersListItem({ user }) {
    const [doDeleteUser, isDeleteLoading, deleteError] = useThunk(deleteUser);

    const handleDeleteUser = () => {
        doDeleteUser(user);
    };

    const header = (
        <>
            <Button className="mr-3" loading={isDeleteLoading} onClick={handleDeleteUser}>
                <GoTrashcan/>
            </Button>
            {deleteError && <div>Error deleting user.</div>}
            {user.name}
        </>
    );

    return (
        <ExpandablePanel header={header}>
            <AlbumsList user={user} />
        </ExpandablePanel>
    );
};