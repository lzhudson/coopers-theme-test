<?php 
/**
 * Main template file.
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
            <a class="slider-content-about-cta-button-primary" href="#">
              conheça o premium
            </a>
            <a class="slider-content-about-cta-button-dark" href="#">
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

  <section class="how-it-works container">
    <div class="how-it-works-content">
      <div class="how-it-works-content-about">
        <h2>Maior Visibilidade para o seu negócio</h2>
        <p>Com a nossa plataforma você tem sua página <strong>personalizada</strong> dentro do site. 
           Sempre que houverem buscas relacionadas ao seu local, ele terá uma <strong>maior relevância 
           e visibilidade</strong> dentro dos nossos resultados.</p>
        <a href="#">
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
            <span>+ 12</span>
            <span>milhões</span>
          </p>
          <p class="how-it-works-content-numbers-visits-text">
            de visitas por mês
          </p>
        </div>
        <div class="how-it-works-content-numbers-locals">
          <p class="how-it-works-content-numbers-locals-numbers">
            <span>+ 8</span>
            <span>milhões</span>
          </p>
          <p class="how-it-works-content-numbers-locals-text">
            de locais cadastrados
          </p>
        </div>
        <div class="how-it-works-content-numbers-categorys">
          <p class="how-it-works-content-numbers-categorys-numbers">
            <span>+ 45</span>
          </p>
          <p class="how-it-works-content-numbers-categorys-text">
            categorias para pesquisa
          </p>
        </div>
      </div>
    </div>
  </section>


  <section class="integrations container">
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
            href="#"
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
            href="#"
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
            href="#"
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

  <section id="#plans" class="plans py-3 container">
    <div class="plans-content">
      <div class="plan-table plan-table-1">
        <h3 class="plan-table-title">Cadastro Grátis</h3>
        <span class="plan-table-price plan-table-price-free">R$ 0</span>
        <p class="plan-table-description">
          seu espaço com ferramentas limitadas
        </p>
        <button class="plan-table-button plan-table-button-free">cadastro grátis</button>
        <ul class="plan-table-list-benefits">
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-true-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Suporte técnico do atendimento 
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-true-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Suporte técnico do atendimento 
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-true-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Suporte técnico do atendimento 
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-true-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Suporte técnico do atendimento 
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-true-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Suporte técnico do atendimento 
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-false-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Descrição do local (até 3282 caracteres)
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-false-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Descrição do local (até 3282 caracteres)
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-false-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Descrição do local (até 3282 caracteres)
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-false-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Descrição do local (até 3282 caracteres)
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-false-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Descrição do local (até 3282 caracteres)
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-false-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Descrição do local (até 3282 caracteres)
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-false-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Descrição do local (até 3282 caracteres)
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-false-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Descrição do local (até 3282 caracteres)
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-false-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Descrição do local (até 3282 caracteres)
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-false-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Descrição do local (até 3282 caracteres)
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-false-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Descrição do local (até 3282 caracteres)
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-false-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Descrição do local (até 3282 caracteres)
            </p>
          </li>
        </ul>
        <button class="plan-table-button plan-table-button-free">cadastro grátis</button>
      </div>
      <div class="plan-table plan-table-2 plan-table-active">
        <h3 class="plan-table-title">Plano Prata</h3>
        <span class="plan-table-price plan-table-price-monthly-silver">R$ 70</span>
        <p class="plan-table-description">
          <span class="plan-table-description-text">Mensal</span>
          <img
            class="plan-table-description-icon" 
            src="<?php echo get_template_directory_uri() . './dist/images/dropdown-icon.svg'?>" 
            alt="Drop Down Icon"
          >
        </p>
        <button class="plan-table-button plan-table-button-monthly-silver">cadastro grátis</button>
        <ul class="plan-table-list-benefits">
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-true-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Suporte técnico do atendimento 
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-true-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Suporte técnico do atendimento 
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-true-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Suporte técnico do atendimento 
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-true-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Suporte técnico do atendimento 
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-true-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Suporte técnico do atendimento 
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-false-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Descrição do local (até 3282 caracteres)
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-false-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Descrição do local (até 3282 caracteres)
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-false-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Descrição do local (até 3282 caracteres)
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-false-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Descrição do local (até 3282 caracteres)
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-false-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Descrição do local (até 3282 caracteres)
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-false-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Descrição do local (até 3282 caracteres)
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-false-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Descrição do local (até 3282 caracteres)
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-false-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Descrição do local (até 3282 caracteres)
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-false-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Descrição do local (até 3282 caracteres)
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-false-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Descrição do local (até 3282 caracteres)
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-false-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Descrição do local (até 3282 caracteres)
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-false-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Descrição do local (até 3282 caracteres)
            </p>
          </li>
        </ul>
        <button class="plan-table-button plan-table-button-monthly-silver">cadastro grátis</button>
      </div>
      <div class="plan-table plan-table-3 plan-table-active">
        <h3 class="plan-table-title">Plano Platinum</h3>
        <span class="plan-table-price plan-table-price-monthly-platinum">R$ 150</span>
        <p class="plan-table-description">
          <span class="plan-table-description-text">Mensal</span>
          <img
            class="plan-table-description-icon" 
            src="<?php echo get_template_directory_uri() . './dist/images/dropdown-icon.svg'?>" 
            alt="Drop Down Icon"
          >
        </p>
        <button class="plan-table-button plan-table-button-monthly-platinum">cadastro grátis</button>
        <ul class="plan-table-list-benefits">
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-true-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Suporte técnico do atendimento 
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-true-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Suporte técnico do atendimento 
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-true-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Suporte técnico do atendimento 
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-true-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Suporte técnico do atendimento 
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-true-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Suporte técnico do atendimento 
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-false-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Descrição do local (até 3282 caracteres)
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-false-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Descrição do local (até 3282 caracteres)
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-false-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Descrição do local (até 3282 caracteres)
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-false-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Descrição do local (até 3282 caracteres)
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-false-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Descrição do local (até 3282 caracteres)
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-false-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Descrição do local (até 3282 caracteres)
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-false-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Descrição do local (até 3282 caracteres)
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-false-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Descrição do local (até 3282 caracteres)
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-false-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Descrição do local (até 3282 caracteres)
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-false-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Descrição do local (até 3282 caracteres)
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-false-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Descrição do local (até 3282 caracteres)
            </p>
          </li>
          <li class="plan-table-list-benefits-item">
            <img 
              class="plan-table-list-benefits-item-icon" 
              src="<?php echo get_template_directory_uri() . './dist/images/check-false-icon.svg'?>" 
              alt="Check True Icon"
            >
            <p class="plan-table-list-benefits-item-description">
              Descrição do local (até 3282 caracteres)
            </p>
          </li>
        </ul>
        <button class="plan-table-button plan-table-button-monthly-platinum">cadastro grátis</button>
      </div>
    </div>
  </section>
<?php 
get_footer();