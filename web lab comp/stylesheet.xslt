<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/jokes">
    <html>
      <head>
        <title>Jokes</title>
      </head>
      <body>
        <table border="1">
          <tr>
            <th>Category</th>
            <th>Joke</th>
          </tr>
          <xsl:for-each select="joke">
            <tr>
              <td><xsl:value-of select="category"/></td>
              <td><xsl:value-of select="text"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
