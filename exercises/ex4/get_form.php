<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ofir</title>
</head>
<body>
    <h1>New product added successfully!</h1>
    <h3>Name: <?php echo $_GET["name"] ?></h3>
    <h3>Retail Price: <?php echo (($_GET["price"] + 12)*1.17) ?>$</h3>
    <h3>Date added:<?php echo date("d/m/Y")?></h3>
</body>
</html>