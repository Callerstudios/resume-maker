import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import type { FormData } from "../utils/types";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Helvetica",
    lineHeight: 1.5,
  },
  section: {
    marginBottom: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subHeader: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 4,
  },
  text: {
    marginBottom: 2,
  },
  image: {
    marginTop: 8,
    maxWidth: "100%",
    height: 120,
    objectFit: "cover",
    borderRadius: 6,
  },
});

export default function PDFDocument({ resume }: { resume: FormData }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.section}>
          <Text style={styles.header}>{resume.name}</Text>
          <Text style={styles.text}>{resume.email}</Text>
          <Text style={styles.text}>{resume.phone}</Text>
          <Text style={styles.text}>{resume.address}</Text>
        </View>

        {/* Summary */}
        {resume.summary && (
          <View style={styles.section}>
            <Text style={styles.subHeader}>Summary</Text>
            <Text>{resume.summary}</Text>
          </View>
        )}

        {/* Projects */}
        {resume.projects && (
          <View style={styles.section}>
            <Text style={styles.subHeader}>Projects</Text>
            {resume.projects.map((project, index) => (
              <View key={index} style={{ marginBottom: 10 }}>
                <Text style={{ fontWeight: "bold" }}>{project.name}</Text>
                <Text>{project.description}</Text>
                {project.link && <Text>🔗 {project.link}</Text>}
                {project.technologies && (
                  <Text>🛠️ {project.technologies.join(", ")}</Text>
                )}
                {/* Conditionally show preview image */}
                {project.previewImage && (
                  <Image src={project.previewImage} style={styles.image} />
                )}
              </View>
            ))}
          </View>
        )}

        {/* Experience */}
        {resume.experience?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.subHeader}>Experience</Text>
            {resume.experience.map((exp, index) => (
              <View key={index} style={{ marginBottom: 8 }}>
                <Text style={{ fontWeight: "bold" }}>
                  {exp.role} - {exp.company}
                </Text>
                <Text>
                  {exp.startDate} – {exp.endDate || "Present"}
                </Text>
                <Text>{exp.description}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Education */}
        {resume.education?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.subHeader}>Education</Text>
            {resume.education.map((edu, index) => (
              <View key={index} style={{ marginBottom: 8 }}>
                <Text style={{ fontWeight: "bold" }}>{edu.institution}</Text>
                <Text>{edu.degree}</Text>
                <Text>
                  {edu.startDate} – {edu.endDate || "Present"}
                </Text>
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}
