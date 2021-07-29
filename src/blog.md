---
title: "Blog"
layout: "layouts/feed.html"
pagination:
  data: collections.blogposts
  size: 5
permalink: "blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html"
paginationPrevText: "Newer posts"
paginationNextText: "Older posts"
paginationAnchor: "#post-list"
---

The latest articles on subjects that recently caught my interest. Enjoy!
