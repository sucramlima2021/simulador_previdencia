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

$mail = new PHPMailer(true);
 
try {

	$mail->IsSMTP(); 
    $mail->Host        = "smtp.gmail.com"; 
    $mail->SMTPDebug   = 2; 
    $mail->SMTPAuth    = TRUE; 
    $mail->SMTPSecure  = "tls"; 
    $mail->Port        = 587; 
    $mail->CharSet     = 'UTF-8';	
	$mail->Username = 'USUÁRIO';
	$mail->Password = 'SENHA';
    $mail->setFrom('REMETENTE', 'Simulador de previdencia');
    $mail->addAddress('DESTINATÁRIO');     
    $mail->isHTML(true);                                  
    $mail->Subject = 'Lead recebido pelo Simulador de Previdência Privada';
    $mail->Body    = 'Segue abaixo os dados recebidos pelo formulário.<br>Nome: '.$nome.' <br>Telefone: '.$tel.'<br>Email: '.$email.'<br>Pagina: '.$pag;
    

    $mail->send();
   
} catch (Exception $e) {
    echo "ERRO AO ENVIAR EMAIL: {$mail->ErrorInfo}";
}
