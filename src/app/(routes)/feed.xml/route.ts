import RSS from "rss";

export async function GET() {
  const feed = new RSS({
    title: "Chehak Sharma",
    description: "Full Stack Developer | Personal Website",
    generator: "RSS for Node and Next.js",
    feed_url: "https://chehak.vercel.app/feed.xml",
    site_url: "https://chehak.vercel.app/",
    managingEditor: "chehak.sharma293@gmail.com (Chehak Sharma)",
    webMaster: "chehak.sharma293@gmail.com (Chehak Sharma)",
    copyright: `Copyright ${new Date()
      .getFullYear()
      .toString()}, Chehak Sharma`,
    language: "en-US",
    pubDate: new Date().toUTCString(),
    ttl: 60,
  });

  // const allPosts = await generateRssFeed();

  // if (allPosts) {
  //   allPosts.map((blog) => {
  //     feed.item({
  //       title: blog.title,
  //       description: blog.description,
  //       url: `https://www.tanay.site/blog/${blog.id}`,
  //       categories: blog.tags || [],
  //       author: "Tanay Vaswani",
  //       date: blog.date,
  //     });
  //   });
  // }

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
