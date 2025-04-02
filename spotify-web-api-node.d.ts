declare module 'spotify-web-api-node' {
  export interface SpotifyWebApiOptions {
    clientId?: string;
    clientSecret?: string;
    redirectUri?: string;
  }

  export interface SpotifyCredentials {
    clientId?: string;
    clientSecret?: string;
    redirectUri?: string;
    accessToken?: string;
    refreshToken?: string;
  }

  export interface SpotifyApiBody {
    [key: string]: any;
  }

  export interface SpotifyApiQuery {
    [key: string]: any;
  }

  export interface SpotifyApiResponse {
    body: any;
    headers: Record<string, string>;
    statusCode: number;
  }

  export interface SpotifyArtistObject {
    id: string;
    name: string;
    images: { url: string; height: number; width: number }[];
    genres: string[];
    popularity: number;
    followers?: { total: number };
    external_urls?: { spotify: string };
  }
  
  export interface SpotifyTrackObject {
    id: string;
    name: string;
    album: {
      id: string;
      name: string;
      images: { url: string; height: number; width: number }[];
    };
    artists: Array<{
      id: string;
      name: string;
    }>;
    duration_ms: number;
    popularity: number;
    preview_url: string | null;
    explicit: boolean;
  }

  class SpotifyWebApi {
    constructor(options?: SpotifyWebApiOptions);
    
    setAccessToken(accessToken: string): void;
    setRefreshToken(refreshToken: string): void;
    setCredentials(credentials: SpotifyCredentials): void;
    getCredentials(): SpotifyCredentials;
    
    getTokens(code: string): Promise<SpotifyApiResponse>;
    refreshAccessToken(): Promise<SpotifyApiResponse>;
    
    // Artist endpoints
    searchArtists(query: string, options?: SpotifyApiQuery): Promise<SpotifyApiResponse>;
    getArtist(id: string): Promise<SpotifyApiResponse>;
    getArtists(ids: string[]): Promise<SpotifyApiResponse>;
    getArtistAlbums(id: string, options?: SpotifyApiQuery): Promise<SpotifyApiResponse>;
    getArtistTopTracks(id: string, country: string): Promise<SpotifyApiResponse>;
    getArtistRelatedArtists(id: string): Promise<SpotifyApiResponse>;
    
    // Album endpoints
    getAlbum(id: string): Promise<SpotifyApiResponse>;
    getAlbums(ids: string[]): Promise<SpotifyApiResponse>;
    getAlbumTracks(id: string, options?: SpotifyApiQuery): Promise<SpotifyApiResponse>;
    
    // Track endpoints
    getTrack(id: string): Promise<SpotifyApiResponse>;
    getTracks(ids: string[]): Promise<SpotifyApiResponse>;
    getAudioFeaturesForTrack(id: string): Promise<SpotifyApiResponse>;
    getAudioFeaturesForTracks(ids: string[]): Promise<SpotifyApiResponse>;
    
    // Search
    search(query: string, types: string[], options?: SpotifyApiQuery): Promise<SpotifyApiResponse>;
    
    // User profile endpoints
    getMe(): Promise<SpotifyApiResponse>;
    getUser(userId: string): Promise<SpotifyApiResponse>;
    
    // Additional endpoints can be added as needed
  }

  export default SpotifyWebApi;
}