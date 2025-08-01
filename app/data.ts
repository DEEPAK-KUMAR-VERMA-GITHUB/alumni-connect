import { FeatureItem, LeaderBoardItem, QACardItem } from "@/types/landing-page";
import { Award, BookOpen, MessageCircle, Users } from 'lucide-react';

export const features: FeatureItem[] = [
    {
        icon: MessageCircle,
        title: "Q&A Forum",
        description: "Get your questions answered by experienced alumni from your field."
    },
    {
        icon: BookOpen,
        title: "Knowledge Sharing",
        description: "Access blogs, articles, and resources shared by successful alumni."
    },
    {
        icon: Users,
        title: "Mentorship Meets",
        description: "Schedule one-on-one virtual meetings with alumni mentors."
    },
    {
        icon: Award,
        title: "Recognition System",
        description: "Earn badges and certificates for your contributions to the community."
    }
]

export const questions: QACardItem[] = [
    {
        avatar: "globe.svg",
        name: "John Doe",
        post: "Software Engineer",
        question: "What are the best resources for learning web development?",
        likes: 10,
        answers: 5,
        tags: ["Career", "Technology", "Portfolio"]
    },
    {
        avatar: "globe.svg",
        name: "Sarah Chen",
        question: "How do I improve my resume for a job interview?",
        likes: 10,
        answers: 5,
        post: "Talent Aqasition",
        tags: ["Career", "Technology", "Portfolio"]
    },
    {
        avatar: "globe.svg",
        name: "Mike Rodriguez",
        question: "Best practices for technical interviews at FAANG companies?",
        likes: 10,
        answers: 5,
        post: "UX Designer",
        tags: ["Career", "Technology", "Portfolio"]
    }
]

export const LeaderBoard: LeaderBoardItem[] = [
    {
        avatar: "globe.svg",
        name: "Dr. Alex Thompson",
        company: "Google",
        passout: 2015,
        badges: ["Top Mentor", "Knowledge Sharer", "Community Builder"],
        points: 2540,
    },
    {
        avatar: "globe.svg",
        name: "Dr. Alex Thompson",
        company: "Google",
        passout: 2015,
        badges: ["Top Mentor", "Knowledge Sharer", "Community Builder"],
        points: 2450,
    },
    {
        avatar: "globe.svg",
        name: "Dr. Alex Thompson",
        company: "Google",
        passout: 2015,
        badges: ["Top Mentor", "Knowledge Sharer", "Community Builder"],
        points: 2340,
    }
]