// my-domain.com/news

import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1>The news Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-greate-framework">
            Next JS Is A Gread Framework
          </Link>
        </li>
        <li>Something Else</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
