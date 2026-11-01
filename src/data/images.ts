// Fotografije stranice. Astro ih pri buildu smanjuje i pretvara u WebP.
// Fotografije materijala/učionica: Unsplash (besplatna licenca, bez obaveze navođenja autora).
// Portret i dječji plakat: s javnih stranica TPO Fondacije / Mreže za izgradnju mira — zamijeniti
// vlastitim fotografijama kad budu dostupne.
import ucionica from '../assets/images/ucionica.jpg';
import jabukaKnjige from '../assets/images/jabuka-knjige.jpg';
import pisanjeRuke from '../assets/images/pisanje-ruke.jpg';
import pisanjeOlovka from '../assets/images/pisanje-olovka.jpg';
import otvoreneKnjige from '../assets/images/otvorene-knjige.jpg';
import policaKnjiga from '../assets/images/polica-knjiga.jpg';
import knjigeStack from '../assets/images/knjige-stack.jpg';
import biblioteka from '../assets/images/biblioteka.jpg';
import portret from '../assets/images/amela-portret.jpg';
import plakat from '../assets/images/plakat-svjetski-etos.jpg';

export const images = {
  hero: { src: ucionica, alt: 'Prazna učionica s tablom i klupama' },
  portrait: { src: portret, alt: 'Amela Petričević' },
  about: { src: policaKnjiga, alt: 'Ruka uzima knjigu s police' },
  poster: { src: plakat, alt: 'Plakat „Svjetski etos je u nama” s dječjim crtežima vrijednosti' },
  pages: {
    oMeni: policaKnjiga,
    edukacije: otvoreneKnjige,
    radionice: jabukaKnjige,
    projekti: knjigeStack,
    mediji: biblioteka,
    pisanje: pisanjeOlovka,
    kontakt: pisanjeRuke,
  },
};
