import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";

const CoreConcepts = () => {
  return (
    <>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => {
            <CoreConcept key={conceptItem.title} {...conceptItem} />;
          })}
          {/* <CoreConcept {...CORE_CONCEPTS[0]} />
  <CoreConcept {...CORE_CONCEPTS[1]} />
  <CoreConcept {...CORE_CONCEPTS[2]} />
  <CoreConcept {...CORE_CONCEPTS[3]} /> */}
        </ul>
      </section>
    </>
  );
};

export default CoreConcepts;
