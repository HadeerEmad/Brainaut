<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$message = $_POST['message'];

if($phone == '') {
    $phone = "Phone wasn't entered";
}

$formContent = "From: $name \nEmail: $email \nPhone: $phone \nSubject: $subject \nMessage: $message";

$recipient = "contact@brainaut.net"; // write email here
$mailHeader = "From: $email \r\n";
mail($recipient, $subject, $formContent, $mailHeader) or die("Error!");
header('Location: index.html');

?>