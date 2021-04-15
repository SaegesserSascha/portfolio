import "./education.scss";
import EducationRow from "./EducationRow";

function Education() {
  return (
    <div className="education-wrapper">
      <EducationRow
        from="September 2016"
        to="Juli 2020"
        where="Rotkreuz, Zug"
        what="Bachelor of Science Hochschule Luzern/FHZ in Informatik"
        details={[
          "Mit vertiefung in Human Computer Interaction Design"
        ]}
      />
      <EducationRow
        from="August 2016"
        to="Mai 2016"
        where="Dietikon, Zürich"
        what="Praktikum bei Raiffeisen"
        details={[
          "Erste Einblicke in Die Arbeitswelt gesammelt",
          "Testen einer Frontend Applikation"
        ]}
      />
      <EducationRow
        from="August 2014"
        to="April 2016"
        where="Diverse"
        what="Umschulung"
        details={[
          "Stellensuche für ein Praktikum",
          "Absolvierung des \"Theoriekurs Informatik Praktikum\" der Hochschule Luzern"
        ]}
      />
      <EducationRow
        from="August 2010"
        to="Juli 2014"
        where="Aarburg, Aargau"
        what="Lehre zum Polymechaniker EFZ"
        details={["Erfolgreich abgeschlossene Ausbildung in der Franke Schweiz AG mit technischer Berufsmatura in der Berufsschule und Weiterbildung Zofingen"]}
      />
    </div>
  );
}

export default Education;