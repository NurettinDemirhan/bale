
import "./Contact.css";

export default function Contact(){

    return(
        <div id="contact" className='Contact'>
            <div  className='Contact-inner'>
                <div className="Contact-main">
                    <section className="Contact-main-section">
                        <p className="contact-text-one">Telefon:</p>
                        <p className="contact-text-two">0372 333 07 08</p>
                    </section>
                    <section className="Contact-main-section">
                        <p className="contact-text-one">İnstagram:</p>
                        <p className="contact-text-two">@ecembale</p>
                    </section>
                    <section className="Contact-main-section">
                        <p className="contact-text-one">Adres:</p>
                        <p className="contact-text-two">Süleymanlar, 67300 Ereğli/Zonguldak</p>
                    </section>
                </div>
                <iframe 
                title="none"
                className="Contact-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.7183871892084!2d31.404008112335642!3d41.29323307119238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409c45c0ef6ee3c1%3A0xe8e45c30f08073dd!2s%C3%96ZEL%20ECEM%20BALE%20OKULU!5e0!3m2!1str!2str!4v1709412874152!5m2!1str!2str" 
                width="400" 
                height="200" 
                style={{border: "0"}} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    )
}