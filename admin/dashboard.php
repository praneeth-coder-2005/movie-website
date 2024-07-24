<?php
session_start();
if (!isset($_SESSION['admin_id'])) {
    header("Location: index.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard - Hari-Movies</title>
    <link rel="stylesheet" href="../css/admin-style.css">
</head>
<body>
    <header>
        <h1>Hari-Movies Admin Dashboard</h1>
        <nav>
            <ul>
                <li><a href="manage_movies.php">Manage Movies</a></li>
                <li><a href="manage_genres.php">Manage Genres</a></li>
                <li><a href="manage_trending.php">Manage Trending</a></li>
                <li><a href="manage_coming_soon.php">Manage Coming Soon</a></li>
                <li><a href="logout.php">Logout</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h2>Welcome to the Admin Dashboard</h2>
        <p>Select an option from the navigation menu to manage your website content.</p>
    </main>
</body>
</html>
