export interface Meme {
    id: string;
    name: string;
    url: string;
}
  
export interface MemeCardProps {
    meme: { id: string; name: string; url: string };
  }