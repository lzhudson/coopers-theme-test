<?php 
/**
 * Main template file.
 * // Template Name: Home
 * 
 * @package Coopers
 */

 get_header();
?>

  <section class="sliders container py-3">
    <div class="slider-content">
        <div class="slider-content-about">
          <h2 class="slider-content-about-title">
            Apareça <br>
            <span clsas="highlight">em todos os lugares<span>
          </h2>
          <div class="slider-content-about-description">
            <p class="slider-content-about-description-text">
              Posição de destaque dentro do site
            </p>
            <p class="slider-content-about-description-text slider-content-about-description-text-bolded">
              Página sem concorrentes ou publicidade
            </p>
            <p class="slider-content-about-description-text">
              Autonomia para edição completa da página
            </p>
          </div>
          <div class="slider-content-about-cta">
            <a class="slider-content-about-cta-button-primary" href="#plans">
              conheça o premium
            </a>
            <a class="slider-content-about-cta-button-dark" href="#plans">
              cadastro grátis
            </a>
          </div>
            
        </div>
        <div class="slider-content-image">
            <img 
              src="<?php echo get_template_directory_uri() . './dist/images/slider/slide-01.png' ?>" 
              alt="Slide 01"
            >
        </div>  
      </div>
    </div>    
  </section>
  <?php 
    $numberVisits = get_field('visits');
    $localsRegisted = get_field('locals_registed');
    $categoryForSearch = get_field('category_for_search');
  ?>

  <section class="how-it-works container">
    <div class="how-it-works-content">
      <div class="how-it-works-content-about">
        <h2>Maior Visibilidade para o seu negócio</h2>
        <p>Com a nossa plataforma você tem sua página <strong>personalizada</strong> dentro do site. 
           Sempre que houverem buscas relacionadas ao seu local, ele terá uma <strong>maior relevância 
           e visibilidade</strong> dentro dos nossos resultados.</p>
        <a href="#plans">
          Conheça o Premium
          <img 
            src="<?php echo get_template_directory_uri() . './dist/images/arrow-right.svg'?>" 
            alt="Arrow Right"
          >
        </a>
      </div>
      <div class="how-it-works-content-numbers">
        <div class="how-it-works-content-numbers-visits">
          <p class="how-it-works-content-numbers-visits-numbers">
            <span>+ <?php echo $numberVisits; ?></span>
            <span>milhões</span>
          </p>
          <p class="how-it-works-content-numbers-visits-text">
            de visitas por mês
          </p>
        </div>
        <div class="how-it-works-content-numbers-locals">
          <p class="how-it-works-content-numbers-locals-numbers">
            <span>+ <?php echo $localsRegisted; ?></span>
            <span>milhões</span>
          </p>
          <p class="how-it-works-content-numbers-locals-text">
            de locais cadastrados
          </p>
        </div>
        <div class="how-it-works-content-numbers-categorys">
          <p class="how-it-works-content-numbers-categorys-numbers">
            <span>+ <?php echo $categoryForSearch;?></span>
          </p>
          <p class="how-it-works-content-numbers-categorys-text">
            categorias para pesquisa
          </p>
        </div>
      </div>
    </div>
  </section>


  <section class="integrations container py-3">
    <div class="integrations-content">
      <div class="integrations-content-google">
        <div class="integrations-content-google-img">
          <img 
            src="<?php echo get_template_directory_uri() . '/dist/images/google-integrarions-image.png'?>" 
            alt="Google Integrations"
          >
        </div>
        <div class="integrations-content-google-description">
          <img class="integrations-content-google-description-img"
            src="<?php echo get_template_directory_uri() . '/src/images/logo-google.png'?>" 
            alt="Logo Google"
          >
          <h4 class="integrations-content-google-description-title">
            Site otimizado para o Google
          </h4>
          <p class="integrations-content-google-description-text">
            Esteja entre os primeiros resultados nas buscas por estabelecimentos 
            da sua categoria.
          </p>
          <a
            class="integrations-content-google-description-button"
            href="#plans"
          >
            <span class="integrations-content-google-description-button-text">
              Cadastro Grátis
            </span>
            <img 
              class="integrations-content-google-description-button-icon"
              src="<?php echo get_template_directory_uri() . '/src/images/arrow-right-2.svg'?>" 
              alt="Arrow Right"
            >
          </a>
        </div>
      </div>
      <div class="integrations-content-alexa">
        <div class="integrations-content-google-description">
          <img class="integrations-content-alexa-description-img"
            src="<?php echo get_template_directory_uri() . '/src/images/logo-alexa.png'?>" 
            alt="Logo Google"
          >
          <h4 class="integrations-content-alexa-description-title">
            Seja sugerido pela Alexa
          </h4>
          <p class="integrations-content-alexa-description-text">
            Você pergunta e a Alexa responde sugerindo o seu estabelecimento.
          </p>
          <a
            class="integrations-content-alexa-description-button"
            href="#plans"
          >
            <span class="integrations-content-alexa-description-button-text">
              Cadastro Grátis
            </span>
            <img 
              class="integrations-content-alexa-description-button-icon"
              src="<?php echo get_template_directory_uri() . '/src/images/arrow-right-2.svg'?>" 
              alt="Arrow Right"
            >
          </a>
        </div>
        <div class="integrations-content-alexa-img">
          <img 
            src="<?php echo get_template_directory_uri() . '/src/images/alexa-integrations-image.png'?>" 
            alt="Alexa Integrations"
          >
        </div>
      </div>
      <div class="integrations-content-google">
        <div class="integrations-content-google-img">
          <img 
            src="<?php echo get_template_directory_uri() . '/src/images/car-play-integrations-image.png'?>" 
            alt="Car Play"
          >
        </div>
        <div class="integrations-content-car-play-description">
          <img class="integrations-content-car-play-description-img"
            src="<?php echo get_template_directory_uri() . '/src/images/logo-apple-maps.png'?>" 
            alt="Logo Apple Maps"
          >
          <h4 class="integrations-content-car-play-description-title">
            Apareça no Apple Maps e CarPLay
          </h4>
          <p class="integrations-content-car-play-description-text">
            Apareça nos resultados do GPS quando alguém buscar por estabelecimentos próximos.
          </p>
          <a
            class="integrations-content-car-play-description-button"
            href="#plans"
          >
            <span class="integrations-content-car-play-description-button-text">
              Conheça o Premium
            </span>
            <img 
              class="integrations-content-car-play-description-button-icon"
              src="<?php echo get_template_directory_uri() . '/src/images/arrow-right-2.svg'?>" 
              alt="Arrow Right"
            >
          </a>
        </div>
      </div>
    </div>
  </section>

  <section id="plans" class="plans py-3 container">
    <?php 
      $rowsPlansData = get_field('plans');
      $index = 0;
      $activeClass = 'active';
      $classPlan = 'free';
      $monthlySilverClass = 'monthly-silver';
      $monthlyPlatinumClass = 'monthly-platinum';
      $buttonText = 'cadastro grátis!';
    ?>

    <div class="plans-content">
      <?php 
        while( have_rows('plans') ): the_row(); 
        $typePlan = get_sub_field('type_plan');
        $price = get_sub_field('price');
        $advantagensOrDisadvantages = get_sub_field('advantages_disadvantages');
        $buttonText = $index >= 1 ? 'assine hoje!' : $buttonText;
        if($index === 1) {
          $classPlan = $monthlySilverClass;
        } 
        if($index === 2) {
          $classPlan = $monthlyPlatinumClass;
        }
      ?>
      <div class="plan-table plan-table-<?php echo $index; ?> <?php echo $index >= 1 ? 'plan-table-active' : '' ?>">
        <h3 class="plan-table-title"><?php the_sub_field('type_plan'); ?></h3>
        <span class="plan-table-price plan-table-price-<?php echo $classPlan; ?>">R$ <?php the_sub_field('price'); ?></span>
        <p class="plan-table-description">
          <?php if($index === 0) : ?>
            seu espaço com ferramentas limitadas
          <?php else : ?>
            <span class="plan-table-description-text">Mensal</span>
            <img
              class="plan-table-description-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/dropdown-icon.svg'?>" 
              alt="Drop Down Icon"
            >
          <?php endif; ?>
        </p>
        <button class="plan-table-button plan-table-button-<?php echo $classPlan; ?>">
        <?php echo $buttonText; ?>
        </button>
        <ul class="plan-table-list-benefits">
        <?php 
          while( have_rows('advantages_disadvantages') ) : the_row();
            $descriptionBenefit = get_sub_field('description_benefit');
            $hasNotHas = get_sub_field('has_nothas');
            $imageBenefit = !!$hasNotHas ? 'check-true-icon.svg' : 'check-false-icon.svg';
        ?>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/' . $imageBenefit ?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              <?php echo the_sub_field('description_benefit'); ?>
            </p>
          </li>  
        <?php endwhile; ?>
                
        </ul>
        <button class="plan-table-button plan-table-button-<?php echo $classPlan; ?>">
          <?php echo $buttonText; ?>
        </button>
      </div>
      <?php $index++; endwhile; ?>
    </div>
  </section>
<?php 
get_footer();