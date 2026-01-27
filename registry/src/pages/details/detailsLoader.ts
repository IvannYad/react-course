import type PackageDetails from "../../api/types/packageDetails";
import { getPackageDetails } from "../../api/queries/getPackageDetails";
import type { Params } from "react-router-dom";

interface LoaderArgs {
    params: Params
}

export interface DetailsLoaderResults {
    details: PackageDetails;
}

export default async function detailsLoader({ params }: LoaderArgs): Promise<DetailsLoaderResults> {
    const { name } = params;
    if (!name) {
        throw new Error("Name must be provided");
    }

    const details = await getPackageDetails(name) as PackageDetails;
    
    return {
        details
    };
}