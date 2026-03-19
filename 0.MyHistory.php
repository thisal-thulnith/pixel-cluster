<?php
$conn = new mysqli("localhost", "root", "", "pixel_cluster");
$result = $conn->query("SELECT * FROM purchases ORDER BY purchase_date DESC");
?>

<!DOCTYPE html>
<html>
<head>
<title>Purchase History</title>

<style>
body{
  background:#020003;
  font-family:'Times new roman';
  color:silver;
}

.container{
  max-width:900px;
  margin:40px auto;
}

h1{
  text-align:center;
  color:#b18cfa;
  font-family:'Times new roman';
}

table{
  width:100%;
  border-collapse:collapse;
  background:#1a022e;
  font-family:'Times new roman';
}

th, td{
  padding:10px;
  border-bottom:1px solid #444;
  text-align:center;
font-family:'Times new roman';
}

th{
  background:#2a0642;
  color:#e4b1f2;
  font-family:'Times new roman';
}

a{
  color:#e4b1f2;
  display:block;
  margin-top:20px;
  text-align:center;
}
</style>
</head>

<body>
<div class="container">
<h1>Purchase History</h1>

<table>
<tr>
<th>Name</th>
<th>Email</th>
<th>Book</th>
<th>Dancing teacher</th>
<th>Music teacher</th>
<th>Music teacher</th>
<th>Price</th>
<th>Date</th>
</tr>

<?php while($row = $result->fetch_assoc()){ ?>
<tr>
<td><?= $row["customer_name"] ?></td>
<td><?= $row["email"] ?></td>
<td><?= $row["book_title"] ?></td>
<td><?= $row["category"] ?></td>
<td><?= $row["format"] ?></td>
<td>LKR <?= $row["price"] ?></td>
<td><?= $row["purchase_date"] ?></td>
</tr>
<?php } ?>

</table>

<a href="cart.php">⬅ Back to Cart</a>
</div>
</body>
</html>
