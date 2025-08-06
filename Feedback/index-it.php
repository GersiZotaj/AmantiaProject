<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="bootstrap.css">
    <title>Amantia</title>
</head>
<body>

    <video playsinline loop muted autoplay="autoplay" class="back-video">
        <source src="pizzadough.mp4" type="video/mp4">
    </video>

    <div class="container">
        <div class="row">
            <div class="col-lg-6 m-auto">
                <div class="card mt-5">
                    <div class="card-title">
                        <h2 class="text-center py-2"> Feedback </h2>
                        <hr>
                        <?php 
                            $Msg = "";
                            if(isset($_GET['error']))
                            {
                                $Msg = "Si prega, di riempire i posti vuoti! ";
                                echo '<div class="alert alert-danger">'.$Msg.'</div>';
                            }

                            if(isset($_GET['success']))
                            {
                                $Msg = " Il tuo messaggio è stato inviato! ";
                                echo '<div class="alert alert-success">'.$Msg.'</div>';
                            }
                        
                        ?>
                    </div>
                    <div class="card-body">
                        <form action="process.php" method="post">
                            <input type="text" name="UName" placeholder="Nome" class="form-control mb-2">
                            <input type="email" name="Email" placeholder="Email" class="form-control mb-2">
                            <input type="text" name="Subject" placeholder="Oggeto" class="form-control mb-2">
                            <textarea name="msg" class="form-control mb-2" placeholder="Scrivi il messaggio..."></textarea>
                            <button class="btn btn-success" name="btn-send"> Invia </button>
                        </form>
                    </div>
                </div>

                <a href="/index-it.html" class="butoni">Torna al Titolo</a>
            </div>
        </div>
    </div>
</body>
</html>