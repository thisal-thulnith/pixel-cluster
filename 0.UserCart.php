<?php
$conn = new mysqli("localhost", "root", "", "pixel_cluster");

if ($conn->connect_error) {
    die("Database connection failed");
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $book = $_POST["book"];
    $category = $_POST["category"];
    $format = $_POST["format"];
    $price = ($format == "Softcopy") ? 800 : 1500;

    $sql = "INSERT INTO purchases 
            (customer_name, email, book_title, category, format, price)
            VALUES ('$name','$email','$book','$category','$format','$price')";

    $conn->query($sql);
}
?>

<!DOCTYPE html>
<html>
<head>
<title>Pixel Cluster | Cart</title>

<style>
body{
  background:#0c0114;
  font-family:Arial;
  color:silver;
}

.container{
  max-width:600px;
  margin:40px auto;
  background:#1a022e;
  padding:25px;
  border-radius:14px;
}

h1{
  text-align:center;
  color:#b18cfa;
  font-family:"Lucida Calligraphy";
}

label{
  display:block;
  margin-top:12px;
}

input, select{
  width:100%;
  padding:8px;
  margin-top:5px;
  border-radius:8px;
  border:none;
}

button{
  margin-top:20px;
  width:100%;
  padding:10px;
  background:#7c3aed;
  border:none;
  color:white;
  font-size:16px;
  border-radius:10px;
  cursor:pointer;
}

button:hover{
  background:#5b21b6;
}

.price{
  text-align:center;
  margin-top:15px;
  font-size:18px;
  color:#e4b1f2;
}

a{
  color:#e4b1f2;
  text-decoration:none;
  display:block;
  text-align:center;
  margin-top:15px;
}
</style>

<script>
function updatePrice(){
  let format = document.getElementById("format").value;
  document.getElementById("price").innerHTML =
    (format === "Softcopy") ? "LKR 800" : "LKR 1500";
}
</script>

</head>
<body>

<div class="container">
<h1>Pixel Cluster Cart</h1>

<form method="post">
<label>Full Name</label>
<input type="text" name="name" required>

<label>Email</label>
<input type="email" name="email" required>

<label>Book Title</label>
<input type="text" name="book" required>

<label>Category</label>
<select name="category">
  <option>Novels</option>
  <option>Educational</option>
  <option>Kids</option>
  <option>Biographies</option>
  <option>Programming</option>
</select>

<label>Format</label>
<select name="format" id="format" onchange="updatePrice()">
  <option>Softcopy</option>
  <option>Hardcopy</option>
</select>

<div class="price">
Total Price: <span id="price">LKR 800</span>
</div>

<button type="submit">Add to Cart / Purchase</button>
</form>

<a href="history.php">📜 View Purchase History</a>
</div>

</body>
</html>
