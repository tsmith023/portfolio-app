import md from 'markdown-it'
import { ArticleProps } from './types'

const Article = (props: ArticleProps) => {
  return (
    <div className='prose mx-auto'>
      <h1>{props.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md().render(props.content) }} />
    </div>
  )
}

export default Article