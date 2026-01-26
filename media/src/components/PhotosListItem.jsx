import { GoTrashcan } from 'react-icons/go';
import Button from './Button';
import { useDeletePhotoMutation } from '../store';
import ExpandablePanel from './ExpandablePanel';

export default function PhotosListItem({ photo }) {
    const [deletePhoto, result] = useDeletePhotoMutation(photo);

    const handleDeletePhoto = () => {
        deletePhoto(photo);
    };

    const header = (
        <>
            <Button className="mr-3" loading={result.isLoading} onClick={handleDeletePhoto}>
                <GoTrashcan/>
            </Button>
            {result.error && <div>Error deleting photo.</div>}
            {photo.title}
        </>
    );

    return (
        <div className="relative m-2" onClick={handleDeletePhoto}>
            <img className='h-20 w-20' src={photo.url} alt="Random Photo" />
            <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80 hover:cursor-pointer">
                <GoTrashcan className="text-3xl" />
            </div>
        </div>
    );
};