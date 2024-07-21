export type Story = {
  id: number;
  title: string;
  by: string;
  time: number;
  type: string;
  descendants?: number;
  kids?: string[];
  score?: number;
  url?: string;
  text?: string;
  deleted?: boolean;
};
