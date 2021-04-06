import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { API_URL } from "../../config/config";
import styles from "./cat.module.css";
import { useFetch } from "../../fetch/useFetch";
import Loading from "../loading/Loading";
// import "react-dropdown/style.css";
import { Link } from "react-router-dom";
import Dropdown from "../custom/Dropdown";

const Cat = () => {
  const [breed, setBreed] = useState();
  const catId = useParams();
  const [getCat, loading] = useFetch(`${API_URL}/images/${catId.id}`);

  useEffect(() => {
    document.title = breed?.name;
    const { breeds } = getCat;
    breeds?.map((bre) => setBreed(bre));
  });
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.cat_details}>
          <div className={styles.backBtn}>
            <Link to="/breeds">Back</Link>
          </div>
          {
            <div className={styles.dFlex}>
              <div className={styles.catImage}>
                <img src={getCat?.url} width="100%" alt="test" />
              </div>
              <div className={styles.catInfo}>
                <div className={styles.catInfoHeader}>
                  <h1>{breed?.name ?? "Beautiful Cat"}</h1>
                  <strong>
                    <i>{breed?.origin}</i>
                  </strong>
                </div>
                <div className={styles.df_j_between_a_center}>
                  <h3
                    className={`${styles.textWhite} ${styles.familymonospace}`}
                  >
                    Temperament:
                  </h3>
                  <p
                    className={`${styles.textWhite} ${styles.familymonospace}`}
                  >
                    {breed?.temperament}
                  </p>
                </div>
                <div className={styles.dropdownsContainer}>
                  <div className={styles.dropdowns}>
                    <Dropdown className={styles.textWhite} title="Description">
                      <p className={styles.desc}>{breed?.description}</p>
                    </Dropdown>
                    <Dropdown className={styles.textWhite} title="Weight">
                      <div
                        className={`${styles.df_j_between_a_center} ${styles.dropD_info}`}
                      >
                        <p className={styles.desc}>imperial</p>
                        <p className={styles.desc}>
                          {breed?.weight?.imperial ?? ""}
                        </p>
                      </div>
                      <div
                        className={`${styles.df_j_between_a_center} ${styles.dropD_info}`}
                      >
                        <p className={styles.desc}>metric</p>
                        <p className={styles.desc}>
                          {breed?.weight?.metric ?? ""}
                        </p>
                      </div>
                    </Dropdown>
                  </div>
                  <div className={styles.wikiP}>
                    <h2
                      className={`${styles.textWhite} ${styles.familymonospace}`}
                    >
                      <span>Wanna see it on Wikipedia:</span>
                      <a
                        rel="noopener noreferrer"
                        className={styles.WikiLink}
                        target="_blank"
                        href={breed?.wikipedia_url}
                      >
                        Click here!
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      )}
    </div>
  );
};

export default Cat;
