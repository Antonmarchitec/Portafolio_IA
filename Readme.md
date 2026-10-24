DE FORMA MAS MODERNA 

 

/* 📱 Base → móvil (sin media query)  

@media (min-width: 320px)*/ 

 

/* 📲 Tablet */ 

@media (min-width: 768px) { } 

 

/* 💻 Laptop */ 

@media (min-width: 1024px) { } 

 

/* 🖥️ Desktop */ 

@media (min-width: 1280px) { } 

 

/* 🖥️ Pantallas grandes */ 

@media (min-width: 1440px) { } 









/* Escritorios grandes (más de 1440px) */ 

@media (min-width: 1441px) { ... } 

 
 

/* Laptops y escritorios (1025px a 1440px) */ 

@media (min-width: 1025px) and (max-width: 1440px) { ... } 

 
 

/* Tablets (769px a 1024px) */ 

@media (min-width: 769px) and (max-width: 1024px) { ... } 

 
 

/* Móviles grandes y phablets (481px a 768px) */ 

@media (min-width: 481px) and (max-width: 768px) { ... } 

 
 

/* Móviles pequeños (hasta 480px) */ 

@media (max-width: 480px) { ... } 



-------max 1440 desktop
-------max 1024 laptps
-------max 768 tablet
-------max 480 movil






// =====================================
// LAPTOP
// 481px - 1024px
// =====================================

/* TABLETS */
@media (max-width: 1024px) {

    .hero {
        padding: 120px 50px;
        height: 100vh;
    }

    .hero-logo {
        width: 50%;
        right: 2%;
        top: 5%;
        opacity: 0.7;

    }

    .hero-content {
        margin-top: -100px;
        width: 100%;

    }

    .subtitle {
        font-size: 12px;
        letter-spacing: 5px;
        margin-bottom: 20px;
    }

    .title {
        font-size: 500px;
        letter-spacing: -4px;
    }

    .role {
        font-size: 20px;
        margin-top: 15px;
                background: teal;

        
    }

    .description {
        max-width: 420px;
        font-size: 16px;
    }

    .hero-buttons {
        gap: 15px;
        margin-top: 30px;
    }

    .btn {
        padding: 14px 25px;
    }

    .socials {
        gap: 20px;
        margin-top: 30px;
    }

    .code-card {
        width: 350px;
        padding: 25px 20px;
        right: 4%;
        bottom: 45px;
        opacity: 0.85;

        pre {
            font-size: 12px;
        }
    }

    .side-message {
        right: 3%;
        top: 45%;
        font-size: 9px;
        letter-spacing: 3px;
    }

    .scroll {
        bottom: 20px;
        font-size: 10px;
        letter-spacing: 3px;
    }
}









// =====================================
/* MOVILES */
// 350 - 480px
// =====================================

@media (max-width: 480px) {

    .hero {
        min-height: 100svh;
        padding: 110px 6% 80px;
        align-items: center;

        
    }

  

    .hero-content {
        width: 100%;
        max-width: 100%;
    }

    .subtitle {
        font-size: 14px;
        letter-spacing: 3px;
        margin-bottom: 20px;
        
    }

    .title {
        font-size: clamp(58px, 17vw, 82px);
        letter-spacing: -3px;
        line-height: 0.9;
        -webkit-text-stroke-width: 2px;
    }

    .role {
        font-size: clamp(28px, 8vw, 38px);
        margin-top: 15px;
        
    }

    .description {
        width: 230px;
        margin-top: 20px;
        max-width: 20%;
        font-size: 15px;
        line-height: 1.5;

    }

    .hero-buttons {
        width: 200px;
        flex-wrap: wrap;
        gap: 12px;
        margin-top: 25px;
    }

    .btn {
        width: 300px;
        padding: 12px 18px;
        font-size: 15px;
    }

    .socials {
        width: 200px;
        gap: 15px;
        margin-top: 25px;
        a {
            width: 38px;
            height: 38px;
            img {
                width: 18px;
                height: 18px;

            }
        }
    }

    .code-card {
        display: none;
    }

    .side-message {
        display: none;
    }

    .scroll {
        left: 6%;
        bottom: 18px;
        font-size: 9px;
        letter-spacing: 3px;
    }

    .hero::after {
        width: 110px;
        height: 110px;
        top: 12%;
        right: 5%;
    }
}



























