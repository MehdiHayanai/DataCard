// Importation de la clé API OpenAI depuis les variables d'environnement
import { REACT_APP_OPEN_AI_API_KEY } from "@env";

// Fonction pour interagir avec l'API OpenAI afin de générer des complétions d'IA
export function AICompletion(projectName, sensorName, experience) {
  // Récupération de la clé API depuis les variables d'environnement
  const apiKey = REACT_APP_OPEN_AI_API_KEY;

  // Retourne une Promise pour gérer les opérations asynchrones
  return new Promise(async (resolve, reject) => {
    try {
      // Envoi d'une requête POST à l'API OpenAI pour les complétions de chat
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`, // Inclusion de la clé API dans l'en-tête Authorization
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo-1106",
            response_format: { type: "json_object" },
            messages: [
              {
                role: "system",
                content: `You are a helpful assistant that aids in creativity exercises. Your objective is to identify use cases for sensors in a project and make them valuable for a specific experience, returning the information in JSON format. Your response should be formulated in French.
              the output should follow this template:
              {"output" : 'One can use '${sensorName}' to enhance the '${experience}' as follows:\n [answer]'}`,
              },
              {
                role: "user",
                content: `Pour un projet '${projectName}' comment peut on utiliser un capteur de ${sensorName} pour améliorer l'experience '${experience}'. donne une réponse courte.`,
              },
            ],
          }),
        }
      );

      // Analyse de la réponse JSON
      const json = await response.json();
      const text = JSON.parse(json.choices[0].message.content);

      // Résolution de la Promise avec la sortie générée par l'IA
      resolve(text.output);
    } catch (error) {
      // Rejet de la Promise en cas d'erreur
      reject(error);
    }
  });
}
