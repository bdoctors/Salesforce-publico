Use SOQL when you know in which objects or fields the data resides and you want to:

Retrieve data from a single object or from multiple objects that are related to one another.
Count the number of records that meet specified criteria.
Sort results as part of the query.
Retrieve data from number, date, or checkbox fields.
Use SOSL when you don’t know in which object or field the data resides and you want to:

Retrieve data for a specific term that you know exists within a field. Because SOSL can tokenize multiple terms within a field and build a search index from this, SOSL searches are faster and can return more relevant results.
Retrieve multiple objects and fields efficiently, and the objects might or might not be related to one another.
Retrieve data for a particular division in an organization using the divisions feature, and you want to find it in the most efficient way possible.
