export interface ProjectMetadata {
    link: string;
    email: string;
}

export const PROJECT_METADATA: Record<string, ProjectMetadata> = {
    "made_fr": { link: "https://made.fr", email: "we@made.fr" },
    "made_paris": { link: "https://made.paris", email: "we@made.paris" },
    "made_alsace": { link: "#", email: "we@made.alsace" },
    "made_bzh": { link: "#", email: "we@made.bzh" },
    "life_paris": { link: "https://life.paris", email: "we@life.paris" },
    "life_alsace": { link: "#", email: "we@life.alsace" },
    "life_bzh": { link: "#", email: "we@life.bzh" },
    "smart_paris": { link: "https://smart.paris", email: "we@smart.paris" },
    "smart_alsace": { link: "#", email: "we@smart.alsace" },
    "smart_bzh": { link: "#", email: "we@smart.bzh" },
    "impact_data": { link: "https://impactdata.fr", email: "we@impactdata.fr" },
    "achats_eco": { link: "https://achats.eco", email: "we@achats.eco" },
    "fournisseurs_eco": { link: "https://fournisseurs.eco", email: "we@fournisseurs.eco" }
};