<section><!DOCTYPE html>
    <html lang="pt-BR">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Site de Informática</title>
        <link rel="stylesheet" href="styles.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
            integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    </head>
    
    <body>
        <header class="bg-dark text-white py-4">
            <div class="container">
                <h1 class="display-4">GIGATECH - Sistema de Vendas</h1>
                <p class="lead">Seja bem-vindo à GIGATECH, sua loja de informática especializada!</p>
            </div>
        </header>
    
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container">
                <a class="navbar-brand" href="#">GIGATECH</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#home">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#produtos">Produtos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#empresa">Empresa</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contato">Contato</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    
        <section><!DOCTYPE html>
            <html lang="pt-BR">
            
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Carrossel de Imagens</title>
                <!-- Bootstrap CSS -->
                <link href="https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/css/bootstrap.min.css" rel="stylesheet">
            </head>
            
            <body>
                <section>
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                                aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="img/placa-mae-gigabyte-b550m-k-am4-matx-001.jpg" width="400" height="400" class="d-block w-100"
                                    alt="Primeiro slide">
                            </div>
                            <div class="carousel-item">
                                <img src="img/5169n4UNj5L._AC_UF894,1000_QL80_.jpg" width="400" height="400"
                                    class="d-block w-100" alt="Segundo slide">
                            </div>
                            <div class="carousel-item">
                                <img src="img/processador-amd-ryzen-5-5500-cache-19mb-3-7ghz-4-2ghz-max-turbo-am4-100-100000457box_1647636796_m.jpg" width="400" height="400"  class="d-block w-100"
                                alt="Terceiro slide"> 
                               
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Anterior</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Próximo</span>
                        </button>
                    </div>
                </section>
            
                <!-- Bootstrap JavaScript (opcional) -->
                <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/js/bootstrap.bundle.min.js"> </script>
            </body>
            
            </html>
             </section>
    
        <section id="produtos" class="py-5">
            <div class="container">
                <h2 class="mb-4 text-center">Nossos Produtos</h2>
                <div class="row">
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <img src="img/fonte_de_alimentacao_atx_gamer_500w_real_dmix_102399_1_cea64b5ce63f4d8d1872914378373e54.webp"     height="300px"          class="card-img-top" alt="Produto 1">
                            <div class="card-body">
                                <h5 class="card-title">Fonte Bomba</h5>
                                <p class="card-text">Uma fonte que com certeza você não vai querer ter em casa. Além disso, ela tem 700W (não são reais).</p>
                                <a href="#" class="btn btn-primary">Ver detalhes</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <img src="img/images (1).jpeg" class="card-img-top" alt="Produto 2">
                            <div class="card-body">
                                <h5 class="card-title">i3 10th</h5>
                                <p class="card-text">O Intel Core i3 de 10ª geração oferece desempenho sólido e eficiência energética a um preço acessível, com recursos avançados de segurança para proteger seus dados.</p>
                                <a href="#" class="btn btn-primary">Ver detalhes</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <img src="img/9768_1.jpg" class="card-img-top" alt="Produto 3">
                            <div class="card-body">
                                <h5 class="card-title">Cooler</h5>
                                <p class="card-text">Cooler da Cooler Master, pode ser utilizado em todas as placas mães.</p>
                                <a href="#" class="btn btn-primary">Ver detalhes</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="produtos" class="py-5">
            <div class="container">
                <h2 class="mb-4 text-center">Nossos Produtos</h2>
                <div class="row">
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <img src="img/Captura de tela 2024-06-27 173411.png"     height="300px"          class="card-img-top" alt="Produto 1">
                            <div class="card-body">
                                <h5 class="card-title">Placa de vídeo</h5>
                                <p class="card-text">Uma placa muito boa para jogar, programar e muito mais.</p>
                                <a href="#" class="btn btn-primary">Ver detalhes</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <img src="img/Pc-Gamer-Completo-Intel-Core-I7-16GB-GeForce-Gt-2GB-SSD-240GB-Fonte-500w-Gabinete-Rgb-Monitor-75hz-Hdmi-19-5-Linux-Easypc-Play_1674251318_gg.jpg" class="card-img-top" alt="Produto 2">
                            <div class="card-body">
                                <h5 class="card-title">Pc de entrada</h5>
                                <p class="card-text">Muito bom para quem quer jogar jogos de entrada como CS:GO, GTA 5, etc.</p>
                                <a href="#" class="btn btn-primary">Ver detalhes</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <img src="img/images.jpeg" class="card-img-top" alt="Produto 3">
                            <div class="card-body">
                                <h5 class="card-title">Kit Ryzen</h5>
                                <p class="card-text">Uma placa mãe muito boa, processador Ryzen 5 4500 e 16 gigas de memória ram.</p>
                                <a href="#" class="btn btn-primary">Ver detalhes</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        <section id="empresa" class="py-5 bg-light">
            <div class="container">
                <h2 class="mb-4 text-center">Sobre Nossa Empresa</h2>
                <p class="lead text-center">Somos especialistas em soluções de informática desde 2020, proporcionando produtos de qualidade e suporte técnico excepcional aos nossos clientes.</p>
            </div>
        </section>
        <section><!DOCTYPE html>
            <html lang="pt-BR">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Imagem d</title>
                <style>
                    body {
                        background-image: url('7677104-fundo-branco-com-padrao-geometrico-azul-e-linha-branca-gratis-vetor.jpg'); /* Substitua pelo caminho correto da sua imagem */
                        background-size: cover; /* Garante que a imagem cubra toda a área do body */
                        background-position: center; /* Centraliza a imagem no body */
                        background-repeat: no-repeat; /* Evita que a imagem seja repetida */
                        height: 450 vh; /* Define a altura para ocupar toda a altura da tela */
                        margin: 0; /* Remove margens padrão do body */
                        font-family: Arial, sans-serif; /* Define a fonte para o texto */
                    }
           
                    /* Estilos adicionais para o conteúdo */
                    .content {
                        background-color: rgba(255, 255, 255, 0.8); /* Fundo branco semi-transparente para o conteúdo */
                        padding: 30px;
                        margin: 30px;
                        border-radius: 15px;
                    }
           
                    h1 {
                        color: #130f0f; /* Cor do texto */
                        text-align: center; /* Centraliza o texto */
                    }
                </style>
            </head>
            <body>
                <div class="content">
                    <h1>Visão</h1>
                    <p>Ser reconhecidos como a principal loja de informática da região, sendo referência em excelência no atendimento ao cliente, variedade de produtos e soluções tecnológicas. Queremos ser a primeira escolha de consumidores e empresas quando se trata de suprir suas necessidades tecnológicas.</p>          
                </div>
                <section><!DOCTYPE html>
                  <html lang="pt-BR">
                  <head>
                      <meta charset="UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <title>Imagem d</title>
                      <style>
                          body {
                              background-image: url('7677104-fundo-branco-com-padrao-geometrico-azul-e-linha-branca-gratis-vetor.jpg'); /* Substitua pelo caminho correto da sua imagem */
                              background-size: cover; /* Garante que a imagem cubra toda a área do body */
                              background-position: center; /* Centraliza a imagem no body */
                              background-repeat: no-repeat; /* Evita que a imagem seja repetida */
                              height: 450vh; /* Define a altura para ocupar toda a altura da tela */
                              margin: 0; /* Remove margens padrão do body */
                              font-family: Arial, sans-serif; /* Define a fonte para o texto */
                          }
                 
                          /* Estilos adicionais para o conteúdo */
                          .content {
                              background-color: rgba(255, 255, 255, 0.8); /* Fundo branco semi-transparente para o conteúdo */
                              padding: 30px;
                              margin: 30px;
                              border-radius: 15px;
                          }
                 
                          h1 {
                              color: #130f0f; /* Cor do texto */
                              text-align: center; /* Centraliza o texto */
                          }
                      </style>
                  </head>
                  <body>
                      <div class="content">
                          <h1>Missão </h1>
                          <p>A nossa missão é fornecer soluções tecnológicas inovadoras e de alta qualidade que atendam às necessidades específicas de nossos clientes. Estamos comprometidos em oferecer suporte técnico excepcional, produtos confiáveis e serviços personalizados, ajudando nossos clientes a alcançarem seus objetivos com eficiência e segurança.</p>          
                      </div>
                      <section><!DOCTYPE html>
                          <html lang="pt-BR">
                          <head>
                              <meta charset="UTF-8">
                              <meta name="viewport" content="width=device-width, initial-scale=1.0">
                              <title>Imagem d</title>
                              <style>
                                  body {
                                      background-image: url('7677104-fundo-branco-com-padrao-geometrico-azul-e-linha-branca-gratis-vetor.jpg'); /* Substitua pelo caminho correto da sua imagem */
                                      background-size: cover; /* Garante que a imagem cubra toda a área do body */
                                      background-position: center; /* Centraliza a imagem no body */
                                      background-repeat: no-repeat; /* Evita que a imagem seja repetida */
                                      height: 450vh; /* Define a altura para ocupar toda a altura da tela */
                                      margin: 0; /* Remove margens padrão do body */
                                      font-family: Arial, sans-serif; /* Define a fonte para o texto */
                                  }
                         
                                  /* Estilos adicionais para o conteúdo */
                                  .content {
                                      background-color: rgba(255, 255, 255, 0.8); /* Fundo branco semi-transparente para o conteúdo */
                                      padding: 30px;
                                      margin: 30px;
                                      border-radius: 15px;
                                  }
                         
                                  h1 {
                                      color: #130f0f; /* Cor do texto */
                                      text-align: center; /* Centraliza o texto */
                                  }
                              </style>
                          </head>
                          <body>
                              <div class="content">
                                  <h1>Valores </h1>
                                  <p>Na nossa loja de informática, valorizamos profundamente o compromisso com a excelência, ética e integridade em todas as nossas operações. Buscamos constantemente inovação para oferecer soluções tecnológicas de alta qualidade que atendam às necessidades específicas dos nossos clientes. Cada interação é uma oportunidade para demonstrar nosso respeito pelo cliente, ouvindo suas necessidades e oferecendo soluções personalizadas que agregam valor ao seu negócio.</p>          
                              </div>
                        </section>
                             
          
         
          <section 
    
         id="contato" class="py-5">
            <div class="container">
                <h2 class="mb-4 text-center">Entre em Contato</h2>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Seu e-mail</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Seu e-mail">
                        <small id="emailHelp" class="form-text text-muted">Nunca compartilharemos seu e-mail com ninguém.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Sua mensagem</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                            placeholder="Digite sua mensagem aqui"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar</button>
                </form>
            </div>
        </section>
        <section>
            <footer class="container mt-5">
                <ul>
                    <h1>Atendemos pelas redes sociais</h1>
                    <li><a href="https://www.facebook.com/">Facebook</a></li>
                    <li><a href="https://mail.google.com/">Gmail</a></li>
                    <li><a href="https://web.whatsapp.com/">WhatsApp</a></li>
                </ul>
            </footer>
        </section>
    
        <footer class="bg-dark text-white text-center py-3">
            <p>&copy; 2024 GIGATECH. Todos os direitos reservados.</p>
        </footer>
    
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"
            integrity="sha384-DzpVKs3I5A2XtHh0usIqQFuh+4CS2jKDDm5e3dSo1HS0wslZ/2Qg16G8FtGRv2Mx"
            crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
            integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8sh+D65ywoSm0vcfNUEN5s5KSrJKb0T1iq4jax"
            crossorigin="anonymous"></script>
    </body>
    
    </html>
    </section>





