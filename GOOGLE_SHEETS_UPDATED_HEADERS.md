# Updated Google Sheets Headers

## New Column Headers

Since you've added coalition membership checkboxes, you need to update your Google Sheet headers:

### Old Headers (14 columns):
```
Timestamp	First Name	Last Name	Organization	Phone	Email	Preferred Messenger	Messenger Handle	Country	Message	Consent Transactional	Consent Marketing	IP Address	User Agent
```

### New Headers (17 columns):
```
Timestamp	First Name	Last Name	Organization	Phone	Email	Preferred Messenger	Messenger Handle	Country	Message	Active Partner	Supporting Member	Aligned Ally	Consent Transactional	Consent Marketing	IP Address	User Agent
```

## Updated Apps Script

You'll also need to update your Google Apps Script `doPost` function to include the new fields:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    var timestamp = new Date();
    
    var rowData = [
      timestamp,                                    // A: Timestamp
      data.firstName || '',                         // B: First Name
      data.lastName || '',                          // C: Last Name
      data.organization || '',                      // D: Organization
      data.phone || '',                             // E: Phone
      data.email || '',                             // F: Email
      data.preferredMessenger || '',                // G: Preferred Messenger
      data.messengerHandle || '',                   // H: Messenger Handle
      data.country || '',                           // I: Country
      data.message || '',                           // J: Message
      data.membershipActive ? 'Yes' : 'No',         // K: Active Partner
      data.membershipSupporting ? 'Yes' : 'No',     // L: Supporting Member
      data.membershipAlly ? 'Yes' : 'No',           // M: Aligned Ally
      data.consentTransactional ? 'Yes' : 'No',     // N: Consent Transactional
      data.consentMarketing ? 'Yes' : 'No',         // O: Consent Marketing
      data.ipAddress || '',                         // P: IP Address
      data.userAgent || ''                          // Q: User Agent
    ];
    
    sheet.appendRow(rowData);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        'success': true,
        'message': 'Pledge submitted successfully',
        'timestamp': timestamp.toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        'success': false,
        'error': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Steps to Update Your Google Sheet

1. **Open your Google Sheet** (Free Association Coalition Pledges)

2. **Add 3 new columns** after "Message" (column J):
   - Column K: **Active Partner**
   - Column L: **Supporting Member**
   - Column M: **Aligned Ally**

3. **Shift existing columns**:
   - "Consent Transactional" moves from K → N
   - "Consent Marketing" moves from L → O
   - "IP Address" moves from M → P
   - "User Agent" moves from N → Q

4. **Update your Apps Script**:
   - Extensions → Apps Script
   - Replace the `doPost` function with the code above
   - Save
   - **Redeploy** (Deploy → Manage deployments → Edit → Version: New version → Deploy)

## What the New Fields Capture

Users can now select multiple engagement levels:

- ✅ **Active Partner** - Deep involvement (pilots, labs, experiments)
- ✅ **Supporting Member** - Regular engagement (demos, sharing, networking)
- ✅ **Aligned Ally** - Light involvement (endorsement, staying informed)

Users can check **multiple boxes** - they're not mutually exclusive!

## Testing

After updating:
1. Submit a test pledge with all membership types checked
2. Check Google Sheet - should see "Yes" in all three membership columns
3. Submit another with only one checked - should see "Yes"/"No" appropriately
4. Delete test rows

---

**Don't forget to redeploy your Apps Script after updating the code!**

