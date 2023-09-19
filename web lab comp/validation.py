import lxml.etree as ET

# Load the XML data and XSD schema
xml_data = ET.parse('jokes.xml')
xsd_schema = ET.XMLSchema(file='jokes.xsd')

# Validate the XML data against the XSD schema
is_valid = xsd_schema.validate(xml_data)

if is_valid:
    print("Validation successful.")
else:
    print("Validation failed. Details:")
    for error in xsd_schema.error_log:
        print(f"Line {error.line}: {error.message}")
