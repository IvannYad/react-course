import getFeaturedPackages from "../../api/queries/getFeaturedPackages";
import type PackageDetails from "../../api/types/packageDetails";

export interface HomeLoaderResult {
    featuredPackages: PackageDetails[];
}

export default async function featuredPackagesLoader(): Promise<HomeLoaderResult> {
    const packages = await getFeaturedPackages();

    return {
        featuredPackages: packages
    };
}