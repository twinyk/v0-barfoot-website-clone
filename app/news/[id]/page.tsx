import { getNewsArticleById } from "@/lib/news"
import { NewsArticleDetail } from "@/components/news-article-detail"
import { notFound } from "next/navigation"

export default async function NewsArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const article = getNewsArticleById(id)

  if (!article) {
    notFound()
  }

  return <NewsArticleDetail article={article} />
}
