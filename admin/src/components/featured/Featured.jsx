import "./featured.scss"; // Importe les styles CSS spécifiques à cette composante depuis un fichier featured.scss
import MoreVertIcon from "@mui/icons-material/MoreVert"; // Importe l'icône MoreVertIcon de la bibliothèque Material-UI
import { CircularProgressbar } from "react-circular-progressbar"; // Importe la composante CircularProgressbar de la bibliothèque react-circular-progressbar
import "react-circular-progressbar/dist/styles.css"; // Importe les styles CSS de la CircularProgressbar
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"; // Importe l'icône KeyboardArrowDownIcon de Material-UI
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined"; // Importe l'icône KeyboardArrowUpOutlinedIcon de Material-UI

const Featured = () => { // Définit la composante Featured 1
  return (
    <div className="featured"> // Conteneur principal de la composante avec la classe CSS "featured"
      <div className="top"> // Section supérieure
        <h1 className="title">Total Revenue</h1> // Titre du revenu total
        <MoreVertIcon fontSize="small" /> // Icône "more" (plus) de Material-UI
      </div>
      <div className="bottom"> // Section inférieure
        <div className="featuredChart"> // Section du graphique en cercle
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} /> // Affiche le graphique en cercle avec une valeur de 70%
        </div>
        <p className="title">Total sales made today</p> // Titre des ventes totales du jour
        <p className="amount">$420</p> // Montant des ventes du jour
        <p className="desc"> // Description des transactions précédentes
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary"> // Résumé des statistiques
          <div className="item"> // Élément de statistique
            <div className="itemTitle">Target</div> // Titre de la statistique
            <div className="itemResult negative"> // Résultat de la statistique avec une flèche vers le bas (négatif)
              <KeyboardArrowDownIcon fontSize="small"/> // Icône de flèche vers le bas de Material-UI
              <div className="resultAmount">$12.4k</div> // Montant de la statistique
            </div>
          </div>
          <div className="item"> // Élément de statistique
            <div className="itemTitle">Last Week</div> // Titre de la statistique
            <div className="itemResult positive"> // Résultat de la statistique avec une flèche vers le haut (positif)
              <KeyboardArrowUpOutlinedIcon fontSize="small"/> // Icône de flèche vers le haut de Material-UI
              <div className="resultAmount">$12.4k</div> // Montant de la statistique
            </div>
          </div>
          <div className="item"> // Élément de statistique
            <div className="itemTitle">Last Month</div> // Titre de la statistique
            <div className="itemResult positive"> // Résultat de la statistique avec une flèche vers le haut (positif)
              <KeyboardArrowUpOutlinedIcon fontSize="small"/> // Icône de flèche vers le haut de Material-UI
              <div className="resultAmount">$12.4k</div> // Montant de la statistique
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured; // Exporte la composante Featured pour pouvoir l'utiliser dans d'autres composantes
