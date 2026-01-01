/**

Custom JS Code Node for n8n

Cleans and validates scraped HTML data before DB insertion */

const results = [];

for (const item of items) { const rawHtml = item.json.html_content;

// Basic cleaning logic let cleanTitle = item.json.title ? item.json.title.trim() : 'N/A'; let cleanPrice = item.json.price ? item.json.price.replace(/[^0-9.]/g, '') : '0.00';

// Validation check if (cleanTitle !== 'N/A' && parseFloat(cleanPrice) > 0) { results.push({ json: { title: cleanTitle, price: parseFloat(cleanPrice), timestamp: new Date().toISOString(), source: item.json.url, status: 'validated' } }); } }

return results;