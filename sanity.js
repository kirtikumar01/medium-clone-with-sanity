import {
    createCurrentUserHook,
    createClient,
} from "next-sanity";
import createImageUrlBuilder from '@sanity/image-url';

export const config = {
    /**
     * Find Your project ID and dataset in `sanity.json` in your studio project.
     * These are considered "public", but can use environment variables
     * if you want differ between local and dev and production.
     * 
     * https://nexrjs.org/docs/basic-features/environment-variables
     */

    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2021-03-25",
    /**
     * set useCdn to 'false' if your application require the freshest possible
     * data always (potentially slightly slower and a bit more expensive),
     * Authenticated request (like preview) will always bypass the CDN
     */
    useCdn: process.env.NODE_ENV === "production",
}

// set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

/**
 * Set up a helper function for generating Image URLs with only the asses reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 */

 export const urlFor = (source) => createImageUrlBuilder(config).image(source)

//Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);