# Write a SOSL Query to Search the Database
Now that you’ve successfully avoided collision with asteroid 2014 QO441, you’ll contact Mission Control at the Neptune Space Station to get cleared for landing so you can take a well-deserved break. Write a SOSL query to find and return the contact details of the Mission Specialist at the Neptune Space Station.

**Pre-Work:**
First, you need to add contact details for the Mission Specialist on Neptune to the database. To do that, execute this code in the Execute Anonymous window.
```
Contact thisContact = new Contact(
    FirstName = 'Brian',
    LastName = 'Dent',
    Phone = '(619) 852-4569',
    Department = 'Mission Control',
    Title = 'Mission Specialist - Neptune',
    Email = 'briandent@trailhead.com');
insert thisContact;
```
- Paste the Apex code that you used to find control engineer records into the Execute Anonymous window
- Adapt the inline SOSL query to find the Mission Specialist record you inserted:
  - Search contacts for Mission Control
  - Get the contact’s first name and last name
  - Use the System.debug method to write LastName, FirstName to the Debug log
- Execute your code
