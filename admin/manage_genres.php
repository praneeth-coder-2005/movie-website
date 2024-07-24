<?php
session_start();
require_once '../config.php';

if (!isset($_SESSION['admin_id'])) {
    header("Location: index.php");
    exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['add_genre'])) {
        $name = $_POST['name'];
        
        $stmt = $pdo->prepare("INSERT INTO genres (name) VALUES (?)");
        $stmt->execute([$name]);
    } elseif (isset($_POST['delete_genre'])) {
        $id = $_POST['id'];
        
        $stmt = $pdo->prepare("DELETE FROM genres WHERE id = ?");
        $stmt->execute([$id]);
    }
}

$stmt = $pdo->query("SELECT * FROM genres");
$genres = $stmt->fetchAll();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manage Genres - Hari-Movies</title>
    <link rel="stylesheet" href="../css/admin-style.css">
</head>
<body>
    <header>
        <h1>Manage Genres</h1>
        <nav>
            <ul>
                <li><a href="dashboard.php">Dashboard</a></li>
                <li><a href="logout.php">Logout</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h2>Add New Genre</h2>
        <form method="POST">
            <input type="text" name="name" placeholder="Genre Name" required>
            <button type="submit" name="add_genre">Add Genre</button>
        </form>

        <h2>Existing Genres</h2>
        <table>
            <tr>
                <th>Name</th>
                <th>Action</th>
            </tr>
            <?php foreach ($genres as $genre): ?>
            <tr>
                <td><?php echo $genre['name']; ?></td>
                <td>
                    <form method="POST">
                        <input type="hidden" name="id" value="<?php echo $genre['id']; ?>">
                        <button type="submit" name="delete_genre">Delete</button>
                    </form>
                </td>
            </tr>
            <?php endforeach; ?>
        </table>
    </main>
</body>
</html>
