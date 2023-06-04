import type React from "react"
import { Hashtag } from "../components/Ui/HashTags/HashTags.tsx"

export interface ChildrenProps {
    children: React.ReactNode
}

export interface TabsProps {
    id: string
    tabTitle: string
    content: React.ReactNode
}

export interface PostProps {
    id: string
    timestampAt: string
    text?: string
    title?: string
    img?: string
    video?: string
    hashtag: Hashtag[]
    siteLink?: string
    githubLink?: string
}
