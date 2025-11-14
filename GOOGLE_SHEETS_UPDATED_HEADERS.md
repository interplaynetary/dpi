# Updated Google Sheets Headers for LOI Form

## New Column Headers

The form has been expanded to collect comprehensive Letter of Intent data. You need to update your Google Sheet with the following headers:

### Complete Headers (71 columns):
```
Timestamp	First Name	Last Name	Organization	Title	Phone	Email	Preferred Messenger	Messenger Handle	Country	Message	Org Type: Government	Org Type: UN	Org Type: Foundation	Org Type: Investment	Org Type: NGO	Org Type: Regional	Org Type: Private	Org Type: Grassroots	Org Type: Other	Mission: Climate	Mission: Health	Mission: Humanitarian	Mission: Development	Mission: Biodiversity	Mission: Food	Mission: Water	Mission: Education	Mission: Economic	Mission: Other	Membership: Active	Membership: Supporting	Membership: Ally	Resource Range	Resource: Grant Funding	Resource: Development Aid	Resource: Investment	Resource: In-Kind	Resource: Technical	Resource: Emergency	Resource: Other	Pilot Start Date	Pilot Duration	Pilot Focus Areas	Current Decision Process	Recognition Partners	Geographic Priorities	Authority: Commit	Authority: Recommend	Authority: Recommend From	Authority: Exploratory	Tech: Have Staff	Tech: Need Support	Tech: Prefer Simplified	Data: Share Weights	Data: Share Capacity	Data: Share Needs	Data: Understand Privacy	Support: Demo	Support: Technical	Support: Legal	Support: Executive	Support: Other	Followup Timeline	Additional Questions	Acknowledgment Accepted	Consent: Transactional	Consent: Marketing	User Agent
```

## Updated Apps Script

You'll need to update your Google Apps Script `doPost` function to handle all the new LOI fields:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    var timestamp = new Date();
    
    // Helper function to convert boolean to Yes/No
    function boolToYesNo(value) {
      return value ? 'Yes' : 'No';
    }
    
    var rowData = [
      timestamp,                                          // A: Timestamp
      data.firstName || '',                               // B: First Name
      data.lastName || '',                                // C: Last Name
      data.organization || '',                            // D: Organization
      data.title || '',                                   // E: Title
      data.phone || '',                                   // F: Phone
      data.email || '',                                   // G: Email
      data.preferredMessenger || '',                      // H: Preferred Messenger
      data.messengerHandle || '',                         // I: Messenger Handle
      data.country || '',                                 // J: Country
      data.message || '',                                 // K: Message
      
      // Section 1: Organization Profile - Organization Type
      boolToYesNo(data.orgTypeGovernment),                // L: Org Type: Government
      boolToYesNo(data.orgTypeUN),                        // M: Org Type: UN
      boolToYesNo(data.orgTypeFoundation),                // N: Org Type: Foundation
      boolToYesNo(data.orgTypeInvestment),                // O: Org Type: Investment
      boolToYesNo(data.orgTypeNGO),                       // P: Org Type: NGO
      boolToYesNo(data.orgTypeRegional),                  // Q: Org Type: Regional
      boolToYesNo(data.orgTypePrivate),                   // R: Org Type: Private
      boolToYesNo(data.orgTypeGrassroots),                // S: Org Type: Grassroots
      data.orgTypeOther || '',                            // T: Org Type: Other
      
      // Section 1: Organization Profile - Mission Areas
      boolToYesNo(data.missionClimate),                   // U: Mission: Climate
      boolToYesNo(data.missionHealth),                    // V: Mission: Health
      boolToYesNo(data.missionHumanitarian),              // W: Mission: Humanitarian
      boolToYesNo(data.missionDevelopment),               // X: Mission: Development
      boolToYesNo(data.missionBiodiversity),              // Y: Mission: Biodiversity
      boolToYesNo(data.missionFood),                      // Z: Mission: Food
      boolToYesNo(data.missionWater),                     // AA: Mission: Water
      boolToYesNo(data.missionEducation),                 // AB: Mission: Education
      boolToYesNo(data.missionEconomic),                  // AC: Mission: Economic
      data.missionOther || '',                            // AD: Mission: Other
      
      // Section 2: Pilot Commitment - Membership
      boolToYesNo(data.membershipActive),                 // AE: Membership: Active
      boolToYesNo(data.membershipSupporting),             // AF: Membership: Supporting
      boolToYesNo(data.membershipAlly),                   // AG: Membership: Ally
      
      // Section 2: Pilot Commitment - Resources (for Active Members)
      data.resourceRange || '',                           // AH: Resource Range
      boolToYesNo(data.resourceGrantFunding),             // AI: Resource: Grant Funding
      boolToYesNo(data.resourceDevelopmentAid),           // AJ: Resource: Development Aid
      boolToYesNo(data.resourceInvestment),               // AK: Resource: Investment
      data.resourceInKind || '',                          // AL: Resource: In-Kind
      boolToYesNo(data.resourceTechnical),                // AM: Resource: Technical
      boolToYesNo(data.resourceEmergency),                // AN: Resource: Emergency
      data.resourceOther || '',                           // AO: Resource: Other
      
      // Section 2: Pilot Timeline and Focus
      data.pilotStartDate || '',                          // AP: Pilot Start Date
      data.pilotDuration || '',                           // AQ: Pilot Duration
      data.pilotFocusAreas || '',                         // AR: Pilot Focus Areas
      data.currentDecisionProcess || '',                  // AS: Current Decision Process
      
      // Section 3: Coordination Interests
      data.recognitionPartners || '',                     // AT: Recognition Partners
      data.geographicPriorities || '',                    // AU: Geographic Priorities
      
      // Section 4: Organizational Readiness - Authority
      boolToYesNo(data.authorityCommit),                  // AV: Authority: Commit
      boolToYesNo(data.authorityRecommend),               // AW: Authority: Recommend
      data.authorityRecommendFrom || '',                  // AX: Authority: Recommend From
      boolToYesNo(data.authorityExploratory),             // AY: Authority: Exploratory
      
      // Section 4: Technical Capacity
      boolToYesNo(data.techCapacityHave),                 // AZ: Tech: Have Staff
      boolToYesNo(data.techCapacityNeed),                 // BA: Tech: Need Support
      boolToYesNo(data.techCapacitySimplified),           // BB: Tech: Prefer Simplified
      
      // Section 4: Data Sharing Readiness
      boolToYesNo(data.dataSharingWeights),               // BC: Data: Share Weights
      boolToYesNo(data.dataSharingCapacity),              // BD: Data: Share Capacity
      boolToYesNo(data.dataSharingNeeds),                 // BE: Data: Share Needs
      boolToYesNo(data.dataSharingPrivacy),               // BF: Data: Understand Privacy
      
      // Section 5: Next Steps & Support Needs
      boolToYesNo(data.supportDemo),                      // BG: Support: Demo
      boolToYesNo(data.supportTechnical),                 // BH: Support: Technical
      boolToYesNo(data.supportLegal),                     // BI: Support: Legal
      boolToYesNo(data.supportExecutive),                 // BJ: Support: Executive
      data.supportOther || '',                            // BK: Support: Other
      data.followupTimeline || '',                        // BL: Followup Timeline
      data.additionalQuestions || '',                     // BM: Additional Questions
      
      // Section 6: Acknowledgment & Consent
      boolToYesNo(data.acknowledgmentAccepted),           // BN: Acknowledgment Accepted
      boolToYesNo(data.consentTransactional),             // BO: Consent: Transactional
      boolToYesNo(data.consentMarketing),                 // BP: Consent: Marketing
      
      // Metadata
      data.userAgent || ''                                // BQ: User Agent
    ];
    
    sheet.appendRow(rowData);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        'success': true,
        'message': 'Letter of Intent submitted successfully',
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

### Option 1: Start Fresh (Recommended)

1. **Create a new sheet** or **clear the existing one**
2. **Copy the header row** from the complete headers above (73 columns)
3. **Paste into Row 1** of your Google Sheet

### Option 2: Add Columns to Existing Sheet

If you have existing data you want to preserve:

1. **Open your Google Sheet** (Free Association Coalition Pledges)
2. **Insert new columns** after existing columns to accommodate all new fields
3. **Update headers** to match the 73-column structure above
4. Note: Old submissions won't have the new data fields (will show empty/No)

### Update Your Apps Script

1. Go to **Extensions → Apps Script**
2. **Replace** the entire `doPost` function with the code above
3. **Save** (Ctrl+S or Cmd+S)
4. **Redeploy**:
   - Click **Deploy → Manage deployments**
   - Click the **Edit** icon (pencil) on your existing deployment
   - Change **Version** to "New version"
   - Click **Deploy**
   - Copy the new Web App URL if it changed

## What the Form Now Captures

The expanded LOI form collects comprehensive organizational information across 6 sections:

### Section 1: Organization Profile
- **Organization Types** (8 categories): Government, UN Agency, Foundation, Investment Fund, NGO, Regional Body, Private/Corporate, Grassroots
- **Mission Areas** (9 categories): Climate, Health, Humanitarian, Development, Biodiversity, Food, Water, Education, Economic

### Section 2: Pilot Commitment (Active Members Only)
- Resource commitment range and types
- Pilot timeline and focus areas
- Current decision-making processes

### Section 3: Coordination Interests
- Potential recognition partners
- Geographic and thematic priorities

### Section 4: Organizational Readiness
- Decision-making authority level
- Technical capacity
- Data sharing readiness

### Section 5: Next Steps & Support Needs
- Support preferences (demos, technical briefings, legal support, etc.)
- Preferred follow-up timeline
- Additional questions

### Section 6: Acknowledgment
- Required acknowledgment of LOI terms
- Communication consent preferences

## Data Format

- **Checkboxes**: Stored as "Yes" or "No"
- **Text fields**: Stored as-is (empty if not filled)
- **Dropdowns**: Stored as selected value
- **Timestamps**: Auto-generated by Google Sheets

## Testing

After updating:

1. **Test submission**: Fill out the LOI form with sample data
2. **Check Google Sheet**: Verify all 73 columns are populated correctly
3. **Verify boolean fields**: Should show "Yes" or "No" (not "true"/"false")
4. **Test Active Member fields**: Check that resource/pilot fields are captured when "Active Member" is selected
5. **Delete test rows** after verification

## Data Analysis Tips

With 73 columns, consider:

1. **Freeze the header row**: View → Freeze → 1 row
2. **Create a summary dashboard**: Use pivot tables or a separate sheet
3. **Filter views**: Create custom views for different analysis needs
4. **Conditional formatting**: Highlight Active Members, specific mission areas, etc.

---

**⚠️ Important: Don't forget to redeploy your Apps Script after updating the code!**

The deployment URL might change - update your `.env` file with the new `VITE_GOOGLE_SHEETS_URL` if needed.

---

## Quick Copy: Tab-Separated Headers for Google Sheets

Copy this entire line and paste directly into Row 1 of your Google Sheet:

```
Timestamp	First Name	Last Name	Organization	Title	Phone	Email	Preferred Messenger	Messenger Handle	Country	Message	Org Type: Government	Org Type: UN	Org Type: Foundation	Org Type: Investment	Org Type: NGO	Org Type: Regional	Org Type: Private	Org Type: Grassroots	Org Type: Other	Mission: Climate	Mission: Health	Mission: Humanitarian	Mission: Development	Mission: Biodiversity	Mission: Food	Mission: Water	Mission: Education	Mission: Economic	Mission: Other	Membership: Active	Membership: Supporting	Membership: Ally	Resource Range	Resource: Grant Funding	Resource: Development Aid	Resource: Investment	Resource: In-Kind	Resource: Technical	Resource: Emergency	Resource: Other	Pilot Start Date	Pilot Duration	Pilot Focus Areas	Current Decision Process	Recognition Partners	Geographic Priorities	Authority: Commit	Authority: Recommend	Authority: Recommend From	Authority: Exploratory	Tech: Have Staff	Tech: Need Support	Tech: Prefer Simplified	Data: Share Weights	Data: Share Capacity	Data: Share Needs	Data: Understand Privacy	Support: Demo	Support: Technical	Support: Legal	Support: Executive	Support: Other	Followup Timeline	Additional Questions	Acknowledgment Accepted	Consent: Transactional	Consent: Marketing	User Agent
```

