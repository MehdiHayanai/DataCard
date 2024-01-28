import * as SQLite from "expo-sqlite";
import { useState, useEffect } from "react";

const db = SQLite.openDatabase("data.db");

export const createDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql(`
            CREATE TABLE IF NOT EXISTS user (
                id INTEGER PRIMARY KEY,
                name TEXT,
                company TEXT,
                role TEXT,
                email TEXT,
                password TEXT,
                image BLOB
            );`);
    tx.executeSql(`
            CREATE TABLE IF NOT EXISTS project (
                id INTEGER PRIMARY KEY,
                name TEXT NOT NULL,
                description TEXT,
                user_id INTEGER,
                FOREIGN KEY (user_id) REFERENCES user(id)
        );`);
    tx.executeSql(`
            CREATE TABLE IF NOT EXISTS datacard (
                id INTEGER PRIMARY KEY,
                name TEXT NOT NULL,
                icon TEXT NOT NULL,
                color TEXT
        );`);
    tx.executeSql(`
            CREATE TABLE IF NOT EXISTS experience (
                id INTEGER PRIMARY KEY,
                name TEXT NOT NULL,
                definition TEXT NOT NULL,
                experience TEXT NOT NULL,
                color TEXT NOT NULL
        );`);
    tx.executeSql(`
            CREATE TABLE IF NOT EXISTS confrontation (
                id INTEGER PRIMARY KEY,
                project_datacard_id INTEGER NOT NULL,
                project_experience_id INTEGER NOT NULL,
                project_id INTEGER NOT NULL,
                confrontation_content TEXT,
                FOREIGN KEY (project_datacard_id) REFERENCES datacard(id),
                FOREIGN KEY (project_experience_id) REFERENCES experience(id),
                FOREIGN KEY (project_id) REFERENCES project(id)
        );`);
  });
  // check the lenght of the datacard and experience tables
  // if they are empty, insert default values
  db.transaction((tx) => {
    tx.executeSql(`SELECT * FROM datacard`, [], (_, { rows: { _array } }) => {
      if (_array.length === 0) {
        tx.executeSql(
          `INSERT INTO datacard (name, icon, color) VALUES (?, ?, ?)`,
          ["Humidity", "../../assets/experienceIcons/humidite.png", "#C2FEFE"]
        );
        tx.executeSql(
          `INSERT INTO datacard (name, icon, color) VALUES (?, ?, ?)`,
          [
            "Temperature",
            "../../assets/experienceIcons/temperature.png",
            "#FD9093",
          ]
        );
        tx.executeSql(
          `INSERT INTO datacard (name, icon, color) VALUES (?, ?, ?)`,
          ["Contact", "../../assets/experienceIcons/contact.png", "#C3FFDD"]
        );
        tx.executeSql(
          `INSERT INTO datacard (name, icon, color) VALUES (?, ?, ?)`,
          ["Gas", "../../assets/experienceIcons/gaz.png", "#E4C2F6"]
        );
        tx.executeSql(
          `INSERT INTO datacard (name, icon, color) VALUES (?, ?, ?)`,
          [
            "Orientation",
            "../../assets/experienceIcons/orientation.png",
            "#C2CAFC",
          ]
        );
        tx.executeSql(
          `INSERT INTO datacard (name, icon, color) VALUES (?, ?, ?)`,
          ["Force", "../../assets/experienceIcons/force.png", "#CFF380"]
        );
        tx.executeSql(
          `INSERT INTO datacard (name, icon, color) VALUES (?, ?, ?)`,
          [
            "Brightness",
            "../../assets/experienceIcons/luminosite.png",
            "#C2FEFE",
          ]
        );
        tx.executeSql(
          `INSERT INTO datacard (name, icon, color) VALUES (?, ?, ?)`,
          ["Elevation", "../../assets/experienceIcons/elevation.png", "#82B4DD"]
        );
        tx.executeSql(
          `INSERT INTO datacard (name, icon, color) VALUES (?, ?, ?)`,
          ["Color", "../../assets/experienceIcons/color.png", "#8CE7D4"]
        );
        tx.executeSql(
          `INSERT INTO datacard (name, icon, color) VALUES (?, ?, ?)`,
          ["Position", "../../assets/experienceIcons/position.png", "#C2CAFC"]
        );
        tx.executeSql(
          `INSERT INTO datacard (name, icon, color) VALUES (?, ?, ?)`,
          ["Proximity", "../../assets/experienceIcons/proximite.png", "#C2FEFE"]
        );
        tx.executeSql(
          `INSERT INTO datacard (name, icon, color) VALUES (?, ?, ?)`,
          ["Sound", "../../assets/experienceIcons/son.png", "#E9CF36"]
        );
        tx.executeSql(
          `INSERT INTO datacard (name, icon, color) VALUES (?, ?, ?)`,
          ["Vibration", "../../assets/experienceIcons/vibration.png", "#82B4DD"]
        );
        tx.executeSql(
          `INSERT INTO datacard (name, icon, color) VALUES (?, ?, ?)`,
          ["Speed", "../../assets/experienceIcons/vitesse.png", "#8CE7D4"]
        );
      } else {
        console.log("datacards already exists");
      }
    });
    tx.executeSql(`SELECT * FROM experience`, [], (_, { rows: { _array } }) => {
      if (_array.length === 0) {
        tx.executeSql(
          `INSERT INTO experience (name, definition, experience, color) VALUES (?, ?, ?, ?)`,
          [
            "Trus",
            "Confiance: La confiance est le sentiment de fiabilité et de crédibilité envers quelqu''un ou quelque chose.",
            "Trust",
            "#FFF",
          ]
        );
        tx.executeSql(
          `INSERT INTO experience (name, definition, experience, color) VALUES (?, ?, ?, ?)`,
          [
            "Comfort",
            "Confort: Le confort représente le sentiment de bien-être et de détente physique ou psychologique.",
            "Comfort",
            "#FFF",
          ]
        );
        tx.executeSql(
          `INSERT INTO experience (name, definition, experience, color) VALUES (?, ?, ?, ?)`,
          [
            "Fear",
            "Peur: La peur est une émotion ressentie face à une menace, un danger ou quelque chose d''inconnu.",
            "Fear",
            "#FFF",
          ]
        );
        tx.executeSql(
          `INSERT INTO experience (name, definition, experience, color) VALUES (?, ?, ?, ?)`,
          [
            "Control",
            "Contrôle: Le contrôle implique le pouvoir de diriger, réguler ou influencer une situation ou un événement.",
            "Control",
            "#FFF",
          ]
        );
        tx.executeSql(
          `INSERT INTO experience (name, definition, experience, color) VALUES (?, ?, ?, ?)`,
          [
            "Effi\nciency",
            "Efficacité: L''efficacité est la capacité à atteindre un objectif ou produire un résultat avec le minimum de ressources utilisées.",
            "Efficiency",
            "#FFF",
          ]
        );
        tx.executeSql(
          `INSERT INTO experience (name, definition, experience, color) VALUES (?, ?, ?, ?)`,
          [
            "Learn\nability",
            "Facilité d''apprentissage: La facilité d''apprentissage désigne la facilité avec laquelle on peut acquérir de nouvelles compétences ou connaissances.",
            "Learnability",
            "#FFF",
          ]
        );
        tx.executeSql(
          `INSERT INTO experience (name, definition, experience, color) VALUES (?, ?, ?, ?)`,
          [
            "Ease of use of use",
            "Facilité d''utilisation: La facilité d''utilisation indique la simplicité et la praticité d''utilisation d''un produit ou d''un système.",
            "Ease of use",
            "#FFF",
          ]
        );
        tx.executeSql(
          `INSERT INTO experience (name, definition, experience, color) VALUES (?, ?, ?, ?)`,
          [
            "Stress",
            "Stress: Le stress est une réponse physique ou émotionnelle à une pression ou à une situation difficile.",
            "Stress",
            "#FFF",
          ]
        );
        tx.executeSql(
          `INSERT INTO experience (name, definition, experience, color) VALUES (?, ?, ?, ?)`,
          [
            "Intuiti\nvity",
            "Intuitivité: L''intuitivité se rapporte à la facilité de compréhension ou d''utilisation d''une chose sans besoin d''explications complexes.",
            "Intuitivity",
            "#FFF",
          ]
        );
        tx.executeSql(
          `INSERT INTO experience (name, definition, experience, color) VALUES (?, ?, ?, ?)`,
          [
            "Perfor\nmance",
            "Performance: La performance représente la qualité d''exécution ou de fonctionnement d''une personne, d''un produit ou d''un système.",
            "Performance",
            "#FFF",
          ]
        );
        tx.executeSql(
          `INSERT INTO experience (name, definition, experience, color) VALUES (?, ?, ?, ?)`,
          [
            "Relia\nbility",
            "Fiabilité: La fiabilité est la capacité d''une personne ou d''un objet à maintenir des standards élevés de qualité et de performance de manière consistante.",
            "Reliability",
            "#FFF",
          ]
        );
        tx.executeSql(
          `INSERT INTO experience (name, definition, experience, color) VALUES (?, ?, ?, ?)`,
          [
            "Safety",
            "Sécurité: La sécurité est l''état de protection contre les dangers, les risques ou les menaces pour éviter les dommages ou les blessures.",
            "Safety",
            "#FFF",
          ]
        );
      } else {
        console.log("experiences already exists");
      }
    });
  });
  // check if no user is registered
  // if so, insert a default user
  db.transaction((tx) => {
    tx.executeSql(`SELECT * FROM user`, [], (_, { rows: { _array } }) => {
      if (_array.length === 0) {
        tx.executeSql(
          `INSERT INTO user (name, company, role, email, password, image) VALUES (?, ?, ?, ?, ?, ?)`,
          [
            "John Doe",
            "ENSAM",
            "Developer",
            "john.doe@admin.com",
            "admin",
            null,
          ]
        );
        console.log("default user inserted");
      } else {
        console.log("user already exists");
      }
    });
  });
};

export const getDataCards = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM datacard",
        [],
        (_, { rows: { _array } }) => {
          const dataCards = _array.map(({ id, name, icon, color }) => ({
            id,
            name,
            icon,
            color,
          }));
          resolve(dataCards);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const getExperiences = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM experience",
        [],
        (_, { rows: { _array } }) => {
          const experiences = _array.map(
            ({ id, name, definition, experience, color }) => ({
              id,
              name,
              definition,
              experience,
              color,
            })
          );
          resolve(experiences);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const insertProject = (projectInformation) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO project (name, description, user_id) VALUES (?, ?, ?)`,
        [
          projectInformation.name,
          projectInformation.description,
          projectInformation.user_id,
        ],
        (_, { insertId }) => {
          resolve(insertId);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const insertConfrontation = (confrontationData) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO confrontation (project_datacard_id, project_experience_id, project_id, confrontation_content) VALUES (?, ?, ?, ?)`,
        [
          confrontationData.project_datacard_id,
          confrontationData.project_experience_id,
          confrontationData.project_id,
          confrontationData.confrontation_content,
        ],
        (_, { insertId }) => {
          resolve(insertId);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const insertProjectAndConfrontations = (
  projectInformation,
  confrontationDatas
) => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        // Step 1: Insert the project
        tx.executeSql(
          `INSERT INTO project (name, description, user_id) VALUES (?, ?, ?)`,
          [
            projectInformation.name,
            projectInformation.description,
            projectInformation.user_id,
          ],
          (_, { insertId: projectId }) => {
            // Step 2: Insert multiple confrontations associated with the project
            const confrontationInsertPromises = confrontationDatas.map(
              (confrontationData) => {
                return new Promise(
                  (resolveConfrontation, rejectConfrontation) => {
                    tx.executeSql(
                      `INSERT INTO confrontation (project_datacard_id, project_experience_id, project_id, confrontation_content) VALUES (?, ?, ?, ?)`,
                      [
                        confrontationData.project_datacard_id,
                        confrontationData.project_experience_id,
                        projectId, // Use the projectId from the previous insert
                        confrontationData.confrontation_content,
                      ],
                      (_, { insertId: confrontationId }) => {
                        resolveConfrontation(confrontationId);
                      },
                      (_, errorConfrontation) => {
                        rejectConfrontation(errorConfrontation);
                        return true; // Propagate the error to stop the transaction
                      }
                    );
                  }
                );
              }
            );

            // Wait for all confrontation inserts to complete
            Promise.all(confrontationInsertPromises)
              .then((confrontationIds) => {
                resolve({ projectId, confrontationIds });
              })
              .catch((error) => {
                reject(error);
                return true; // Propagate the error to stop the transaction
              });
          },
          (_, errorProject) => {
            reject(errorProject);
            return true; // Propagate the error to stop the transaction
          }
        );
      },
      (error) => {
        console.error("Transaction error:", error);
      },
      () => {
        console.log("Transaction complete");
      }
    );
  });
};

export const getProjects = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM project",
        [],
        (_, { rows: { _array } }) => {
          const projects = _array.map(({ id, name, description, user_id }) => ({
            id,
            name,
            description,
            user_id,
          }));
          resolve(projects);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const getConfrontations = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM confrontation",
        [],
        (_, { rows: { _array } }) => {
          const confrontations = _array.map(
            ({
              id,
              project_datacard_id,
              project_experience_id,
              project_id,
              confrontation_content,
            }) => ({
              id,
              project_datacard_id,
              project_experience_id,
              project_id,
              confrontation_content,
            })
          );
          resolve(confrontations);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const deleteAllProjects = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM project",
        [],
        (_, { rows: { _array } }) => {
          resolve("All projects deleted");
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const deleteAllConfrontations = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM confrontation",
        [],
        (_, { rows: { _array } }) => {
          resolve("All confrontations deleted");
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

// find all confrontations associated with a project id with the associated datacard and experience names
export const getConfrontationsByProjectId = (projectId) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT c.id, c.confrontation_content, d.name as datacard_name, e.experience as experience_name FROM confrontation c INNER JOIN datacard d ON c.project_datacard_id = d.id INNER JOIN experience e ON c.project_experience_id = e.id WHERE c.project_id = ?`,
        [projectId],
        (_, { rows: { _array } }) => {
          const confrontations = _array.map(
            ({
              id,
              confrontation_content,
              datacard_name,
              experience_name,
            }) => ({
              id,
              confrontation_content,
              datacard_name,
              experience_name,
            })
          );
          resolve(confrontations);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const editConfrontationText = (confrontationId, confrontationText) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `UPDATE confrontation SET confrontation_content = ? WHERE id = ?`,
        [confrontationText, confrontationId],
        (_, { rows: { _array } }) => {
          resolve("Confrontation text edited");
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};
