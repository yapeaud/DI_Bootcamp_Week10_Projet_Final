export interface IAlerteurgenge {
    id:number;
    nom_appelant:string;
    adresse_appelant:string; 
    telephone_appelant:string
    description_localisation:string;
    gps_lat:number;
    gps_lon:number;
    type_incident:string;
    gravite_incident:string;
    nombre_personnes_impliquees:number;
    etat_personnes_impliquees:string; 
    type_vehicule_implique:string; 
    instructions:string; 
}