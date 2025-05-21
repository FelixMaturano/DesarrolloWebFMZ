<?php
if($_SESSION["nivel"]==0)
{
    echo "Usted no esta autorizado a realizar esta operacion";
    ?>
    <meta http-equiv="refresh" content="3;url=read.php">
    <?php
    die();
}?>