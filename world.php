<?php
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';

$q_country = isset($_POST['country']) ? $_POST['country'] : '';

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
$stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$q_country%'");

$countries = $stmt->fetchAll(PDO::FETCH_ASSOC);

?>
<table>
  <thead> 
    <tr>
      <th> Name </th>
      <th> Continent </th>
      <th> Independence </th>
      <th> Head Of State </th>
    </tr>
  </thead>
  <tbody> 
    <?php foreach ($countries as $country): ?>
    <tr>
      <td><?=$country['name'];?></td>
      <td><?=$country['continent'];?></td>
      <td><?=$country['independence_year'];?></td>
      <td><?=$country['head_of_state'];?></td>
    </tr>
    <?php endforeach; ?>
  </tbody>
</table>
