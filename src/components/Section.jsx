const Section = ({ title, secId, children }) => {
  return (
    <section id={secId}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
