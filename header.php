<?php 
/**
 * Header file
 * 
 * @package Coopers
 */

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> >
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <?php wp_head();?>
</head>
<body>
  <header class="container">
    <nav class="nav">
      <a class="nav-logo" href="#">
        <img 
          src="<?php echo get_template_directory_uri() . './dist/images/logo-coopers.svg'?>" 
          alt="Logo Coopers">
      </a>
      <ul class="nav-menu">
        <li class="nav-menu-item">
          <a class="nav-menu-item-link" href="#plans">Planos e preços</a>
        </li>
        <li class="nav-menu-item">
          <a class="nav-menu-item-button" href="#">entrar</a>
        </li>
      </ul>
    </nav>
    
  </header>
