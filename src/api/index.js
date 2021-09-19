const URL = 'https://rest.bandsintown.com';
export const artistUrl = (artist) => `${URL}/artists/${artist}`;

export const artistEventsUrl = (artist) => `${URL}/artists/${artist}/events`;
