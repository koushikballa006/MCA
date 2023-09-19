import lxml.etree as ET

# Load the XML data
xml_data = ET.parse('jokes.xml')

# Load the XSLT stylesheet
xslt_stylesheet = ET.parse('stylesheet.xslt')

# Create an XSLT transformer
transformer = ET.XSLT(xslt_stylesheet)

# Transform the XML data into HTML
result_tree = transformer(xml_data)

# Output the HTML result
html_output = ET.tostring(result_tree, pretty_print=True, encoding=str)

# Save the HTML as 'output.html' (optional)
with open('output.html', 'w', encoding='utf-8') as html_file:
    html_file.write(html_output)

# Display the HTML table (you can save it to a file and open it in a web browser)
print(html_output)
