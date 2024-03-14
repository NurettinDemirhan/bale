import "./Background.css";
import backgroundImg from './bale-kursu.jpg';

export default function Background(){

    return(
        <div className='Background' id="background">
            <div className="Background-top">
                <h1>T.C. Milli Eğitim Bakanlığına Bağlı Özel Ecem Bale ve Dans Okulu</h1>
                <p>
                2014'den bugüne Kdz.Ereğli'nin ilk ve tek bale okulu. 
                Profesyonel eğitmenler eşliğinde, akademik eğitim ile hizmet vermektedir.
                <br/><br/>Bir çocuğa ömür boyu verilebilecek en güzel hediye, bale eğitimi!</p>
                <a href="/InfoPage">Detaylı Bilgi Almak İçin Tıklayın</a>
            </div>
            <div className="Background-bottom">
                <section className="Background-bottom-card">
                    <img className="Background-card-img" src={backgroundImg} alt="Bale" />
                    <h1 className="Background-card-header">Seviyenize uygun sınıflar</h1>
                    <p className="Background-card-text">
                    Hazırlık-Temel-İleri seviye sınıflarımız eğitime devam etmektedir. 
                    Yeni sınıflarda yerinizi almak için deneme derslerine davetlisiniz.
                    </p>
                </section>
                <section className="Background-bottom-card">
                    <img className="Background-card-img" src={backgroundImg} alt="Bale" />
                    <h1 className="Background-card-header">Alanında uzman eğitmenler</h1>
                    <p className="Background-card-text">
                    Okulumuzda geçmişten bugüne görev alan tüm eğitmenlerimiz hassasiyetle seçilmiştir. Ecem Bale Okulunun kuruculuğunu yapan eğitmenler dünya çapında kabul gören sayılı companylerin arasında yer alan Ankara Devlet Opera ve Balesi sanatçılarındandır. 
                    </p>
                </section>
                <section className="Background-bottom-card">
                    <img className="Background-card-img" src={backgroundImg} alt="Bale" />
                    <h1 className="Background-card-header">Sahnede Parlayın! </h1>
                    <p className="Background-card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim 
                    </p>
                </section>
            </div>
        </div>
    )
}