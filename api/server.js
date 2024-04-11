// Aller chercher les configurations de l'application
import mongoose from 'mongoose';
import 'dotenv/config';

// Importer les fichiers et librairies
import express, { json } from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import cspOption from './csp-options.js'
import cookieParser from 'cookie-parser';


//importations routes
import authRoute from './routes/auth.js'
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";


// Création du serveur
const app = express();

// Ajout de middlewares
app.use(cookieParser())
app.use(helmet(cspOption));
app.use(compression());
app.use(cors());
app.use(json());
app.use(express.static('public'));

//middlewares des routes 
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err,req,res,next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Il y a un probleme !" 
  return res.status(errorStatus).json({
    success : false,
    status : errorStatus,
    message : errorMessage
  })
})


//connection a la DATABASE
mongoose.connect(process.env.MONGO,
    )
      .then(() => {
        console.log('Connection established to DATABASE');
        
      })
      .catch((err) => {
        console.log(err);
        
      });

// Ajouter les routes ici ...



// Renvoyer une erreur 404 pour les routes non définies
app.use(function (request, response) {
    // Renvoyer simplement une chaîne de caractère indiquant que la page n'existe pas
    response.status(404).send(request.originalUrl + ' not found.');
});

// Démarrage du serveur
app.listen(process.env.PORT);
console.info(`Serveurs démarré:`);
console.info(`http://localhost:${ process.env.PORT }`);
