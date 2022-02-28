// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'
import PostsLayout from 'src/layouts/PostsLayout'
import BlogLayout from 'src/layouts/BlogLayout'
import AdminLayout from './layouts/AdminLayout/AdminLayout'

const Routes = () => {
  return (
    <Router>
      {/* ADMIN */}
      <Set wrap={AdminLayout}>
        {/* ADMIN AUTH */}
        <Route path="/admin/login" page={AdminLoginPage} name="adminLogin" />
        <Route path="/admin/signup" page={AdminSignupPage} name="adminSignup" />
        <Route path="/admin/forgot-password" page={AdminForgotPasswordPage} name="adminForgotPassword" />
        <Route path="/admin/reset-password" page={AdminResetPasswordPage} name="adminResetPassword" />
        <Private unauthenticated="adminLogin">
          <Route path="/admin" page={AdminDashboardPage} name="adminDashboard" />
          <Set wrap={PostsLayout}>
            <Route path="/admin/posts/new" page={DevAdminPostNewPostPage} name="newPost" />
            <Route path="/admin/posts/{id}/edit" page={DevAdminPostEditPostPage} name="editPost" />
            <Route path="/admin/posts/{id}" page={DevAdminPostPostPage} name="post" />
            <Route path="/admin/posts" page={DevAdminPostPostsPage} name="posts" />
          </Set>
        </Private>
      </Set>
      {/* BLOG */}
      <Set wrap={BlogLayout}>
        <Route path="/contact" page={BlogContactPage} name="contact" />
        <Route path="/articles/{id}" page={BlogPostPage} name="article" />
        <Route path="/about" page={BlogAboutPage} name="about" />
        <Route path="/" page={BlogHomePage} name="home" />
      </Set>
      {/* MISC */}
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
