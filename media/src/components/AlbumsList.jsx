import { useFetchAlbumsQuery } from "../store";
import Skeleton from './Skeleton';
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import { useAddAlbumMutation } from "../store";
import AlbumsListItem from './AlbumsListItem'

export default function AlbumsList({ user }) {
    const { data, error, isFetching } = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();

    console.log(results);
    
    const handleAddAlbum = () => {
        addAlbum(user);
    };

    let content;
    if (isFetching) {
        content = <Skeleton times={3} className="h-10 w-full" />;
    } else if (error) {
        content = <div>Error loading albums</div>;
    } else {
        content = data.map(album => <AlbumsListItem key={album.id} album={album} />)
    }

    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold">Albums for {user.name}</h3>
                <Button
                    onClick={handleAddAlbum}
                    loading={results.isLoading}
                >
                    + Add Album
                </Button>
            </div>
            <div>{content}</div>
        </div>
    );
};