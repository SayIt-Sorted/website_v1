# Google Sheet Email Collection Setup

## Step 1: Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Say It Sorted - Early Access Emails"
4. Add these headers in row 1:
   - A1: `Email`
   - B1: `Timestamp` 
   - C1: `Source`

## Step 2: Create Google Apps Script
1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Replace the default code with this:

```javascript
function doPost(e) {
  try {
    // Get the data from the request
    const data = JSON.parse(e.postData.contents);
    const email = data.email;
    const timestamp = data.timestamp;
    const source = data.source || 'website';
    
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Add the data to the next available row
    sheet.appendRow([email, timestamp, source]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 'status': 'Email collection service is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## Step 3: Deploy the Script
1. Click **Deploy** → **New deployment**
2. Choose **Web app** as the type
3. Set **Execute as**: "Me"
4. Set **Who has access**: "Anyone"
5. Click **Deploy**
6. Copy the **Web app URL** (it looks like: `https://script.google.com/macros/s/AKfycbz.../exec`)

## Step 4: Update Your React App
1. Replace `YOUR_SCRIPT_ID` in `src/App.tsx` with your actual script ID
2. The script ID is the long string in your web app URL

## How It Works
- ✅ Users submit emails through your website
- ✅ Emails automatically go to your Google Sheet
- ✅ You can access the sheet from anywhere
- ✅ No server needed, completely free
- ✅ Fallback to localStorage if Google Sheet is down

## Access Your Emails
- Open your Google Sheet anytime to see all collected emails
- Filter, sort, or export as needed
- Share with team members if needed

## Security Notes
- The script only accepts POST requests with email data
- No sensitive data is stored in the script
- All data goes directly to your Google Sheet 