const getWelcomePage = (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Blogs</title>
       <link rel="stylesheet" href="/styles.css">

    </head>
    <body>
        <nav>
            <div class="logo">Blogify</div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/api/blogs">Blogs</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>

        <header>
            <h1>Welcome to Blogify</h1>
            <p>Your go-to platform for amazing blogs and insights.</p>
            <a href="/api/blogs" class="btn">Explore Blogs</a>
        </header>

        <section class="features">
            <div class="feature-box">
                <h2>Read Engaging Blogs</h2>
                <p>Discover a variety of blogs from different categories and stay updated.</p>
            </div>
            <div class="feature-box">
                <h2>Write Your Own</h2>
                <p>Share your thoughts and stories with the world by writing your own blog posts.</p>
            </div>
            <div class="feature-box">
                <h2>Connect with Others</h2>
                <p>Engage with the blogging community by commenting and sharing.</p>
            </div>
        </section>

        <footer>
            <p>&copy; 2025 Blogify. All rights reserved.</p>
        </footer>
    </body>
    </html>
  `);
};

module.exports = getWelcomePage;
