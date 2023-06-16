// Aspetta che la finestra sia caricata
window.addEventListener('load', function() {
  // Seleziona l'elemento merrywrap e la prima giftbox all'interno
  const merrywrap = document.querySelector('#merrywrap');
  const box = merrywrap.querySelector('.giftbox');
  
  // Inizializza le variabili
  let step = 1;
  const stepDelays = [2000, 2000, 1000, 1000];
  
  // Aggiungi un listener per il click sulla giftbox
  function init() {
    box.addEventListener('click', openBox);
  }
  
  // Aggiorna la classe CSS dell'elemento merrywrap
  function updateStepClass(step) {
    merrywrap.className = `merrywrap step-${step}`;
  }
  
  // Funzione ricorsiva per aprire la scatola
  function openBox() {
    // Rimuovi il listener del click se siamo alla prima fase
    if (step === 1) {
      box.removeEventListener('click', openBox);
    }
    
    // Aggiorna la classe CSS dell'elemento merrywrap
    updateStepClass(step);
    
    // Se siamo alla terza fase, non fare nulla
    if (step === 3) {
      return;
    }
    
    // Se siamo alla quarta fase, interrompi l'animazione
    if (step === 4) {
      return;
    }
    
    // Attendi un certo numero di millisecondi e passa alla fase successiva
    setTimeout(function() {
      step++;
      openBox();
    }, stepDelays[step - 1]);
  }
  
  // Inizializza l'animazione
  init();
});
