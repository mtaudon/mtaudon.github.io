//NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function(){
  const scrollTop=window.pageTOffset ||
  this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop){
    navbar.style.top="-50px";
  } else {
    navbar.style.top="0";
  }
  lastScrollTop = scrollTop;
})


// TYPED
var typed = new Typed('.typed', {
    strings: ["Bonjour, je m'appelle Marius Taudon, et voici mon CV.", "Après un baccalauréat professionnel Systèmes Numériques, option Réseaux Informatiques et Systèmes Communicants, j’ai décidé de poursuivre mon cursus scolaire dans le domaine du réseau et du développement, mon choix n’étant pas encore arrêté. En effet, chacun de ces deux domaines me plaît énormément, et j’aimerai y faire carrière. De ce fait, j’ai appris certains langages de programmation en autodidacte, tels que le langage HTML, CSS ou encore Javascript, et j’apprend également le c sharp, pendant mes cours scolaire, en effet, je suis actuellement étudiant en BTS Services Informatiques aux Organisations au sein de l’institut St Joseph du Havre. Enfin, j’ai de nombreuses expériences professionnelles, acquises en apprentissage. "],
    typeSpeed: 15,
    backSpeed: 20,
    
  });

  //COMPTEUR

  let compteur = 0;

  $(window).scroll(function(){ 

    const top = $('.counter').offset().top -
    window.innerHeight;

    if (compteur == 0 && $(window).scrollTop() > top) {
      $('.counter-value').each(function() {
        let $this =  $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum : countTo 
        },
        {
          duration: 5000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }
        });        
      });
      compteur = 1;
    }
});