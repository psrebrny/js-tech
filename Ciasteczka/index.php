<?php

    setcookie('session', md5(rand()), time() + 60 * 60 * 24 * 30, '/');

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<!--<div id="message"></div>-->

<!--<form id="form" action="mail.php" method="POST">-->
    <!--<input name="your-name" placeholder="Name">-->
    <!--<input name="your-email" placeholder="email">-->
    <!--<textarea name="your-message" placeholder="message"></textarea>-->
    <!--<button>Send</button>-->
<!--</form>-->

<script src="scripts.js"></script>
</body>
</html>