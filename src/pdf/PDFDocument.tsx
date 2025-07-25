import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import type { FormData } from "../utils/types";

// Optionally register fonts
// Font.register({ family: "Roboto", src: "https://..." });

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Helvetica",
    lineHeight: 1.4,
  },
  section: {
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  heading: {
    fontSize: 14,
    marginBottom: 4,
    fontWeight: "bold",
    color: "#333",
  },
  text: {
    marginBottom: 2,
  },
});

type PDFDocumentProps = {
  data: FormData;
};

const PDFDocument: React.FC<PDFDocumentProps> = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.name}>{data.name}</Text>
          <Text>{data.role}</Text>
          <Text>
            {data.email} | {data.phone}
          </Text>
          <Text>{data.address}</Text>
        </View>

        {data.summary && (
          <View style={styles.section}>
            <Text style={styles.heading}>Summary</Text>
            <Text style={styles.text}>{data.summary}</Text>
          </View>
        )}

        {data.experience?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.heading}>Experience</Text>
            {data.experience.map((exp, idx) => (
              <View key={idx}>
                <Text style={styles.text}>
                  {exp.role} at {exp.company} ({exp.startDate} - {exp.endDate})
                </Text>
                <Text style={styles.text}>{exp.description}</Text>
              </View>
            ))}
          </View>
        )}

        {data.education?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.heading}>Education</Text>
            {data.education.map((edu, idx) => (
              <Text key={idx} style={styles.text}>
                {edu.degree}, {edu.institution} ({edu.year})
              </Text>
            ))}
          </View>
        )}

        {data.skills?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.heading}>Skills</Text>
            <Text style={styles.text}>{data.skills.join(", ")}</Text>
          </View>
        )}
      </Page>
    </Document>
  );
};

export default PDFDocument;
