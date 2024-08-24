import React from "react";
import { useNavigate } from "react-router-dom";

const Song = () => {
  const navigate = useNavigate();

  const handleSongClick = (songId) => {
    navigate(`/media/songs/${songId}`);
  };

  return (
    <div className="text-center   ">
      <div className="relative mb-8">
        <img
          src="/every.png"
          alt="Who We Are"
          className="w-full h-48 sm:h-72 md:h-96 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-50">
          <h1 className="text-white text-4xl sm:text-6xl md:text-8xl font-extrabold">
            Songs
          </h1>
        </div>
      </div>
      <ol className="list-decimal list-inside text-left mx-auto max-w-full space-y-2 md:space-y-4 pl-4 md:pl-10">
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(1)}
        >
          <span>
            என் வாழ்விலே நீர் பாராட்டின - En vaazhvile neer paarattina
          </span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(2)}
        >
          <span>
            இயேசுவே இயேசுவே இரங்கும் என் தேவனே - Yeasuvay Yeasuvay Irangum En
            Dhaevanay
          </span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(3)}
        >
          <span>உங்க பாதம் எனக்கு தஞ்சம் - Unga paatham enakku thanjam</span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(4)}
        >
          <span>வார்த்தை வடிவம் வந்தவர் - Vaarthai vadivam vanthavar</span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(5)}
        >
          <span>
            உனக்கு ஒரு தெய்வம் உண்டு தெரியுமா - Unakku oru Dheivam undu
            theriyuma
          </span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(6)}
        >
          <span>உம்மை போல் உம்மை போல் - Ummai pol Ummai pol</span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(7)}
        >
          <span>
            சீயோன் குமாரத்தி நீ கெம்பீரமாய் பாடு - Seeyoon kumaarathi nee
            kembeeramaai paadu
          </span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(8)}
        >
          <span>
            பரிசுத்தரே புண்ணியம் செய்தீரே - Parisutharea punniyam seitheerea
          </span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(9)}
        >
          <span>
            என் தாயும் தகப்பனும் கைவிட்டாலும் - En thaayum thagapanum
            kaivittaalum
          </span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(10)}
        >
          <span>ஆரோக்கியம் ஆரோக்கியம் - Aarokiyam Aarokiyam</span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(11)}
        >
          <span>அன்பரே... நன்பரே… - Aanbarea... nanbarea..</span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(12)}
        >
          <span>
            என் ஆசையெல்லாம் நீர்தானயையா - En aasaigal ellam neer dhaanaiyayaa
          </span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(13)}
        >
          <span>
            என்ன சுத்தி என்ன சுத்தி என்னாலமோ நடக்குது - Enna suthhi enna suthi
            ennalaamoo nadakuthu
          </span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(14)}
        >
          <span>என்னை பாட சொல்லி - Ennai paada solli</span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(15)}
        >
          <span>ஒருமுறை ஒருமுறை - Orumurai orumurai</span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(16)}
        >
          <span>
            எதற்கெல்லாம் ஜெபம் தினம் செய்வது - Etharkellam jebam thinam seivathu
          </span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(17)}
        >
          <span>எங்கும் நிறைந்தவரே - Engum nirainthavarea</span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(18)}
        >
          <span>
            பாரதம் பாரதம் பாரத தேசம் - Baaratham baaratham baaratha dhesam
          </span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(19)}
        >
          <span>
            திருச்சபையே திருச்சபையே ஜெபிப்பாயா - Thiruchabayea thiruchabayea
            jebippaye
          </span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(20)}
        >
          <span>தா எண்டரல்லவா கேட்டார் - Thaa endrallavaa kaetaar</span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(21)}
        >
          <span>
            துதிப்பதாலே துக்கப்படமாட்டேன் - Thuthipathaalea thukkapadamaatean
          </span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(22)}
        >
          <span>மொழிகள் பல பயன்படுதி - Moligal pala bayanpaduthii</span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(23)}
        >
          <span>
            கிருபை என்று சொன்னாலே எத்தனை வலிமை - Kirubai endra sollelea etthanai
            valimai
          </span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(24)}
        >
          <span>
            ஜெபிப்பவனையும் துதிப்பவனையும் நோக்கி பார்ப்பவரே - Jebippavanaiyum
            thuthipavanaiyum nooki paarpavarea
          </span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(25)}
        >
          <span>
            நாசியில சுவாசமுள்ள மனுஷனை நம்பாத - Naasiyil suvaasamulla manushanai
            nambaadha
          </span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(26)}
        >
          <span>பெலனே என் கண்மலையே - Belanae en kanmalaiye</span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(27)}
        >
          <span>
            என் நம்பிக்கையின் நங்குரம் இயேசு இருக்க - En nambikkaiyin nanguram
            Yesu irukka
          </span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(28)}
        >
          <span>என்னையும் தேடி வந்தீரே - Ennaiyum thedi vanthirey</span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(29)}
        >
          <span>என்னை நன்றாக நடத்திநீரே - Ennai nanraga nadaththineere</span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(30)}
        >
          <span>
            நான் பரதேசியாய் தங்கும் வீட்டிலே - Naan parathesiyaay thangum
            veettilae
          </span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(31)}
        >
          <span>
            அவர பூவுக்கு வாசனை தந்தவர் - Avara poovukku vaasanai thandhavar
          </span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(32)}
        >
          <span>
            ஆலயத்தில் அழகான தூண்களாய் - Aalayathil alagaana thoongalaai
          </span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(33)}
        >
          <span>தேவா ஆராதிக்கிறோம் - Deva aarathikirom</span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(34)}
        >
          <span>பாசமுள்ள இயேசு அப்பா பாரில் - Paasamalla Yesu Appa Paaril</span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(35)}
        >
          <span>சொந்தம் என்று சொல்லிட - Sondham Endru Sollida</span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(36)}
        >
          <span>
            பாச கிருபையே, என் நேச கிருபையே - Paasa Kirubaiyae, En Naesa
            Kirubaiyae
          </span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(37)}
        >
          <span>
            வானத்தை பார்த்தாள் பூமி சிறியது - Vaanaththai Paarthaal Bhoomi
            Siriyadhu
          </span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(38)}
        >
          <span>
            யெகோவா தெய்வனை என் நல்ல மெய்பவரே - Yehovaa Dheivanaai En Nalla
            Meipavarae
          </span>
        </li>
        <li
          className="text-base md:text-xl font-semibold cursor-pointer hover:underline mb-2"
          onClick={() => handleSongClick(39)}
        >
          <span>
            பரிசுத்தம் சுத்தம் சுத்தம் என்னில் தாரும் - Parisuththam Suththam
            Suththam Ennill Thaarum
          </span>
        </li>
      </ol>
    </div>
  );
};

export default Song;
