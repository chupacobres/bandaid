const mongoose = require("mongoose");
const db = require("../models");


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
        youtubeUrl: "https://www.youtube.com/watch?v=2_AInJHlK6Q",
        date: new Date(Date.now())
    },
    {
        name: "Martin John Butler",
        email: "martinbutler@gmail.com",
        password: "12341234",
        genre: "Folk",
        setup: "Guitar, vocals",
        description: "NYC recording artist, singer/songwriter/producer/guitar teacher was raised in Brooklyn, N.Y., lived in London until 4 years old, and studied music at Brooklyn College. At 6 became first soloist in the New York All City chorus and was featured in a NY State PBS program. At 15, his first band Triton earned a weekend residency at Dodgers Bar, a well known Blues/Jazz club in downtown Brooklyn and played sold out shows at the legendary Cafe` Wha in Greenwich Village.",
        youtubeUrl: "https://www.youtube.com/watch?v=UmvsWscsGpIQ",
        date: new Date(Date.now())
    },
    {
        name: "Los Cumpleaños",
        email: "loscumpleanos@gmail.com",
        password: "12341234",
        genre: "psychodelic",
        setup: "Guitar, vocals, organ, trombone, trumpet, drums",
        description: "LOS CUMPLEANOS. Los Cumpleaños play a psychedelic take on classic Colombian Cumbia, Porro, Son Caribeño, Salsa Criolla and Bullerengue. The band has the playfulness of an experimental group and the energy of a punk rock band. They mix new wave synths & retro organ sounds with effect-laden trombone and trumpet as well as a three piece percussion section. Cumpleaños features virtuoso percussionist/vocalist Nestor Gomez from Barranquilla, Colombia, Lautaro Burgos from Chaco, Argentina on drumset as well as Eric Lane on Keyboards and Alex Asher on Trombone from the USA. The members of Los Cumpleaños have played with a variety of notable artists including: Anibal Velazquez, Lizandro Meza, Juan Piña, Alfredo Gutierrez, MAKU Soundsystem, Beyoncé, Joan as Police Woman and People's Champs.",
        youtubeUrl: "https://www.youtube.com/watch?v=UmvsWscsGpIQ",
        date: new Date(Date.now())
    },
    
    {
        name: "Mod Sun",
        email: "modsun@gmail.com",
        password: "12341234",
        genre: "hip hop",
        setup: "Guitar, vocals, drums",
        description: "MOD SUN. Grateful as fuck but READY TO GO! Currently on YOUR FAVORITE MOVIE tour",
        youtubeUrl: "https://www.youtube.com/watch?v=Rj1ZBv_J3tw",
        date: new Date(Date.now())
    },

    {
        name: "Beach Slang",
        email: "beachslang@paradigmagency.com",
        password: "12341234",
        genre: "rock",
        setup: "Guitar, vocals, drums",
        description: "BEACH SLANG. The Deadbeat Bang of Heartbreak City, album out now!",
        youtubeUrl: "https://www.youtube.com/watch?v=i7nXvOTqyCY",
        date: new Date(Date.now())
    },

    {
        name: "The Murder Capital",
        email: "themurdercapital@gmail.com",
        password: "12341234",
        genre: "rock",
        setup: "Guitar, vocals, drums",
        description: "THE MURDER CAPITAL. An Irish post-punk band based in Dublin.",
        youtubeUrl: "https://www.youtube.com/watch?v=ddBjpD5kHVY",
        date: new Date(Date.now())
    },


];
db.Band
    .remove({})
    .then(() => db.Band.collection.insertMany(bandSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
