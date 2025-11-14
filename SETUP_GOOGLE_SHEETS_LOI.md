# Google Sheets Setup Guide for LOI Form

This guide will help you connect your expanded Letter of Intent form to Google Sheets.

## What Changed

The form has been expanded from **17 columns** to **71 columns** to capture comprehensive LOI data:
- Organization profile (types & mission areas)
- Pilot commitment details (for Active Members)
- Coordination interests
- Organizational readiness
- Support needs and follow-up preferences
- Acknowledgment and consent

## Setup Steps

### Step 1: Prepare Your Google Sheet

1. **Open** your existing Google Sheet or **create a new one**
   - Name it something like "Free Association Coalition - Letters of Intent"

2. **Set up the headers** (Row 1):
   - Copy the tab-separated headers from `GOOGLE_SHEETS_UPDATED_HEADERS.md` (Quick Copy section)
   - Paste into Row 1 of your sheet
   - All 71 columns should populate automatically

3. **Format the sheet** (optional but recommended):
   - **Freeze the header row**: View → Freeze → 1 row
   - **Bold the headers**: Select Row 1 → Bold
   - **Adjust column widths**: Double-click column borders to auto-fit
   - **Add filters**: Data → Create a filter

### Step 2: Update Apps Script

1. In your Google Sheet, go to **Extensions → Apps Script**

2. **Replace** the entire `doPost` function with the code from `GOOGLE_SHEETS_UPDATED_HEADERS.md`

3. **Save** the script (Ctrl+S or Cmd+S)

4. **Deploy as Web App**:
   - If this is your first time:
     - Click **Deploy → New deployment**
     - Click gear icon → Select **Web app**
     - Set "Execute as": **Me**
     - Set "Who has access": **Anyone**
     - Click **Deploy**
     - **Authorize** the app when prompted
     - **Copy the Web App URL**
   
   - If updating existing deployment:
     - Click **Deploy → Manage deployments**
     - Click the **Edit** icon (pencil)
     - Change **Version** to "New version"
     - Click **Deploy**
     - Copy the URL if it changed

### Step 3: Update Your Application

1. **Update your `.env` file** (or create one if it doesn't exist):
   ```bash
   VITE_GOOGLE_SHEETS_URL=your_web_app_url_here
   ```

2. **Restart your development server**:
   ```bash
   npm run dev
   ```
   or
   ```bash
   cd client && npm run dev
   ```

### Step 4: Test the Integration

1. **Open your application** in a browser

2. **Fill out the LOI form** with test data:
   - Fill in required fields (marked with *)
   - Check some organization types and mission areas
   - Select a membership tier
   - If you select "Active Member", fill in some pilot commitment details
   - Fill in other sections as desired

3. **Submit the form**

4. **Check your Google Sheet**:
   - You should see a new row with all the data (71 columns)
   - Boolean fields should show "Yes" or "No"
   - Text fields should show the entered text
   - Empty fields should be blank or "No"

5. **Verify the data**:
   - ✅ Timestamp is auto-generated
   - ✅ All checkbox fields show "Yes" or "No"
   - ✅ Text fields contain the right data
   - ✅ Conditional fields (like Active Member details) are captured

6. **Delete the test row** once verified

## Troubleshooting

### Form submits but no data appears in Google Sheet

- **Check the Apps Script deployment**: Make sure you redeployed with a new version
- **Check the URL**: Verify `VITE_GOOGLE_SHEETS_URL` matches your deployment URL
- **Check permissions**: Make sure the script has authorization to write to the sheet
- **Check the Apps Script logs**: In Apps Script Editor, go to Executions to see errors

### Data appears in wrong columns

- **Verify header order**: The headers must match exactly the order in the code
- **Check for extra columns**: Make sure no columns were inserted/deleted
- **Re-paste headers**: Copy the headers from the Quick Copy section again

### Some fields show "undefined" instead of "No"

- **Update the Apps Script**: Make sure you're using the `boolToYesNo()` helper function
- **Clear and redeploy**: Delete the old deployment and create a new one

### "Active Member" conditional fields not appearing

- This is intentional! Section 2 (Pilot Commitment Details) only appears when "Active Member" checkbox is checked
- Try checking the "Active Member" box - the section should expand

## Data Structure Reference

### Column Groups:
- **A-K** (11 cols): Basic contact & message
- **L-T** (9 cols): Organization types
- **U-AD** (10 cols): Mission areas
- **AE-AG** (3 cols): Membership tiers
- **AH-AO** (8 cols): Resources (Active Members)
- **AP-AS** (4 cols): Pilot timeline & process
- **AT-AU** (2 cols): Coordination interests
- **AV-AY** (4 cols): Decision authority
- **AZ-BB** (3 cols): Technical capacity
- **BC-BF** (4 cols): Data sharing readiness
- **BG-BK** (5 cols): Support needs
- **BL-BM** (2 cols): Follow-up & questions
- **BN-BP** (3 cols): Acknowledgment & consent
- **BQ** (1 col): User agent

**Total: 71 columns**

## Next Steps

Once your LOI form is collecting data:

1. **Create a dashboard** (optional):
   - Create a new sheet tab called "Dashboard"
   - Use pivot tables to analyze submissions
   - Track: membership types, mission areas, resource commitments, etc.

2. **Set up notifications** (optional):
   - In Apps Script, add email notifications when new LOIs are submitted
   - Use Google Forms-style notifications

3. **Export capabilities**:
   - File → Download → CSV for data analysis
   - Use Google Sheets API for programmatic access

4. **Data backup**:
   - Consider setting up automatic backups
   - File → Version history to track changes

## Support

If you encounter issues:
- Check `GOOGLE_SHEETS_UPDATED_HEADERS.md` for detailed Apps Script code
- Review Google Apps Script documentation: https://developers.google.com/apps-script
- Contact: coalition@openassociation.org

---

**Remember**: After any changes to the Apps Script, you must **redeploy** with a new version for changes to take effect!

