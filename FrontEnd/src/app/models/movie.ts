export interface Movie {
    id: number | null;
    title: string;
    picture: string;
    genre: string;
    descriptif: string;
    isBorrow?: boolean;
}