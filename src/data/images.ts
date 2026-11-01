// Fotografije stranice. Astro ih pri buildu smanjuje i pretvara u WebP.
// Fotografije materijala/učionica: Unsplash (besplatna licenca, bez obaveze navođenja autora).
// Fotografije Amele: kadrovi iz emisije „Dobar dan TK” (RTVTK, 2021.) — zamijeniti vlastitim
// profesionalnim fotografijama kad budu dostupne. Dječji plakat: Mreža za izgradnju mira (2018.).
import jabukaKnjige from '../assets/images/jabuka-knjige.jpg';
import pisanjeRuke from '../assets/images/pisanje-ruke.jpg';
import pisanjeOlovka from '../assets/images/pisanje-olovka.jpg';
import otvoreneKnjige from '../assets/images/otvorene-knjige.jpg';
import policaKnjiga from '../assets/images/polica-knjiga.jpg';
import knjigeStack from '../assets/images/knjige-stack.jpg';
import biblioteka from '../assets/images/biblioteka.jpg';
import portret from '../assets/images/amela-portret.jpg';
import studio from '../assets/images/amela-studio.jpg';
import oMeniPortret from '../assets/images/amela-o-meni.jpg';
import plakat from '../assets/images/plakat-svjetski-etos.jpg';

export const images = {
  hero: { src: studio, alt: 'Amela Petričević kao gošća emisije „Dobar dan TK”' },
  portrait: { src: portret, alt: 'Amela Petričević' },
  about: { src: oMeniPortret, alt: 'Amela Petričević' },
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
