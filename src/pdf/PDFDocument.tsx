import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Link,
} from "@react-pdf/renderer";
import type { FormData } from "../utils/types"; // adjust path if needed

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Helvetica",
    lineHeight: 1.5,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 4,
  },
  contact: {
    fontSize: 10,
    textAlign: "center",
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: "bold",
    borderBottom: "1px solid #aaa",
    marginTop: 16,
    marginBottom: 8,
  },
  subsectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 2,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginVertical: 8,
  },
  link: {
    color: "#3b82f6", // blue
    fontSize: 10,
    marginBottom: 4,
  },
  boldLabel: {
    fontWeight: "bold",
  },
});

export default function ResumePDF({ data }: { data: FormData }) {
  return (
    <Document>
      <Page style={styles.page}>
        {/* Header */}
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.contact}>
          {data.email}
          {data.phone && ` | ${data.phone}`}
          {data.address && ` | ${data.address}`}
        </Text>

        {/* Summary */}
        <Text style={styles.sectionHeader}>Professional Summary</Text>
        <Text>{data.summary || "No summary provided."}</Text>

        {/* Skills */}
        <Text style={styles.sectionHeader}>Skills</Text>
        <Text>
          {data.skills?.length ? data.skills.join(", ") : "None listed."}
        </Text>

        {/* Projects */}
        {data.projects && data.projects.length > 0 && (
          <>
            <Text style={styles.sectionHeader}>Projects</Text>
            {data.projects.map((project, idx) => (
              <View key={idx}>
                <Text style={styles.subsectionTitle}>{project.name}</Text>
                <Text>{project.description}</Text>

                {project.previewImage && (
                  <Image style={styles.image} src={project.previewImage} />
                )}

                {project.link && (
                  <Link style={styles.link} src={project.link}>
                    View Project
                  </Link>
                )}

                {project.technologies && project.technologies?.length > 0 && (
                  <Text>
                    <Text style={styles.boldLabel}>Technologies: </Text>
                    {project.technologies.join(", ")}
                  </Text>
                )}
              </View>
            ))}
          </>
        )}

        {/* Experience */}
        {data.experience && data.experience.length > 0 && (
          <>
            <Text style={styles.sectionHeader}>Work Experience</Text>
            {data.experience.map((exp, idx) => (
              <View key={idx}>
                <Text style={styles.subsectionTitle}>
                  {exp.role} - {exp.company}
                </Text>
                <Text>
                  {exp.startDate} - {exp.endDate}
                </Text>
                <Text>{exp.description}</Text>
                {exp.responsibilities?.map((item, i) => (
                  <Text key={i}>• {item}</Text>
                ))}
              </View>
            ))}
          </>
        )}

        {/* Education */}
        {data.education && data.education.length > 0 && (
          <>
            <Text style={styles.sectionHeader}>Education</Text>
            {data.education.map((edu, idx) => (
              <View key={idx}>
                <Text style={styles.subsectionTitle}>{edu.degree}</Text>
                <Text>{edu.institution}</Text>
                <Text>
                  {edu.startDate} - {edu.endDate}
                </Text>
                {edu.description && <Text>{edu.description}</Text>}
              </View>
            ))}
          </>
        )}
      </Page>
    </Document>
  );
}
