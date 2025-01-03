export default function generateUniqueFilename(extension, prefix = '') {
  // Get the current date and time in local Central Time
  const now = new Date();
  const centralTimeOffset = -6 * 60; // CST is UTC-6
  const isDST = new Date().toLocaleTimeString('en-us', { timeZoneName: 'short' }).includes('CDT');
  const centralOffset = centralTimeOffset + (isDST ? 60 : 0); // Adjust for daylight saving time if necessary
  
  const centralTime = new Date(now.getTime() + (now.getTimezoneOffset() + centralOffset) * 60000);
  
  // Format the datetime string as 'YYYY-MM-DD_HH.mm.ss.sss'
  const year = centralTime.getFullYear();
  const month = String(centralTime.getMonth() + 1).padStart(2, '0');
  const day = String(centralTime.getDate()).padStart(2, '0');
  const hours = String(centralTime.getHours()).padStart(2, '0');
  const minutes = String(centralTime.getMinutes()).padStart(2, '0');
  const seconds = String(centralTime.getSeconds()).padStart(2, '0');
  const milliseconds = String(centralTime.getMilliseconds()).padStart(3, '0');
  
  const datetimeString = `${year}-${month}-${day}_${hours}.${minutes}.${seconds}.${milliseconds}`;
  
  // Combine the prefix and datetime string to generate the filename
  let filename = `${datetimeString}.${extension}`
  if (prefix) {
    filename = `${prefix}_${filename}`;
  }
  return filename;
}