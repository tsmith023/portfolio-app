export interface FrontmatterProps {
  image: string
  title: string
}

export interface ArticleProps {
  content: string
  frontmatter: FrontmatterProps
}