<?php
session_start();
require_once '../config.php';

if (!isset($_SESSION['admin_id'])) {
    header("Location: index.php");
    exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['add_movie'])) {
        $title = $_POST['title'];
        $genre = $_POST['genre'];
        $image = $_POST['image'];
        
        $stmt = $pdo->prepare("INSERT INTO movies (title, genre, image) VALUES (?, ?, ?)");
        $stmt->execute([$title, $genre, $image]);
    } elseif (isset($_POST['delete_movie'])) {
        $id = $_POST['id'];
        
        $stmt = $pdo->prepare("DELETE FROM movies WHERE id = ?");
        $stmt->execute([$id]);
    }
}

$stmt = $pdo->query("SELECT * FROM movies");
$movies = $stmt->fetchAll();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manage Movies - Hari-Movies</title>
    <link rel="stylesheet" href="../css/admin-style.css">
</head>
<body>
    <header>
        <h1>Manage Movies</h1>
        <nav>
            <ul>
                <li><a href="dashboard.php">Dashboard</a></li>
                <li><a href="logout.php">Logout</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h2>Add New Movie</h2>
        <form method="POST">
            <input type="text" name="title" placeholder="Movie Title" required>
            <input type="text" name="genre" placeholder="Genre" required>
            <input type="text" name="image" placeholder="Image URL" required>
            <button type="submit" name="add_movie">Add Movie</button>
        </form>

        <h2>Existing Movies</h2>
        <table>
            <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Action</th>
            </tr>
            <?php foreach ($movies as $movie): ?>
            <tr>
                <td><?php echo $movie['title']; ?></td>
                <td><?php echo $movie['genre']; ?></td>
                <td>
                    <form method="POST">
                        <input type="hidden" name="id" value="<?php echo $movie['id']; ?>">
                        <button type="submit" name="delete_movie">Delete</button>
                    </form>
                </td>
            </tr>
            <?php endforeach; ?>
        </table>
    </main>
</body>
</html>
