import { GoTrashcan } from 'react-icons/go';
import Button from './Button';
import { useDeleteAlbumMutation } from '../store';
import ExpandablePanel from './ExpandablePanel';
import PhotosList from './PhotosList';

export default function AlbumsListItem({ album }) {
    const [deleteAlbum, result] = useDeleteAlbumMutation(album);

    const handleDeleteAlbum = () => {
        deleteAlbum(album);
    };

    const header = (
        <>
            <Button className="mr-3" loading={result.isLoading} onClick={handleDeleteAlbum}>
                <GoTrashcan/>
            </Button>
            {result.error && <div>Error deleting album.</div>}
            {album.title}
        </>
    );

    return (
        <ExpandablePanel header={header}>
            <PhotosList album={album} />
        </ExpandablePanel>
    );
};