import { useLoaderData } from "react-router-dom";
import type { SearchLoaderResults } from "./SearchLoader";
import PackageListItem from "../../components/PackageListItem";

export default function SearchPage() {
    const { searchResults } = useLoaderData() as SearchLoaderResults;
    
    const renderedPackages = searchResults
        .map(sr => <PackageListItem pack={sr} key={sr.name} />);

    return (
        <div>
            <div className="text-2xl font-bold my-6">
                Search Page
            </div>
            <div className="space-y-4 mt-4">
                {renderedPackages}
            </div>
        </div>
    );
};