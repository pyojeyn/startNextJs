// my-domain.com/news/something-important

import { useRouter } from "next/router"; // next 의 하위 패키지 훅임.
// 이건 기본 React 훅인데 React에 내장된 것은 아니고 Next에서 만들어서 흔히 쓰이는 훅입니다
function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;
  /**
   * 이제 이렇게 newsId를 받을 수 있을 텐데요
   * 뉴스를 가져올 수 있는 데이터베이스나 백엔드 API가 있다면
   * 백엔드 API에 요청을 보내서
   * newsId에 해당하는 뉴스 항목을 가져올 수 있습니다.
   */

  return (
    <>
      <h1>Detail Page</h1>
      <p>{newsId}</p>
    </>
  );
}

export default DetailPage;
