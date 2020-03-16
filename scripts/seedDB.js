const mongoose = require("mongoose");
const banddb = require("../models/BandSchema");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/bandaid"
);

const bandSeed = [
    {
        name: "Grupo Rebolu",
        email: "rebolu@gmail.com",
        password: "12341234",
        genre: "Latin",
        setup: "Drums, Bass, Congas, Guitar, Saxophone, Vocals",
        description: "Grupo Rebolú is an Afro-Colombian musical ensemble that includes some of the finest Colombian musicians in the United States. The group was created by Ronald Polo (a vocalist, composer, and player of the native Colombian flute known as a gaita), Morris Cañate (a master traditional drummer), and Johanna Castañeda (a vocalist and percussionist) to promote the rich musical traditions of their heritage: the African descendants of Colombia’s Caribbean coast. They believe these folkloric traditions should continually evolve over time and incorporate the musical ideas and creativity of new generations of musicians. The original compositions of Ronald Polo for Grupo Rebolú forge new paths for Colombian music, while respectfully remaining faithful to traditional Afro-Colombian rhythms such as gaita, tambora, chalupa, and bullerengue.",
        youtubeVideo: "2_AInJHlK6Q",
        date: new Date(Date.now())
    },
    {
        name: "Martin John Butler",
        email: "martinbutler@gmail.com",
        password: "12341234",
        genre: "Folk",
        setup: "Guitar, vocals",
        description: "NYC recording artist, singer/songwriter/producer/guitar teacher was raised in Brooklyn, N.Y., lived in London until 4 years old, and studied music at Brooklyn College. At 6 became first soloist in the New York All City chorus and was featured in a NY State PBS program. At 15, his first band Triton earned a weekend residency at Dodgers Bar, a well known Blues/Jazz club in downtown Brooklyn and played sold out shows at the legendary Cafe` Wha in Greenwich Village.",
        youtubeVideo:"sFS-Jwdhxq8",
        date: new Date(Date.now())
    },
    {
        name: "Los Cumpleaños",
        email: "loscumpleanos@gmail.com",
        password: "12341234",
        genre: "psychodelic",
        setup: "Guitar, vocals, organ, trombone, trumpet, drums",
        description: "LOS CUMPLEANOS. Los Cumpleaños play a psychedelic take on classic Colombian Cumbia, Porro, Son Caribeño, Salsa Criolla and Bullerengue. The band has the playfulness of an experimental group and the energy of a punk rock band. They mix new wave synths & retro organ sounds with effect-laden trombone and trumpet as well as a three piece percussion section. Cumpleaños features virtuoso percussionist/vocalist Nestor Gomez from Barranquilla, Colombia, Lautaro Burgos from Chaco, Argentina on drumset as well as Eric Lane on Keyboards and Alex Asher on Trombone from the USA. The members of Los Cumpleaños have played with a variety of notable artists including: Anibal Velazquez, Lizandro Meza, Juan Piña, Alfredo Gutierrez, MAKU Soundsystem, Beyoncé, Joan as Police Woman and People's Champs.",
        youtubeVideo:"NXeTWRn9vgU",
        date: new Date(Date.now())
    },
    {
        name: "Mod Sun",
        email: "modsun@gmail.com",
        password: "12341234",
        genre: "hip hop",
        setup: "Guitar, vocals, drums",
        description: "MOD SUN. Grateful as fuck but READY TO GO! Currently on YOUR FAVORITE MOVIE tour",
        youtubeVideo: "Rj1ZBv_J3tw",
        date: new Date(Date.now())
    },
    {
        name: "Beach Slang",
        email: "beachslang@paradigmagency.com",
        password: "12341234",
        genre: "rock",
        setup: "Guitar, vocals, drums",
        description: "BEACH SLANG. The Deadbeat Bang of Heartbreak City, album out now!",
        youtubeVideo:"i7nXvOTqyCY",
        date: new Date(Date.now())
    },
    {
        name: "The Murder Capital",
        email: "themurdercapital@gmail.com",
        password: "12341234",
        genre: "rock",
        setup: "Guitar, vocals, drums",
        description: "THE MURDER CAPITAL. An Irish post-punk band based in Dublin.",
        youtubeVideo:"ddBjpD5kHVY",
        date: new Date(Date.now())
    },
    {
        name: "Gatsby Now",
        email: "gatsbynow@gmail.com",
        password: "12341234",
        genre: "jazz, pop",
        setup: "Guitar, vocals, saxophone, trumpet, trombone, drums",
        description: "Gatsby Now is an energetic mélange of Prohibition-era jazz, French/Italian gypsy swing-waltz, and vintaged, Pop that will please dancers and         music lovers.",
        youtubeVideo:"aEzcrx5sTCY",
        date: new Date(Date.now())
    },
    {
        name: "Bellatonic",
        email: "bellatonic@gmail.com",
        password: "12341234",
        genre: "jazz, pop",
        setup: "Guitar, vocals, saxophone, trumpet, trombone, drums",
        description: "Imagine all of your favorite pop songs (Beyonce, Tom Waits, Def Leppard) revised into a funky soul music experience with a throwback jazz elegance.",
        youtubeVideo:"NzPjdV4UgYA",
        date: new Date(Date.now())
    },
    {
        name: "The 80’s vs. 90’s Show",
        email: "the80svs90sshow@gmail.com",
        password: "12341234",
        genre: "rock, alternative, dance, pop",
        setup: "Guitar, vocals, drums",
        description: "The 80's vs. 90's Show is a unique and mind blowing experience featuring the best music from two very different decades. Whether it's big hair, neon, Doc Martens or flannel, this band will keep your guests partying on the dance floor all night long! MTV videos play during the set, which bring you back to your favorite decade or decades! The band performs in era specific costumes, raising the bar and raising hell! If you're looking for for something completely new and exciting for your party, special event or wedding, The 80's vs. 90's Show is for you!",
        youtubeVideo:"qiAeq8c128c",
        date: new Date(Date.now())
    },
    {
        name: "The Casplash Band a.k.a. Caribbean Splash",
        email: "thecasplashband@paradigmagency.com",
        password: "12341234",
        genre: "caribbean",
        setup: "Guitar, vocals, drums",
        description: "Casplash a.k.a. Caribbean Splash plays music made for dancing ranging from Calypso, Soca, and Reggae to Pop, Funk, R&B and more. We are a unique and eclectic band which has thrilled thousands of party revelers in New York City and throughout the USA. We combine the beautiful sounds of the steel pan, soulful singing and hot tropical rhythms. Casplash is founded by Steelpanist Rudy Crichlow, a man whose roots are in Trinidad and Tobago. Throughout the years the members of Casplash have taken thousands of audience members on a fantastic musical escapade via live performances.",
        youtubeVideo:"WP40JIe697o",
        date: new Date(Date.now())
    },
    {
        name: "SWEET LITTLE SOUL",
        email: "sweetlittlesoul@gmail.com",
        password: "12341234",
        genre: "r&b",
        setup: "Guitar, vocals, drums",
        description: "We specialize in Weddings, Private Affairs, Upscale Clubs/Restaurants, Public Events, Corporate Functions, Fundraisers Etc. . We play Soul,         R&B, Funk, Motown, Disco as well as 1950's through Today's Top 40 Music including Standards, Ballads and Party Favorites.",
        youtubeVideo:"QR-ZPZlxf4U",
        date: new Date(Date.now())
    },
    {
        name: "The Aaron Short Band",
        email: "TheAaronShortBand@gmail.com",
        password: "12341234",
        genre: "dance",
        setup: "Guitar, vocals, drums",
        description: "The Aaron Short Band has been performing regulary on the New York circuit since 2010. Past venues include The Bitter End, Red Lion, Back Fence,         Pig 'n' Whistle as well as private weddings and corporate events in Long Island and Manhattan.",
        youtubeVideo: "AytFu71g2gY",
        date: new Date(Date.now())
    },
    {
        name: "Nite-Time",
        email: "Nite_Time@gmail.com",
        password: "12341234",
        genre: "dance",
        setup: "Guitar, vocals, drums",
        description: "Nite-Time offers customizable options to fit any theme or budget, their extensive song list provides a wide variety of musical choices whether it's the perfect accompaniment to your cocktail party or wedding or even a theme night for your corporate event.",
        youtubeVideo:"k4ZaWGwb3jk",
        date: new Date(Date.now())
    },
    {
        name: "Silver Arrow Band",
        email: "SilverArrowBand@gmail.com",
        password: "12341234",
        genre: "alternative",
        setup: "Guitar, vocals, drums",
        description: "We're live music experts, wedding enthusiasts, and party starters, infusing every event with energy and full dance floors. We're here to make your wedding the greatest party of your life!The Silver Arrows are a premium, customizable 3-14 piece band specializing in high-energy music for festivals, weddings, corporate events and private functions–at a sensible price. Our talented and professional musicians have performed regularly with touring and recording artists including Stevie Wonder, Lady Gaga, Beyoncé, Justin Timberlake, Taylor Swift, Quincy Jones, Michael Bublé, and Herbie Hancock, as well as working and touring with numerous Broadway shows.",
        youtubeVideo:"5WlaoFX5Wsw",
        date: new Date(Date.now())
    },
    {
        name: "The Strangers NJ",
        email: "TheStrangersNJ@gmail.com",
        password: "12341234",
        genre: "alternative",
        setup: "Guitar, vocals, drums",
        description: "We are a 70's,80's,90's and top 40 cover dance band. We are primarily a six- seven piece band that could easily expand into a band with horns. We play music from The Beatles, Rolling Stones, Stevie Nicks/Fleetwood Mac, Donna Summer, The GoGo's, Rhianna, Bon Jovi, Tom Petty, The Police, Joan Jett, Blink 182, Lady Gaga, Bruno Mars, Maroon 5, Amy Winehouse, Little Big Town, Cee Lo Green, No Doubt, Meghan Trainor and current top 40. With our theatrical front singers, The Strangers are flexible enough to work with our clients to customize the party so both you and your guests have a memorable experience.",
        youtubeVideo:"wRff7Q_z-tE",
        date: new Date(Date.now())
    },
    {
        name: "3 Shades Of Blue",
        email: "threeShadesOfBlue@gmail.com",
        password: "12341234",
        genre: "alternative",
        setup: "Guitar, vocals, drums",
        description: "3 Shades of Blue is an alternative rock band from Philadelphia PA. They have opened for bands such as Panic at the Disco, Switchfoot, Skillet, and many more. They are best known for their time on America's Got Talent season 10, where they placed top 20. 3 Shades of Blue plays original music along with top 40's and recent alternative covers. The band travels with a full sound system when needed.",
        youtubeVideo:"5-6jyxmT0AA",
        date: new Date(Date.now())
    },
];

banddb
    .remove({})
    .then(() => banddb.collection.insertMany(bandSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
