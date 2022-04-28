export interface User {
  id: number;
  customId: string;
  name: string;
  avatar: string;
  intro?: string;
  organization?: string;
  position?: string;
}
