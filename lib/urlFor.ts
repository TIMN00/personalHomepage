import { client } from "./sanity.client";
import imageUrlBuilder from "@sanity/image-url";

//Get a preconfigured url-builder from your sanity client
const builder = imageUrlBuilder(client); //return the value of the url

function urlFor(source: any) {
    return builder.image(source);
}

export default urlFor;