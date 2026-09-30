export interface Member {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  rank: string;
  section: "above-all" | "the-big-5" | "money" | "thugs" | "vixens";
  status: "online" | "idle" | "dnd" | "offline";
  joinedAt?: string;
  bio?: string;
}

export interface Section {
  id: string;
  title: string;
  symbol: string;
  description: string;
}
