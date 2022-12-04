import { useRouter } from "next/router"

// our-domain.com/news/something-details

function DetailPage() {
  const router = useRouter();

  // send a request to the backend API
  // to fetch the news item with newsId

  const newsId = router.query.newsId;
    return <h1>The Details Page</h1>
  }
  
  export default DetailPage