import "./chart.scss"; // Importe les styles CSS spécifiques à cette composante depuis un fichier chart.scss

import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"; // Importe les composantes nécessaires de la bibliothèque Recharts

const data = [ // Définit les données à afficher dans le graphique
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
];

const Chart = ({ aspect, title }) => { // Définit la composante Chart qui prend deux propriétés : aspect et title
  return (
    <div className="chart"> // Conteneur principal de la composante avec la classe CSS "chart"
      <div className="title">{title}</div> // Affiche le titre du graphique
      <ResponsiveContainer width="100%" aspect={aspect}> // Conteneur réactif qui ajuste la taille du graphique en fonction de son conteneur parent
        <AreaChart // Définit le graphique de zone
          width={730} // Largeur fixe du graphique
          height={250} // Hauteur fixe du graphique
          data={data} // Données à utiliser pour le graphique
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }} // Marges du graphique
        >
          <defs> // Définit les dégradés ou les filtres réutilisables
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1"> // Définit un dégradé linéaire pour remplir la zone sous la courbe
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} /> // Couleur de départ du dégradé
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} /> // Couleur de fin du dégradé
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" /> // Axe X du graphique avec les mois comme labels
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" /> // Grille cartésienne du graphique
          <Tooltip /> // Infobulle qui s'affiche au survol des points du graphique
          <Area // Zone du graphique
            type="monotone" // Type de courbe
            dataKey="Total" // Données à afficher sur l'axe Y
            stroke="#8884d8" // Couleur de la ligne du graphique
            fillOpacity={1} // Opacité de remplissage de la zone sous la courbe
            fill="url(#total)" // Remplissage de la zone sous la courbe avec un dégradé
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart; // Exporte la composante Chart pour pouvoir l'utiliser dans d'autres composantes
