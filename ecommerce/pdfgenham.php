<?php
include("dompdf-2.0.8\dompdf\autoload.inc.php");
use Dompdf\Dompdf;

$pdf=new Dompdf();

ob_start();
require ("detailspdf.php");
$html= ob_get_clean();

$pdf->loadHtml($html);
$pdf->setPaper("A4","landingscape");
$pdf->render();
$savepdf=$pdf->output();
ob_end_clean();

$pdf->stream("detailspdf.php",['Attachment'=>false]);

$rutasave="C:\\xampp\\htdocs\\pps1pruebanode\\comprobantes\\";

$nombrearchivo=$_SESSION['Fn']."-".$_SESSION['Ln']."-comprobante.pdf";

file_put_contents($rutasave.$nombrearchivo,$savepdf);


?>