// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import PostsLayout from 'src/layouts/PostsLayout'
import BlogLayout from 'src/layouts/BlogLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={PostsLayout}>
        <Route path="/posts/new" page={DevAdminPostNewPostPage} name="newPost" />
        <Route path="/posts/{id}/edit" page={DevAdminPostEditPostPage} name="editPost" />
        <Route path="/posts/{id}" page={DevAdminPostPostPage} name="post" />
        <Route path="/posts" page={DevAdminPostPostsPage} name="posts" />
      </Set>
      <Set wrap={BlogLayout}>
        <Route path="/contact" page={BlogContactPage} name="contact" />
        <Route path="/articles/{id}" page={BlogPostPage} name="article" />
        <Route path="/about" page={BlogAboutPage} name="about" />
        <Route path="/" page={BlogHomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
