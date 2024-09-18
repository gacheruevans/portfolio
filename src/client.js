import sanityClient from '@sanity/client';
import  ImageUrlBuilder  from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'ontt3109',
    dataset: 'production',
    apiVersion:'2023-03-23',
    useCdn: true,
    token: 'skS49z7uNltPNnELH4b6UgHgs9s3enLpqpG7MpNWC5cpCR78KuQR4uMOUPIQ3BNM9L7owDt0myMGHNJ64J8m0UD0xP8mrEtka5JQPsXK6S4J8LVskU6rAIjOrxu2aSGKw0cT6jtJHPFxV52lt6pkT1MrVuXHYV5sKNzGs3mbjyYW2uniruEh',
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);