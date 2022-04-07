<?php
require_once('./mailer/PHPMailer.php');
require_once('./mailer/SMTP.php');
require_once('./mailer/Exception.php');
 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


if(isset($_POST)) { 
	$nome = $_POST['nome'];
    $tel = $_POST['tel'];
    $email = $_POST['email'];
    $pag = $_POST['pag'];
}

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);
 
try {

	$mail->IsSMTP(); // Use SMTP
    $mail->Host        = "smtp.gmail.com"; // Sets SMTP server
    $mail->SMTPDebug   = 2; // 2 to enable SMTP debug information
    $mail->SMTPAuth    = TRUE; // enable SMTP authentication
    $mail->SMTPSecure  = "tls"; //Secure conection
    $mail->Port        = 587; // set the SMTP port
    $mail->CharSet     = 'UTF-8';	
	$mail->Username = 'isldev.adm@gmail.com';
	$mail->Password = 'IEM505044@mac';
	 
   

    //Recipients
    $mail->setFrom('isldev.adm@gmail.com', 'Simulador de previdencia');
    $mail->addAddress('contato@lejuseguros.com.br', 'contatos-Leju');     //Add a recipient
    

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Lead recebido pelo Simulador de Previdência Privada';
    $mail->Body    = 'Segue abaixo os dados recebidos pelo formulário.<br>Nome: '.$nome.' <br>Telefone: '.$tel.'<br>Email: '.$email.'<br>Pagina: '.$pag;
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
   
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
