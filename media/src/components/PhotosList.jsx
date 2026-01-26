import { useFetchPhotosQuery } from "../store";
import Skeleton from './Skeleton';
import Button from "./Button";
import { useAddPhotoMutation } from "../store";
import PhotosListItem from './PhotosListItem'

export default function PhotosList({ album }) {
    const { data, error, isFetching } = useFetchPhotosQuery(album);
    const [addPhoto, results] = useAddPhotoMutation();

    const handleAddPhoto = () => {
        addPhoto(album);
    };

    let content;
    if (isFetching) {
        content = <Skeleton times={5} className="h-20 w-20 m-2" />;
    } else if (error) {
        content = <div>Error loading photos</div>;
    } else {
        content = data.map(photo => <PhotosListItem key={photo.id} photo={photo} />)
    }

    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold">Photos in {album.title}</h3>
                <Button
                    onClick={handleAddPhoto}
                    loading={results.isLoading}
                >
                    + Add Photo
                </Button>
            </div>
            <div className="flex flex-row mx-8 flex-wrap justify-center">{content}</div>
        </div>
    );
};