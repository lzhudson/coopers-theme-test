<?php 
/**
 * Footer file
 * 
 * @package Coopers
 */

?>
  <?php 
    $whastappNumber = get_field('whatsapp');
    $email = get_field('email');
  ?>
  <footer>
    <div class="footer-content">
      <p class="sales-center-text">Central de vendas</p>
      <a class="sales-center-whatsapp" href="#">
        <img src="<?php echo get_template_directory_uri() . './src/images/whatsapp-icon.svg '?>" alt="Whatsapp Icon">
        <span>+55 <?php echo $whastappNumber; ?></span>
      </a>
      <a class="sales-center-email" href="#">
        <?php echo $email; ?>
      </a>
      <p class="copyright-text">
        © 2020 Coopers. Todos os direitos reservados.
      </p>
    </div>
  </footer>
  <?php wp_footer(); ?>
</body>
</html>