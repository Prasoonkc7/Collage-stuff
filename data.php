<?php
// Database connection
$conn = new mysqli("localhost", "root", "", "testdb");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Function to insert data
function insertdb($conn) {
    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $age = $_POST['age'];

        $sql = "INSERT INTO students (name, email, age) 
                VALUES ('$name', '$email', '$age')";

        if ($conn->query($sql) === TRUE) {
            echo "Data inserted successfully<br>";
        } else {
            echo "Error: " . $conn->error;
        }
    }
}

// Function to display data
function display($conn) {
    $sql = "SELECT * FROM students";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "<h3>Student Records</h3>";
        echo "<table border='1'>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                </tr>";

        while ($row = $result->fetch_assoc()) {
            echo "<tr>
                    <td>{$row['id']}</td>
                    <td>{$row['name']}</td>
                    <td>{$row['email']}</td>
                    <td>{$row['age']}</td>
                  </tr>";
        }

        echo "</table>";
    } else {
        echo "No records found";
    }
}

// Call insert function
insertdb($conn);
?>

<!DOCTYPE html>
<html>
<head>
    <title>PHP Form</title>
</head>
<body>

<h2>Student Form</h2>

<form method="POST">
    Name: <input type="text" name="name" required><br><br>
    Email: <input type="email" name="email" required><br><br>
    Age: <input type="number" name="age" required><br><br>
    <input type="submit" name="submit" value="Insert">
</form>

<br>

<?php
// Call display function
display($conn);
?>

</body>
</html>