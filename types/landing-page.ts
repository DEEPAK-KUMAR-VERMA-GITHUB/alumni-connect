import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type FeatureItem = {
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    title: string;
    description: string;
}

export type QACardItem = {
    avatar: string;
    name: string;
    post: string;
    question: string;
    likes: number;
    answers: number;
    tags: Array<string>;
}

export type LeaderBoardItem = {
    avatar: string;
    name: string;
    company: string;
    points: number;
    passout: number;
    badges: Array<string>
}