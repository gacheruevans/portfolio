import sanityClient from '@sanity/client';
import  ImageUrlBuilder  from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'ontt3109',
    dataset: 'production',
    apiVersion:'2023-03-23',
    useCdn: true,
    token: process.env.SANITY_TOKEN,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);