import React from "react";
import { useParams } from "react-router-dom";

const songs = {
  1: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>
            என் வாழ்விலே நீர் பாராட்டின - En vaazhvile neer paarattina
          </strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p>
          என் வாழ்விலே நீர் பாராட்டின
          <br />
          தயவுகெல்லாம் நான் பாத்திரன் அல்ல
          <br />
          இதுவரையில் நீர் தாங்கினதற்கு
          <br />
          எவ்வளவும் நான் தகுதியும் இல்ல
          <br />
          மாறாமலே உடனிருந்தீர்
          <br />
          விலகாமலே நடத்தி வந்தீர்
        </p>
        <p className="mt-4 mb-4">ஆச்சரியமானவரே என் வாழ்வின் அதிசயமானவரே</p>
        <p className="mt-6">
          1. எதிர்பார்க்கும் முடிவுகளை
          <br />
          என் வாழ்வில் அளிப்பவரே
          <br />
          வழியறியா அலைந்த என்னை
          <br />
          கண்டீரே உம் கண்களால்
        </p>
        <p className="mt-6">
          2. சறுக்களிலும் கண்ணீரிலும்
          <br />
          விழுந்திட்ட என் நிலையை
          <br />
          துன்பங்களை கண்ட நாட்களுக்கு
          <br />
          சரியாக என்னை மகிழசெய்தீர்
        </p>
        <p className="mt-6">
          3. சொந்தமான பிள்ளையாக
          <br />
          தகப்பனை போல் சுமந்தீர்
          <br />
          இமைப்பொழுதும் என்னை விலகினாலும்
          <br />
          இரக்கங்களால் என்னை சேர்த்துக்கொள்வீர்
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>En vaazhvile neenga paarattina Lyrics in English</strong>
          </p>
        </div>

        <p className="mt-8">
          En vaazhvile neenga paarattina
          <br />
          Thayavukellam naan paathiran alla ithuvarai neenga thaanginatharku
          evvalavum naan thagudhi um illa
        </p>
        <p>
          Maatamaale udanirundheenga
          <br />
          Vilakamaale nadaththi vandheenga
        </p>
        <p className="mt-4 mb-4">
          Aachariyamaanavare en vaazvin adhisayamaanavare – 2
        </p>
        <p className="mt-6">
          1. Edhirpaarkkum mudivugalai
          <br />
          En vaazhvile azhippavare
          <br />
          Vazhiyaariya alaindha ennai
          <br />
          Kandeer eenga kaNngaala
        </p>
        <p className="mt-6">
          2. Sarukkalilum kaNNeerilum
          <br />
          Vizhundhitta en nilaiyai
          <br />
          Thunbangalai kanda naatkalukku
          <br />
          Sariyaa ennai magizha seydheenga
        </p>
        <p className="mt-6">
          3. Sonthamana pillaiyaaga
          <br />
          Thagappanai pol sumandheer
          <br />
          Imaippozhudhuum ennai vilanginaalum
          <br />
          Irakkangalal ennai serthukkoveenga
        </p>
      </>
    ),
  },
  2: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>
            இயேசுவே இயேசுவே இரங்கும் என் தேவனே - Yeasuvay Yeasuvay Irangum En
            Dhaevanay
          </strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4 mb-4">இயேசுவே இயேசுவே இரங்கும் என் தேவனே</p>
        <p className="mt-6">
          1. பாவமில்லை வாழ்வினை பரிசாய் தாருமே
          <br />
          பரிசுத்தம், பரிசுத்தம் எண்ணில் திணமும்
          <br />
          வேண்டுமே
        </p>
        <p className="mt-6">
          2. வியாதியில்லா, வாழ்வினை வரமாய் தாருமே
          <br />
          ஆரோக்கியம் எண்ணில் நிரந்தரம் வேண்டுமே
        </p>
        <p className="mt-6">
          3. துக்கமில்லா வாழ்வினை யென் துணையாய்
          <br />
          தாருமே
          <br />
          மகிழ்ச்சியும் சந்தோஷமும் என்னில் புரண்டோட
          <br />
          வேண்டுமே
        </p>
        <p className="mt-6">
          4. பொய்யான வாழ்வினை எண்ணில் புரட்டி
          <br />
          போடுமே
          <br />
          நிஜமாய் வாழ்ந்திடா எண்ணில் நேசா
          <br />
          கொடியே வீசுமே
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>
              Yeasuvay Yeasuvay Irangum En Dhaevanay Lyrics in English
            </strong>
          </p>
        </div>

        <p className="mt-4 mb-4">Yeasuvea yeasuvea irangum en deavanea</p>
        <p className="mt-6">
          1. Paavamillai vaalvinai parisaai thaarumea
          <br />
          Parisutham, parisutham ennil thinamum
          <br />
          veandumea
        </p>
        <p className="mt-6">
          2. Viyathiilla, vaalvinai varamaai thaarumea
          <br />
          Aarokiyam ennil nirantharam vendumea
        </p>
        <p className="mt-6">
          3. Thukkamilla vaalvinai yen thunaiyaai
          <br />
          thaarumea
          <br />
          Magilchiyum santhoshamum ennil purandooda
          <br />
          veandumea
        </p>
        <p className="mt-6">
          4. Poaliyaana vaalvinai ennil purati
          <br />
          poadumea
          <br />
          Nijamaai vaalnthida ennil neasa
          <br />
          kodiyea veesumea
        </p>
      </>
    ),
  },
  3: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>
            உங்க பாதம் எனக்கு தஞ்சம் - Unga paatham enakku thanjam
          </strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          உங்க பாதம் எனக்கு தஞ்சம்
          <br />
          உங்க வேதம் எனக்கு இன்பம்
          <br />
          உங்க சமூகத்திலே இலைப்பாருவேன்
          <br />
          உங்க தேசத்திலே களி கூறுவேன்
        </p>

        <p className="mt-6">
          1. நான் பிழைத்திருப்பது உமக்குள்
          <br />
          நான் வாழ்ந்திருப்பது உமக்குள்
          <br />
          என்னை செழித்தோங்க செய்பவரே
          <br />
          நான் செயல்பாடுவேன் உமக்குள்
          <br />- உங்க பாத்தம்
        </p>
        <p className="mt-6">
          2. மன வாழியே என்றீரே
          <br />
          குண சேலேயே என்றீரே
          <br />
          பிரியாமே ரூபாவதி என்றீரே
          <br />
          என்னை மார்போடு அணைத்து கொண்டீரே
          <br />- உங்க பாத்தம்
        </p>
        <p className="mt-6">
          3. நான் வாசிப்பது உம்மாலே
          <br />
          நான் ஜெயம் எடுப்பது உம்மாலே
          <br />
          ஒரு சேனைக்குள்ளே பாய்ந்திடுவேன்
          <br />
          பெரிய மதிலையும் நான் தாண்டிடுவேன்
          <br />- உங்க பாத்தம்
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>Unga paatham enakku thanjam Lyrics in English</strong>
          </p>
        </div>

        <p className="mt-4">
          Unga paatham enakku thanjam
          <br />
          Unga veatham enakku inbam
          <br />
          Unga samugaathilea ilaipaaruvean
          <br />
          Unga theasathilea kali kooruveans
        </p>
        <p className="mt-6">
          1. Naan pilaithirupathu umakkullea
          <br />
          Naan vaalnthirupathu umakkullea
          <br />
          Ennai selithoonga seiybavarea
          <br />
          Naan seyalbaduvean umakkullea
          <br />- unga paatham
        </p>
        <p className="mt-6">
          2. Mana vaaleyea endreerea
          <br />
          Kuna saaleyea endreerea
          <br />
          Piriyamea roobavathi endreerea
          <br />
          Ennai maarbodu anaithu kondeerea
          <br />- unga paatham
        </p>
        <p className="mt-6">
          3. Naan ooduvaathu ummaalea
          <br />
          Naan jeyam yedupathu ummaelea
          <br />
          Oru senaikullea paaiynthiduvean
          <br />
          Periya mathilaayum naan thaandiduvean
          <br />- unga paatham
        </p>
      </>
    ),
  },
  4: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>வார்த்தை வடிவம் வந்தவர் - Vaarthai vadivam vanthavar</strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          வார்த்தை வடிவம் வந்தவர்
          <br />
          விண்ணை தாண்டி குதித்தவர்
          <br />
          எந்தன் உள்ளம் இடம் பிடித்தவர் - த்ன்
          <br />
          ஜீவன் தந்து என்னை மீட்டவர்
        </p>

        <p className="mt-6">
          1. வலியை நீக்கும் (போக்கும்) மருத்துவர்
          <br />
          வாக்குத்தம் தருபவர்
          <br />
          வார்த்தையாலே உலகைப் படைத்தவர் - என்
          <br />
          உள்ளம் கவர்ந்த இதய நாயகர்
        </p>
        <p className="mt-6">
          2. வாலிபத்தில் என்னை கண்டவர்
          <br />
          நாரைவயது வரை தாங்குகின்றவர்
          <br />
          உலகம் மறந்து போகும் நேரத்தில்
          <br />
          உறங்காமல் என்னை நினைபவர்
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>Vaarthai vadivam vanthavar Lyrics in English</strong>
          </p>
        </div>

        <p className="mt-4">
          Vaarthai vadivam vanthavar
          <br />
          Vinnai thaandi kuthithavar
          <br />
          Enthan ullam idam pidithavar - than
          <br />
          Jeevan thanthu ennai meetavar
        </p>
        <p className="mt-6">
          1. Valiyai neekum (poakum) maruthuvar
          <br />
          Vaakuthatham tharubavar
          <br />
          Vaarthayaalea ulagai padaithavar - en
          <br />
          Ullam kavarntha ithaya naayagar
        </p>
        <p className="mt-6">
          2. Vaalibathil ennai kandavar
          <br />
          Naraivayathu varai thaangugindravar
          <br />
          Ulagam maranthu pogum nearathil
          <br />
          Urangaamal ennai ninaipavar
        </p>
      </>
    ),
  },
  5: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>
            உனக்கு ஒரு தெய்வம் உண்டு தெரியுமா - Unakku oru Dheivam undu
            theriyuma
          </strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          உனக்கு ஒரு தெய்வம் உண்டு தெரியுமா - மனமே
          <br />
          உனக்கு ஒரு நேசர் உண்டு புரியுமா மனமே
        </p>

        <p className="mt-6">
          1. உலகம் ஒருநாள் தோண்றும் முன்னே முன் குறித்தவர்
          <br />
          உலகத்திலே நீயும் தோன்ற நாள் குறித்தவர்
          <br />
          unakaaga குடும்பம் ondrai தெரிந்தெடுத்தவர்
          <br />
          உன் தகப்பனையும் தாயையும் காக்க வைத்தவர் - உனக்கு ஒரு
        </p>
        <p className="mt-6">
          2. தாயின் வயிற்றில் இருக்கும் போது தாங்கி கொண்டவர்
          <br />
          தவழ்ந்து நான் ஊரும் போது கரம்பிடித்தவர்
          <br />
          கைகள் ஊன்றி எழும்பும் பூத்து கரம் பிடித்தவர்
          <br />
          கால்கள் ஊன்றி நடக்கும் போது - உனக்கு ஒரு
        </p>
        <p className="mt-6">
          3. பாவத்தை நான் பார்த்தபோது பதறி போனவர்
          <br />
          athai paalai poala kuditha poothu கதறி துடித்தவர்
          <br />
          மீட்புகாக ஜெபிதா போது ஓடி வந்தவர்
          <br />
          மீட்டு என்னை எப்போது நடக்கும் - உனக்கு ஒரு
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>Unakku oru Dheivam undu theriyuma Lyrics in English</strong>
          </p>
        </div>

        <p className="mt-4">
          Unakku oru Dheivam undu theriyuma - manamea
          <br />
          Unakku oru neasar undu puriyuma manamea
        </p>
        <p className="mt-6">
          1. Ulagam orunaal thoondrum munnea mun kurithavar
          <br />
          Ulagathilea neeyum thoondra naal kurithavar
          <br />
          Unakaaga kudumbam ondrai thearntheduthhavar
          <br />
          Un thagapanaiyum thaaiyaiyum kaaka vaithavar - Unakku oru
        </p>
        <p className="mt-6">
          2. Thaayin vayittril irukkum poothu thaangi kondavar
          <br />
          Thavalnthu naan oorum poothu karampidithavar
          <br />
          kaigal oondri yelumbum poothu karam pidithavar
          <br />
          Kaalgal oondri nadakum poothu paathukaapavar - Unakku oru
        </p>
        <p className="mt-6">
          3. Paavathai naan paarthapoothu pathari poonavar
          <br />
          Athai paalai poola kuditha poothu kathari thudithavar
          <br />
          Meetpuukaaga jebitha poothu oodi vanthavar
          <br />
          Meetu ennai epothum nadathukindravar - Unakku oru
        </p>
      </>
    ),
  },
  6: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>உம்மை போல் உம்மை போல் - Ummai pol Ummai pol</strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          உம்மை போல் உம்மை போல்
          <br />
          என்னை மாற்றும் இயேசுவே
          <br />
          உம்மை போல் என்னை மாற்றுமே
        </p>
        <p className="mt-6">
          1. பிதாவின் சித்தத்தை தெளிவாக கேட்பது போல்
          <br />
          நானும் கேட்க வேண்டும்மே
        </p>
        <p className="mt-6">
          2. ஜனங்களை பார்த்ததும் மனதுருகி ஜெபித்தது போல்
          <br />
          நானும் ஜெபிக்க வேண்டும்மே
        </p>
        <p className="mt-6">
          3. காடு மாலைகள் எல்லாம் ஊழியங்கள் செய்தது போல்
          <br />
          நானும் (உளியம்) செய்ய வேண்டும்மே
        </p>
        <p className="mt-6">
          4. அற்புத அடையாளம் ஏராளமாக செய்தது போல்
          <br />
          நானும் செய்ய வேண்டுமே
        </p>
        <p className="mt-6">
          5. பித்தாவின் சித்தத்தை காட்சித்தமாய் முடித்தது போல்
          <br />
          உம் சித்தம் செய்ய வேண்டும்மே
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>Ummai Pol Ummai Pol Lyrics in English</strong>
          </p>
        </div>
        <p className="mt-4">
          Ummai pol ummai pol
          <br />
          Ennai maatrum yeasuvea
          <br />
          Ummai pol ennai maatrumea
        </p>
        <p className="mt-6">
          1. Pithaavin sithathai thelivaaga keatpathu pol
          <br />
          Naanum keatka veandumea
        </p>
        <p className="mt-6">
          2. Janangalai paarthathum manathurugi jebithathu pol
          <br />
          Naanum jebikka veandumea
        </p>
        <p className="mt-6">
          3. Kaadu malaigal ellam ooliyangal seiythathu pol
          <br />
          Naanum (ooliyam) seiya vendumea
        </p>
        <p className="mt-6">
          4. Arputha adayaalam yeraalamaai seiythathu pol
          <br />
          Naanum seiya veandumea
        </p>
        <p className="mt-6">
          5. Pithaavin sithathai kathchithamaai mudithathu pol
          <br />
          Um sitham seiya veandumea
        </p>
      </>
    ),
  },
  7: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>
            சீயோன் குமாரத்தி நீ கெம்பீரமாய் பாடு - Seeyoon kumaarathi nee
            kembeeramaai paadu
          </strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          சீயோன் குமாரத்தி நீ கெம்பீரமாய் பாடு
          <br />
          கார்த்தர் வந்து உன் நடுவில் வாசம் பண்ணுவார்
        </p>
        <p className="mt-4">
          துதிபாடுவாய் துதிபாடுவாய்
          <br />
          நன்றியோடும் கண்ணீரோடும் துதிபாடுவாய்
        </p>
        <p className="mt-6">
          1. கிளக்கிளிருந்தும் மேர்கிளிருந்தும்
          <br />
          ஜனங்களைத் தருவார்
          <br />
          வடகிளிருந்தும் தெற்கிலிருந்தும்
          <br />
          கூட்டி சேர்திடுவார் - துதி பாடுவாய்
        </p>
        <p className="mt-6">
          2. தண்ணீர்களை கடக்கும் போது
          <br />
          கூட வந்திடுவார்
          <br />
          அக்கினியில் நடந்தாலும்
          <br />
          வேகாதிருப்பாய் - துதி பாடுவாய்
        </p>
        <p className="mt-6">
          3. கட்டுண்ட மக்களின் பெருமூச்சை
          <br />
          கேட்பார்
          <br />
          கோலை களத்தில் உள்ளவரை
          <br />
          விடுதலை செய்வார் - துதி பாடுவாய்
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>
              Seeyoon kumaarathi nee kembeeramaai paadu Lyrics in English
            </strong>
          </p>
        </div>
        <p className="mt-4">
          Seeyoon kumaarathi nee kembeeramaai paadu
          <br />
          Karthar vanthu un naduvil vaasam pannuvaar
        </p>
        <p className="mt-4">
          Thuthipaaduvaai thuthipaaduvaai
          <br />
          Nandriyoodum kaneerodum thuthipaaduvaai
        </p>
        <p className="mt-6">
          1. Killakkilirinthum mearkilirinthum
          <br />
          Janangalai tharuvaar
          <br />
          Vadakillirunthum therkillirunthum
          <br />
          Kooti searthiduvaar - thuthi paaduvaai
        </p>
        <p className="mt-6">
          2. Thaneergaalai kadakum poothu
          <br />
          Kooda vanthiduvaar
          <br />
          Akkiniyil nadanthaalum
          <br />
          Veagaathirupaai - thuthi paaduvaai
        </p>
        <p className="mt-6">
          3. Katunda makkalin perumoochai
          <br />
          Keatpaar
          <br />
          Kolai kalathil ullavarai
          <br />
          Viduthalai seiyvaar - thuthi paaduvaai
        </p>
      </>
    ),
  },
  8: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>
            பரிசுத்தரே புண்ணியம் செய்தீரே - Parisutharea punniyam seitheerea
          </strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          பரிசுத்தரே புண்ணியம் செய்தீரே
          <br />
          பரிகாரியே, பாவம் தொலைத்தீரே
        </p>
        <p className="mt-6">
          1. ஒரு நாளில் என்னை அலைத்ததால்
          <br />
          இன்னால் வரை நம்பியிருக்கிறேன்
          <br />
          என்னையும் நீர் நம்பி விட்டதால்
          <br />
          வாழ்நாளெல்லாம் சேவை செய்கிறேன்
        </p>
        <p className="mt-6">
          2. ஆபாது என்னை சூழும் போது எல்லாம்
          <br />
          உம் சேட்டைகளில் மறைந்து கொல்கிரேன்
          <br />
          பாவம் என்னை நெருங்கும் போது எல்லாம்
          <br />
          உம் காயதிர்க்குள் மறைந்து கொல்கிரேன்
        </p>
        <p className="mt-6">
          3. நன்மை மட்டும் எனக்கு சேய்வதால்
          <br />
          நான்றி சொல்லி துதி பாடுவேன்
          <br />
          தீமையின் காரணம் அறியாததால்
          <br />
          தினம் தோறும் நன்று சொல்கிறேன்
        </p>
        <p className="mt-6">
          4. பெலவீனன் என்னை தொடத்தாள்
          <br />
          பெலவானாய் காட்சி தருகிரேன்
          <br />
          குருடன் என்னை கண்டு கொண்டதால்
          <br />
          தரிசனங்களாய் பெற்று கொல்கிறேன்
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>Parisutharea punniyam seitheerea Lyrics in English</strong>
          </p>
        </div>
        <p className="mt-4">
          Parisutharea punniyam seitheerea
          <br />
          Parigaareeyea, paavam tholaitheerea
        </p>
        <p className="mt-6">
          1. Oru naalil ennai alaithathaal
          <br />
          Innaal varai nambiirukirean
          <br />
          Ennaiyum neer nambi vittathaal
          <br />
          Vaalnaalellam sevai seyguvean
        </p>
        <p className="mt-6">
          2. Aabathu ennai soolum pothellam
          <br />
          Um settaigalil marainthu kolgirean
          <br />
          Paavam ennai nerukkum poothellam
          <br />
          Um kaayathirkul marainthu kolgirean
        </p>
        <p className="mt-6">
          3. Nanmai mattum yennakku seiyvathaal
          <br />
          Nandri solli thuthi paaduvean
          <br />
          Theemaiyin kaaranam theriyathathaal
          <br />
          Thinathoorum nandri solgirean
        </p>
        <p className="mt-6">
          4. Belaveenan ennai thottathaal
          <br />
          Belavaanaai kaatchi tharugirean
          <br />
          Kurudan ennai kandu kondathaal
          <br />
          Tharisanangalai pettru kolgirean
        </p>
      </>
    ),
  },
  9: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>
            என் தாயும் தகப்பனும் கைவிட்டாலும் - En thaayum thagapanum
            kaivittaalum
          </strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          என் தாயும் தகப்பனும் கைவிட்டாலும்
          <br />
          கர்த்தாரோ அனுதினமும் நடைதி செல்வார்
          <br />
          என் அன்பரும் நன்பரும் விட்டுவிட்டு போனாலும்
          <br />
          கர்த்ரோ என் கரத்தை பிடித்திடுவார்
        </p>
        <p className="mt-6">
          1. சுற்றி வரும் உலகில் அவர்
          <br />
          என்னை சுற்றுகிறார்
          <br />
          சுகமாய் வாழ்ந்துவிட
          <br />
          சூழ்நிலைகள் தருகிறார்
        </p>
        <p className="mt-6">
          2. அன்னம் தண்ணீர் ஆகாரம்
          <br />
          அனுதினமும் தருகிறார்
          <br />
          அதிகாலை மண்ணாவாள்
          <br />
          திருப்பதிபடுத்தி மகிழ்கிறார்
        </p>
        <p className="mt-6">
          3. குப்பையில் இருந்த என்னை
          <br />
          கோபுரத்தில் வைக்கிறார்
          <br />
          ராஜாக்களோடு அமர
          <br />
          சிங்காசனம் தருகிறார்
        </p>
        <p className="mt-6">
          4. தாயை பார்க்கிலும்
          <br />
          பாசத்தோடு பார்க்கிறார்
          <br />
          தந்தையைப் பார்க்கிலும்
          <br />
          மேன்மையாக வைக்கிறார்
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>
              En thaayum thagapanum kaivittaalum Lyrics in English
            </strong>
          </p>
        </div>
        <p className="mt-4">
          En thaayum thagapanum kaivittaalum
          <br />
          Karthaaro anuthinamum nadai seilvaar
          <br />
          En anbarum nanbarum vittuvittu poanaalum
          <br />
          Karthro en karathai pidithiduvaan
        </p>
        <p className="mt-6">
          1. Suthri varum ulakil avar
          <br />
          Ennai suthugiraar
          <br />
          Sugam vaazhnthuvita
          <br />
          Sooznilai thaarugiraar
        </p>
        <p className="mt-6">
          2. Annan thanneer aakaaram
          <br />
          Anuthinamum tharugiraar
          <br />
          Athikaalai mannaval
          <br />
          Thiruppadiththidum magizhgiraar
        </p>
        <p className="mt-6">
          3. Kuppaiyil irundha ennai
          <br />
          Koppuraththil vaikkiraar
          <br />
          Raajakkalodhu amara
          <br />
          Singaasanam tharuvaan
        </p>
        <p className="mt-6">
          4. Thaayi paarkilum
          <br />
          Paasaththodu paarkiraar
          <br />
          Thandai paarkilum
          <br />
          Maanmaiyaga vaikkiraar
        </p>
      </>
    ),
  },
  10: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>
            ஆசீர்வாதத்தைப் பெற்றவன் தானே - Aaseervaadhathai perraavan thaanae
          </strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          ஆசீர்வாதத்தைப் பெற்றவன் தானே
          <br />
          ஆனந்தத்தைப் பெற்றவன் தானே
        </p>
        <p className="mt-6">
          1. உங்கள் ஆசீர்வாதத்தை
          <br />
          என்னை அருளிக்கொண்டு
          <br />
          உலகத்தைச் செழித்து
          <br />
          வாழ்க்கை அதிர்ச்சியுடன் காப்பேன்
        </p>
        <p className="mt-6">
          2. நாமதோ பரிசுத்தமாய்
          <br />
          பிரார்த்தனைகள் தீர்த்தவர்
          <br />
          உமக்கு உதவுவேன்
          <br />
          உன் கரங்கள் பொங்குமே
        </p>
        <p className="mt-6">
          3. பிறர் என்னைப் பிடிக்காத போது
          <br />
          படிப்படை அமைக்க வைய
          <br />
          உன் திருவடிகள்
          <br />
          எல்லாம் சாத்துவேன்
        </p>
        <p className="mt-6">
          4. என்னை தேவைப்பட்டாலும்
          <br />
          தோழமை தரக்கொண்டு
          <br />
          ஆசீர்வாதங்களைச் சொல்லுவேன்
          <br />
          எவரும் தந்தாரே
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>
              Aaseervaadhathai perraavan thaanae Lyrics in English
            </strong>
          </p>
        </div>
        <p className="mt-4">
          Aaseervaadhathai perraavan thaanae
          <br />
          Aanandathai perraavan thaanae
        </p>
        <p className="mt-6">
          1. Ungal aaseervaadhathai
          <br />
          Ennai arulikkondu
          <br />
          Ulagatthaich chezhithu
          <br />
          Vaalkaai adhirschiyudan kaappaean
        </p>
        <p className="mt-6">
          2. Naamaththoa parisuthamaai
          <br />
          Piraarthanaigal theerththavaran
          <br />
          Umakku udhaviyaen
          <br />
          Un karangal pongume
        </p>
        <p className="mt-6">
          3. Pirar ennai pidikkaththaal
          <br />
          Padippadai amaikka vai
          <br />
          Un thiruvadigal
          <br />
          Ellam saaththuvaen
        </p>
        <p className="mt-6">
          4. Ennai thevaiyappattalum
          <br />
          Thozhamaai tharak kondu
          <br />
          Aaseervaadhangalaich solluvean
          <br />
          Evarum thandhaare
        </p>
      </>
    ),
  },

  11: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>அன்பரே... நன்பரே… - Aanbarea... nanbarea..</strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          அன்பரே... நன்பரே...
          <br />
          அழகே... ஆருயிரே
        </p>
        <p className="mt-6">
          1. குற்றமில்லா உம் ரெத்தத்தை - எண்
          <br />
          குறைதீர்க்க தந்தீரையா
        </p>
        <p className="mt-6">
          2. சுத்தமான உம் சரீரத்தை
          <br />
          நான் சுகமாய் வாழ தந்தீரையா
        </p>
        <p className="mt-6">
          3. மாசில்லாத உம் குணத்தை கொண்டு
          <br />
          என்னையும் மாற்றீரையா
        </p>
        <p className="mt-6">
          4. பூமி உம் கரத்தை - நான்
          <br />
          ஆனீயடிக்க தந்தீரையா
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>Aanbarea... Nanbarea.. Lyrics in English</strong>
          </p>
        </div>
        <p className="mt-4">
          Aanbarea... nanbarea...
          <br />
          Aalagea... aaruyirea
        </p>
        <p className="mt-6">
          1. Kuttramilla um rethathai - en
          <br />
          Kuraitheerkaa thantheeraiyaa
        </p>
        <p className="mt-6">
          2. Suthhamaana un sareerathai
          <br />
          Naan sugamaai vaala thantheeraiyaa
        </p>
        <p className="mt-6">
          3. Maasillaatha um gunathai kondu
          <br />
          Ennaiyum maatreeraiyaa
        </p>
        <p className="mt-6">
          4. Boomi um karathai - naan
          <br />
          Aaniyadikka thatheeraiyaa
        </p>
      </>
    ),
  },
  12: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>
            என் ஆசையெல்லாம் நீர்தானயையா - En aasaigal ellam neer dhaanaiyayaa
          </strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          என் ஆசையெல்லாம் நீர்தானயையா
          <br />
          உம் ஆலயத்தில் தங்கியிருப்பேன்
          <br />
          ஜீவனுள்ள நாளெல்லாம் உம் பாதம் அமர்ந்திருந்து
          <br />
          உந்தன் வழிதனை காண்பேன் - என் ஆசையெல்லாம்
        </p>
        <p className="mt-6">
          1. சூலமித்தி! சூலமித்தி!
          <br />
          என்றழைக்கும் குரல் கேட்டு
          <br />
          என் உயிரே! என் உயிரே!
          <br />
          என்று என்னை அர்ப்பனித்தேன் நாதா - என் ஆசையெல்லாம்.
        </p>
        <p className="mt-6">
          2. அக்கினி ஜீவாலையாக எனக்குள் நிதம் இறங்கி
          <br />
          என்னை நீர் உருவாக்கி பொற்பாத்ரம் ஆக்கி கொண்டீரே
          <br />- என் ஆசையெல்லாம் நீர்தானயையா ஆஆஆஆ
        </p>
        <p className="mt-6">
          3. ரூபவதி! ரூபவதி!
          <br />
          உன் நேசம் இன்பம் என்றீர்
          <br />
          மதுரமே! மதுரமே!
          <br />
          உம்மோடு என்றும் தங்கியிருப்பேனே
          <br />- என் ஆசையெல்லாம்
        </p>
        <p className="mt-6">
          4. சிறுமையின் பாதையில் எல்லாம் என்னோடு கூட இருந்தீர்
          <br />
          தாழ்வில் என்னை நினைத்தவரே
          <br />
          கண்ணீரை துடைத்த இயேசுவே
          <br />- என் ஆசையெல்லாம்
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>
              En aasaigal ellam neer dhaanaiyayaa Lyrics in English
            </strong>
          </p>
        </div>
        <p className="mt-4">
          En aasaigal ellam neer dhaanaiyayaa
          <br />
          Um aalayathil thangi iruppen...
          <br />
          Jeevan ulla naal ellam um paadham amarnthirundhu
          <br />
          Unthan vazhi thanai kaanpen - en aasaigal ellam
        </p>
        <p className="mt-6">
          1. Soolamithi! Soolamithi!
          <br />
          Enrazaikkum kural keettu...
          <br />
          En uyire! En uyire!
          <br />
          Endru ennai arpaniththen naadha - en aasaigal ellam.
        </p>
        <p className="mt-6">
          2. Akini jeevaalaiyaga enakkul nitham irangi
          <br />
          Ennai neer uruvaakki por paathram aakki kondheer...
          <br />- En aasaigal ellam neer dhaanaiyayaa aa aa aa...
        </p>
        <p className="mt-6">
          3. Roopavathi! Roopavathi!
          <br />
          Un nesam inbam endreer...
          <br />
          Mathurame! Mathurame!
          <br />
          Ummodu endrum thangi iruppeney...
          <br />- En aasaigal ellam
        </p>
        <p className="mt-6">
          4. Sirumaiyin paadhaiyil ellam ennode kooda irundheer
          <br />
          Thaazhvile ennai ninaiththavare
          <br />
          Kanneerai thudaiththa Yesuve...
          <br />- En aasaigal ellam
        </p>
      </>
    ),
  },
  13: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>
            என்ன சுத்தி என்ன சுத்தி என்னாலமோ நடக்குது - Enna suthhi enna suthi
            ennalaamoo nadakuthu
          </strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          என்ன சுத்தி என்ன சுத்தி என்னாலமோ
          <br />
          நடக்குது
          <br />
          என்னால நம்பமுடியல (2)
        </p>
        <p className="mt-6">
          1. தாய் கருவில் இருக்கும் போது
          <br />
          தாய் மதியில் தவழும் போது
          <br />
          என்னமோ நடந்து முடிந்தது (2)
        </p>
        <p className="mt-6">
          2. சாலையை நான் கடக்கும் போது
          <br />
          வாகனத்தை ஓட்டும் போது
          <br />
          என்னமோ நடக்கின்றது (2)
        </p>
        <p className="mt-6">
          3. சோர்ந்த போதும் வீழ்ந்த போதும்
          <br />
          எழுந்த போதும் ஜெபித்த போது
          <br />
          என்னமோ நடக்கின்றது (2)
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>
              Enna suthhi enna suthi ennalaamoo nadakuthu Lyrics in English
            </strong>
          </p>
        </div>
        <p className="mt-4">
          Enna suthhi enna suthi ennalaamoo
          <br />
          nadakuthu
          <br />
          Ennaala nambamudiyala (2)
        </p>
        <p className="mt-6">
          1. Thaai karuvil irukum poathu
          <br />
          Thaai madiyil thavalum poathu
          <br />
          Enaamoo nadanthu mudinthathu (2)
        </p>
        <p className="mt-6">
          2. Saalayai naan kadakum poathu
          <br />
          Vaanganathai ootum poathu
          <br />
          Ennamoo nadakindrathu (2)
        </p>
        <p className="mt-6">
          3. Soarntha poathum veelntha poathum
          <br />
          Eluntha poathum jebitha poathum
          <br />
          Enamoo nadakindrathu (2)
        </p>
      </>
    ),
  },
  14: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>என்னை பாட சொல்லி - Ennai paada solli</strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          என்னை பாட சொல்லி
          <br />
          பாட்டு கேட்கும் தெய்வமே...
          <br />
          என்னை ஆட சொல்லி
          <br />
          அழகு பார்க்கும் தகப்பனே...
          <br />
          என்னை ஓட சொல்லி
          <br />
          பெலனை தாரும் இயேசுவே
          <br />
          என்னை உறங்க சொல்லி
          <br />
          விழித்திருக்கும் நேசரே...
        </p>
        <p className="mt-6">
          1. மரண இருளின் பல்லத்தாக்கிலே - உந்தன்
          <br />
          கோலும் தாடியம் தியேட்டரும் என்னையே (2)
        </p>
        <p className="mt-6">
          2. பாவ சீற்றில் கிடந்த என்னையே - உந்தன்
          <br />
          பாச கையால் தூக்கி எடுத்தீரே (2)
        </p>
        <p className="mt-6">
          3. உதவியற்ற நேரங்களிலே - உந்தன்
          <br />
          தூதரை நீர் அனுப்பி தந்தீரே (2)
        </p>
        <p className="mt-6">
          4. கண் கலங்கும் சமயங்களிலே - உந்தன்
          <br />
          கருணை முகத்தை காட்டி வந்தீரே (2)
        </p>
        <p className="mt-6">
          5. சிறகு மூலைத்த காலங்களிலே - எந்தன்
          <br />
          கூட்டை கலைத்து பார்க்கவிதிரே (2)
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>Ennai paada solli Lyrics in English</strong>
          </p>
        </div>
        <p className="mt-4">
          Ennai paada solli
          <br />
          paatu ketkum deivamea...
          <br />
          Ennai aada solli
          <br />
          alagu parkum thagapanea...
          <br />
          Ennai ooda solli
          <br />
          belanai tharum yesuvea
          <br />
          Ennai uranga solli
          <br />
          villithirukum nesarea...
        </p>
        <p className="mt-6">
          1. Marana irulin pallathakilea - unthan
          <br />
          kolum thadium thetrum ennaiyea (2)
        </p>
        <p className="mt-6">
          2. Paava saetril kidantha ennaiyea - unthan
          <br />
          paasa kailyal thooki eutheerea (2)
        </p>
        <p className="mt-6">
          3. Uthaviyatra nerankalilea - unthan
          <br />
          thotharai neer anupi thantheerea (2)
        </p>
        <p className="mt-6">
          4. Kan kalangum samayangalilea - unthan
          <br />
          karunai mugathai kaati vantherea (2)
        </p>
        <p className="mt-6">
          5. Siragu mulaitha kaalangalilea - enthan
          <br />
          kootai kalaithu parakaviteerea (2)
        </p>
      </>
    ),
  },
  15: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>ஒருமுறை ஒருமுறை - Orumurai Orumurai</strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          ஒருமுறை ஒருமுறை
          <br />
          அவெரின் சத்தம் நீ கேட்டாள்
          <br />
          மாறிடும் உந்தன் வாழ்வு
          <br />
          மறைந்திடும் உந்தன் சோர்வு
        </p>
        <p className="mt-6">
          1. உலகத்தின் சத்தம் தோணிக்கும்
          <br />
          அனுபவி அனுபவி
          <br />
          உன்னதர் சத்தம் கேட்கும்
          <br />
          ஓடிவா ஓடிவா (2)
        </p>
        <p className="mt-6">
          2. பாவிகள் வலியில் போனால்
          <br />
          பலாவலி பலாவலி
          <br />
          பரிசுத்தர் பக்கம் வந்தாள்
          <br />
          ஒருவழி ஒருவலி (2)
        </p>
        <p className="mt-6">
          3. இன்பம் தேடி போனால்
          <br />
          தலைவலி தலைவாலி
          <br />
          இனிமை தேடி வந்தாள்
          <br />
          எரியும் ஒலியே நீ (2)
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>Orumurai Orumurai Lyrics in English</strong>
          </p>
        </div>
        <p className="mt-4">
          Orumurai orumurai
          <br />
          avarin satham nee keatal
          <br />
          Maaridum unthan vaalvu
          <br />
          marainthidum unthan sorvu
        </p>
        <p className="mt-6">
          1. Ulakathin satham dhonikum
          <br />
          anubavi anubavi
          <br />
          Unnathar satham ketkum
          <br />
          oodiva oodiva (2)
        </p>
        <p className="mt-6">
          2. Paavigal valiyil poonal
          <br />
          palavali palavali
          <br />
          Parisuthar pakkam vanthal
          <br />
          oruvali oruvali (2)
        </p>
        <p className="mt-6">
          3. Inbam thedi poonal
          <br />
          thalaivali thalaivali
          <br />
          Inimai thedi vanthal
          <br />
          eriyum oliyea nee (2)
        </p>
      </>
    ),
  },
  16: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>
            எதற்கெல்லாம் ஜெபம் தினம் செய்வது - Etharkellam Jebam Thinama
            Seivathu
          </strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          எதற்கெல்லாம் ஜெபம் தினம் செய்வது
          <br />
          எதையெல்லாம் சொல்லி சொல்லி ஜெபிப்பது
        </p>
        <p className="mt-6">
          1. என் கண்ணீர் ஜெபமாகட்டும்
          <br />
          என் கலக்கம் ஜெபமாகட்டும்
          <br />
          என் புலம்பல் ஜெபமாகட்டும்
          <br />
          என் கதறல் ஜெபமாகட்டும்
        </p>
        <p className="mt-6">
          2. என் தவிப்பு ஜெபமாகட்டும்
          <br />
          என் விழிப்பு ஜெபமாகட்டும்
          <br />
          என் உளறல் ஜெபமாகட்டும்
          <br />
          என் முனங்கள் ஜெபமாகட்டும்
        </p>
        <p className="mt-6">
          3. என் மூச்சு ஜெபமாகட்டும்
          <br />
          என் பேச்சு ஜெபமாகட்டும்
          <br />
          என் யேக்கம் ஜெபமாகட்டும்
          <br />
          எதிர்ப்பார்ப்பு ஜெபமாகட்டும்
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>
              Etharkellam Jebam Thinama Seivathu Lyrics in English
            </strong>
          </p>
        </div>
        <p className="mt-4">
          Etharkellam jebam thinam seivathu
          <br />
          Ethaiyellam solli solli jebipathu
        </p>
        <p className="mt-6">
          1. En kanneer jebamaagattum
          <br />
          En kalakkam jebamaagattum
          <br />
          En pulambal jebamaagattum
          <br />
          En katharal jebamaagattum
        </p>
        <p className="mt-6">
          2. En thavippuu jebamaagattum
          <br />
          En villippuu jebamaagattum
          <br />
          En ularal jebamaagattum
          <br />
          En munangal jebamaagattum
        </p>
        <p className="mt-6">
          3. En moocchu jebamaagattum
          <br />
          En peacchu jebamaagattum
          <br />
          En yeakkam jebamaagattum
          <br />
          Ethirpaarppu jebamaagattum
        </p>
      </>
    ),
  },
  17: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>எங்கும் நிறைந்தவரே - Engum Nirainthavarea</strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          எங்கும் நிறைந்தவரே - உம்மை
          <br />
          ஆடிப்பாடி ஆராதிப்பேன்
          <br />
          என்னை நிறைந்தவரே - உம்மை
          <br />
          பாடி ஆடி பறைசாற்றுவேன்
          <br />
          ஆரத்திப்போம் பறைசாற்றுவோம்
          <br />
          ஆடிப்பாடி நடனமாடி களிகூருவோம்
        </p>
        <p className="mt-6">
          1. தலையில் இருந்து சாம்பலை எடுத்து
          <br />
          - ஆதில்
          <br />
          கிரீடம் சூட்டி அழகு பார்க்கிறார்
          <br />- ஆராதிப்போம்
        </p>
        <p className="mt-6">
          2. கண்ணீரில் இருந்து நீரை துடைத்து
          <br />
          - ஆதில்
          <br />
          காட்சி தந்து அன்பு காட்டினர்
          <br />- ஆராதிப்போம்
        </p>
        <p className="mt-6">
          3. ஆவியினாலே என்னையும் நிறைத்து
          <br />
          - என்னை
          <br />
          ரெத்தத்தாலே கழுவி விடுகீர்
          <br />- ஆராதிப்போம்
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>Engum Nirainthavarea Lyrics in English</strong>
          </p>
        </div>
        <p className="mt-4">
          Engum nirainthavarea - ummai
          <br />
          Aadipaadi aaraathipean
          <br />
          Ennai nirainthavarea - ummai
          <br />
          Paadi aadi paraisaatruvean
          <br />
          Aarathipoam paraisaatruvoam
          <br />
          Aadipaadi nadanamaadi kalikooruvoam
        </p>
        <p className="mt-6">
          1. Thalaiyil irunthu saambalai yeduthu
          <br />
          - athil
          <br />
          Kreedam sooti alagu paarkiraar
          <br />- Aaraathipoam
        </p>
        <p className="mt-6">
          2. Kaneerilirinthu neerai thudaithu
          <br />
          - athil
          <br />
          Kaatchi thanthu anbu kaatineer
          <br />- Aaraathipoam
        </p>
        <p className="mt-6">
          3. Aaviyinalea ennaiyum niraithu
          <br />
          - ennai
          <br />
          Rethethaalea kaluvi vidukereer
          <br />- Aaraathipoam
        </p>
      </>
    ),
  },
  18: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>
            பாரதம் பாரதம் பாரத தேசம் - Baaratham Baaratham Baaratha Dhesam
          </strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          பாரதம் பாரதம் பாரத தேசம்
          <br />
          நம் பரிசுதாரம் இயேசுவுக்கு
          <br />
          சொந்தமாகட்டும்
        </p>
        <p className="mt-6">
          1. ஆற்றங்கரை ஓரமுள்ள பட்டணங்களும்
          <br />
          அலைகடலின் கரையில் உள்ள கிராமங்களும்
          <br />
          அன்பராம் இயேசுவிடம் திரும்பிட
          <br />
          வேண்டும் (2)
        </p>
        <p className="mt-6">
          2. படிப்பறிவே இல்லாத பாமரர்களும்
          <br />
          பட்டங்கள் பல வாங்கிய நியாணிகளும்
          <br />
          அன்பராம் இயேசுவிடம் திரும்பிட
          <br />
          வேண்டும் (2)
        </p>
        <p className="mt-6">
          3. விதவிதமாய் மொழிகள் பேசும் மக்கள்
          <br />
          கூட்டமும்
          <br />
          குளம் கோத்திரம் பிறந்து வாழும்
          <br />
          ஜாதி ஜனங்களும்
          <br />
          அன்பராம் இயேசுவிடம் திரும்பிட
          <br />
          வேண்டும் (2)
        </p>
        <p className="mt-6">
          4. பசிக்கு உனவு இல்லாத யேலை
          <br />
          மக்களும்
          <br />
          பணம் பெருத்து, பாவம் செய்யும்
          <br />
          துரோகிகளும்
          <br />
          அன்பராம் இயேசுவிடம் திரும்பிட
          <br />
          வேண்டும் (2)
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>
              Baaratham Baaratham Baaratha Dhesam Lyrics in English
            </strong>
          </p>
        </div>
        <p className="mt-4">
          Baaratham baaratham baaratha deasam
          <br />
          Nam parisutharaam yeasuvukku
          <br />
          sonthamaagattum
        </p>
        <p className="mt-6">
          1. Aatrangarai ooramulla pattanangalum
          <br />
          Alaikadalin karaiyilulla gramangalum
          <br />
          Aanbaraam yeasuvidam thirumbida
          <br />
          veandum (2)
        </p>
        <p className="mt-6">
          2. Padiparivea illaatha paamarargalum
          <br />
          Pattangal pala vaangiya nyanikalum
          <br />
          Aanbaraam yeasuvidam thirumbida
          <br />
          veendum (2)
        </p>
        <p className="mt-6">
          3. Vithavithamai moligal peasum makkal
          <br />
          kootamum
          <br />
          Kulam koathiram pirinthu vaalum
          <br />
          jaathi janangalum
          <br />
          Aanbaraam yeasuvidam thirumbida
          <br />
          veandum (2)
        </p>
        <p className="mt-6">
          4. Passikku unavu illaatha yealai
          <br />
          makkalum
          <br />
          Panam peruthu, paavam seiyum
          <br />
          throkigalum
          <br />
          Aanbaraam yeasuvidam thirumbida
          <br />
          veandum (2)
        </p>
      </>
    ),
  },
  19: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>
            திருச்சபையே திருச்சபையே ஜெபிப்பாயா - Thiruchabayea Thiruchabayea
            Jebippaye
          </strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          திருச்சபையே திருச்சபையே
          <br />
          ஜெபிப்பாயா
          <br />
          திரப்பின் வாசலில் நிற்க வருவாயா
          <br />
          நீ ஜெபித்தாள் சிரை திறக்கும்
          <br />
          கண் சிவந்தால் தேசம் கண் திறக்கும்
        </p>
        <p className="mt-6">
          1. சீசர்களை உருவாக்கி செயல்படுவாய்
          <br />
          சிலுவை அன்பாய் தியானித்து
          <br />
          வளர்ந்திடுவாய்
          <br />
          உபவாசித்து ஜெபிதிடுவாய்
          <br />
          ஊழியதையும் செய்த்திடுவாய்
        </p>
        <p className="mt-6">
          2. உலகத்தில் உப்பாக மாறிடுவாய்
          <br />
          மலைமேல் உள்ள பட்டனமாய்
          <br />
          ஜோலிதிடுவாய்
          <br />
          ஆத்துமாக்களை ஆதாயம் செய்வாய்
          <br />
          வருகைக்கு நீ ஆயத்த மாவாய்
        </p>
        <p className="mt-6">
          3. உனக்காக மணவாளன் காத்திருக்கிறார்
          <br />
          உன்னோடு உறவாட ஆசைப்படுகிறார்
          <br />
          ஆவியானவர் வழிநடத்துகிறார்
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>
              Thiruchabayea Thiruchabayea Jebippaye Lyrics in English
            </strong>
          </p>
        </div>
        <p className="mt-4">
          Thiruchabayea thiruchabayea
          <br />
          jebippayea
          <br />
          Thirappin vaasalil nirkka varuvaaya
          <br />
          Nee jebithaal sirai thirakkum
          <br />
          Kan sivanthaal deasam kan thirakkum
        </p>
        <p className="mt-6">
          1. Seeshargalai uruvakki seyalpduvaai
          <br />
          Siluvai anbai thyaanithu
          <br />
          valarnthiduvaai
          <br />
          Ubavaasithu jebithiduvaai
          <br />
          Ooliyathaiyum seiythiduvaai
        </p>
        <p className="mt-6">
          2. Ulagathil uppaaga maariduvaai
          <br />
          Malaimeal ulla pattamaai
          <br />
          jolithiduvaai
          <br />
          Aathumaakalai aathayam seiyvaai
          <br />
          Varugaiku nee aayatha maavaai
        </p>
        <p className="mt-6">
          3. Unakaaga manavaalan kaathirukiraar
          <br />
          Unnodu uravaada asaivaadukiraar
          <br />
          Aaviyaanavar valinadathukiraar
          <br />
          Vaarthaiyenaalea seerpaduthukiraar.
        </p>
      </>
    ),
  },
  20: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>தா எண்டரல்லவா கேட்டார் - Thaa Endrallavaa Kaetaar</strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          தா எண்டரல்லவா கேட்டார்
          <br />
          தரமாடேனென்று எப்படி தீர்ப்பான் - இயேசு
        </p>
        <p className="mt-6">
          1. பேதுரு படகை தருவாயா
          <br />
          அதை மீன்களால் நிரப்பி திரும்பத் தந்தார் (2)
        </p>
        <p className="mt-6">
          2. தாகத்துக்கு தண்ணீரை தருவாயா
          <br />
          அதை ஜீவா தண்ணீராக திரும்ப தந்தார் (2)
        </p>
        <p className="mt-6">
          3. இதயத்தை எனக்கு தருவாயா
          <br />
          அதை ஆலயமாக மாற்றுவார் (2)
        </p>
        <p className="mt-6">
          4. ஐந்து அப்பம் ரெண்டு மீன் தருவாயா
          <br />
          அத்தை அய்யாயிரம் பேருக்குப் பகீர்ந்தலித்தார் (2)
        </p>
        <p className="mt-6">
          5. முதல்லப்பம் சுட்டு இப்போ தருவாயா அத்தாய்
          <br />
          பஞ்ச காலம் தீரு மட்டும் பெருக செய்தார் (2)
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>Thaa Endrallavaa Kaetaar Lyrics in English</strong>
          </p>
        </div>
        <p className="mt-4">
          Thaa endrallavaa kaetaar
          <br />
          Tharamaateanendru eppadi solvean - Yeasu
        </p>
        <p className="mt-6">
          1. Peathuru padagai tharuvaaya
          <br />
          Athai meenkalaal nirappi thirumba thanthaar (2)
        </p>
        <p className="mt-6">
          2. Thaagathirkuu thaneerai tharuvaayaa
          <br />
          Athai jeeva thaneeraaga thirumba thanthaar (2)
        </p>
        <p className="mt-6">
          3. Ithaiyathai enakku tharuvaayaa
          <br />
          Athai aalayamaaga maatriduvaar (2)
        </p>
        <p className="mt-6">
          4. Ainthu appam rendu meen tharuvaayaa
          <br />
          Athai ayyaiyiram pearukku pagirrndhalithaar (2)
        </p>
        <p className="mt-6">
          5. Muthlappam suttu ippoo tharuvaayaa athai
          <br />
          Pancha kaalam theeru mattum pearuga seithaar (2)
        </p>
      </>
    ),
  },
  21: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>
            துதிப்பதாலே துக்கப்படமாட்டேன் - Thuthipathaalea Thukkapadamaatean
          </strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          துதிப்பதாலே துக்கப்படமாட்டேன் - நான்
          <br />
          ஜெபிப்பதாலே வெட்கப்படமாட்டேன்
          <br />
          நடந்தாலும் சோர்ந்து போக மாட்டேன்
          <br />
          ஓடினாலும் இளைப்படைய மாட்டேன்
          <br />
          கலங்கமாட்டேன் நான் தவிக்கமாட்டேன் நான்
          <br />
          புலம்பமாட்டேன் நான் பயப்படமாட்டேன்
        </p>
        <p className="mt-6">
          1. மனதாற பாடிடுவேன்
          <br />
          நான் பாடாமல் இருக்க மாட்டேன்
          <br />
          மணிகணக்காய் ஜெபித்திடுவேன் நான்
          <br />
          ஜெபிக்காமல் இருக்கமாட்டேன்
        </p>
        <p className="mt-6">
          2. பாவத்திற்கு விலக்கி ஓடுவேன்
          <br />
          பாண ஆசை வெறுத்திடுவேன்
          <br />
          உலகத்திற்கு வெளிச்சமாவேன்
          <br />
          நான் சாட்சியாக வாழ்ந்திடுவேன்
        </p>
        <p className="mt-6">
          3. சோதனையை சாதனையாகுவேன்
          <br />
          வேதனையை வென்றிடுவேன்
          <br />
          பரிசுத்தமாய் வாழ்ந்திடுவேன்
          <br />
          பாவிகளில் அன்பு கூறுவேன்
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>Thuthipathaalea Thukkapadamaatean Lyrics in English</strong>
          </p>
        </div>
        <p className="mt-4">
          Thuthipathaalea thukkapadamaatean - naan
          <br />
          Jebippathaalea vetkapadamaatean
          <br />
          Nadanthaalum soarnthu poaga maatean
          <br />
          Oodinaalum ilaipadaya maatean
          <br />
          Kalangamaatean naan thavikkamaatean naan
          <br />
          Pulambamaatean naan bayapadamaatean
        </p>
        <p className="mt-6">
          1. Manathaara paadiduvean
          <br />
          Naan paadaamal iruka maatean
          <br />
          Manikanakkaaiy jebithiduvean naan
          <br />
          Jebikaamal irukamaatean
        </p>
        <p className="mt-6">
          2. Paavathirku vilagi ooduvean
          <br />
          Pana aasai veruthiduvean
          <br />
          Ulagathirku velichamaavean
          <br />
          Naan saatchiyaaga vaalnthiduvean
        </p>
        <p className="mt-6">
          3. Sothanaiyai saathanaiyaakuvean
          <br />
          Veathanaiyai vendriduvean
          <br />
          Parisuthamaai vaalnthiduvean
          <br />
          Paavigalil anbu kooruvean
        </p>
      </>
    ),
  },
  22: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>மொழிகள் பல பயன்படுதி - Moligal Pala Bayanpaduthi</strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          மொழிகள் பல பயன்படுதி
          <br />
          செவிகள் கேட்க பாடுகிரேன்
          <br />
          யேசையா யேசையா
          <br />
          கண் கொண்டு பாருமையா
          <br />
          யேசையா யேசையா
          <br />
          உம் பிள்ளை நாணையா
        </p>
        <p className="mt-6">
          1. சூசானின் அரண்மனையில் அன்று
          <br />
          உபவாச ஜெபம் கேட்டார்
          <br />
          எஸ்தரின் கிரயத்துக்கு
          <br />
          தக்க பெலன் (பாதில்) தந்து விட்டீர்
        </p>
        <p className="mt-6">
          2. சீனாய் மாலை உச்சியில் மற்றும்
          <br />
          மோசேயின் ஜெபம் கேட்டீர்
          <br />
          மாறாவில் தண்ணீரையும்
          <br />
          இனிப்பாக மாத்திரிவிடீர்!
        </p>
        <p className="mt-6">
          3. தாவீதின் வாழ்கையிலே - அவனை
          <br />
          தர்காத்து நடத்தி வந்தீர்
          <br />
          பெற்ற மகன் கொள்ள வந்தாலும்
          <br />
          உம் பிள்ளையாக பாதுகாத்தீர்!
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>Moligal Pala Bayanpaduthi Lyrics in English</strong>
          </p>
        </div>
        <p className="mt-4">
          Moligal pala bayanpaduthii
          <br />
          Sevigal keatka paadugirean
          <br />
          Yeasaiyaa yeasaiyaa
          <br />
          Kan kondu paarummaiyyaa
          <br />
          Yeasaiyaa yeasaiyaa
          <br />
          Um pillai naanaiyaa
        </p>
        <p className="mt-6">
          1. Soosaanin aranmanaiyil andru
          <br />
          Ubavaasa jebam keataar
          <br />
          Estherin kirayathukkuu
          <br />
          Thakka belan (bathil) thanthu viteer
        </p>
        <p className="mt-6">
          2. Seenai malai ucchiyil andru
          <br />
          Moseayin jebam keateer
          <br />
          Maaraavil thaneeraiyum
          <br />
          Inipaaga maatriviteer!
        </p>
        <p className="mt-6">
          3. Thaaveethin valkaiyaeelea - avanai
          <br />
          Tharkaathu nadathi vantheer
          <br />
          Petra magan kolla vanthaalum
          <br />
          Um pillaiyaaga paathukaatheer!
        </p>
      </>
    ),
  },
  23: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>
            கிருபை என்று சொன்னாலே எத்தனை வலிமை - Kirubai Endra Sollilaa Etnai
            Valimai
          </strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          கிருபை என்று சொல்லிலே எத்தனை வலிமை...
          <br />
          கிருபையோடு வாழ்ந்து விட்டாள் எத்தனாய்
          <br />
          இனிமை
          <br />
          இனிமை... வலிமை...
          <br />
          கிருபை என்று சொல்லிலே எத்தனை மகிமை...
        </p>
        <p className="mt-6">
          கிருபை, கிருபை, கிருபை, கிருபை, தேவ கிருபை
          <br />
          முடிவு வரைக்கும் காத்து கொள்ளும் அன்பின் கிருபை
        </p>
        <p className="mt-6">
          1. வாலும் போதும் தாலும் போதும் தாங்கிய கிருபை
          <br />
          வாழ வைத்து அழகு பார்க்கும் அன்பின் கிருபை
          <br />- கிருபை...(4)
        </p>
        <p className="mt-6">
          2. துன்பத்திலே துடித்த போது தூக்கிய கிருபை
          <br />
          துதித்து, துதித்து பாட வைக்கும் தூய கிருபை
          <br />- கிருபை...(4)
        </p>
        <p className="mt-6">
          3. ஜீவன் தந்து, சாவை வென்றது உந்தன் கிருபை
          <br />
          ஜீவனோடு வாழ வைப்பது உந்தன் கிருபை
          <br />- கிருபை...(4)
        </p>
        <p className="mt-6">
          4. போன வருடம் தாண்டி வந்தது உங்க கிருபை
          <br />
          புதிய வருடம் தந்து விட்டது உங்க கிருபை
          <br />- கிருபை...(4)
        </p>
        <p className="mt-6">
          5. வாக்கு தத்தம் தந்து விட்டது உங்க கிருபை
          <br />
          வார்த்தையாலே நடத்தி செல்வது உங்க கிருபை
          <br />- கிருபை...(4)
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>
              Kirubai Endra Sollilaa Etnai Valimai Lyrics in English
            </strong>
          </p>
        </div>
        <p className="mt-4">
          Kirubai endra sollilaa etthanai valimai
          <br />
          Kirubaiyoodu vaalnthu vittaal etthanai
          <br />
          inimai
          <br />
          Inimai... Valimai...
          <br />
          Kirubai endru sonnaalea etthanai magimai...
        </p>
        <p className="mt-6">
          Kiruba, kiruba, kiruba, kiruba, deva kiruba
          <br />
          Mudivu varaikum kaathu kollum anbin kiruba
        </p>
        <p className="mt-6">
          1. Vaalum poothum thaalum poothum thaangiya kiruba
          <br />
          Vaala vaithu alagu paarkum anbin kiruba
          <br />- kirubai...(4)
        </p>
        <p className="mt-6">
          2. Thunbathelea thuditha poothu thookiya kiruba
          <br />
          Thuthithu, thuthithu paada vaikum thooya kiruba
          <br />- kiruba...(4)
        </p>
        <p className="mt-6">
          3. Jeevan thanthu, saavai vendrathu unthan kiruba
          <br />
          Jeevanoodu vala vaipathu unthan kiruba
          <br />- kiruba...(4)
        </p>
        <p className="mt-6">
          4. Poona varudam thaandi vanthathu unga kiruba
          <br />
          Puthiya varudam thanthu vittathu unga kiruba
          <br />- kiruba...(4)
        </p>
        <p className="mt-6">
          5. Vaaku thatham thanthu vittathu unga kiruba
          <br />
          Vaarthayaalea nadathi selvathu unga kiruba
          <br />- kiruba...(4)
        </p>
      </>
    ),
  },
  24: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>
            ஜெபிப்பவனையும் துதிப்பவனையும் நோக்கி பார்ப்பவரே - Jebippavanaiyum
            Thuthipavanaiyum Nooki Paarpavarea
          </strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          ஜெபிப்பவனையும் துதிப்பவனையும் நோக்கி பார்ப்பவரே
          <br />
          எங்கல் ஜெபங்களுக்குப் பாதியில் தந்து நடத்தி செண்ட்ரிடுமியா
          <br />
          ஜெபிக்கிறோம் ஜெபிக்கிறோம்
          <br />
          துதிக்கிறோம் நாங்கல் துதிக்கிறோம்
        </p>
        <p className="mt-6">
          1. சிறைச்சாலையில் பவுலும் சீலமும் துதிக்கச் செய்தவரே
          <br />
          அந்த துதியினாலே கதவுகளை திறந்து விட்டீரே - ஜெபிக்கிறோம்
        </p>
        <p className="mt-6">
          2. சிங்க கேபியில் தானியேலை ஜெபிக்கச் செய்தவரே
          <br />
          அந்த ஜெபத்தினாலே சிங்கத்தின் வாயை கட்டி போட்டவரே - ஜெபிக்கிறோம்
        </p>
        <p className="mt-6">
          3. ஆபிரகாமையும் யோசுவாவும் நடக்க சொன்னவரே
          <br />
          இந்த தேசத்தை சுதந்திரமாக நடத்தி செண்ட்ரிடுமியா
          <br />
          நடக்கிறோம் நடக்கிறோம்
          <br />
          ஜெபிக்கிறோம் (தேசத்தை) ஜெபிக்கிறோம்
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>
              Jebippavanaiyum Thuthipavanaiyum Nooki Paarpavarea Lyrics in
              English
            </strong>
          </p>
        </div>
        <p className="mt-4">
          Jebippavanaiyum thuthipavanaiyum nooki
          <br />
          paarpavarea
          <br />
          Engal jebangalukku pathil thanthu nadathi
          <br />
          sendridumea
          <br />
          Jebikkiroam jebikkiroam
          <br />
          Thuthikiroam naangal thuthikiroam
        </p>
        <p className="mt-6">
          1. Siraichaalayil pavulum seelavum thuthikka
          <br />
          seiythavarea
          <br />
          Antha thuthiyinalea kathavugalai thiarnthu
          <br />
          viteerea - jebikindroam
        </p>
        <p className="mt-6">
          2. Singa kebiyil thaaneeyelai jebikka
          <br />
          seiythavarea
          <br />
          Antha jebathinalea singathin vaayai katti
          <br />
          poatavarea - jebikkiroam
        </p>
        <p className="mt-6">
          3. Aabragaamayum yoosuvaavayum nadakka
          <br />
          sonnavarea
          <br />
          Intha deasathai suthantharikka nadathi
          <br />
          sendridumea
          <br />
          Nadakiroam nadakiroam
          <br />
          Jebikkiroam (deasathai) jebikkiroam.
        </p>
      </>
    ),
  },
  25: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>
            நாசியில சுவாசமுள்ள மனுஷனை நம்பாத - Naasiyil Suvaasamulla Manushanai
            Nambaadha
          </strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          நாசியில சுவாசமுள்ள மனுஷனை நம்பாத
          <br />
          அவன் நல்லவனோ கெட்டவனோ
          <br />
          நம்பி விட தகுதி இல்ல-(2)
          <br />
          உன்ன பார்க்க ஏங்குகிரார்
          <br />
          உன் பாடல விரும்புகிறார்-(2)
          <br />
          உன் பாவம் பாரம் யாவையும் பரிகாரித்தார்-(2)
        </p>
        <p className="mt-6">
          1. சொந்தம் என்று சொன்னாலும் சொத்து சுகம் தந்தாலும் நம்பாத
          <br />
          என் சொல்லை விட்டு என்றுமே வளப்புரம் இடப்புறம் சாயாதா-(2)
          <br />
          உன்ன பார்க்க-(...)
        </p>
        <p className="mt-6">
          2. பணம் காசு தந்தாலும் பாராட்டுக்கள் தந்தாலும் நம்பாத
          <br />
          பாடுகளே வந்தாலும் பரிசுத்தர விட்டு விலகாத -(2)
          <br />
          உன்னை பார்க்க (...)
        </p>
        <p className="mt-6">
          3. கலங்காதே என்றாலும் காப்பற்றுவேன் என்றலும் நம்பாத
          <br />
          காயப்பட்ட கரத்தினால் காலமெல்லாம் காத்திடுவார் விலகாத-(2)
          <br />
          உன்னை பார்க்க (...)
        </p>
        <p className="mt-6">
          4. நல்லவரே வல்லவரே உம்மையே நான் நம்பிடுவேன்
          <br />
          நன்றி சொல்லி நன்றி சொல்லி நாள்தோறும் துதித்திடுவேன்-(2)
          <br />
          உன்னை பார்க்க (...)
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>
              Naasiyil Suvaasamulla Manushanai Nambaadha Lyrics in English
            </strong>
          </p>
        </div>
        <p className="mt-4">
          Naasiyil suvaasamulla manushanai nambaadha
          <br />
          Avan nallavano kettavano
          <br />
          Nambi vida thagudhi illa-(2)
          <br />
          Unna paarka yaengukiraar
          <br />
          Un paadala virumbukiraar-(2)
          <br />
          Un paavam paaram yaavaiyum parikaariththaar-(2)
        </p>
        <p className="mt-6">
          1. Sondham endru sonnalum soththu sugam thandhaalum nambaadha
          <br />
          En sollai vittu endrumee vazhapuram idappuram saayaadha-(2)
          <br />
          Unna paarka-(...)
        </p>
        <p className="mt-6">
          2. Panam kaasu thandhaalum paarattukal thandhaalum nambaadha
          <br />
          Paadugaley vanthaalum parisuththaravittu vilagaadha-(2)
          <br />
          Unnai paarka (...)
        </p>
        <p className="mt-6">
          3. Kalangaadhey endralum kaappaatruven endralum nambaadha
          <br />
          Kaayapatta karaththinaal kaalamelam kaaththiduvaar vilagaadha-(2)
          <br />
          Unnai paarka (...)
        </p>
        <p className="mt-6">
          4. Nallavare vallavare ummaiye naan nambiduven
          <br />
          Nandri solli nandri solli naalthorum thudhiththiduven-(2)
          <br />
          Unnai paarka (...)
        </p>
      </>
    ),
  },
  26: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>பெலனே என் கண்மலையே - Belanae En Kanmalaiye</strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          பெலனே என் கண்மலையே
          <br />
          என் பெலவினத்தில் பெலனே உறவே[உயிரே] என் உயிர் மூச்சே
          <br />
          என் உள் மனதின் மருந்தே
          <br />
          ஆராதிப்பேன் [3] உம்மையே ஆராதிப்பேன் [3] என்றுமே ...
        </p>
        <p className="mt-6">
          1) பறவைகளும் பாடுதே நீரூற்றும் துதித்திடுதே(-- 2)
          <br />
          உம் சாயலில் வந்த மனிதர்கள் துதிக்கையில்
          <br />
          இறங்கி வருகின்றீரே(2)
          <br />
          பெலனே (-- 2 )
        </p>
        <p className="mt-6">
          2) கற்களும் கூப்பிடுதே சுவரும் சத்தமிடுதே (-2)
          <br />
          உம் பிள்ளையாய் நான் ஜெபிக்கும் போது
          <br />
          ஓடோடி வருகின்றீரே (-- 2 )
          <br />
          பெலனே (-- 2 )
        </p>
        <p className="mt-6">
          3) அறிவும் பெருகிடுதே கேள்விகள் எழும்பிடுதே (-2)
          <br />
          உம் நேசத்தால் நான் வேதத்தை திறக்கையில் (-2)
          <br />
          வெளிச்சம் தருகின்றீரே
          <br />
          பெலனே(--2)
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>Belanae En Kanmalaiye Lyrics in English</strong>
          </p>
        </div>
        <p className="mt-4">
          Belanae en kanmalaiye
          <br />
          En belavinaththil belanae urave[uyire] en uyir mooche
          <br />
          En ul manathin marunthe
          <br />
          Aaradhippen [3] ummaiye aaradhippen [3] endrumey ...
        </p>
        <p className="mt-6">
          1) Paravaigalum paaduthe neerootrum thudhithiduthe (-- 2)
          <br />
          Um saayilil vantha manithargal thudhikkaayil
          <br />
          Irangi varugindheere (2)
          <br />
          Belanae (-- 2 )
        </p>
        <p className="mt-6">
          2) Karkalum koopiduthe suvarum saththam iduthe (-2)
          <br />
          Um pillaiyaai naan jebikkum podhu
          <br />
          Ododi varugindheere (-- 2 )
          <br />
          Belanae (-- 2 )
        </p>
        <p className="mt-6">
          3) Arivum perugiduthe kelvigal ezhumbiduthe (-2)
          <br />
          Um nesathaal naan vedaththai thirakkaayil (-2)
          <br />
          Velicham tharugindheere
          <br />
          Belanae (-- 2 )
        </p>
      </>
    ),
  },
  27: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>
            என் நம்பிக்கையின் நங்குரம் இயேசு இருக்க - En Nambikkaiyin Nanguram
            Yesu Irukka
          </strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          என் நம்பிக்கையின் நங்குரம் இயேசு இருக்க
          <br />
          என் நம்பிக்கையின் நங்குரம் நேசர் இருக்க
          <br />
          எதற்கும் பயப்படமாட்டேன்-(2)
        </p>
        <p className="mt-6">
          நான் எல்லாவற்றுக்கும் நம்புவேன்(2)
          <br />
          பயம் பயம் பயம் பயம் பயம் இல்லையே
          <br />
          (பயம் இல்லை இல்லை பயம் இல்லையே)
          <br />
          (துதி துதி துதி துதி துதி என்றுமே-2
          <br />
          இயேசுவின் நாமத்திலே விசுவாசத்தில் ஜெயித்திடுவேன்-2
        </p>
        <p className="mt-6">
          எனக்கு விரோதமாக பாளையம் இறங்கினாலும்
          <br />
          எனக்கு விரோதமாக யுத்ததங்கள் எழும்பினாலும்
          <br />
          பயப்படவேமாட்டேன் நான் நம்பிகையாயிருப்பேன்-2
          <br />
          பயம் இல்லை.....( )
        </p>
        <p className="mt-6">
          தீங்கு நாளில் அவர் என்னை கூடாரத்தில் மறைத்து
          <br />
          என்னை தமது கூடார மறைவிலே ஒளித்து -2
          <br />
          கண்மலை மேல் உயர்திடுவார்
          <br />
          நான் கைதட்டி பாடிடுவேன்-2
          <br />
          பயம் இல்லை(...)
        </p>
        <p className="mt-6">
          தகப்பனும் தாயும் என்னைக் கை விட்டாலும்
          <br />
          அண்ணா தம்பி அக்கா தங்கை அனைவரும் விட்டாலும்
          <br />
          கர்த்தர் என்னைச் சேர்துகொள்வார்
          <br />
          அவர் கைவிடவேமாட்டர்-2
          <br />
          பயம் இல்லை(...)
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>
              En Nambikkaiyin Nanguram Yesu Irukka Lyrics in English
            </strong>
          </p>
        </div>
        <p className="mt-4">
          En nambikkaiyin nanguram Yesu irukka
          <br />
          En nambikkaiyin nanguram Nesar irukka
          <br />
          Etharkum bayappada maatten-(2)
        </p>
        <p className="mt-6">
          Naan ellaavatrukkum nambuven(2)
          <br />
          Bayam bayam bayam bayam bayam illaiyey
          <br />
          (Bayam illai illai bayam illaiyey)
          <br />
          (Thuthi thuthi thuthi thuthi thuthi endrumey-2
          <br />
          Yesuvin naamathiley visuvaasathil jeyithiduven-2
        </p>
        <p className="mt-6">
          Enakku virothamaaga paalayam iranginaalum
          <br />
          Enakku virothamaaga yuththangal ezhumbinaalum
          <br />
          Bayappadave maatten naan nambikkaiyaayiruppen-2
          <br />
          Bayam illai.....( )
        </p>
        <p className="mt-6">
          Theengu naalil avar ennai koodaaraththil maraiththu
          <br />
          Ennai thamudhu koodaaram maraiviley oliththu -2
          <br />
          Kanmalai mel uyarthiduvar
          <br />
          Naan kaithatti paadiduven-2
          <br />
          Bayam illai(...)
        </p>
        <p className="mt-6">
          Thagappanum thaayum ennaik kai vittaalum
          <br />
          Anna thambi akka thangai anivarum vittaalum
          <br />
          Karththar ennai saerthukkollvaar
          <br />
          Avar kaividave maattar-2
          <br />
          Bayam illai(...)
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>Jeyam Jeyam Jeyam Jeyam Iratham Jeyamey</strong>
          </p>
        </div>
        <p className="mt-4">
          Iratham iratham iratham iratham iratham Yesu irathamey
          <br />
          Arikkai seidhiduven
          <br />
          Naan aaradhithiduven-(2)
        </p>
      </>
    ),
  },
  28: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>என்னையும் தேடி வந்தீரே - Ennaiyum Thedi Vanthirey</strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          என்னையும் தேடி வந்தீரே
          <br />
          உதவி என்று சொன்னீரே-(2)
        </p>
        <p className="mt-6">
          நான் பெலவீனன் என்று சொன்னாலும்
          <br />
          என் ஜனத்தின் தலைவன் என்றீரே-(2)
          <br />
          என்னையும் தேடி வந்தீரே-(2)
        </p>
        <p className="mt-6">
          நான் திக்குவாயன் என்று சொன்னாலும்
          <br />
          என் வாயில் உந்தன் வார்த்தை வைத்திரே-(2)
          <br />
          என்னையும் தேடி வந்தீரே-(2)
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>Ennaiyum Thedi Vanthirey Lyrics in English</strong>
          </p>
        </div>
        <p className="mt-4">
          Ennaiyum thedi vanthirey
          <br />
          Uthavi endru sonniyerey-(2)
        </p>
        <p className="mt-6">
          Naan pelaveenan endru sonnalum
          <br />
          En janathin thalaivan endreerey-(2)
          <br />
          Ennaiyum thedi vanthirey-(2)
        </p>
        <p className="mt-6">
          Naan thikkuvaayan endru sonnalum
          <br />
          En vaayil unthan vaarthai vaiththirey-(2)
          <br />
          Ennaiyum thedi vanthirey-(2)
        </p>
      </>
    ),
  },
  29: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>
            என்னை நன்றாக நடத்திநீரே - Ennai Nanraga Nadaththineere
          </strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          என்னை நன்றாக நடத்திநீரே
          <br />
          எண்ணில் நன்மை ஒன்று இல்லாதபோது
          <br />
          என்னை உயர்வாக பேசினீரே
          <br />
          நான் உளர்ந்து கிடந்த போது
        </p>
        <p className="mt-6">
          எபினேசரே என் நேசரே இம்மற்றும் எனக்கு உதவி செய்தீர்
          <br />
          எபினேசரே என் நேசரே இனிமேலும் எனக்கு உதவி செய்தீர்(2)
          <br />
          என்னை........(2)
        </p>
        <p className="mt-6">
          1) வசனங்கள் தந்தீரே அதை நிறைவெற்றி முடித்தீரே
          <br />
          வியாதிகள் என்னைச் சிதைத்தாலும்-2
          <br />
          யெகோவா ராபா சுகம் தன்தீரே-2
          <br />
          எபினேசரே......(2)
        </p>
        <p className="mt-6">
          2) அழுதிட பெலன் இல்லையே இருந்தும் அழிந்த விடவில்லையே-2
          <br />
          இலப்பதர்க்கும் இனி ஒன்றுமில்லை -2
          <br />
          (நான்) அணைத்தையும் திருப்பிட உதவி செய்தீர்-2
          <br />
          எபினேசரே......(2)
        </p>
        <p className="mt-6">
          3) வாழ்க்கை பயனத்திலே என்னை வாடிட விடவில்லையே-2
          <br />
          வானதிரங்கள் என்னை அடித்தாலும்-2
          <br />
          விசுவாசம் துவக்கி ஜெயிக்க செய்தீர்-2
          <br />
          எபினேசரே......(2)
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>Ennai Nanraga Nadaththineere Lyrics in English</strong>
          </p>
        </div>
        <p className="mt-4">
          Ennai nanraga nadaththineere
          <br />
          Ennil nanmai onru illaadha podhu
          <br />
          Ennai uyairvaaga pesineere
          <br />
          Naan ularnthu kidantha podhu
        </p>
        <p className="mt-6">
          Ebineysare en nesare immattum enakku uthavi seidheer
          <br />
          Ebineysare en nesare inimaelum enakku uthavi seidheer(2)
          <br />
          Ennai........(2)
        </p>
        <p className="mt-6">
          1) Vasanangal thanthire athai nirai vetri mudiththire
          <br />
          Viyaadhigal ennai sithaiththaalum-2
          <br />
          Yehovah Raapha sugam thanthire-2
          <br />
          Ebineysare......(2)
        </p>
        <p className="mt-6">
          2) Azhudida pelan illaiyey irundhum azhintha vidavillaiyey-2
          <br />
          Ilappatharkkum ini ondrumillaiy -2
          <br />
          (Naan) anaitthaiyum thiruppida uthavi seidheer-2
          <br />
          Ebineysare......(2)
        </p>
        <p className="mt-6">
          3) Vaazhkai payanatthile ennai vaadida vidavillaiyey-2
          <br />
          Vaanathirangal ennai adiththaalum-2
          <br />
          Visuvaasam thuvakki jeyikka seidheer-2
          <br />
          Ebineysare......(2)
        </p>
      </>
    ),
  },
  30: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>
            நான் பரதேசியாய் தங்கும் வீட்டிலே - Naan Parathesiyaay Thangum
            Veettilae
          </strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          நான் பரதேசியாய் தங்கும் வீட்டிலே
          <br />
          உம் பிரமானங்கள் என் கீதங்கள்
          <br />
          நான் நாடோடியாய் செல்லும் தேசங்கள்[கிராமங்கள்]
          <br />
          என் சந்தாதியின் நித்திய சுதந்திரங்கள் (-- 2)
        </p>
        <p className="mt-6">
          என் செல்வம் உமக்கொரு பொருட்டும்மல்ல
          <br />
          என் செலவுகள் உந்தன் கனகிலல்ல(--2)
        </p>
        <p className="mt-6">
          பரதேசியின் தேவனே நாடோடியின் நாதனே- 2
          <br />
          அடுகளை மேய்திட அனுமதித்தீர்
          <br />
          அறியனையில் தாவிதை உயர்த்திவைத்தீர்
          <br />
          அடிமையாய் எகிப்திர்க்கு அழைத்து சென்றீர்
          <br />
          யோசேப்பை பார்வோனின் தேவனாக்கினீர் (-- 2)
          <br />
          என் செல்வம் ---(2)
        </p>
        <p className="mt-6">
          அபிரகாமை அழைத்து நடக்க சொன்னீர்
          <br />
          கால மிதித்த தேசத்தை சொந்தமாய் தந்தீர்
          <br />
          மோசேயை அழைத்து பார்க்க சொன்னீர்
          <br />
          கண் பார்த்த கானானை சொந்தமாய் தந்தீர்(---2)
          <br />
          என் செல்வம் (---2)
        </p>
        <p className="mt-6">
          ஆறு கப்பல் சொந்தகாரர் சவுலினையும்
          <br />
          அப்போஸ்தலனாக மாற்றிவிட்டீர்
          <br />
          அரசங்க அதிகாரீ அனாநியாவை
          <br />
          ஆண்டவரின் ஊழியனாக மாற்றிவிட்டீர்(-- 2)
          <br />
          என் செல்வம் ---2
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>
              Naan Parathesiyaay Thangum Veettilae Lyrics in English
            </strong>
          </p>
        </div>
        <p className="mt-4">
          Naan parathesiyaay thangum veettilae
          <br />
          Um piramaanangal en geethangal
          <br />
          Naan naadodiyaay sellum desangal [graamanghal]
          <br />
          En santhathiyin niththiya sudhandhirangal (-- 2)
        </p>
        <p className="mt-6">
          En selvam umakkoru poruttumalla
          <br />
          En selvangal unthan kanagilalla (--2)
        </p>
        <p className="mt-6">
          Parathesiyin Devaney naadodiyin Naadhaney- 2
          <br />
          Adukalai meyathida anumatiththir
          <br />
          Ariyanaiyil Thaavidhai uyarththivaitthir
          <br />
          Adimaiyaay Egiptrukku azhaiththu sendrir
          <br />
          Yoseppai Parvonin Devan aakki neer (-- 2)
          <br />
          En selvam ---(2)
        </p>
        <p className="mt-6">
          Abirakaamai azhaiththu nadakka sonneer
          <br />
          Kaal mithiththa desaththai sonthamaay thanneer
          <br />
          Moseyai azhaiththu paarka sonneer
          <br />
          Kann paarththa Kaananai sonthamaay thanneer (---2)
          <br />
          En selvam (---2)
        </p>
        <p className="mt-6">
          Aaru kappal sonthakaarar Saul inaiyum
          <br />
          Apposthalanaaga maattrivittir
          <br />
          Arasanga adigaari Ananiyai
          <br />
          Aandavarin oozhiyanaga maattrivittir(-- 2)
          <br />
          En selvam ---2
        </p>
      </>
    ),
  },
  31: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>
            அவர பூவுக்கு வாசனை தந்தவர் - Avara Poovukku Vaasanai Thandhavar
          </strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          அவர பூவுக்கு வாசனை தந்தவர்
          <br />
          அருகம் புல்லுக்கு குணத்தை தந்தவர்
          <br />
          அரளிச் செடியை தேடி வந்தாரே - இந்த அரளிச் செடியை தேடி வந்தாரே
        </p>
        <p className="mt-6">
          1. காணாத காட்சியெல்லாம் கண்டு வந்தேன் பாரு
          <br />
          பேசாத பேச்சையெல்லாம் பேசி தொலைச்சது யாரு
          <br />
          போகாத இடம் தேடி போயும் வந்தேன் நானு ஆனாலும்
          <br />
          தேடி வந்தார் இயேசு என்னை பாரு (2)
        </p>
        <p className="mt-6">
          2. செய்யாத குத்தங்களை செய்து முடிச்சது யாரு
          <br />
          சேத்தை அள்ளி தலையின் மேலே அள்ளி குவிச்சது யாரு
          <br />
          செய்யாத பாவம் இருந்தா ஒன்றை எனக்கு கூறு
          <br />
          ஆனாலும் தேடி வந்தார் இயேசு என்னை பாரு (2)
        </p>
        <p className="mt-6">
          3. பாவத்தை செஞ்சு, செஞ்சு சலித்து போனேன் பாரு
          <br />
          கொடும பண்ணி, பண்ணி கொழுத்து போனது யாரு
          <br />
          இன்னும் ஒருபாவத்தை செய்ய பெலனில்லாத ஆளு
          <br />
          ஆனாலும் தேடி வந்தார் இயேசு என்னை பாரு (2)
        </p>
        <p className="mt-6">
          4.குடும்பம் வெறுத்த போது உறவு தந்தது யாரு நானே என்ன
          <br />
          வெறுத்ததை மறக்க சொன்னது யாருதற்கொலைக்கு ஓடினதை தடுத்து
          <br />
          வைச்சது யாரு ஆனாலும் தேடி வந்தார்
          <br />
          இயேசு என்னை பாரு (2)
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>
              Avara Poovukku Vaasanai Thandhavar Lyrics in English
            </strong>
          </p>
        </div>
        <p className="mt-4">
          Avara poovukku vaasanai thandhavar
          <br />
          Arugam pullukku gunaththai thandhavar
          <br />
          Aralich chediyai thedi vanthaaray - indha aralich chediyai thedi
          vanthaaray
        </p>
        <p className="mt-6">
          1. Kaanaadha kaatchiyellaam kandu vanthaen paaru
          <br />
          Pesaadha paechchaiyellaam paesi tholaichchathu yaaru
          <br />
          Pogaadha idam thedi poyum vanthaen naanum
          <br />
          Aanaalum thedi vanthaar Yesu ennai paaru (2)
        </p>
        <p className="mt-6">
          2. Seiyyaadha kuththangalai seydhu mudichchathu yaaru
          <br />
          Seththai alli thalaiyin maelae alli kuvichchathu yaaru
          <br />
          Seiyyaadha paavam irundhaal onrai enakku kooru
          <br />
          Aanaalum thedi vanthaar Yesu ennai paaru (2)
        </p>
        <p className="mt-6">
          3. Paavaththai senju, senju saliththu ponaen paaru
          <br />
          Koduma panni, panni kozhuththu ponaadhu yaaru
          <br />
          Innum oru paavaththai seiyya pelanillaadha aalu
          <br />
          Aanaalum thedi vanthaar Yesu ennai paaru (2)
        </p>
        <p className="mt-6">
          4. Kudumbam veruththa podhu uravu thandhadhu yaaru
          <br />
          Naanae enna veruththadhai marakka sonnadhu yaaru
          <br />
          Tharkkolaiyil oadinaidha thaduththu vaichchadhu yaaru
          <br />
          Aanaalum thedi vanthaar Yesu ennai paaru (2)
        </p>
      </>
    ),
  },
  32: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>
            அவர பூவுக்கு வாசனை தந்தவர் - Avara poovukku vaasanai thandhavar
          </strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          அவர பூவுக்கு வாசனை தந்தவர்
          <br />
          அருகம் புல்லுக்கு குணத்தை தந்தவர்
          <br />
          அரளிச் செடியை தேடி வந்தாரே - இந்த அரளிச் செடியை தேடி வந்தாரே
        </p>

        <p className="mt-6">
          1.காணாத காட்சியெல்லாம் கண்டு வந்தேன் பாரு பேசாத
          <br />
          பேச்சையெல்லாம் பேசி தொலைச்சது யாரு போகாத இடம் தேடி போயும்
          <br />
          வந்தேன் நானு ஆனாலும் தேடி வந்தார் இயேசு என்னை பாரு (2)
        </p>
        <p className="mt-6">
          2 . செய்யாத குத்தங்களை செய்து முடிச்சது யாரு சேத்தை அள்ளி
          <br />
          தலையின் மேலே அள்ளி குவிச்சது யாரு செய்யாத பாவம் இருந்தா
          <br />
          ஒன்றை எனக்கு கூறு ஆனாலும் தேடி வந்தார் இயேசு என்னை பாரு (2)
        </p>
        <p className="mt-6">
          3.பாவத்தை செஞ்சு, செஞ்சு சலித்து போனேன் பாரு கொடும பண்ணி,
          <br />
          பண்ணி கொழுத்து போனது யாரு இன்னும் ஒருபாவத்தை செய்ய
          <br />
          பெலனில்லாத ஆளு ஆனாலும் தேடி வந்தார் இயேசு என்னை பாரு (2)
        </p>
        <p className="mt-6">
          4. எந்த நிலையில் நீ இருந்து அழைத்தாலும்
          <br />
          எடுத்தே உன்னை மாற்றிட இயேசு போதுமே
          <br />
          உலையான செற்றில் நீ கிடந்தாலும்
          <br />
          உண்மையான வாழ்விற்கு உயர்வு நிச்சயமே
          <br />- மாற்றுகிறார்
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>
              Avara poovukku vaasanai thandhavar Lyrics in English
            </strong>
          </p>
        </div>
        <p className="mt-4">
          Aalayathil alagaana thoongalaai
          <br />
          Aandavar yeasu ennai maatrugiraar
          <br />
          Vilakku thandin melula villakaaga
          <br />
          Vellichamaana deavan ennai uyarthugiraar
        </p>
        <p className="mt-6">
          Maatrugiraar yeasu maatrugiraar
          <br />
          Uyarthugiraar ennai uyarthugiraar
        </p>
        <p className="mt-6">
          1. Aadukalin pinnaal poona thaaveethai
          <br />
          Isravealin arasanaaga maatrugiraar
          <br />
          Araathanai veeranaana siruvanaiyum
          <br />
          Ariyanaiyil yetri alagu parkiraar
          <br />- Maatrugiraar
        </p>
        <p className="mt-6">
          2. Siraipidikkapatta antha thaneeyealai
          <br />
          Neyanigalin neyaniyaaga maatrukiraar
          <br />
          Moondru vealai jebiha antha deava manithanai
          <br />
          Muthalvaraaga deasathilea uyarthukiraar
          <br />- Maatrugiraar
        </p>
        <p className="mt-6">
          3. Adimayaaga virkapatta yoseapai
          <br />
          Siraichaalai kavalanaai maatrugiraar
          <br />
          Parisuthathai kaathu konda vaalibanai
          <br />
          Egipthu deasa athigaariyaai uyaarthugiraar
          <br />- Maatrugiraar
        </p>
        <p className="mt-6">
          4. Entha nilaiyil nee irunthu alaithaalum
          <br />
          Eduthuu unnai maatrida yeasu pothumea
          <br />
          Ulaiyaana seatril nee kidanthaalum
          <br />
          Unmayiaana vaalvirku uyarvu nicchayamea
          <br />- Maatrugiraar
        </p>
      </>
    ),
  },
  33: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>தேவா ஆராதிக்கிறோம் - Deva Aarathikkrom</strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          தேவா ஆராதிக்கிறோம்
          <br />
          உயர்த்துகிறோம்
          <br />
          உமக்குள் வாழ்கிறோம்
        </p>
        <p className="mt-6">
          1. இல்லாததை இருப்பது போல
          <br />
          அலைக்கும் எங்கள் தேவனே
          <br />
          இங்கு இருப்பவர்களை இன்னும் அதிகம்
          <br />
          அலைத்து நடத்திடுமே!
        </p>
        <p className="mt-6">
          2. கொஞ்சம் கொடுத்த ஏழை பெண்னை
          <br />
          கூப்பிட்டு உயர்த்தினீரா
          <br />
          இங்கு கூடிவந்துள்ள
          <br />
          எங்களை உயர்த்தி நடத்திடுமே!
        </p>
        <p className="mt-6">
          3. வெருமையான பாதிரங்களை
          <br />
          என்னையால் நிரப்பினீரே
          <br />
          இங்கு பொறுமையாக காத்திருக்கும
          <br />
          எங்களை நிரப்பிடுமே!
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>Deva Aarathikkrom Lyrics in English</strong>
          </p>
        </div>
        <p className="mt-4">
          Deva aarathikkrom
          <br />
          Uyarthukindrom
          <br />
          Umakul vaalukindrom
        </p>
        <p className="mt-6">
          1. Illathathai irupathu pool
          <br />
          Alaikindra engal devanea
          <br />
          Ingu irupavaraai inuum athigam
          <br />
          Alaithu nadathidumea!
        </p>
        <p className="mt-6">
          2. Koncham kodutha yealai pennai
          <br />
          Koopitu uyarthineerea
          <br />
          Ingu koodivanthulla
          <br />
          Engalayum uyarthi nadathidumea!
        </p>
        <p className="mt-6">
          3. Verumaiyana paathirangalai
          <br />
          Ennaiyaal nirapineerea
          <br />
          Ingu porumaiyaga kaathirukum
          <br />
          Engalai nirapidumea!
        </p>
      </>
    ),
  },
  34: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>
            பாசமுள்ள இயேசு அப்பா பாரில் - Paasamalla Yesu Appa Paaril
          </strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          பாசமுள்ள இயேசு அப்பா பாரில்
          <br />
          உம்மை உயர்த்துகிரேன்
          <br />
          பரிசுத்தர் பரிசுத்தர்
          <br />
          என்று பரலோகம்
          <br />
          சேருகிரேன்
        </p>
        <p className="mt-6">
          1. எந்தன் வாழ்விலே உந்தன் நன்மைகாய்
          <br />
          என்னாலும் நான் உழைத்திடுவேன் (2)
        </p>
        <p className="mt-6">
          2. தெள்ளுப்பூச்சி நான் புள்ளின் பூவும்
          <br />
          நான் தேடி வந்தீரே
          <br />
          என்மேல் பாசம் வைத்தீரே (2)
        </p>
        <p className="mt-6">
          3. குயவன் நீர் களிமண் நான்
          <br />
          பாடவைத்தீரே
          <br />
          என்னை மீட்டுக்கொண்டீரே (2)
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>Paasamalla Yesu Appa Paaril Lyrics in English</strong>
          </p>
        </div>
        <p className="mt-4">
          Paasamalla Yesu Appa Paaril
          <br />
          Ummai Uyarthugirean
          <br />
          Parisutthar, Parisutthar
          <br />
          Endru Paralokam
          <br />
          Serugirean
        </p>
        <p className="mt-6">
          1. Enthan Vaazhvilae Undhan Nanmaikaai
          <br />
          Ennalum Naan Uzhaithiduven (2)
        </p>
        <p className="mt-6">
          2. Thelluppoochi Naan Pullin Poovum
          <br />
          Naan Thaedi Vantheerae
          <br />
          Enmael Paasam Vaiththeerae (2)
        </p>
        <p className="mt-6">
          3. Kuyavan Neer Kalimann Naan
          <br />
          Paadavaiththeerae
          <br />
          Ennai Meettukondeerae (2)
        </p>
      </>
    ),
  },
  35: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>சொந்தம் என்று சொல்லிட - Sondham Endru Sollida</strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          சொந்தம் என்று சொல்லிட
          <br />
          சொந்தமாய் வந்தவரே
          <br />
          தந்தை என்று கூப்பிட
          <br />
          தந்தயாய் நின்றவரே
          <br />
          சொந்த பந்தமானவரே
          <br />
          என் தந்தை தாயுமானவரே
        </p>
        <p className="mt-6">
          1. உயிர் நண்பன் பிரிந்தாலும்
          <br />
          உறவுகள் அருந்தாலும்
          <br />
          உம்மையே நம்பி நான் வாழ்ந்திடுவேன் (2)
        </p>
        <p className="mt-6">
          2. உயிர் விட்டு போனாலும்
          <br />
          கயிர் விட்டு போனதாய்
          <br />
          உம்மையே நம்பி நான் வாழ்ந்திடுவேன் (2)
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>Sondham Endru Sollida Lyrics in English</strong>
          </p>
        </div>
        <p className="mt-4">
          Sondham Endru Sollida
          <br />
          Sondhamaai Vandhavarae
          <br />
          Thandhai Endru Kooppida
          <br />
          Thandhayaai Nindraavarae
          <br />
          Sondha Bandhamaanaavarae
          <br />
          En Thandhai Thaayumaanaavarae
        </p>
        <p className="mt-6">
          1. Uyir Nanban Pirindhaalum
          <br />
          Uravugal Arundhaalum
          <br />
          Ummaiyae Nambi Naan Vaazhnthiduven (2)
        </p>
        <p className="mt-6">
          2. Uyir Vittu Poanaalum
          <br />
          Kayir Vittu Poanadhaai
          <br />
          Ummaiyae Nambi Naan Vaazhnthiduven (2)
        </p>
      </>
    ),
  },
  36: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>
            பாச கிருபையே, என் நேச கிருபையே - Paasa Kirubaiyae, En Naesa
            Kirubaiyae
          </strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          பாச கிருபையே,
          <br />
          என் நேச கிருபையே
          <br />
          ஆற்றும் கிருபையே
          <br />
          அபிஷேக கிருபையே
          <br />
          இளந்தோரை வாழவைக்கும் நல்ல கிருபையே
          <br />
          நான் விழுந்தாலும் தூக்கி நிறுத்தும் தேவ கிருபையே
        </p>
        <p className="mt-6">
          1. பாவத்தின் தண்டனை என்னைப் பட்சிக்க வந்ததே
          <br />
          ஆனாலும் கிருபை என்னை தாங்கி கொண்டதே
        </p>
        <p className="mt-6">
          2. ஜீவனைப் பார்க்கிலும் உம் கிருபை நல்லதே
          <br />
          கிருபைகள் பார்க்கிலும்
          <br />
          எது தான் பெரியதே
        </p>
        <p className="mt-6">
          3. ஆபத்து காலத்தில் என்னை காத்த கிருபையே
          <br />
          அழுகின்ற போது என்னை ஆற்றும் கிருபையே
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>
              Paasa Kirubaiyae, En Naesa Kirubaiyae Lyrics in English
            </strong>
          </p>
        </div>
        <p className="mt-4">
          Paasa Kirubaiyae,
          <br />
          En Naesa Kirubaiyae
          <br />
          Aatrum Kirubaiyae
          <br />
          Abisheka Kirubaiyae
          <br />
          Ilandoarai Vaazhavikkum Nalla Kirubaiyae
          <br />
          Naan Vizhundhaalum Thookki Niruthum Deva Kirubaiyae
        </p>
        <p className="mt-6">
          1. Paavathin Thandanai Ennaip Pidichikka Vandhadhae
          <br />
          Aanalum Kirubai Ennai Thaangi Kondadhae
        </p>
        <p className="mt-6">
          2. Jeevanai Paarkkilum Um Kirubai Nalladhae
          <br />
          Kirubaigal Paarkkilum
          <br />
          Edhu Thaan Periyadhae
        </p>
        <p className="mt-6">
          3. Aabaththu Kaalathil Ennai Kaatha Kirubaiyae
          <br />
          Azhugindra Podhu Ennai Aatrum Kirubaiyae
        </p>
      </>
    ),
  },
  37: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>
            வானத்தை பார்த்தாள் பூமி சிறியது - Vaanaththai Paarthaal Bhoomi
            Siriyadhu
          </strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          வானத்தை பார்த்தாள் பூமி சிறியது -
          <br />
          அதுபோல் தேவனை பார்த்தாள் பிரச்சனை சிறியது
        </p>
        <p className="mt-6">
          1. வானம் போல் பெரிய தெய்வம் உனக்கு இருப்பதால்
          <br />
          பூமி போன்ற பிரச்சன்னைகலை நீ உருட்டி தள்ளிடு உருட்டி தள்ளு -
          <br />
          நீ உதறி தள்ளிடு உன் தேவன் என்றும் உதவி செய்கிறார்.
        </p>
        <p className="mt-6">
          2. நித்தியமாய் நித்தியமாய் நீ ஆள போவதால்
          <br />
          நிச்சயமாய் நிச்சயமாய் - நீ பாடு சகிதிடு பாட்டு படிடு -
          <br />
          நீ பாடு சகித்திடு உன் தேவன் என்றும் கூட இருக்கிறார்.
        </p>
        <p className="mt-6">
          3. ஏமாற்றும் உலகத்தை நீ எதிர்த்து நின்றிட ஏதையும் தாங்கும் இதயம்
          <br />
          இயேசுவிடம் உண்டு நீ எழுந்து நின்றிடு!
          <br />
          நீ ஏக்கம் துரத்திடு! உன் தேவன் என்றும் தூக்கி நிறுத்துவார்.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>
              Vaanaththai Paarthaal Bhoomi Siriyadhu Lyrics in English
            </strong>
          </p>
        </div>
        <p className="mt-4">
          Vaanaththai Paarthaal Bhoomi Siriyadhu
          <br />
          Adhu Pol Devanai Paarthaal Pirachanai Siriyadhu
        </p>
        <p className="mt-6">
          1. Vaanam Pol Periya Dheivam Unakku Irupadhalaal Bhoomi Pola
          <br />
          Pirachannaigalai Nee Urutti Thallidu Urutti Thallu -
          <br />
          Nee Udhari Thallidu Un Dhevan Endrum Udhavi Seigiraaar.
        </p>
        <p className="mt-6">
          2. Nithiyamaai Nithiyamaai Nee Aala Povadhalaal
          <br />
          Nischayamaai Nischayamaai - Nee Paadu Saagithidu Paattu Padidu -
          <br />
          Nee Paadu Saagithidu Un Dhevan Endrum Kooda Irukkiraaar.
        </p>
        <p className="mt-6">
          3. Eaamatrum Ulagaththai Nee Ethirththu Nindridu
          <br />
          Ethaiyum Thaangum Idhayam Yesuvitam Undu Nee Ezhundhu Nindridu!
          <br />
          Nee Eaakkam Thurathidu! Un Dhevan Endrum Thookki Niruthuvaaar.
        </p>
      </>
    ),
  },
  38: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>
            யெகோவா தெய்வனை என் நல்ல மெய்பவரே - Yehovaa Dheivanaai En Nalla
            Meipavarae
          </strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          யெகோவா தெய்வனை என் நல்ல மெய்பவரே
          <br />
          உம்மை உயர்த்துவேன் என் வாழ்நாள் எல்லாமே
        </p>
        <p className="mt-6">
          1. கஷ்டங்கள் வந்து தினம் என்னை அசைத்தாலும்
          <br />
          கண்ணீரும் வெல்லம் போல என்னை சூழ்ந்தாலும்
          <br />
          கண்மலையாம் தேவன் யெகோவா உண்டு
          <br />
          காத்திடுவார் என்றும் என்னையா (2)
        </p>
        <p className="mt-6">
          2. தீராச்சை செடி பூ பூத்து பழம் கொடாமல் போனாலும்
          <br />
          வயல்களும் தானியத்தை விளைவியாமலும் போனாலும்
          <br />
          இரட்சிப்பின் தெய்வங்களுக்குள் களி கூர்ந்திடுவேன்
          <br />
          யெகோவா தேவன் என் பெலேன் (2)
        </p>
        <p className="mt-6">
          3. பெலிஸ்தர்கள் வந்து கொல்லை அடித்தாலும்
          <br />
          தாவீதின் கூடரத்தை வீழ்தியாளெனும்
          <br />
          அன்னலில் நான் வந்து திரைப்பாய் அடைப்பேன்
          <br />
          யெகோவா தேவன் என் ஜெயமே (2)
        </p>
        <p className="mt-6">
          4. நேசரை காணாமல் வீதிகளில் அலைந்தேன்
          <br />
          அவர் சத்தம் கேட்காமல் கலங்கியே தவித்தேன்
          <br />
          பிரியாமே ரூபாவதி என்று அவர் அலைத்தார்
          <br />
          யெகோவா தேவன் மணவாளனே
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>
              Yehovaa Dheivanaai En Nalla Meipavarae Lyrics in English
            </strong>
          </p>
        </div>
        <p className="mt-4">
          Yehovaa Dheivanaai En Nalla Meipavarae
          <br />
          Ummai Uyarthuven En Vaazhnal Ellaamae
        </p>
        <p className="mt-6">
          1. Kashtangal Vandhu Dhinam Ennai Asaiththaalum
          <br />
          Kannirum Vellam Pola Ennai Soozhndhaalum
          <br />
          Kanmalaiyaam Dhevan Yehovaa Undu
          <br />
          Kaathiduvaaar Endrum Ennaiaa (2)
        </p>
        <p className="mt-6">
          2. Theeraachai Chedi Poo Pooththu Pazham Kodaamaal Ponaalum
          <br />
          Vayalgalum Thaanyaththai Vilaiyviyaamalum Ponaalum
          <br />
          Iratchippin Dheivangalukkul Kali Koornthiduven
          <br />
          Yehovaa Dhevan En Bele (2)
        </p>
        <p className="mt-6">
          3. Pelistargal Vandhu Kollai Adiththaalum
          <br />
          Daaveethin Koodaraiththai Veelthiyaalenum
          <br />
          Annalil Naan Vandhu Thiraippai Adaippen
          <br />
          Yehovaa Dhevan En Jaiyamae (2)
        </p>
        <p className="mt-6">
          4. Nesarai Kaanamaal Veedhigalil Alaindhen
          <br />
          Avar Satham Kaetkaamaal Kalangiye Thaviththen
          <br />
          Priyaamae Roobavathi Endru Avar Alaiththaar
          <br />
          Yehovaa Dhevan Manavaalaane
        </p>
      </>
    ),
  },
  39: {
    subtitle: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <span style={{ textAlign: "center" }}>
          <strong>
            பரிசுத்தம் சுத்தம் சுத்தம் என்னில் தாரும் - Parisuththam Suththam
            Suththam Ennill Thaarum
          </strong>
        </span>
      </div>
    ),
    lyrics: (
      <>
        <p className="mt-4">
          பரிசுத்தம் சுத்தம் சுத்தம் என்னில் தாரும்
          <br />
          சுத்த தேவனே
        </p>
        <p className="mt-6">
          1. எந்தன் கைகள் செய்திட்ட பாவத்தினால்
          <br />
          உந்தன் கைகள் ஆணியாள் அடிபட்டதே
          <br />
          பரிசுத்தம் சுத்தம் எண்ணில் தாரும் சுத்த தெய்வமே (2)
        </p>
        <p className="mt-6">
          2. எந்தன் கால்கள் ஓடின பாவத்தினால்
          <br />
          உந்தன் கால்கள் ஆணியாள் அடிபட்டதே
          <br />
          பரிசுத்தம் சுத்தம் எண்ணில் தாரும் சுத்த தெய்வமே (2)
        </p>
        <p className="mt-6">
          3. எந்தன் சிந்தை செய்திட்ட பாவத்தினால்
          <br />
          உந்தன் தலை முள்முடி வாங்கிட்டதே
          <br />
          பரிசுத்தம் சுத்தம் எண்ணில் தாரும் சுத்த தெய்வமே (2)
        </p>
        <p className="mt-6">
          4. எந்தன் மனம் செய்திட்ட பாவத்தினால்
          <br />
          உந்தன் மனம் பாரத்தால் நிரம்பிட்டதே
          <br />
          பரிசுத்தம் சுத்தம் எண்ணில் தாரும் சுத்த தெய்வமே (2)
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "1.875rem" }}>
            <strong>
              Parisuththam Suththam Suththam Ennill Thaarum Lyrics in English
            </strong>
          </p>
        </div>
        <p className="mt-4">
          Parisuththam Suththam Suththam Ennill Thaarum
          <br />
          Suththa Dhevanae
        </p>
        <p className="mt-6">
          1. Enthan Kaigal Seiditta Paavaththinaal
          <br />
          Undhan Kaigal Aaniyaal Adipattadhae
          <br />
          Parisuththam Suththam Ennill Thaarum Suththa Dheivamae (2)
        </p>
        <p className="mt-6">
          2. Enthan Kaalkal Oadina Paavaththinaal
          <br />
          Undhan Kaalkal Aaniyaal Adipattadhae
          <br />
          Parisuththam Suththam Ennill Thaarum Suththa Dheivamae (2)
        </p>
        <p className="mt-6">
          3. Enthan Sindhai Seiditta Paavaththinaal
          <br />
          Undhan Thalai Mulmudi Vaangittadhae
          <br />
          Parisuththam Suththam Ennill Thaarum Suththa Dheivamae (2)
        </p>
        <p className="mt-6">
          4. Enthan Manam Seiditta Paavaththinaal
          <br />
          Undhan Manam Paaraththaal Nirambittadhae
          <br />
          Parisuththam Suththam Ennill Thaarum Suththa Dheivamae (2)
        </p>
      </>
    ),
  },
};

const SongDetail = () => {
  const { songId } = useParams();
  const song = songs[songId];

  if (!song) {
    return <div>Song not found.</div>;
  }

  return (
    <div className="text-center py-8 px-4 md:py-16 md:px-8">
      <h2 className="text-2xl md:text-3xl mb-4 mt-4 md:mt-0 mx-auto max-w-2xl">
        {song.subtitle}
      </h2>
      <div className="text-lg md:text-xl text-left mx-auto max-w-2xl whitespace-pre-wrap px-4">
        {song.lyrics}
      </div>
    </div>
  );
};

export default SongDetail;
