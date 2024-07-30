<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header("Location: contact.html?error=invalid_email");
    exit;
  }

  $to = "manonlebarazer@icloud.com";
  $subject = "Nouveau message de contact de $name";
  $body = "Nom: $name\nEmail: $email\n\nMessage:\n$message";
  $headers = "From: $email";

  if (mail($to, $subject, $body, $headers)) {
    header("Location: contact.html?success=true");
  } else {
    header("Location: contact.html?error=email_failed");
  }
} else {
  header("Location: contact.html?error=invalid_request");
}
?>
