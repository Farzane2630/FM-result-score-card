import type { ReactNode } from "react"

export type ScoreCardProps= {
    icon: ReactNode;
    title: string;
    score:number;
    color: string;
    backgroundColor: string;
}