// import { GoogleSpreadsheet } from 'google-spreadsheet';
// import { JWT } from 'google-auth-library';




// // Initialize auth - see https://theoephraim.github.io/node-google-spreadsheet/#/guides/authentication
// GOOGLE_SHEET_ID="1RUrk55k7dbtWkkV8_N7Rc0PVGpmVqM1iEWtBVZ5cLbU";
// GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDGX83+syA4mGJv\nSdHFnpk0554VsLsE591Q1NaiW3uu5c5dXBihNElk/Q5FWy18dt+s5aJ7/OCZijqH\npGwb7GSo3maAKk3zk4D+6ZRX4asvJoiZ9b9zAZZERIzlIwHXCCyTGqA3wZc3hkBo\nXeRvWjLe3k7Ul5buZQGlqcWVsls8BOoyqAU4p9hJMeGEaEpzyLLZikleXKUw3XAJ\nyPMCp9Wucc9HuHNq1SEwU0+DQr5jq8Zw8M5sDCBH8KC+KBI+EUF6kty7KBjkM/NP\nwdn5vdeSkwn/BMkbhb3zWCOvwOVykpzjma3DBvVozAEvGOMWfa4UXeeMR0eekRiT\nWPHpWkIZAgMBAAECggEAMVdxGHIbiJg2m7HD0KDDQMp/oquDyROXE9zsyhNxLy6P\n5t7abXZg7xKWcx/br4Kt3gZ8JNTgVLByIH0AOu3Ql8RBwI1FOFmvEzisIjPKbX7r\nKUhb51I0uyRF21Sax46L78cGpPetEi19Zbg88ol/77lh6DUQYJmVEEyrDbIASWwL\nR1mvSpwZmz7WCzwdKQyXN0KnJnMIgKRvGf6ZQdAfmRjDENl5JBR04O8K4+pzek7W\nTnwHHPxEMXYK0X+lwrhHmaEuh7QfQtgrAREu0nDQP2WMYtinjq0apMN0aXEv0JHL\n2KIYBHW9HR/HJRw94juVNXuBhV53rq7gDj8cf9haJQKBgQDtTe8JAXpeVXqdH40D\n9vYP24JMsKFbcHM9wnDlk00rrSPYp5wzTZEweQuqMxX62N+Sdee74mxa2HqeY2dj\nB/bloVwFkrUMlj41zqer05e2bh4hhkn1goblxq2SHjEhbUxqMDlll5xuRT5iXgPB\naykjjrlhZkvEWqHp9MZ9BiNGRwKBgQDWALVtCE8gup90WsWQwHtgxL43XW5qP9u6\nilgki63gRs6o4NYJF7JUCoftYc5DaZfhqv/wTSvaY7nZNzzDFmkYrnhHYnOpPZ7V\nZyfIO3tAyKap3fXyp/OYTl3haYVxm15ob1hLNSQdhyMzuqZ+NXHKsJlfrJYfkgo+\nwwUOhqOEnwKBgGH14A1JrOgwRTODiMTwN9eH+BwMdi+3FfuSvuQmkJ7NFJUla9fJ\n13u5HFWgTRyGVpSxU34+FBjUcJnd0xoQeZ2FpOUwEMknZHr12kWWTXSjtJCGTRWq\nUmGcSJ6fFA0Gf5r+WVNU6OCkeQJGaSp5QDxLeL96aSCfgWOBBkcqN3mVAoGAAZ6f\nwON/NdAzxL2rIR1T0bereN/MJiG1mAPUBvLHrhrbFYweEpOLVfd+b919oiT6cUrK\nBReQbWaz0WEJpLBWu0kWv/OOzIka2qKdOna4yBS8rixv4BZFUbHGJB6YU/PJEyFE\nmc0dKNwM+CdBe1MMOWx8vKyhtjt0uGThdOqv8iECgYAUiY6p/qwFQ3QEpBQAH6HA\nTf2NoxvECpVnLckS0fZIEKzfzNgtUtfIRQKEYeWUhaDJe5IrfPyaAVkHsT2rTNE7\nQX6HVLtTRCuLnJFXmxzqc88E8WqLy54F572RDmdclI/3rCuH2i7XpHZyu5w018aH\ndJGI/yJt61h9ack3ZoPFLQ==\n-----END PRIVATE KEY-----\n";
// client_email="qrcodescannering@qrcode-scanner-storage.iam.gserviceaccount.com";
// const serviceAccountAuth = new JWT({
    
//   // env var values here are copied from service account credentials generated by google
//   // see "Authentication" section in docs for more info
//   email: process.env.client_email,
//   key: process.env.GOOGLE_PRIVATE_KEY,
//   scopes: [
//     'https://www.googleapis.com/auth/spreadsheets',
//   ],
// });


// async function sendtoSheet(result){
//     const { GoogleSpreadsheet } = require('google-spreadsheet');
//     const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);
//     await doc.getInfo();
//     const sheet = doc.sheetsByIndex[0];
//     const rows = await sheet.getRows();
//     await doc.useServiceAccountAuth({
//         client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
//         private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n')
//       });
    
//     await doc.loadInfo(); // loads document properties and worksheets
//     await sheet.addRow({ name: 'e', email: 'e@google.com' });
// }
