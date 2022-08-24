import { Document, StyleSheet, Page, Text, View, Canvas, PDFViewer } from "@react-pdf/renderer"
import reactDom from "react-dom"

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
})

export default function PdfGenerator() {
    return (
        <Document>
            <Page size="A4" style={styles.page} orientation="portrait" >
                <View style={styles.section}>
                    <Text>Section #1</Text>
                </View>
                <View style={styles.section}>
                    <Text>Section #2</Text>
                </View>
            </Page>
        </Document>
    )
}