<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ofir</title>
</head>
<body class="d-flex justify-content-center">
    <?php 
        $laborCost = 12;
        $vat = 1.17;
    ?>
    <section class=".container bg-light p-4">
        <section class="jumbotron bg-success p-4">
            <h1 class="text-white">New product added successfully!</h1>
        </section>
        <h4>Name: <span class="font-weight-light"><?php echo $_GET["name"] ?></span></h4>
        <h4>Retail Price: <span class="font-weight-light"><?php echo (($_GET["price"] + $laborCost)*$vat) ?>$</span> <br><span class="text-dark font-weight-light h6">*including labor cost and VAT</span></h4>  <br>
        <p class="text-dark ">Date added: <?php echo date("d/m/Y")?></p>
    </section>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
</body>
</html>